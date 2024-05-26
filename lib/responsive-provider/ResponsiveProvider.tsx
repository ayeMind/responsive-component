/*
    Provider for setting screen sizes for breakpoints ("sm", "md", etc.)
*/

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

const ResponsiveProvider: React.FC<ResponsiveProviderProps> = ({ children, breakpoints }) => {
    return (
        <ResponsiveContext.Provider value={breakpoints}>
            {children}
        </ResponsiveContext.Provider>
    )
}
export { ResponsiveProvider, ResponsiveContext, type BreakPoints }