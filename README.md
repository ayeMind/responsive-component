# Responsive Component

## Overview

React library for hiding/showing content based on screen size. Breakpoints can be configured.

## Installation

```bash
npm install responsive-react-component
```

## Usage

```tsx
import { Responsive } from 'responsive-react-component';

// ...

return (
  <>
    <Responsive 
      as='button' // default is div
      visibleFrom='sm'> 
      I show from sm
    </Responsive>

    <Responsive
      hiddenFrom='md'>
      I hide from md
    </Responsive>

    <Responsive
      visibleFrom='sm'
      hiddenFrom='md'>
      I show from sm and hide from md
    </Responsive>

    <Responsive
      visibleFrom='xl'
      hiddenFrom='sm'>
      I never show 
    </Responsive>

    <Responsive
      mediaQuery='height' // width | height, default is width
      visibleFrom='xxl'>
      I hide from height
    </Responsive>
  </>
)

```

## Change breakpoints values 

```tsx
// main.tsx
import { ResponsiveProvider } from 'responsive-react-component';

// ...

<ResponsiveProvider
    // default values
    breakpoints={{
        'xs': 480,
        'sm': 768,
        'md': 992,
        'lg': 1200,
        'xl': 1600,
        'xxl': 1920
    }}>
  <App />
</ResponsiveProvider>
```




