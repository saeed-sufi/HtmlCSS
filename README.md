# HtmlCSS
## A summary of important points I learn about Html and CSS

* `jpegs` are good for big photos but they don't allow for transparent pixels. `gif` is good for simple animation but not good for color palette. `png` is good for anything which is not a photo or an animations including logos, icons, technical diagrams,... . `svg` is vector based so they are good for everything that `png` is good for especially for responsive design. Downside of `svg` is that if there's a lot if text in them, their file size skyrocket.

* The `width` attribute in an `img` tag is dimensionless. 

* Always specify the language of your website (in the opening html tag) and add charset meta in the `head` section.

* A list of html entities can be found here: https://dev.w3.org/html5/html-author/charref

* If you need to know whether the browser support a feature or not, you have to use `Modernizr`. For example when using `webp` image formats in your css, you have to check whether the browser supports it or not and define two classes for each scenario: `.no-webp` and `.webp`

* First heading of the web page is usually an `h1` element which matches the title of the document.

* `block-level` elements are also called `flow content` and `inline` elements are also called `phrasing content`.

* `strong` is stronger than `em` and using both is equivalent to shouting!

* To decide between choosing `padding` or `margin`consider these 3 points: 
  * The padding of a box has a background, while margins are always transparent.
  * Padding is included in the click area of an element, while margins aren’t.
  * Margins collapse vertically, while padding doesn’t..



