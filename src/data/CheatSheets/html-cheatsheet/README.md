# 🌐 HTML Cheatsheet

A comprehensive reference guide for HTML markup language, including tags, attributes, and semantic elements.

## 📝 Basic Structure

### HTML5 Document Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description">
    <meta name="keywords" content="keyword1, keyword2">
    <meta name="author" content="Author Name">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="favicon.ico">
</head>
<body>
    <!-- Content goes here -->
    <script src="script.js"></script>
</body>
</html>
```

## 🏗️ Document Structure

### Head Elements

```html
<!-- Character encoding -->
<meta charset="UTF-8">

<!-- Viewport for responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- SEO meta tags -->
<meta name="description" content="Page description">
<meta name="keywords" content="keyword1, keyword2">
<meta name="author" content="Author Name">
<meta name="robots" content="index, follow">

<!-- Open Graph tags -->
<meta property="og:title" content="Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="image.jpg">
<meta property="og:url" content="https://example.com">

<!-- Twitter Card tags -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Title">
<meta name="twitter:description" content="Description">

<!-- Stylesheets -->
<link rel="stylesheet" href="styles.css">
<link rel="preload" href="critical.css" as="style">

<!-- Favicon -->
<link rel="icon" href="favicon.ico">
<link rel="apple-touch-icon" href="apple-touch-icon.png">

<!-- Scripts -->
<script src="script.js" defer></script>
<script src="script.js" async></script>
```

## 📄 Text Elements

### Headings

```html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Section Heading</h3>
<h4>Subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```

### Paragraphs & Text

```html
<p>This is a paragraph of text.</p>

<!-- Text formatting -->
<strong>Bold text</strong>
<b>Bold text (deprecated)</b>
<em>Italic text</em>
<i>Italic text (deprecated)</i>
<u>Underlined text</u>
<mark>Highlighted text</mark>
<small>Smaller text</small>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>

<!-- Line breaks -->
<br>
<hr>

<!-- Preformatted text -->
<pre>
    This text preserves
    spaces and line breaks
</pre>

<!-- Code -->
<code>console.log('Hello World');</code>
```

### Lists

```html
<!-- Unordered list -->
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>

<!-- Ordered list -->
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>

<!-- Definition list -->
<dl>
    <dt>Term</dt>
    <dd>Definition</dd>
    <dt>Another term</dt>
    <dd>Another definition</dd>
</dl>

<!-- Nested lists -->
<ul>
    <li>Parent item
        <ul>
            <li>Child item 1</li>
            <li>Child item 2</li>
        </ul>
    </li>
</ul>
```

## 🔗 Links & Navigation

### Basic Links

```html
<!-- External link -->
<a href="https://example.com">External Link</a>

<!-- Internal link -->
<a href="/about">About Page</a>

<!-- Anchor link -->
<a href="#section1">Jump to Section 1</a>

<!-- Email link -->
<a href="mailto:email@example.com">Send Email</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>

<!-- Download link -->
<a href="file.pdf" download>Download PDF</a>

<!-- Link with target -->
<a href="https://example.com" target="_blank" rel="noopener">Open in New Tab</a>
```

### Navigation

```html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
```

## 🖼️ Images & Media

### Images

```html
<!-- Basic image -->
<img src="image.jpg" alt="Description of image">

<!-- Image with dimensions -->
<img src="image.jpg" alt="Description" width="300" height="200">

<!-- Responsive image -->
<img src="image.jpg" alt="Description" style="max-width: 100%; height: auto;">

<!-- Image with multiple sources -->
<picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <source media="(min-width: 400px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Description">
</picture>

<!-- Image map -->
<img src="image.jpg" alt="Description" usemap="#imagemap">
<map name="imagemap">
    <area shape="rect" coords="0,0,100,100" href="link1.html" alt="Area 1">
    <area shape="circle" coords="150,150,50" href="link2.html" alt="Area 2">
</map>
```

### Video & Audio

```html
<!-- Video -->
<video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio tag.
</audio>

<!-- Embedded content -->
<iframe src="https://www.youtube.com/embed/VIDEO_ID" width="560" height="315"></iframe>
```

## 📋 Forms

### Basic Form Structure

```html
<form action="/submit" method="post" enctype="multipart/form-data">
    <!-- Form fields go here -->
    <button type="submit">Submit</button>
</form>
```

### Input Types

```html
<!-- Text input -->
<input type="text" name="username" placeholder="Enter username" required>

<!-- Email input -->
<input type="email" name="email" placeholder="Enter email" required>

<!-- Password input -->
<input type="password" name="password" placeholder="Enter password">

<!-- Number input -->
<input type="number" name="age" min="0" max="120" step="1">

<!-- Date input -->
<input type="date" name="birthdate">

<!-- Time input -->
<input type="time" name="meeting-time">

<!-- Color input -->
<input type="color" name="favorite-color">

<!-- File input -->
<input type="file" name="upload" accept=".jpg,.png,.pdf">

<!-- Range input -->
<input type="range" name="volume" min="0" max="100" value="50">

<!-- Checkbox -->
<input type="checkbox" name="subscribe" value="yes" id="subscribe">
<label for="subscribe">Subscribe to newsletter</label>

<!-- Radio buttons -->
<input type="radio" name="gender" value="male" id="male">
<label for="male">Male</label>
<input type="radio" name="gender" value="female" id="female">
<label for="female">Female</label>

<!-- Hidden input -->
<input type="hidden" name="token" value="abc123">

<!-- Search input -->
<input type="search" name="q" placeholder="Search...">

<!-- URL input -->
<input type="url" name="website" placeholder="https://example.com">

<!-- Tel input -->
<input type="tel" name="phone" placeholder="+1-234-567-8900">
```

### Form Elements

```html
<!-- Textarea -->
<textarea name="message" rows="4" cols="50" placeholder="Enter your message"></textarea>

<!-- Select dropdown -->
<select name="country">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
</select>

<!-- Select with groups -->
<select name="car">
    <optgroup label="European Cars">
        <option value="bmw">BMW</option>
        <option value="audi">Audi</option>
    </optgroup>
    <optgroup label="American Cars">
        <option value="ford">Ford</option>
        <option value="chevrolet">Chevrolet</option>
    </optgroup>
</select>

<!-- Fieldset and legend -->
<fieldset>
    <legend>Personal Information</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
</fieldset>

<!-- Buttons -->
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Click Me</button>
<input type="submit" value="Submit">
<input type="reset" value="Reset">
```

## 🏛️ Semantic Elements

### Document Structure

```html
<!-- Header -->
<header>
    <h1>Website Title</h1>
    <nav>
        <!-- Navigation content -->
    </nav>
</header>

<!-- Main content -->
<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content...</p>
    </article>
    
    <section>
        <h2>Section Title</h2>
        <p>Section content...</p>
    </section>
</main>

<!-- Sidebar -->
<aside>
    <h3>Related Links</h3>
    <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
    </ul>
</aside>

<!-- Footer -->
<footer>
    <p>&copy; 2024 Your Company. All rights reserved.</p>
</footer>
```

### Content Elements

```html
<!-- Article -->
<article>
    <header>
        <h2>Article Title</h2>
        <time datetime="2024-01-15">January 15, 2024</time>
    </header>
    <p>Article content...</p>
    <footer>
        <p>Author: John Doe</p>
    </footer>
</article>

<!-- Section -->
<section>
    <h2>Section Title</h2>
    <p>Section content...</p>
</section>

<!-- Figure -->
<figure>
    <img src="image.jpg" alt="Description">
    <figcaption>Caption for the image</figcaption>
</figure>

<!-- Blockquote -->
<blockquote cite="https://example.com">
    <p>This is a quote from another source.</p>
    <footer>— Author Name</footer>
</blockquote>

<!-- Address -->
<address>
    <p>Contact: <a href="mailto:email@example.com">email@example.com</a></p>
    <p>Address: 123 Main St, City, State</p>
</address>
```

## 📊 Tables

### Basic Table

```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
        </tr>
        <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">Footer content</td>
        </tr>
    </tfoot>
</table>
```

### Table with Caption

```html
<table>
    <caption>Monthly Sales Report</caption>
    <thead>
        <tr>
            <th>Month</th>
            <th>Sales</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>January</td>
            <td>$10,000</td>
        </tr>
        <tr>
            <td>February</td>
            <td>$12,000</td>
        </tr>
    </tbody>
</table>
```

## 🎨 Common Attributes

### Global Attributes

```html
<!-- ID and class -->
<div id="unique-id" class="class1 class2">Content</div>

<!-- Style -->
<div style="color: red; font-size: 16px;">Styled content</div>

<!-- Title (tooltip) -->
<div title="This is a tooltip">Hover me</div>

<!-- Data attributes -->
<div data-user-id="123" data-role="admin">User content</div>

<!-- Hidden -->
<div hidden>This content is hidden</div>

<!-- Contenteditable -->
<div contenteditable="true">Editable content</div>

<!-- Spellcheck -->
<textarea spellcheck="true">Check spelling</textarea>

<!-- Tabindex -->
<button tabindex="1">First focus</button>
<button tabindex="2">Second focus</button>
```

## 🔧 Meta Tags

### Common Meta Tags

```html
<!-- Character encoding -->
<meta charset="UTF-8">

<!-- Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Description -->
<meta name="description" content="Page description for SEO">

<!-- Keywords -->
<meta name="keywords" content="keyword1, keyword2, keyword3">

<!-- Author -->
<meta name="author" content="Author Name">

<!-- Robots -->
<meta name="robots" content="index, follow">
<meta name="robots" content="noindex, nofollow">

<!-- Refresh -->
<meta http-equiv="refresh" content="30">
<meta http-equiv="refresh" content="5;url=https://example.com">

<!-- Cache control -->
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
```

## 🎯 Best Practices

### Accessibility

```html
<!-- Use semantic elements -->
<nav> instead of <div class="nav">
<main> instead of <div class="main">
<article> instead of <div class="article">

<!-- Provide alt text for images -->
<img src="image.jpg" alt="Descriptive text">

<!-- Use proper heading hierarchy -->
<h1>Main title</h1>
<h2>Section title</h2>
<h3>Subsection title</h3>

<!-- Label form elements -->
<label for="username">Username:</label>
<input type="text" id="username" name="username">

<!-- Use ARIA attributes when needed -->
<button aria-label="Close dialog">×</button>
<div role="alert" aria-live="polite">Alert message</div>
```

### SEO

```html
<!-- Use descriptive title -->
<title>Page Title - Site Name</title>

<!-- Meta description -->
<meta name="description" content="Unique, descriptive content">

<!-- Open Graph tags -->
<meta property="og:title" content="Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="image.jpg">

<!-- Structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": "Author Name"
}
</script>
```

## 🔗 Useful Resources

- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML Living Standard](https://html.spec.whatwg.org/)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML Validator](https://validator.w3.org/)

---

**Happy coding! 🌐** 