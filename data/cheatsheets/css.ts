import { CheatSheet } from '../../types';

export const cssCheatSheets: CheatSheet[] = [
  {
    id: 'css-1',
    category: 'CSS',
    subCategory: 'css',
    title: 'Flexbox: Container Setup',
    snippet: `.container {
  display: flex;
  flex-direction: row; /* column | row-reverse | column-reverse */
  flex-wrap: nowrap; /* wrap | wrap-reverse */
}`,
    description: 'To start using Flexbox, define a flex container. `flex-direction` establishes the main-axis. `flex-wrap` controls if items wrap to a new line.',
    tags: ['css', 'flexbox', 'layout', 'container', 'display'],
  },
  {
    id: 'css-2',
    category: 'CSS',
    subCategory: 'css',
    title: 'Flexbox: Justify Content (Main Axis)',
    snippet: `.container {
  justify-content: flex-start; /* flex-end | center | space-between | space-around | space-evenly */
}`,
    description: 'Aligns flex items along the main axis (horizontally by default). `space-between` distributes items evenly with the first item at the start and the last at the end.',
    tags: ['css', 'flexbox', 'layout', 'alignment', 'justify-content', 'main-axis'],
  },
  {
    id: 'css-3',
    category: 'CSS',
    subCategory: 'css',
    title: 'Flexbox: Align Items (Cross Axis)',
    snippet: `.container {
  align-items: stretch; /* flex-start | flex-end | center | baseline */
}`,
    description: 'Aligns flex items along the cross axis (vertically by default). `center` vertically centers the items. `stretch` (default) makes items fill the container height.',
    tags: ['css', 'flexbox', 'layout', 'alignment', 'align-items', 'cross-axis'],
  },
  {
    id: 'css-4',
    category: 'CSS',
    subCategory: 'css',
    title: 'Flexbox: Item Sizing',
    snippet: `.item {
  flex-grow: 1;   /* How much to grow relative to others */
  flex-shrink: 1; /* How much to shrink relative to others */
  flex-basis: auto; /* Initial size of the item */
  /* Shorthand: flex: 1 1 auto; */
}`,
    description: 'Controls the flexibility and sizing of individual flex items. `flex-grow` is key for creating layouts that fill available space.',
    tags: ['css', 'flexbox', 'layout', 'sizing', 'flex-grow', 'flex-shrink', 'flex-basis'],
  },
  {
    id: 'css-5',
    category: 'CSS',
    subCategory: 'css',
    title: 'Flexbox: Item Ordering and Alignment',
    snippet: `.item-1 {
  order: 2; /* Default is 0 */
}
.item-2 {
  align-self: center; /* Overrides container's align-items */
}`,
    description: '`order` allows you to change the visual order of flex items. `align-self` allows the default alignment (or the one specified by `align-items`) to be overridden for individual flex items.',
    tags: ['css', 'flexbox', 'layout', 'ordering', 'align-self', 'order'],
  },
  {
    id: 'css-6',
    category: 'CSS',
    subCategory: 'css',
    title: 'Grid: Container Setup',
    snippet: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three equal-width columns */
  grid-template-rows: auto;
  gap: 1rem; /* Space between rows and columns */
}`,
    description: 'To start using Grid, define a grid container. `grid-template-columns` and `grid-template-rows` define the structure of the grid. The `fr` unit represents a fraction of the available space.',
    tags: ['css', 'grid', 'layout', 'container', 'display', 'grid-template-columns'],
  },
  {
    id: 'css-7',
    category: 'CSS',
    subCategory: 'css',
    title: 'Grid: Spanning Columns and Rows',
    snippet: `.item-1 {
  grid-column: 1 / 3; /* Span from column line 1 to 3 */
}
.item-2 {
  grid-row: 1 / span 2; /* Span two rows starting from row line 1 */
}`,
    description: 'Grid items can be placed onto the grid and made to span across multiple columns or rows.',
    tags: ['css', 'grid', 'layout', 'spanning', 'grid-column', 'grid-row'],
  },
  {
    id: 'css-8',
    category: 'CSS',
    subCategory: 'css',
    title: 'Grid: Naming Grid Areas',
    snippet: `.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`,
    description: 'You can name areas of your grid and place items into those areas. This can make your layout code much more readable and intuitive.',
    tags: ['css', 'grid', 'layout', 'grid-template-areas', 'grid-area', 'naming'],
  },
  {
    id: 'css-9',
    category: 'CSS',
    subCategory: 'css',
    title: 'Grid: auto-fit and minmax()',
    snippet: `.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}`,
    description: 'A powerful combination for creating responsive layouts. This creates as many columns as will fit into the container. Each column will be at least 250px wide, and they will all grow to share the remaining space.',
    tags: ['css', 'grid', 'layout', 'responsive', 'auto-fit', 'minmax'],
  },
  {
    id: 'css-10',
    category: 'CSS',
    subCategory: 'css',
    title: 'CSS Custom Properties (Variables)',
    snippet: `:root {
  --main-bg-color: brown;
  --main-text-color: #fff;
}

body {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
}`,
    description: 'Custom properties allow you to define reusable values in your CSS. They are typically defined on the `:root` pseudo-class so they can be accessed globally. They make theming and maintenance much easier.',
    tags: ['css', 'variables', 'custom properties', 'theming', 'maintainability'],
  },
];