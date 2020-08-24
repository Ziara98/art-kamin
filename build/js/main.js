// $(document).ready(function () {
//     $('.categories__inner').slick();
// });
"use strict";
"use strict";

;

(function () {
  var accordItems = document.querySelectorAll('.block__title'),
      active = document.getElementsByClassName('block__title--active');
  Array.from(accordItems).forEach(function (item) {
    item.addEventListener('click', function () {
      if (active.length > 0 && active[0] !== this) active[0].classList.remove('block__title--active');
      this.classList.toggle('block__title--active');
    });
  });
})();
"use strict";

$(document).ready(function () {
  $('.top-slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-thumbnails'
  });
  $('.slider-nav-thumbnails').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.top-slider__inner',
    dots: false,
    centerMode: true
  }); //remove active class from all thumbnail slides

  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active'); //set active class to first thumbnail slides

  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active'); // On before slide change match active thumbnail to current slide

  $('.top-slider__inner').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
  }); //UPDATED

  $('.top-slider__inner').on('afterChange', function (event, slick, currentSlide) {
    $('.content').hide();
    $('.content[data-id=' + (currentSlide + 1) + ']').show();
  }); //slider counter

  var slickSlider = $('.top-slider__inner');
  var currentSlide = slickSlider.slick('slickCurrentSlide') + 1; //текущий слайд

  var totalSlides = slickSlider.slick('getSlick').slideCount; //общее кол-во слайдов

  var current_counter = $('.counter-current'); //блок,куда писать текущий слайд

  var total_counter = $('.counter-total'); //блок,куда писать общее кол-во слайдов

  current_counter.text(addZero(currentSlide));
  total_counter.text(addZero(totalSlides)); //функция перелистывания функции на 1 слайд вперед

  slickSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1; //если текущ слайд неизвестен,он равен 0

    current_counter.text(addZero(i));
    total_counter.text(addZero(totalSlides));
  });

  function addZero(num) {
    if (num < 9) {
      num = "0".concat(num);
    }

    return num;
  }
});
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();