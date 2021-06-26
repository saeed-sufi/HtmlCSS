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

* `translateY` lets us position an element vertically relative to **itself**. For example, `translateY(100%) will push the content down, however tall the content is.

* For responsive images, it's better to have a real `img` element in your html file rather than applying the image as a css background image.

* BEM stands for Block, Element and Modifier. Look for block elements in the design file. 

* Class names are not necessarily supposed to be semantic. They are just a hook for css and javascript. So, the class names must communicate useful information to developers. 

* For font sizes, padding and margin values, we use `rem` unit in this course instead of `px`, `%` or `em`. When we use `rem` everything is relative to the root of the page which is always `html` element. 

* If we are giving padding to an element, we need to set the element to be an `inline-block` level element; that way, its parent and surrounding elements will be aware of its vertical padding.

* Inline boxes don’t affect vertical spacing. They’re not for determining layout—they’re for styling stuff inside of a block.

* If you want to play with the vertical space of a page, you must be working with block-level elements. check your display property if top or bottom margin isn't working.

* `paddings` never collapse. Add a `div` with `padding-top: 1px` between two block level consecutive elements to prevent their `margins` to collapse.

* HTML elements define their dimensions automatically. If we need explicit dimensions, we use `width` and `height` properties.

* Using `margin:auto` for centering a block only works when it has an explicit `width` defined on it.

* `text-align` property aligns the content and "inline" boxes inside of a block-level element. It will only align the content inside of our block boxes—not the blocks themselves.

* “descendant selectors” are used to target only those elements that are "inside" of another element.

* Use pseudo-classes to style different states of an element (`link`, `visited`, `hover`, `active`, ...). Think of them as class selectors that you don’t have to write on your own because they’re built into the browser.

* ID selectors are generally frowned upon. Use class selectors instead. Ids create a dependency between your website’s URLs and your CSS styles and this double functionality is another reason why we should avoid using them as css selectors. `href='selectors.html#button-2'`

* insert this code into `global.css` file so that you wouldn't forget to add `alt` attribute for every `img` element. 
```
img:not([alt]) {
  filter: grayscale(100%);
}
```
* in order to disable scroll on `body`, add `{height: 100%; overflow: hidden;}` on body. Use case is when you open a lightbox and you don't want the page behind the lightbox be scrollable.

* Elements with fixed positioning always have the initial containing block as their containing block. They are a special type of elements that are positioned absolutely. Absolutely positioned elements first look for a positioned element among their parent elements and if they don't find one, they consider the initial containing block as their containing block.

* Remember that in the case of relative positioning they complement one another, so that top:1em and bottom:-1em means the same, and it’s not meaningful to specify both top and bottom (or left and right) for the same element, because one of the values will be ignored. It's not the same for absolutely positioned elements.

* Apart from specifying the position of four corneres of an absolutely position element, you can also specify the position of one of the corners of the absolutely positioned box—say by using top and left—and then specify the dimensions of the box using width and height (or just use no width and height if you want to let it shrink-wrap to fit its contents).

* The thing to remember here is that the values you set for the top, right, bottom and left properties specify the distances from the element’s edges to their corresponding containing block edges.

* absolutely positioned elements, like floated elements, automatically generate block boxes which means you can specify dimensions for even inline elements like spans. 

* Each time you assign an integer value to the z-index property for an element, you create an “envelope” that contains that element and its descendants.

* Create close buttons using the following structure. It's accessible. 

```
<button type="button" aria-label="Close">
  <span aria-hidden="true">×</span>
</button>

```

* It's preferable to use a descendent selector rather than nesting more than two rules.

* You should be very careful not to pollute the global css scope (`_global.css`).

* **Never** insert an element between two elements that are positioned relative and absolute in relation with each other.

* If you're specifying `width` for a block level element, use `-left: auto` and `margin-right: auto` to center it.

* `img` element is by default an inline level element.

* If an `img` element is to be centered, after setting `margin-left: auto` and `margin-right: auto` of its container element, make sure to set the `max-width` of the image to its actual maximum width. Note that for this trick to work, the image should not be floated.

* Do not forget to set `overflow: hidden` in `wrapper.css`. 

*  Use ```em``` for margins of the text so that they scale relative to the font sizes used in the text.

* `transition` don't work for going from `display: none` to `display: block`. You should consider using `visibility: hidden; opacity: 0;` to `visibility: visible; opacity: 1`. Another way is to use `height`. Go from `hieght: 0;` to `height: 10rem`. Note that in this case, going from `height: 0` to `height: auto` wouldn't work either! You need to provide an explicit size value for `height` to work.

* combination of `width` and `max-width` would make a responsive box very easy to make.

* If an element is floated, it's taken out of the flow of the page and it's parent element how tall it should be.

* If an element is `position: relative` its surrounding elements, would not be aware of the change; They will think that the relatively positioned element is still where it used to be.

* `position: absolute` will cause the element to get out of the normal flow of the page.

* When an element is positioned absolutely, it will shrink wrap and only use as much space as it need to fit its content. You can adjust it by setting `width: 100%`

* When two html elements overlap, the one that comes later will sit on top. This is when we need to use z-index.

* Note that when using `transform: scale()`, by default, the element consideres its perfect center to be the origin of the transform.

* You can use `left` property and `transform: translateX` to center an element.

* Use `position: absolute` and set `left` and `top` properties to position an element perfectly where you want it to be.

* If you need to put a semi-transparent layer on an image, after setting the `background-image` to use the image, apply `linear-gradient` for setting a transparent color on the image.

* An element should be `position: relative` so that the `z-index` property is acknowledged by the browser.

* To change `background-color` from a real color to its default, `background-color: transparent`.

* ~~ **Important** note that videos do not play in safari unless you add `autoplay playsinline controls` to the `video` tag!!! ~~

### Responsive Images

* There are two scenarios when dealing with responsive images. 
1. Art direction and cropping situation: The images are cropped for design purposes. In this case we need to use `picture` element. Also, in the picture element, we have to begin with **smallest** image in `img` tag. Then, use `source` element to add `srcset` and `media` for bigger images. Note that the order of media queries matters and it should be in the direction of large images to smaller ones. 
2. Image resolution and file size situation (faster load time): The only diffrence between alternative images is their size. In this scenario, we don't need `picture` element and `media` attribute. We only need a traditional `img` element with all the different image sizes listed in the `srcset` attribute. Also, we need to help the browser to know about the size of each image by adding pixel-width of each image (570w). 

* You can combine this two situation when you need to send different cropped images to monitors with higher resolution (4K, ..). In this case, we need to add the high-dpi image to the `srcset` atribute of `source` element. Also, do not forget to tell the web browser about the width of the image.

* Note that if you need to add multiple images for `img` element, you need to use `srcset` instead of `src` element.

* Note that when you use responsive images, browser will assume that the image is going to take the entire width of the window. That's why they choose to display high-dpi copy of the image. So, we need to tell the browser that the image width is not going to be more than X pixels; we do so by adding `sizes` attribute to the `source` element (ex: `sizes = "404px"`). We can add media query to the `sizes` attribute to tell the browser of the width of image in screens with different sizes (ex: `sizes="(min-width:976px) 976px, 100vw"`)

* If you need to add a class to a `picture` element, you have to add it to the `img` element which resides in `picture` element.

* For responsive images to work for older browser which do not support `picture` elements and `srcset` attributes, you need to install an npm package called `picturefill`. Import it into the `vendor.js` file. 

* You should use the media attribute only in art direction scenarios; when you do use media, don't also offer media conditions within the sizes attribute.


## Flexbox

* If a flex item has an explicit width, its `flex-basis` is set to that width. Otherwise, it will be sized according to the width of its content. Also, if you set `flex-basis: 0;` it means all the space is free to grab by flexbox and be shared in proportion.

* when `flex-basis: auto` flexbox will take the `max-content` size of the item as the flex-basis and when `flex-basis: 0` flexbox will take the `min-content` size of the item as the flex-basis.

* If you set `flex-basis: 0` then explicitly setting the items width, would be ignored.

* When there is positive free space in the container, adjusting `flex-shrink` will trigger no change and vice versa for `flex-grow` when there is negative free space. In other words, items can’t grow with no positive free space, and they won’t shrink unless there is negative free space.

* If you set `min-width` or `max-width` for flex items, that size is not going to be violated no matter how you adjust `shrink` or `grow`. In other words, it will make flex items inflexible in one direction. But if you only set `width` for flex items, then modifying `shrink` and `grow` properties would still work in both direction.

* `flex: initial;` is equivalent to `flex: 0 1 auto;`. `flex: auto;` is equivalent to `flex: 1 1 auto;`. `flex: none;` is equivalent to `flex: 0 0 auto;`. `flex: 1;` is equivalent to `flex: 1 1 0;`

* `align-content` is similar to `align-items`, but instead of aligning flex items, it aligns flex lines. So, in order for it to have any effect, `flex-wrap` has to be set to `wrap`.

*  flex items can be allowed to wrap but, once they do so, each line becomes a flex container of its own.

* As a rule of thumb, if you are adding widths to flex items in order to make items in one row of a wrapped flex container line up with the items above them you really want two-dimensional layout.

* If your flex container has a height set, then the items will stretch to that height, regardless of how much content is in the item.

* `align-self` property has a value of `auto` which will reset the value to that which is defined on the flex container.

* The reordering capabilities of flex layout intentionally affect only the visual rendering, leaving speech order and navigation based on the source order. Authors must not use order or the \*-reverse values of flex-flow/flex-direction as a substitute for correct source ordering, as that can ruin the accessibility of the document.

* When using `order` take care that you are not reordering items that could be accessed by the keyboard as a user is tabbing around.

## Animations

* properties that are expressed in numbers and also colors, can be used in `transitions`.

* `transform` has four functions: `skew`, `rotate`, `scale`, `translate`. Order of these functions, matter!

* every time we need to make a 3D environment, we have to add `perspective` property to the element container first. This property defines the distance between our eyes and the monitor screen. 




