/*!
 * Seed-Build-System®
 * _______________________________________________________________
 *
 * The Non-AMD JavaScript — for defining "root" configurations.
 * _______________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Sequømics Corporation [http://sequomics.com/].
 * _______________________________________________________________
 *
 * @date      : 08-Nov-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : .eslintrc
 * _______________________________________________________________
 *
 * --/The Heart of Non-AMD System/-- of "Seed-Build-System®".
 * _______________________________________________________________
 */

/*!
 * classie - class helper functions.
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has(elem, 'my-class') -> true/false
 * classie.add(elem, 'my-new-class')
 * classie.remove(elem, 'my-unwanted-class')
 * classie.toggle(elem, 'my-class')
 */
/* jshint browser: true, strict: true, undef: true */
/* global define: false */

(function(window) {
  "use strict";
  // class helper functions from bonzo - https://github.com/ded/bonzo
  function classReg(className) {
    return new RegExp('(^|\\s+)' + className + '(\\s+|$)');
  }
  // classList support for class management,
  // altho to be fair, the api sucks because it won't accept multiple classes at once.
  var hasClass, addClass, removeClass;
  if ('classList' in document.documentElement) {
    hasClass = function(elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function(elem,c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), ' ' );
    };
  }
  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
  }
  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };
  // Transport(s): --------------------------------
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(classie);
  } else {
    // browser global
    window.classie = classie;
  }
})(window);

/*!
 * pathLoader.js — v1.0.0
 */
(function(window) {
  "use strict";
  function PathLoader(el) {
    this.el = el;
    // clear stroke.
    this.el.style.strokeDasharray = this.el.style.strokeDashoffset = this.el.getTotalLength();
  }
  PathLoader.prototype._draw = function(val) {
    this.el.style.strokeDashoffset = this.el.getTotalLength() * (1 - val);
  };
  PathLoader.prototype.setProgress = function(val, callback) {
    this._draw(val);
    if (callback && typeof callback === 'function') {
      // give it a time (ideally the same like the transition time),
      // so that the last progress increment animation is still visible.
      setTimeout(callback, 200);
    }
  };
  PathLoader.prototype.setProgressFn = function(fn) {
    if (typeof fn === 'function') {
      fn(this);
    }
  };
  // add to global namespace.
  window.PathLoader = PathLoader;
})(window);
