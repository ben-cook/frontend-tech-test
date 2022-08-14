# Frontend Tech Test

## Setup Instructions

- Ensure you have `yarn` installed (https://classic.yarnpkg.
  com/lang/en/docs/install).
- Run the `yarn` command inside this project's root directory to install
  dependencies.
- Run `yarn dev` to start the web app. You should now be able to view it at
  http://127.0.0.1:5173/

## Task Requirements

This is an open-ended task, and you will discuss your solution in a follow-up
interview.

The provided boilerplate application renders a
"shopping list" on the screen as a nested accordion component and static
data is loaded to mock data fetching.

The current implementation of this accordion component may be considered
less than ideal.

**Your task is to refactor the relevant code, such that the
accordion component is generic, extensible, and follows typical "best
practice" patterns in React, while exhibiting the same end-user behaviour.**

### The following tips are provided as focus areas:

- Recursion
- Componentising relevant code
- Making the relevant components "stateful" or "stateless"
- Passing appropriate props, such as callback functions

_Note that no visual changes are required for this task._

# Personal Notes / Reflection

## Improvements Made:

- Added prettier config for consistent styling
- Added useData hook
- Abstracted out Accordion component
- CSS Changes:
  - Removed lots of unnecessary CSS (flexboxes everywhere) and edited selectors (App to main component)
  - Made the Accordions focusable for a11y
  - Changed the list elements to use native CSS markers
  - Did not fix the light/dark theme, since visual changes weren't required
- Converted global CSS file to CSS modules, which Vite supports out of the box
- Renamed main.jsx to index.jsx for consistency

## Tips:

- Recursion  
  _I used recursion to create a tree structure with the accordions, with branch and leaf nodes._
- Componentising relevant code  
  _I split the main App into `Accordion` components_
- Making the relevant components "stateful" or "stateless"  
  _I made branch nodes stateful, since they are either open or closed, while leaf nodes can be stateless since they don't need to keep track of anything_
- Passing appropriate props, such as callback functions  
  _I passed only the data needed to render a component to each child component. My solution didn't end up needing to use callback functions in props_
