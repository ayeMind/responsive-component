import React, { ReactNode, createContext } from "react"

interface BreakPoints {
    'xs': number
    'sm': number
    'md': number
    'lg': number
    'xl': number
    'xxl': number
}

interface ResponsiveProviderProps {
    children: ReactNode;
    breakpoints: BreakPoints;
}

const ResponsiveContext = createContext<BreakPoints>({
    'xs': 480,
    'sm': 768,
    'md': 992,
    'lg': 1200,
    'xl': 1600,
    'xxl': 1920
});

/**
 * ResponsiveProvider component to provide breakpoint values to child components.
 *
 * @component
 * @example
 * ```
 * import { ResponsiveProvider } from 'responsive-react-component';
 *
 * <ResponsiveProvider breakpoints={{ xs: 480, sm: 768, md: 992, lg: 1200, xl: 1600, xxl: 1920 }}>
 *   <App />
 * </ResponsiveProvider>
 * ```
 *
 * @param {ResponsiveProviderProps} props - The properties for the component.
 * @returns {React.Element} - The rendered element.
 */
const ResponsiveProvider: React.FC<ResponsiveProviderProps> = ({ children, breakpoints }) => {
    return (
        <ResponsiveContext.Provider value={breakpoints}>
            {children}
        </ResponsiveContext.Provider>
    )
}
export { ResponsiveProvider, ResponsiveContext, type BreakPoints }