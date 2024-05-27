import React, { ElementType, HTMLAttributes, useContext, useState, useEffect } from 'react';
import { ResponsiveContext, BreakPoints } from '../responsive-provider';
import { isCorrectBreakPoint } from '../utils';

interface ResponsiveProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType,
  hiddenFrom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  visibleFrom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  mediaQuery?: 'width' | 'height'
  children?: React.ReactNode
}

/**
 * @component Responsive
 * 
 * A component for conditionally rendering content based on screen size/breakpoint.
 * Uses the breakpoints provided by a `ResponsiveProvider` context.
 * 
 * @prop {ElementType} [as='div'] - The HTML element to render (e.g., 'div', 'section', etc.).
 * @prop {'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'} [hiddenFrom] - Hide the content when the screen size is equal to or wider than this breakpoint.
 * @prop {'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'} [visibleFrom] - Show the content only when the screen size is equal to or wider than this breakpoint.
 * @prop {'width' | 'height'} [mediaQuery='width'] - The media query to use for hiding/showing the content.
 * @prop {ReactNode} children - The content to be conditionally rendered.
 * 
 * @example
 * ```tsx
 * 
 * import { Responsive } from 'responsive-react-component';
 * 
 *  // <...>
 * 
 *   <Responsive hiddenFrom="md">
 *     <p>This content is visible on small screens.</p>
 *   </Responsive>
 *   <Responsive visibleFrom="lg">
 *     <p>This content is visible on large screens.</p>
 *   </Responsive>
 *   <Responsive as="button">
 *     <p>This button is visible on all screens.</p>
 *   </Responsive>
 *   <Responsive visibleFrom="xxl" mediaQuery="height">
 *     <p>This content is visible on tall screens.</p>
 *   </Responsive>
 *
 * </>
 * ```
 */
const Responsive: React.FC<ResponsiveProps> = ({as: Tag = 'div', mediaQuery='width', children, ...props}) => {

  const [isVisible, setIsVisible] = useState(true);
  const breakpoints: BreakPoints = useContext(ResponsiveContext);
  const [windowSize, setWindowSize] = useState(mediaQuery === 'width' ? window.innerWidth : window.innerHeight);
  
  if (!breakpoints) {
    console.error('Unexpected error. No breakpoints provided');
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(mediaQuery === 'width' ? window.innerWidth : window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let isVisible = true;

    if (props.hiddenFrom) {

      if (!isCorrectBreakPoint(props.hiddenFrom)) {
        console.error('Unexpected error. Wrong breakpoint provided');
        return;
      }

      if (breakpoints[props.hiddenFrom] < windowSize) {
        isVisible = false;
      }
    }

    if (props.visibleFrom) {

      if (!isCorrectBreakPoint(props.visibleFrom)) {
        console.error('Unexpected error. Wrong breakpoint provided');
        return;
      }

      if (breakpoints[props.visibleFrom] > windowSize) {
        isVisible = false;
      }
    }

    setIsVisible(isVisible);

  }, [props.hiddenFrom, props.visibleFrom, breakpoints, windowSize]);

  return isVisible ? (
    <Tag {...props}>
      {children}
    </Tag>
  ) : null;
}

export { Responsive }