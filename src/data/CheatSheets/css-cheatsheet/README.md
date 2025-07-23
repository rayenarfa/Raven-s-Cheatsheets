# 🎨 CSS Cheatsheet

A comprehensive reference guide for CSS styling, layout, and design techniques.

## 🎯 Selectors

### Basic Selectors

```css
/* Element selector */
div { }

/* Class selector */
.classname { }

/* ID selector */
#idname { }

/* Universal selector */
* { }

/* Attribute selector */
[attribute] { }
[attribute="value"] { }
[attribute*="value"] { } /* Contains */
[attribute^="value"] { } /* Starts with */
[attribute$="value"] { } /* Ends with */

/* Pseudo-classes */
:hover { }
:focus { }
:active { }
:visited { }
:first-child { }
:last-child { }
:nth-child(n) { }
:nth-child(odd) { }
:nth-child(even) { }
:not(.class) { }
:empty { }
:disabled { }
:checked { }
```

### Combinators

```css
/* Descendant selector */
div p { }

/* Child selector */
div > p { }

/* Adjacent sibling */
div + p { }

/* General sibling */
div ~ p { }
```

### Pseudo-elements

```css
::before { }
::after { }
::first-line { }
::first-letter { }
::selection { }
::placeholder { }
```

## 📦 Box Model

### Box Model Properties

```css
/* Width and Height */
width: 100px;
height: 100px;
min-width: 200px;
max-width: 800px;
min-height: 100px;
max-height: 500px;

/* Padding */
padding: 10px;
padding: 10px 20px; /* top/bottom left/right */
padding: 10px 20px 15px 25px; /* top right bottom left */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 15px;
padding-left: 25px;

/* Margin */
margin: 10px;
margin: 10px 20px;
margin: 10px 20px 15px 25px;
margin-top: 10px;
margin-right: 20px;
margin-bottom: 15px;
margin-left: 25px;

/* Border */
border: 1px solid black;
border-width: 1px;
border-style: solid;
border-color: black;
border-top: 1px solid black;
border-radius: 5px;
border-radius: 5px 10px 15px 20px; /* top-left top-right bottom-right bottom-left */

/* Box sizing */
box-sizing: content-box; /* Default */
box-sizing: border-box; /* Include padding and border in width/height */
```

## 🎨 Colors & Backgrounds

### Colors

```css
/* Color values */
color: red;
color: #ff0000;
color: #f00;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);
color: hsl(0, 100%, 50%);
color: hsla(0, 100%, 50%, 0.5);

/* Background */
background-color: red;
background-image: url('image.jpg');
background-repeat: no-repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
background-position: center;
background-position: 50% 50%;
background-size: cover;
background-size: contain;
background-size: 100px 100px;
background-attachment: fixed;
background-attachment: scroll;

/* Shorthand */
background: red url('image.jpg') no-repeat center/cover;
```

## 📝 Typography

### Font Properties

```css
/* Font family */
font-family: Arial, sans-serif;
font-family: 'Times New Roman', serif;
font-family: 'Courier New', monospace;

/* Font size */
font-size: 16px;
font-size: 1em;
font-size: 1rem;
font-size: 100%;

/* Font weight */
font-weight: normal;
font-weight: bold;
font-weight: 100; /* Thin */
font-weight: 400; /* Normal */
font-weight: 700; /* Bold */
font-weight: 900; /* Black */

/* Font style */
font-style: normal;
font-style: italic;
font-style: oblique;

/* Line height */
line-height: 1.5;
line-height: 24px;
line-height: 150%;

/* Text alignment */
text-align: left;
text-align: center;
text-align: right;
text-align: justify;

/* Text decoration */
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;
text-decoration: overline;

/* Text transform */
text-transform: none;
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;

/* Letter spacing */
letter-spacing: 2px;
letter-spacing: -1px;

/* Word spacing */
word-spacing: 5px;

/* Text shadow */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
text-shadow: 1px 1px 2px black;

/* Font shorthand */
font: bold 16px/1.5 Arial, sans-serif;
```

## 📐 Layout

### Display

```css
/* Display types */
display: block;
display: inline;
display: inline-block;
display: none;
display: flex;
display: grid;
display: table;
display: table-cell;
display: table-row;
display: contents;
```

### Position

```css
/* Position */
position: static; /* Default */
position: relative;
position: absolute;
position: fixed;
position: sticky;

/* Positioning */
top: 0;
right: 0;
bottom: 0;
left: 0;

/* Z-index */
z-index: 1;
z-index: -1;
```

### Flexbox

```css
/* Container properties */
display: flex;
flex-direction: row; /* Default */
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;

flex-wrap: nowrap; /* Default */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

justify-content: flex-start; /* Default */
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;

align-items: stretch; /* Default */
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;

align-content: stretch; /* Default */
align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;

/* Shorthand */
flex-flow: row wrap;

/* Item properties */
flex-grow: 0; /* Default */
flex-shrink: 1; /* Default */
flex-basis: auto; /* Default */

/* Shorthand */
flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
flex: 1 1 auto;
flex: 0 0 200px;

align-self: auto; /* Default */
align-self: flex-start;
align-self: flex-end;
align-self: center;
align-self: baseline;
align-self: stretch;

order: 0; /* Default */
```

### Grid

```css
/* Container properties */
display: grid;
display: inline-grid;

grid-template-columns: 100px 100px 100px;
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: repeat(3, 1fr);
grid-template-columns: 200px 1fr 2fr;

grid-template-rows: 100px 100px;
grid-template-rows: repeat(2, 1fr);

grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";

grid-column-gap: 10px;
grid-row-gap: 10px;
grid-gap: 10px; /* Shorthand */

justify-items: stretch; /* Default */
justify-items: start;
justify-items: end;
justify-items: center;

align-items: stretch; /* Default */
align-items: start;
align-items: end;
align-items: center;

justify-content: start; /* Default */
justify-content: end;
justify-content: center;
justify-content: stretch;
justify-content: space-around;
justify-content: space-between;
justify-content: space-evenly;

align-content: start; /* Default */
align-content: end;
align-content: center;
align-content: stretch;
align-content: space-around;
align-content: space-between;
align-content: space-evenly;

/* Item properties */
grid-column: 1 / 3;
grid-column: 1 / span 2;
grid-row: 1 / 3;
grid-row: 1 / span 2;

grid-area: header;
grid-area: 1 / 1 / 3 / 3; /* row-start / column-start / row-end / column-end */

justify-self: stretch; /* Default */
justify-self: start;
justify-self: end;
justify-self: center;

align-self: stretch; /* Default */
align-self: start;
align-self: end;
align-self: center;
```

## 🎭 Transforms & Transitions

### Transforms

```css
/* Transform */
transform: translateX(100px);
transform: translateY(100px);
transform: translate(100px, 100px);
transform: translateZ(100px);
transform: translate3d(100px, 100px, 100px);

transform: scaleX(2);
transform: scaleY(0.5);
transform: scale(2, 0.5);
transform: scale(2);

transform: rotateX(45deg);
transform: rotateY(45deg);
transform: rotateZ(45deg);
transform: rotate(45deg);

transform: skewX(45deg);
transform: skewY(45deg);
transform: skew(45deg, 45deg);

/* Multiple transforms */
transform: translate(100px, 100px) rotate(45deg) scale(1.5);

/* Transform origin */
transform-origin: center; /* Default */
transform-origin: top left;
transform-origin: 50% 50%;
```

### Transitions

```css
/* Transition */
transition: all 0.3s ease;
transition: background-color 0.3s ease;
transition: transform 0.3s ease, opacity 0.3s ease;

transition-property: all;
transition-duration: 0.3s;
transition-timing-function: ease;
transition-delay: 0s;

/* Timing functions */
transition-timing-function: ease; /* Default */
transition-timing-function: linear;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Animations

```css
/* Animation */
animation: slideIn 0.5s ease-in-out;

animation-name: slideIn;
animation-duration: 0.5s;
animation-timing-function: ease-in-out;
animation-delay: 0s;
animation-iteration-count: 1;
animation-direction: normal;
animation-fill-mode: none;
animation-play-state: running;

/* Keyframes */
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
```

## 🎨 Effects

### Shadows

```css
/* Box shadow */
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

/* Text shadow */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
text-shadow: 1px 1px 2px black;
```

### Filters

```css
/* Filters */
filter: blur(5px);
filter: brightness(150%);
filter: contrast(200%);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(100%);
filter: opacity(50%);
filter: saturate(200%);
filter: sepia(50%);
filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));

/* Multiple filters */
filter: blur(5px) brightness(150%) contrast(200%);
```

## 📱 Responsive Design

### Media Queries

```css
/* Mobile first approach */
.container {
    width: 100%;
    padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 970px;
    }
}

/* Large desktop */
@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}

/* Orientation */
@media (orientation: landscape) {
    /* Landscape styles */
}

@media (orientation: portrait) {
    /* Portrait styles */
}

/* Print styles */
@media print {
    body {
        font-size: 12pt;
        line-height: 1.4;
    }
    
    .no-print {
        display: none;
    }
}
```

### Viewport Units

```css
/* Viewport units */
width: 100vw; /* Viewport width */
height: 100vh; /* Viewport height */
width: 50vw; /* 50% of viewport width */
height: 50vh; /* 50% of viewport height */

/* Min/Max viewport */
width: 100vmin; /* Smaller of vw or vh */
width: 100vmax; /* Larger of vw or vh */
```

## 🎯 CSS Variables (Custom Properties)

```css
/* Define variables */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --font-size-base: 16px;
    --spacing-unit: 8px;
}

/* Use variables */
.button {
    background-color: var(--primary-color);
    font-size: var(--font-size-base);
    padding: calc(var(--spacing-unit) * 2);
}

/* Fallback values */
.button {
    background-color: var(--primary-color, #007bff);
}
```

## 🔧 Best Practices

### Organization

```css
/* Group related properties */
.element {
    /* Layout */
    display: flex;
    position: relative;
    width: 100%;
    height: 100px;
    
    /* Typography */
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    
    /* Visual */
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    
    /* Effects */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### Naming Conventions

```css
/* BEM (Block Element Modifier) */
.block { }
.block__element { }
.block__element--modifier { }

/* Example */
.card { }
.card__title { }
.card__title--large { }
.card__content { }
.card--featured { }
```

## 🔗 Useful Resources

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)
- [CSS Grid Garden](https://cssgridgarden.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/)

---

**Happy styling! 🎨** 