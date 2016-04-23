# angular-bricklayer
AngularJS module for [ademilter's bricklayer](https://github.com/ademilter/bricklayer), a lightweight & independent cascading grid layout library

[![npm version](https://badge.fury.io/js/angular-bricklayer.svg)](https://badge.fury.io/js/angular-bricklayer)
[![Bower version](https://badge.fury.io/bo/angular-bricklayer.svg)](https://badge.fury.io/bo/angular-bricklayer)

## Demos
- [Simple demo](https://rawgit.com/JohnnyTheTank/angular-bricklayer/master/demo/index.html)
- [on Plnkr](http://plnkr.co/edit/mo3G36)

[![Image](https://rawgit.com/ademilter/bricklayer/master/assets/screenshot.gif)](http://ademilter.github.io/bricklayer)

## Installation

1. Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/) or downloaded files:
    1. via bower: `bower install --save angular-bricklayer`
    2. via npm: `npm install --save angular-bricklayer`
    3. via CDN (jsDelivr)
    4. via [downloaded files](https://github.com/JohnnyTheTank/angular-bricklayer/zipball/master)

2. Include dependencies and angular-bricklayer in your HTML.
    1. When using bower
    ```html
    <link rel="stylesheet" href="bower_components/bricklayer/dist/bricklayer.min.css">
    <script src="bower_components/bricklayer/dist/bricklayer.min.js"></script>
    <script src="bower_components/angular-bricklayer/dist/angular-bricklayer.min.js"></script>
    ```
    2. When using npm
    ```html
    <link rel="stylesheet" href="node_modules/bricklayer/dist/bricklayer.min.css">
    <script src="node_modules/bricklayer/dist/bricklayer.min.js"></script>
    <script src="node_modules/angular-bricklayer/dist/angular-bricklayer.min.js"></script>
    ```
    3. When using CDN
    ```html
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bricklayer/0.2.4/bricklayer.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/bricklayer/0.2.4/bricklayer.min.js"></script>
    <script src="//cdn.jsdelivr.net/angular.bricklayer/1.0.1/angular-bricklayer.min.js"></script>
    ```
    4. When using downloaded files
    ```html
    <link rel="stylesheet" href="YOUR_PATH/bricklayer.min.css">
    <script src="YOUR_PATH/bricklayer.min.js"></script>
    <script src="YOUR_PATH/angular-bricklayer.min.js"></script>
    ```

3. Add **`jtt_bricklayer`** to your application's module dependencies, like this:
    ```javascript
    angular.module('app', ['jtt_bricklayer']);
    ```

## Usage

- Create a simple list:

```html
<div class="bricklayer">
  <div>Your item</div>
  <div>Your another item</div>
  <div>Your another but long item</div>
  <div>Your another but very short item</div>
  <div>Your one more item</div>
  <div>Your smallest item</div>
</div>
```

- Define **bricklayer column size**:

```css
@media screen and (min-width: 1200px) {
  .bricklayer-column-sizer {
    /* divide by 3. */
    width: 33.3%;
  }
}

@media screen and (min-width: 768px) {
  .bricklayer-column-sizer {
    /* divide by 2. */
    width: 50%;
  }
}
```

## Add bricks dynamically

Use `bricklayer-append` or `bricklayer-prepend` as attribute, class or element name inside of your `bricklayer` instance

```html
<div class="bricklayer">
    <!-- append -->
    <div bricklayer-append ng-repeat="item in appendData"></div>

    <!-- prepend -->
    <div bricklayer-prepend ng-repeat="item in prependData"></div>
</div>
```

# License
MIT