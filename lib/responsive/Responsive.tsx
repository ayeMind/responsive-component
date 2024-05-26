/*
    Responsive component for hiding/showing content based on screen size
*/

import React, { ElementType, HTMLAttributes, useContext, useState, useEffect } from 'react';
import { ResponsiveContext, BreakPoints } from '../responsive-provider';
import { isCorrectBreakPoint } from '../utils';

interface ResponsiveProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType,
  hiddenFrom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  visibleFrom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  children?: React.ReactNode
}

const Responsive: React.FC<ResponsiveProps> = ({as: Tag = 'div', children, ...props}) => {

  const [isVisible, setIsVisible] = useState(true);
  const breakpoints: BreakPoints = useContext(ResponsiveContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  if (!breakpoints) {
    console.error('Unexpected error. No breakpoints provided');
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
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

      if (breakpoints[props.hiddenFrom] < windowWidth) {
        isVisible = false;
      }
    }

    if (props.visibleFrom) {

      if (!isCorrectBreakPoint(props.visibleFrom)) {
        console.error('Unexpected error. Wrong breakpoint provided');
        return;
      }

      if (breakpoints[props.visibleFrom] > windowWidth) {
        isVisible = false;
      }
    }

    setIsVisible(isVisible);

  }, [props.hiddenFrom, props.visibleFrom, breakpoints, windowWidth]);

  return isVisible ? (
    <Tag {...props}>
      {children}
    </Tag>
  ) : null;
}

export { Responsive }