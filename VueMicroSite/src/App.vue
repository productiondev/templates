<template>
  <div id="app">
    <webinar-header/>
    <webinar-nav/>
    <transition
      mode="out-in"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <router-view/>
    </transition>
    <count-down @isExpired="expired" @distanceInDaysToEvent="distanceInDays" />
    <webinar-footer/>
  </div>
</template>

<script>
import WebinarHeader from './components/WebinarHeader.vue'
import WebinarNav from './components/WebinarNav.vue'
import CountDown from './components/CountDown.vue'
import WebinarFooter from './components/WebinarFooter.vue'

export default {
  name: 'App',
  components: {
    WebinarHeader,
    WebinarNav,
    CountDown,
    WebinarFooter
  },
  data () {
    return {
      numberOfDaysOfLeadUpMaterial: 5,
      daysRemainingTillEvent: null,
      isExpired: null,
      debug: true,
    }
  },
  mounted () {
    // send user to page top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },
  methods: {
    distanceInDays (payload) {
      // listen for child component
      // on how many days remaining
      this.daysRemainingTillEvent = payload;

      // currently, setting debug to true
      // will on affect menu items.
      if(this.debug) {
        this.daysRemainingTillEvent = 1;
      }
    },
    expired (ex) {
      // listen for child component
      // to send whether isExpired
      this.isExpired = ex;
    },
    beforeEnter: function (el) {
      el.style.opacity = 0;
    },
    enter: function (el, done) {
      this.$anime({
        targets: el,
        duration: 750,
        opacity: 1,
        translateX: [250, 0],
        direction: 'alternate',
        loop: false,
        elasticity: function(el, i, l) {
          return (200 + i * 200);
        }
      });
      done();
    },
    leave: function (el, done) {
      done();
    },
  }
}
</script>

<style lang="scss">

@import "./assets/scss/variables";

/**
 * resetr.css v3.0.0
 * MIT License
 * github.com/jbdebiasio/resetr.css
 *
 * Based on ress.css v1.2.2 and normalize.css v8.0.0
 * github.com/filipelinhares/ress
 * github.com/necolas/normalize.css
 */

/*  # =================================================================
    # Global selectors
    # ================================================================= */

html {
  box-sizing: border-box;
  background: white;
  color: black;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%; /* iOS 8+ */
}

*,
::before,
::after {
  box-sizing: inherit;
}

::before,
::after {
  text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
  vertical-align: inherit;
}

* {
  padding: 0; /* Reset `padding` and `margin` of all elements */
  margin: 0;
  font: inherit;
}

/*  # =================================================================
    # General elements
    # ================================================================= */

/* Add the correct display in iOS 4-7.*/
audio:not([controls]) {
  display: none;
  height: 0;
}

hr {
  height: 0;
  overflow: visible; /* Show the overflow in Edge and IE */
}

/*
* Correct `block` display not defined for any HTML5 element in IE 8/9
* Correct `block` display not defined for `details` or `summary` in IE 10/11
* and Firefox
* Correct `block` display not defined for `main` in IE 11
*/
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

summary {
  display: list-item; /* Add the correct display in all browsers */
}

small {
  font-size: 80%; /* Set font-size to 80% in `small` elements */
}

[hidden],
template {
  display: none; /* Add the correct display in IE */
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

a {
  background-color: transparent; /* Remove the gray background on active links in IE 10 */
  color: inherit;
  text-decoration: none;
  -webkit-text-decoration-skip: objects; /* Remove gaps in links underline in iOS 8+ and Safari 8+ */
}

a:active,
a:hover {
  outline-width: 0; /* Remove the outline when hovering in all browsers */
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace; /* Specify the font family of code elements */
}

/* Correct style set to `bold` in Edge 12+, Safari 6.2+, and Chrome 18+ */
strong {
  font-weight: bolder;
}

/* Addition */
em {
  font-style: italic;
}

/* Address styling not present in IE 8/9 */
mark {
  background-color: #ff0;
  color: #000;
}

/* https://gist.github.com/unruthless/413930 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*  # =================================================================
    # Forms
    # ================================================================= */

input {
  border-radius: 0;
}

/* Apply cursor pointer to button elements */
button,
[type="button"],
[type="reset"],
[type="submit"],
[role="button"] {
  cursor: pointer;
}

/* Replace pointer cursor in disabled elements */
[disabled] {
  cursor: default;
}

[type="number"] {
  width: auto; /* Firefox 36+ */
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; /* Safari 8 */
}

textarea {
  overflow: auto; /* Internet Explorer 11+ */
  resize: vertical; /* Specify textarea resizability */
}

button,
input {
  overflow: visible; /* Address `overflow` set to `hidden` in IE 8/9/10/11 */
}

/* Remove inner padding and border in Firefox 4+ */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: 0;
  padding: 0;
}

/* Replace focus style removed in the border reset above */
button:-moz-focusring,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  outline: 1px dotted ButtonText;
}

button,
html [type="button"], /* Prevent a WebKit bug where (2) destroys native `audio` and `video`controls in Android 4 */
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */
}

button,
select {
  text-transform: none; /* Firefox 40+, Internet Explorer 11- */
}

/* Remove the default button styling in all browsers */
button,
input,
select,
textarea {
  background-color: transparent;
  border-style: none;
  color: inherit;
}

/* Correct the cursor style of increment and decrement buttons in Chrome. */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/* Style select like a standard input */
select {
  -moz-appearance: none; /* Firefox 36+ */
  -webkit-appearance: none; /* Chrome 41+ */
}

select::-ms-expand {
  display: none; /* Internet Explorer 11+ */
}

select::-ms-value {
  color: currentColor; /* Internet Explorer 11+ */
}

legend {
  border: 0; /* Correct `color` not being inherited in IE 8/9/10/11 */
  color: inherit; /* Correct the color inheritance from `fieldset` elements in IE */
  display: table; /* Correct the text wrapping in Edge and IE */
  max-width: 100%; /* Correct the text wrapping in Edge and IE */
  white-space: normal; /* Correct the text wrapping in Edge and IE */
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS and Safari */
  font: inherit; /* Change font properties to `inherit` in Chrome and Safari */
}

[type="search"] {
  -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */
  outline-offset: -2px; /* Correct the outline style in Safari */
}

/*  # =================================================================
    # Specify media element style
    # ================================================================= */

img {
  border-style: none; /* Remove border when inside `a` element in IE 8/9/10 */
}

/* Add the correct vertical alignment in Chrome, Firefox, and Opera */
progress {
  vertical-align: baseline;
}

svg:not(:root) {
  overflow: hidden; /* Internet Explorer 11- */
}

img,
svg,
audio,
canvas,
progress,
video {
  display: inline-block; /* Internet Explorer 11+, Windows Phone 8.1+ */
}

/*  # =================================================================
    # Accessibility
    # ================================================================= */

/* Hide content from screens but not screenreaders */
@media screen {
  [hidden~="screen"] {
    display: inherit;
  }
  [hidden~="screen"]:not(:active):not(:focus):not(:target) {
    position: absolute !important;
    clip: rect(0 0 0 0) !important;
  }
}

/* Specify the progress cursor of updating elements */
[aria-busy="true"] {
  cursor: progress;
}

/* Specify the pointer cursor of trigger elements */
[aria-controls] {
  cursor: pointer;
}

/* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */
[aria-disabled] {
  cursor: default;
}

/*  # =================================================================
    # Selection
    # ================================================================= */

/* Specify text selection background color and omit drop shadow */

::-moz-selection {
  background-color: #b3d4fc; /* Required when declaring ::selection */
  color: #000;
  text-shadow: none;
}

::selection {
  background-color: #b3d4fc; /* Required when declaring ::selection */
  color: #000;
  text-shadow: none;
}
// resetr.css

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
p a,
a {
  color: $orange;
}
section {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1000px;
  padding: 40px;
  margin: 0 auto;
  background-color: $gray;
  border: 10px solid $teal;
  border-radius: 5px;
  min-height: $section_container_min_height;

  ul {
    list-style-position: inside;
    list-style: none;
    margin-bottom: 40px;

    li::before {
      display: flex;
      justify-content: center;
      align-items: center;
      content: "• ";
      color: $orange;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      padding: .5;
      font-size: 26px;
    }
    li {
      margin-bottom: 10px;
      line-height: 1.65em;
      font-size: 1.3em;
    }
  }
}
.section::after {
  content: '';
  min-height: inherit;
  font-size: 0;
}
::selection {
  background-color: $teal;
  color: #fff;
}
::-moz-selection {
  background-color: $teal;
  color: #fff;
}
p, h1, h2, h3 {
  color: #1a1a1a;
}
p {
  font-size: 1.3em;
}
div.pre {
  font-family: 'Open Sans', sans-serif;
  white-space: pre-wrap;
  border-left: 12px solid #F1592A;
  padding-left: 16px;
  font-size: 1em;
  margin: 15px 0 15px 15px;
  text-align: center;
}
div.pre p {
  text-align: left;
  margin: 0;
  line-height: 1.25em;
}
.text_light {
  font-weight:100;
  text-transform: uppercase;
}
p span.text_light {
  font-size: .75em;
  line-height: 22px;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  max-width: 500px;
  margin: 0 auto;
}
.header_page_title{
  text-align: center;
  color: #fff;
  font-weight: bold;
  margin: 0 0 40px 0;
  font-size: 3em;
  text-transform: uppercase;
}
section p {
  margin-bottom: 40px;
  line-height: 1.65em;
}
h3 {
  margin-bottom: 20px;
  text-align: center;
  font-size: 2em;
}
iframe {
  width: 100%;
  height: 250px
}
.content {
  width: 100%;
}
.content h1 {
  font-size: 1.8em;
  font-style: italic;
  text-align: center;
}
.text-center {
  text-align: center;
}
.content .cal_link_header {
  font-weight: bold;
  font-style: initial;
}
.cal_link {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;

  a {
    border: 2px solid $orange;
    padding: 10px 5px;
    width: 45%;
    text-align: center;
    transition: 500ms;
  }
  a:hover {
    background-color: rgb(255, 226, 217);
    padding: 10px 5px;
    width: 45%;
    text-align: center;
  }
}
.pod_link {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;

  a {
    border: 2px solid $orange;
    padding: 10px 5px;
    width: 25%;
    text-align: center;
    transition: 500ms;
  }
  a:hover {
    background-color: rgb(255, 226, 217);
    padding: 10px 5px;
    width: 25%;
    text-align: center;
  }
}
.terms {
  font-size: .75em;
  width: 75%;
  margin: 0 auto;
  margin-top: 24px;
}
form {
  width: 100%;
  margin-bottom: 20px;
  border: 4px solid $orange;
  border-radius: 4px;
  padding: 20px;
  position: relative;
  overflow: hidden;

  #smsFormGroup {
    display: flex;
    width: 75%;
    margin: 0 auto;
    height: 60px;
    justify-content: center;
    align-items: center;
  }

  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 100%;
    transition: 500ms;
  }
  .btn:hover {
    background-color: rgb(219, 69, 23);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 100%;
  }

  input::-moz-placeholder {
    font-size: .65em;
  }
  input::placeholder {
    font-size: .65em;
  }
  input {
    border: 2px solid $orange;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 100%;
    width: 100%;
    padding-left: 10px;
    font-size: 1.5em;
  }
}
.btn {
  color: #fff;
  background-color: $orange;
  border: 2px solid $orange;
  border: none;
  font-weight: bold;
  width: 60%;
  height: 100%;
  text-transform: uppercase;
  text-align: center;
  font-size: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 12px 25px;
  cursor: pointer;
  transition: 500ms;
}
.message {
  bottom: -100px;
  height: 0%;
  position: absolute;
}
.success_msg {
  background-color: $teal;
  width: 100%;
  color: #fff;
  left: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: showSuccess;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  transition: cubic-bezier(0.23, 1, 0.320, 1);

}
@keyframes showSuccess {
  0% {
    height: 0%;
    bottom: -100px;
  }
  30% {
    height: 100%;
    bottom: 0;
    opacity: 1
  }
  90% {
    height: 100%;
    bottom: 0;
    opacity: 1
  }
  100% {
    opacity: 0
  }
}

// wistia player
.video_container {
  margin: 20px auto;
  position: relative;
  font-weight: bold;
  width: 100%;
}
.wistia_responsive_wrapper {
  width: 685px;
  margin: 0 auto;
  margin-bottom: 20px;
}
@media screen and (max-width: 1100px) {
  iframe {
    height: 280px
  }
  .video_container {
    float: none;
    position: relative; }
  .wistia_responsive_wrapper {
    width: 100%;
    max-height: 100%; }
}
@media screen and (max-width: 780px) {
  .wistia_parent_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    div {
      width: 50%;
    }
  }
  form {
    width: 100%;
    border: 4px solid $orange;
    border-radius: 4px;
    padding: 20px;

    #smsFormGroup {
      display: flex;
      flex-direction: column;
      width: 75%;
      margin: 0 auto;
      height: 120px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
    }

    .btn {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      width: 100%;
      padding: 0;
      margin-top: 10px;
    }

    input::-moz-placeholder {
      font-size: .5em;
    }
    input::placeholder {
      font-size: .5em;
    }
    input {
      border: 2px solid $orange;
      border-radius: 10px;
      height: 100%;
      width: 100%;
      padding-left: 10px;
      font-size: 1.5em;
    }
  }
}
@media screen and (max-width: 540px) {
  iframe {
    height: 320px
  }
  .content h1 {
    font-size: 1em;
  }
  .cal_link a:not(:last-of-type),
  .pod_link a:not(:last-of-type) {
    margin-bottom: 10px;
  }
  .btn {
    width: 100%;
    font-size: .8em;
    padding: 12px;
  }
  .cal_link,
  .pod_link, {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;

    a {
      width: 100%;
    }
    a:hover,
    a:active,
    a:focus,
    a:visited
     {
      background-color: rgb(255, 226, 217);
      padding: 10px 5px;
      width: 100%;
      text-align: center;
    }
  }
  .cal_link:last-of-type,
  .pod_link:last-of-type {
    margin-bottom: 0;
  }

}

@media only screen and (max-width: 1050px) {
  section {
    // width: 90%;
    max-width: 90vw;
  }
  h1.header_page_title {
    font-size: 1.45em;
    padding: 0 40px;
  }
}
@media screen and (max-width: 540px) {
  div.pre {
    text-align: left;
    margin: 15px 0;
    border-left: 6px solid #F1592A;
  }
}
@media only screen and (max-width: 380px) {
  section {
    padding: 25px;
  }
  h1.header_page_title {
    font-size: 1.25em;
    padding: 0 40px;
  }
}

</style>
