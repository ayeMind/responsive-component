const isCorrectBreakPoint = (breakpoint: string) => {
    return breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === 'xxl';
}

export { isCorrectBreakPoint }