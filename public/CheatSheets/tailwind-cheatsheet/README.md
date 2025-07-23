# 🎨 Tailwind CSS Cheatsheet

A comprehensive reference guide for Tailwind CSS utility classes and design patterns.

## 🎯 Layout

### Display

```css
/* Display */
block
inline-block
inline
flex
inline-flex
grid
inline-grid
table
table-row
table-cell
contents
hidden
```

### Position

```css
/* Position */
static
relative
absolute
fixed
sticky

/* Top, Right, Bottom, Left */
top-0
right-0
bottom-0
left-0
inset-0 /* all sides */
inset-x-0 /* left and right */
inset-y-0 /* top and bottom */

/* Z-index */
z-0
z-10
z-20
z-30
z-40
z-50
z-auto
```

### Flexbox

```css
/* Flex direction */
flex-row
flex-row-reverse
flex-col
flex-col-reverse

/* Flex wrap */
flex-wrap
flex-wrap-reverse
flex-nowrap

/* Flex grow/shrink */
flex-1
flex-auto
flex-initial
flex-none
flex-grow-0
flex-grow
flex-shrink-0
flex-shrink

/* Justify content */
justify-start
justify-end
justify-center
justify-between
justify-around
justify-evenly

/* Align items */
items-start
items-end
items-center
items-baseline
items-stretch

/* Align self */
self-auto
self-start
self-end
self-center
self-stretch

/* Align content */
content-start
content-end
content-center
content-between
content-around
content-stretch

/* Order */
order-1
order-2
order-3
order-4
order-5
order-6
order-7
order-8
order-9
order-10
order-11
order-12
order-first
order-last
order-none
```

### Grid

```css
/* Grid template columns */
grid-cols-1
grid-cols-2
grid-cols-3
grid-cols-4
grid-cols-5
grid-cols-6
grid-cols-7
grid-cols-8
grid-cols-9
grid-cols-10
grid-cols-11
grid-cols-12
grid-cols-none

/* Grid template rows */
grid-rows-1
grid-rows-2
grid-rows-3
grid-rows-4
grid-rows-5
grid-rows-6
grid-rows-none

/* Grid column start/end */
col-auto
col-span-1
col-span-2
col-span-3
col-span-4
col-span-5
col-span-6
col-span-7
col-span-8
col-span-9
col-span-10
col-span-11
col-span-12
col-span-full
col-start-1
col-start-2
col-start-3
col-start-4
col-start-5
col-start-6
col-start-7
col-start-8
col-start-9
col-start-10
col-start-11
col-start-12
col-start-13
col-start-auto
col-end-1
col-end-2
col-end-3
col-end-4
col-end-5
col-end-6
col-end-7
col-end-8
col-end-9
col-end-10
col-end-11
col-end-12
col-end-13
col-end-auto

/* Grid row start/end */
row-auto
row-span-1
row-span-2
row-span-3
row-span-4
row-span-5
row-span-6
row-span-full
row-start-1
row-start-2
row-start-3
row-start-4
row-start-5
row-start-6
row-start-7
row-start-auto
row-end-1
row-end-2
row-end-3
row-end-4
row-end-5
row-end-6
row-end-7
row-end-auto

/* Gap */
gap-0
gap-1
gap-2
gap-3
gap-4
gap-5
gap-6
gap-8
gap-10
gap-12
gap-16
gap-20
gap-24
gap-32
gap-px
gap-0.5
gap-1.5
gap-2.5
gap-3.5

/* Column gap */
gap-x-0
gap-x-1
gap-x-2
gap-x-3
gap-x-4
gap-x-5
gap-x-6
gap-x-8
gap-x-10
gap-x-12
gap-x-16
gap-x-20
gap-x-24
gap-x-32
gap-x-px
gap-x-0.5
gap-x-1.5
gap-x-2.5
gap-x-3.5

/* Row gap */
gap-y-0
gap-y-1
gap-y-2
gap-y-3
gap-y-4
gap-y-5
gap-y-6
gap-y-8
gap-y-10
gap-y-12
gap-y-16
gap-y-20
gap-y-24
gap-y-32
gap-y-px
gap-y-0.5
gap-y-1.5
gap-y-2.5
gap-y-3.5
```

## 📏 Spacing

### Width & Height

```css
/* Width */
w-0
w-px
w-0.5
w-1
w-1.5
w-2
w-2.5
w-3
w-3.5
w-4
w-5
w-6
w-7
w-8
w-9
w-10
w-11
w-12
w-14
w-16
w-20
w-24
w-28
w-32
w-36
w-40
w-44
w-48
w-52
w-56
w-60
w-64
w-72
w-80
w-96
w-auto
w-1/2
w-1/3
w-2/3
w-1/4
w-2/4
w-3/4
w-1/5
w-2/5
w-3/5
w-4/5
w-1/6
w-2/6
w-3/6
w-4/6
w-5/6
w-1/12
w-2/12
w-3/12
w-4/12
w-5/12
w-6/12
w-7/12
w-8/12
w-9/12
w-10/12
w-11/12
w-full
w-screen
w-min
w-max
w-fit

/* Height */
h-0
h-px
h-0.5
h-1
h-1.5
h-2
h-2.5
h-3
h-3.5
h-4
h-5
h-6
h-7
h-8
h-9
h-10
h-11
h-12
h-14
h-16
h-20
h-24
h-28
h-32
h-36
h-40
h-44
h-48
h-52
h-56
h-60
h-64
h-72
h-80
h-96
h-auto
h-1/2
h-1/3
h-2/3
h-1/4
h-2/4
h-3/4
h-1/5
h-2/5
h-3/5
h-4/5
h-1/6
h-2/6
h-3/6
h-4/6
h-5/6
h-full
h-screen
h-min
h-max
h-fit
```

### Padding & Margin

```css
/* Padding */
p-0
p-px
p-0.5
p-1
p-1.5
p-2
p-2.5
p-3
p-3.5
p-4
p-5
p-6
p-7
p-8
p-9
p-10
p-11
p-12
p-14
p-16
p-20
p-24
p-28
p-32
p-36
p-40
p-44
p-48
p-52
p-56
p-60
p-64
p-72
p-80
p-96

/* Padding X (left/right) */
px-0
px-px
px-0.5
px-1
px-1.5
px-2
px-2.5
px-3
px-3.5
px-4
px-5
px-6
px-7
px-8
px-9
px-10
px-11
px-12
px-14
px-16
px-20
px-24
px-28
px-32
px-36
px-40
px-44
px-48
px-52
px-56
px-60
px-64
px-72
px-80
px-96

/* Padding Y (top/bottom) */
py-0
py-px
py-0.5
py-1
py-1.5
py-2
py-2.5
py-3
py-3.5
py-4
py-5
py-6
py-7
py-8
py-9
py-10
py-11
py-12
py-14
py-16
py-20
py-24
py-28
py-32
py-36
py-40
py-44
py-48
py-52
py-56
py-60
py-64
py-72
py-80
py-96

/* Individual sides */
pt-0 /* top */
pr-0 /* right */
pb-0 /* bottom */
pl-0 /* left */

/* Margin (same scale as padding) */
m-0
mx-0
my-0
mt-0
mr-0
mb-0
ml-0

/* Negative margin */
-m-1
-mx-1
-my-1
-mt-1
-mr-1
-mb-1
-ml-1
```

## 🎨 Colors

### Background Colors

```css
/* Background colors */
bg-transparent
bg-current
bg-black
bg-white
bg-slate-50
bg-slate-100
bg-slate-200
bg-slate-300
bg-slate-400
bg-slate-500
bg-slate-600
bg-slate-700
bg-slate-800
bg-slate-900
bg-gray-50
bg-gray-100
bg-gray-200
bg-gray-300
bg-gray-400
bg-gray-500
bg-gray-600
bg-gray-700
bg-gray-800
bg-gray-900
bg-zinc-50
bg-zinc-100
bg-zinc-200
bg-zinc-300
bg-zinc-400
bg-zinc-500
bg-zinc-600
bg-zinc-700
bg-zinc-800
bg-zinc-900
bg-neutral-50
bg-neutral-100
bg-neutral-200
bg-neutral-300
bg-neutral-400
bg-neutral-500
bg-neutral-600
bg-neutral-700
bg-neutral-800
bg-neutral-900
bg-stone-50
bg-stone-100
bg-stone-200
bg-stone-300
bg-stone-400
bg-stone-500
bg-stone-600
bg-stone-700
bg-stone-800
bg-stone-900
bg-red-50
bg-red-100
bg-red-200
bg-red-300
bg-red-400
bg-red-500
bg-red-600
bg-red-700
bg-red-800
bg-red-900
bg-orange-50
bg-orange-100
bg-orange-200
bg-orange-300
bg-orange-400
bg-orange-500
bg-orange-600
bg-orange-700
bg-orange-800
bg-orange-900
bg-amber-50
bg-amber-100
bg-amber-200
bg-amber-300
bg-amber-400
bg-amber-500
bg-amber-600
bg-amber-700
bg-amber-800
bg-amber-900
bg-yellow-50
bg-yellow-100
bg-yellow-200
bg-yellow-300
bg-yellow-400
bg-yellow-500
bg-yellow-600
bg-yellow-700
bg-yellow-800
bg-yellow-900
bg-lime-50
bg-lime-100
bg-lime-200
bg-lime-300
bg-lime-400
bg-lime-500
bg-lime-600
bg-lime-700
bg-lime-800
bg-lime-900
bg-green-50
bg-green-100
bg-green-200
bg-green-300
bg-green-400
bg-green-500
bg-green-600
bg-green-700
bg-green-800
bg-green-900
bg-emerald-50
bg-emerald-100
bg-emerald-200
bg-emerald-300
bg-emerald-400
bg-emerald-500
bg-emerald-600
bg-emerald-700
bg-emerald-800
bg-emerald-900
bg-teal-50
bg-teal-100
bg-teal-200
bg-teal-300
bg-teal-400
bg-teal-500
bg-teal-600
bg-teal-700
bg-teal-800
bg-teal-900
bg-cyan-50
bg-cyan-100
bg-cyan-200
bg-cyan-300
bg-cyan-400
bg-cyan-500
bg-cyan-600
bg-cyan-700
bg-cyan-800
bg-cyan-900
bg-sky-50
bg-sky-100
bg-sky-200
bg-sky-300
bg-sky-400
bg-sky-500
bg-sky-600
bg-sky-700
bg-sky-800
bg-sky-900
bg-blue-50
bg-blue-100
bg-blue-200
bg-blue-300
bg-blue-400
bg-blue-500
bg-blue-600
bg-blue-700
bg-blue-800
bg-blue-900
bg-indigo-50
bg-indigo-100
bg-indigo-200
bg-indigo-300
bg-indigo-400
bg-indigo-500
bg-indigo-600
bg-indigo-700
bg-indigo-800
bg-indigo-900
bg-violet-50
bg-violet-100
bg-violet-200
bg-violet-300
bg-violet-400
bg-violet-500
bg-violet-600
bg-violet-700
bg-violet-800
bg-violet-900
bg-purple-50
bg-purple-100
bg-purple-200
bg-purple-300
bg-purple-400
bg-purple-500
bg-purple-600
bg-purple-700
bg-purple-800
bg-purple-900
bg-fuchsia-50
bg-fuchsia-100
bg-fuchsia-200
bg-fuchsia-300
bg-fuchsia-400
bg-fuchsia-500
bg-fuchsia-600
bg-fuchsia-700
bg-fuchsia-800
bg-fuchsia-900
bg-pink-50
bg-pink-100
bg-pink-200
bg-pink-300
bg-pink-400
bg-pink-500
bg-pink-600
bg-pink-700
bg-pink-800
bg-pink-900
bg-rose-50
bg-rose-100
bg-rose-200
bg-rose-300
bg-rose-400
bg-rose-500
bg-rose-600
bg-rose-700
bg-rose-800
bg-rose-900
```

### Text Colors

```css
/* Text colors (same color palette as background) */
text-transparent
text-current
text-black
text-white
text-slate-50
text-slate-100
text-slate-200
text-slate-300
text-slate-400
text-slate-500
text-slate-600
text-slate-700
text-slate-800
text-slate-900
/* ... all other colors follow the same pattern */
```

### Border Colors

```css
/* Border colors (same color palette) */
border-transparent
border-current
border-black
border-white
border-slate-50
border-slate-100
border-slate-200
border-slate-300
border-slate-400
border-slate-500
border-slate-600
border-slate-700
border-slate-800
border-slate-900
/* ... all other colors follow the same pattern */
```

## 📝 Typography

### Font Family

```css
/* Font family */
font-sans
font-serif
font-mono
```

### Font Size

```css
/* Font size */
text-xs
text-sm
text-base
text-lg
text-xl
text-2xl
text-3xl
text-4xl
text-5xl
text-6xl
text-7xl
text-8xl
text-9xl
```

### Font Weight

```css
/* Font weight */
font-thin
font-extralight
font-light
font-normal
font-medium
font-semibold
font-bold
font-extrabold
font-black
```

### Text Alignment

```css
/* Text alignment */
text-left
text-center
text-right
text-justify
text-start
text-end
```

### Text Decoration

```css
/* Text decoration */
underline
overline
line-through
no-underline
```

### Text Transform

```css
/* Text transform */
uppercase
lowercase
capitalize
normal-case
```

### Line Height

```css
/* Line height */
leading-none
leading-tight
leading-snug
leading-normal
leading-relaxed
leading-loose
leading-3
leading-4
leading-5
leading-6
leading-7
leading-8
leading-9
leading-10
```

## 🎭 Effects

### Shadows

```css
/* Box shadow */
shadow-sm
shadow
shadow-md
shadow-lg
shadow-xl
shadow-2xl
shadow-inner
shadow-none
```

### Opacity

```css
/* Opacity */
opacity-0
opacity-5
opacity-10
opacity-20
opacity-25
opacity-30
opacity-40
opacity-50
opacity-60
opacity-70
opacity-75
opacity-80
opacity-90
opacity-95
opacity-100
```

### Border Radius

```css
/* Border radius */
rounded-none
rounded-sm
rounded
rounded-md
rounded-lg
rounded-xl
rounded-2xl
rounded-3xl
rounded-full
rounded-t-none
rounded-t-sm
rounded-t
rounded-t-md
rounded-t-lg
rounded-t-xl
rounded-t-2xl
rounded-t-3xl
rounded-t-full
rounded-r-none
rounded-r-sm
rounded-r
rounded-r-md
rounded-r-lg
rounded-r-xl
rounded-r-2xl
rounded-r-3xl
rounded-r-full
rounded-b-none
rounded-b-sm
rounded-b
rounded-b-md
rounded-b-lg
rounded-b-xl
rounded-b-2xl
rounded-b-3xl
rounded-b-full
rounded-l-none
rounded-l-sm
rounded-l
rounded-l-md
rounded-l-lg
rounded-l-xl
rounded-l-2xl
rounded-l-3xl
rounded-l-full
rounded-tl-none
rounded-tl-sm
rounded-tl
rounded-tl-md
rounded-tl-lg
rounded-tl-xl
rounded-tl-2xl
rounded-tl-3xl
rounded-tl-full
rounded-tr-none
rounded-tr-sm
rounded-tr
rounded-tr-md
rounded-tr-lg
rounded-tr-xl
rounded-tr-2xl
rounded-tr-3xl
rounded-tr-full
rounded-br-none
rounded-br-sm
rounded-br
rounded-br-md
rounded-br-lg
rounded-br-xl
rounded-br-2xl
rounded-br-3xl
rounded-br-full
rounded-bl-none
rounded-bl-sm
rounded-bl
rounded-bl-md
rounded-bl-lg
rounded-bl-xl
rounded-bl-2xl
rounded-bl-3xl
rounded-bl-full
```

## 🔄 Transitions & Animations

### Transitions

```css
/* Transition property */
transition-none
transition-all
transition
transition-colors
transition-opacity
transition-shadow
transition-transform

/* Transition duration */
duration-75
duration-100
duration-150
duration-200
duration-300
duration-500
duration-700
duration-1000

/* Transition timing function */
ease-linear
ease-in
ease-out
ease-in-out

/* Transition delay */
delay-75
delay-100
delay-150
delay-200
delay-300
delay-500
delay-700
delay-1000
```

### Transforms

```css
/* Transform */
transform
transform-gpu
transform-none

/* Scale */
scale-0
scale-50
scale-75
scale-90
scale-95
scale-100
scale-105
scale-110
scale-125
scale-150

/* Rotate */
rotate-0
rotate-1
rotate-2
rotate-3
rotate-6
rotate-12
rotate-45
rotate-90
rotate-180

/* Translate */
translate-x-0
translate-x-px
translate-x-0.5
translate-x-1
translate-x-1.5
translate-x-2
translate-x-2.5
translate-x-3
translate-x-3.5
translate-x-4
translate-x-5
translate-x-6
translate-x-7
translate-x-8
translate-x-9
translate-x-10
translate-x-11
translate-x-12
translate-x-14
translate-x-16
translate-x-20
translate-x-24
translate-x-28
translate-x-32
translate-x-36
translate-x-40
translate-x-44
translate-x-48
translate-x-52
translate-x-56
translate-x-60
translate-x-64
translate-x-72
translate-x-80
translate-x-96
translate-x-1/2
translate-x-1/3
translate-x-2/3
translate-x-1/4
translate-x-2/4
translate-x-3/4
translate-x-full
translate-y-0
translate-y-px
translate-y-0.5
translate-y-1
translate-y-1.5
translate-y-2
translate-y-2.5
translate-y-3
translate-y-3.5
translate-y-4
translate-y-5
translate-y-6
translate-y-7
translate-y-8
translate-y-9
translate-y-10
translate-y-11
translate-y-12
translate-y-14
translate-y-16
translate-y-20
translate-y-24
translate-y-28
translate-y-32
translate-y-36
translate-y-40
translate-y-44
translate-y-48
translate-y-52
translate-y-56
translate-y-60
translate-y-64
translate-y-72
translate-y-80
translate-y-96
translate-y-1/2
translate-y-1/3
translate-y-2/3
translate-y-1/4
translate-y-2/4
translate-y-3/4
translate-y-full

/* Skew */
skew-x-0
skew-x-1
skew-x-2
skew-x-3
skew-x-6
skew-x-12
skew-y-0
skew-y-1
skew-y-2
skew-y-3
skew-y-6
skew-y-12
```

## 📱 Responsive Design

### Breakpoints

```css
/* Responsive prefixes */
sm: /* 640px and up */
md: /* 768px and up */
lg: /* 1024px and up */
xl: /* 1280px and up */
2xl: /* 1536px and up */

/* Example usage */
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half on medium, third on large -->
</div>
```

### Dark Mode

```css
/* Dark mode */
dark:bg-gray-900
dark:text-white
dark:border-gray-700

/* Example usage */
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
  <!-- Light mode: white bg, black text -->
  <!-- Dark mode: gray-900 bg, white text -->
</div>
```

## 🎯 Common Patterns

### Card Component

```html
<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="image.jpg" alt="Card image">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">
      Card description goes here.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #tag1
    </span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #tag2
    </span>
  </div>
</div>
```

### Button Component

```html
<!-- Primary button -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Primary Button
</button>

<!-- Secondary button -->
<button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
  Secondary Button
</button>

<!-- Outline button -->
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Outline Button
</button>
```

### Form Input

```html
<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
    Username
  </label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
         id="username" 
         type="text" 
         placeholder="Username">
</div>
```

### Navigation

```html
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img class="h-8 w-8" src="logo.svg" alt="Logo">
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
```

## 🔧 Configuration

### tailwind.config.js

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
```

## 🔗 Useful Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Components](https://tailwindui.com/)
- [Tailwind CSS Play CDN](https://play.tailwindcss.com/)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

**Happy styling! 🎨** 