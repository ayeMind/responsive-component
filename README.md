# Responsive Component

React library for hiding/showing content based on screen size

## Installation

```bash
npm install responsive-component
```

## Usage

```tsx
import { ResponsiveComponent } from 'responsive-component';

// ...

return (
  <>
    <ResponsiveComponent
      as='button' // default is div
      visibleFrom='sm'>
      I show from sm
    </ResponsiveComponent>

    <ResponsiveComponent
      hiddenFrom='md'>
      I hide from md
    </ResponsiveComponent>

    <ResponsiveComponent
      visibleFrom='sm'
      hiddenFrom='md'>
      I show from sm and hide from md
    </ResponsiveComponent>

    <ResponsiveComponent
      visibleFrom='xl'
      hiddenFrom='sm'>
      I never show
    </ResponsiveComponent>
  </>
)

```

## Change breakpoints values 

```tsx
// main.tsx
import { ResponsiveProvider } from 'responsive-component';

// ...

<ResponsiveProvider
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


