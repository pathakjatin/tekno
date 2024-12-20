!(function () {
  "use strict";
  var e,
    a,
    t,
    s = function (a, t) {
      if (!(this instanceof s)) return new s(a, t);
      var i = {
          direction: "horizontal",
          touchEventsTarget: "container",
          initialSlide: 0,
          speed: 300,
          autoplay: !1,
          autoplayDisableOnInteraction: !0,
          autoplayStopOnLast: !1,
          iOSEdgeSwipeDetection: !1,
          iOSEdgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0,
          },
          flip: { slideShadows: !0, limitRotation: !0 },
          cube: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
          fade: { crossFade: !1 },
          parallax: !1,
          zoom: !1,
          zoomMax: 3,
          zoomMin: 1,
          zoomToggle: !0,
          scrollbar: null,
          scrollbarHide: !0,
          scrollbarDraggable: !1,
          scrollbarSnapOnRelease: !1,
          keyboardControl: !1,
          mousewheelControl: !1,
          mousewheelReleaseOnEdges: !1,
          mousewheelInvert: !1,
          mousewheelForceToAxis: !1,
          mousewheelSensitivity: 1,
          mousewheelEventsTarged: "container",
          hashnav: !1,
          hashnavWatchState: !1,
          history: !1,
          replaceState: !1,
          breakpoints: void 0,
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: "column",
          slidesPerGroup: 1,
          centeredSlides: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          onlyExternal: !1,
          threshold: 0,
          touchMoveStopPropagation: !0,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          pagination: null,
          paginationElement: "span",
          paginationClickable: !1,
          paginationHide: !1,
          paginationBulletRender: null,
          paginationProgressRender: null,
          paginationFractionRender: null,
          paginationCustomRender: null,
          paginationType: "bullets",
          resistance: !0,
          resistanceRatio: 0.85,
          nextButton: null,
          prevButton: null,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          lazyLoading: !1,
          lazyLoadingInPrevNext: !1,
          lazyLoadingInPrevNextAmount: 1,
          lazyLoadingOnTransitionStart: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          control: void 0,
          controlInverse: !1,
          controlBy: "slide",
          normalizeSlideIndex: !0,
          allowSwipeToPrev: !0,
          allowSwipeToNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          passiveListeners: !0,
          containerModifierClass: "swiper-container-",
          slideClass: "swiper-slide",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          buttonDisabledClass: "swiper-button-disabled",
          paginationCurrentClass: "swiper-pagination-current",
          paginationTotalClass: "swiper-pagination-total",
          paginationHiddenClass: "swiper-pagination-hidden",
          paginationProgressbarClass: "swiper-pagination-progressbar",
          paginationClickableClass: "swiper-pagination-clickable",
          paginationModifierClass: "swiper-pagination-",
          lazyLoadingClass: "swiper-lazy",
          lazyStatusLoadingClass: "swiper-lazy-loading",
          lazyStatusLoadedClass: "swiper-lazy-loaded",
          lazyPreloaderClass: "swiper-lazy-preloader",
          notificationClass: "swiper-notification",
          preloaderClass: "preloader",
          zoomContainerClass: "swiper-zoom-container",
          observer: !1,
          observeParents: !1,
          a11y: !1,
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          runCallbacksOnInit: !0,
        },
        r = t && t.virtualTranslate;
      t = t || {};
      var n = {};
      for (var o in t)
        if (
          "object" != typeof t[o] ||
          null === t[o] ||
          t[o].nodeType ||
          t[o] === window ||
          t[o] === document ||
          ("undefined" != typeof Dom7 && t[o] instanceof Dom7) ||
          ("undefined" != typeof jQuery && t[o] instanceof jQuery)
        )
          n[o] = t[o];
        else for (var l in ((n[o] = {}), t[o])) n[o][l] = t[o][l];
      for (var p in i)
        if (void 0 === t[p]) t[p] = i[p];
        else if ("object" == typeof t[p])
          for (var d in i[p]) void 0 === t[p][d] && (t[p][d] = i[p][d]);
      var m = this;
      if (
        ((m.params = t),
        (m.originalParams = n),
        (m.classNames = []),
        void 0 !== e && "undefined" != typeof Dom7 && (e = Dom7),
        (void 0 !== e ||
          (e =
            "undefined" == typeof Dom7
              ? window.Dom7 || window.Zepto || window.jQuery
              : Dom7)) &&
          ((m.$ = e),
          (m.currentBreakpoint = void 0),
          (m.getActiveBreakpoint = function () {
            if (!m.params.breakpoints) return !1;
            var e,
              a = !1,
              t = [];
            for (e in m.params.breakpoints)
              m.params.breakpoints.hasOwnProperty(e) && t.push(e);
            t.sort(function (e, a) {
              return parseInt(e, 10) > parseInt(a, 10);
            });
            for (var s = 0; s < t.length; s++)
              (e = t[s]) >= window.innerWidth && !a && (a = e);
            return a || "max";
          }),
          (m.setBreakpoint = function () {
            var e = m.getActiveBreakpoint();
            if (e && m.currentBreakpoint !== e) {
              var a =
                  e in m.params.breakpoints
                    ? m.params.breakpoints[e]
                    : m.originalParams,
                t = m.params.loop && a.slidesPerView !== m.params.slidesPerView;
              for (var s in a) m.params[s] = a[s];
              (m.currentBreakpoint = e), t && m.destroyLoop && m.reLoop(!0);
            }
          }),
          m.params.breakpoints && m.setBreakpoint(),
          (m.container = e(a)),
          0 !== m.container.length))
      ) {
        if (m.container.length > 1) {
          var u = [];
          return (
            m.container.each(function () {
              u.push(new s(this, t));
            }),
            u
          );
        }
        (m.container[0].swiper = m),
          m.container.data("swiper", m),
          m.classNames.push(
            m.params.containerModifierClass + m.params.direction
          ),
          m.params.freeMode &&
            m.classNames.push(m.params.containerModifierClass + "free-mode"),
          m.support.flexbox ||
            (m.classNames.push(m.params.containerModifierClass + "no-flexbox"),
            (m.params.slidesPerColumn = 1)),
          m.params.autoHeight &&
            m.classNames.push(m.params.containerModifierClass + "autoheight"),
          (m.params.parallax || m.params.watchSlidesVisibility) &&
            (m.params.watchSlidesProgress = !0),
          m.params.touchReleaseOnEdges && (m.params.resistanceRatio = 0),
          ["cube", "coverflow", "flip"].indexOf(m.params.effect) >= 0 &&
            (m.support.transforms3d
              ? ((m.params.watchSlidesProgress = !0),
                m.classNames.push(m.params.containerModifierClass + "3d"))
              : (m.params.effect = "slide")),
          "slide" !== m.params.effect &&
            m.classNames.push(
              m.params.containerModifierClass + m.params.effect
            ),
          "cube" === m.params.effect &&
            ((m.params.resistanceRatio = 0),
            (m.params.slidesPerView = 1),
            (m.params.slidesPerColumn = 1),
            (m.params.slidesPerGroup = 1),
            (m.params.centeredSlides = !1),
            (m.params.spaceBetween = 0),
            (m.params.virtualTranslate = !0),
            (m.params.setWrapperSize = !1)),
          ("fade" !== m.params.effect && "flip" !== m.params.effect) ||
            ((m.params.slidesPerView = 1),
            (m.params.slidesPerColumn = 1),
            (m.params.slidesPerGroup = 1),
            (m.params.watchSlidesProgress = !0),
            (m.params.spaceBetween = 0),
            (m.params.setWrapperSize = !1),
            void 0 === r && (m.params.virtualTranslate = !0)),
          m.params.grabCursor && m.support.touch && (m.params.grabCursor = !1),
          (m.wrapper = m.container.children("." + m.params.wrapperClass)),
          m.params.pagination &&
            ((m.paginationContainer = e(m.params.pagination)),
            m.params.uniqueNavElements &&
              "string" == typeof m.params.pagination &&
              m.paginationContainer.length > 1 &&
              1 === m.container.find(m.params.pagination).length &&
              (m.paginationContainer = m.container.find(m.params.pagination)),
            "bullets" === m.params.paginationType &&
            m.params.paginationClickable
              ? m.paginationContainer.addClass(
                  m.params.paginationModifierClass + "clickable"
                )
              : (m.params.paginationClickable = !1),
            m.paginationContainer.addClass(
              m.params.paginationModifierClass + m.params.paginationType
            )),
          (m.params.nextButton || m.params.prevButton) &&
            (m.params.nextButton &&
              ((m.nextButton = e(m.params.nextButton)),
              m.params.uniqueNavElements &&
                "string" == typeof m.params.nextButton &&
                m.nextButton.length > 1 &&
                1 === m.container.find(m.params.nextButton).length &&
                (m.nextButton = m.container.find(m.params.nextButton))),
            m.params.prevButton &&
              ((m.prevButton = e(m.params.prevButton)),
              m.params.uniqueNavElements &&
                "string" == typeof m.params.prevButton &&
                m.prevButton.length > 1 &&
                1 === m.container.find(m.params.prevButton).length &&
                (m.prevButton = m.container.find(m.params.prevButton)))),
          (m.isHorizontal = function () {
            return "horizontal" === m.params.direction;
          }),
          (m.rtl =
            m.isHorizontal() &&
            ("rtl" === m.container[0].dir.toLowerCase() ||
              "rtl" === m.container.css("direction"))),
          m.rtl && m.classNames.push(m.params.containerModifierClass + "rtl"),
          m.rtl && (m.wrongRTL = "-webkit-box" === m.wrapper.css("display")),
          m.params.slidesPerColumn > 1 &&
            m.classNames.push(m.params.containerModifierClass + "multirow"),
          m.device.android &&
            m.classNames.push(m.params.containerModifierClass + "android"),
          m.container.addClass(m.classNames.join(" ")),
          (m.translate = 0),
          (m.progress = 0),
          (m.velocity = 0),
          (m.lockSwipeToNext = function () {
            (m.params.allowSwipeToNext = !1),
              !1 === m.params.allowSwipeToPrev &&
                m.params.grabCursor &&
                m.unsetGrabCursor();
          }),
          (m.lockSwipeToPrev = function () {
            (m.params.allowSwipeToPrev = !1),
              !1 === m.params.allowSwipeToNext &&
                m.params.grabCursor &&
                m.unsetGrabCursor();
          }),
          (m.lockSwipes = function () {
            (m.params.allowSwipeToNext = m.params.allowSwipeToPrev = !1),
              m.params.grabCursor && m.unsetGrabCursor();
          }),
          (m.unlockSwipeToNext = function () {
            (m.params.allowSwipeToNext = !0),
              !0 === m.params.allowSwipeToPrev &&
                m.params.grabCursor &&
                m.setGrabCursor();
          }),
          (m.unlockSwipeToPrev = function () {
            (m.params.allowSwipeToPrev = !0),
              !0 === m.params.allowSwipeToNext &&
                m.params.grabCursor &&
                m.setGrabCursor();
          }),
          (m.unlockSwipes = function () {
            (m.params.allowSwipeToNext = m.params.allowSwipeToPrev = !0),
              m.params.grabCursor && m.setGrabCursor();
          }),
          (m.setGrabCursor = function (e) {
            (m.container[0].style.cursor = "move"),
              (m.container[0].style.cursor = e
                ? "-webkit-grabbing"
                : "-webkit-grab"),
              (m.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (m.container[0].style.cursor = e ? "grabbing" : "grab");
          }),
          (m.unsetGrabCursor = function () {
            m.container[0].style.cursor = "";
          }),
          m.params.grabCursor && m.setGrabCursor(),
          (m.imagesToLoad = []),
          (m.imagesLoaded = 0),
          (m.loadImage = function (e, a, t, s, i, r) {
            var n;
            function o() {
              r && r();
            }
            e.complete && i
              ? o()
              : a
              ? (((n = new window.Image()).onload = o),
                (n.onerror = o),
                s && (n.sizes = s),
                t && (n.srcset = t),
                a && (n.src = a))
              : o();
          }),
          (m.preloadImages = function () {
            function e() {
              null != m &&
                m &&
                (void 0 !== m.imagesLoaded && m.imagesLoaded++,
                m.imagesLoaded === m.imagesToLoad.length &&
                  (m.params.updateOnImagesReady && m.update(),
                  m.emit("onImagesReady", m)));
            }
            m.imagesToLoad = m.container.find("img");
            for (var a = 0; a < m.imagesToLoad.length; a++)
              m.loadImage(
                m.imagesToLoad[a],
                m.imagesToLoad[a].currentSrc ||
                  m.imagesToLoad[a].getAttribute("src"),
                m.imagesToLoad[a].srcset ||
                  m.imagesToLoad[a].getAttribute("srcset"),
                m.imagesToLoad[a].sizes ||
                  m.imagesToLoad[a].getAttribute("sizes"),
                !0,
                e
              );
          }),
          (m.autoplayTimeoutId = void 0),
          (m.autoplaying = !1),
          (m.autoplayPaused = !1),
          (m.startAutoplay = function () {
            return (
              void 0 === m.autoplayTimeoutId &&
              !!m.params.autoplay &&
              !m.autoplaying &&
              ((m.autoplaying = !0), m.emit("onAutoplayStart", m), void D())
            );
          }),
          (m.stopAutoplay = function (e) {
            m.autoplayTimeoutId &&
              (m.autoplayTimeoutId && clearTimeout(m.autoplayTimeoutId),
              (m.autoplaying = !1),
              (m.autoplayTimeoutId = void 0),
              m.emit("onAutoplayStop", m));
          }),
          (m.pauseAutoplay = function (e) {
            m.autoplayPaused ||
              (m.autoplayTimeoutId && clearTimeout(m.autoplayTimeoutId),
              (m.autoplayPaused = !0),
              0 === e
                ? ((m.autoplayPaused = !1), D())
                : m.wrapper.transitionEnd(function () {
                    m &&
                      ((m.autoplayPaused = !1),
                      m.autoplaying ? D() : m.stopAutoplay());
                  }));
          }),
          (m.minTranslate = function () {
            return -m.snapGrid[0];
          }),
          (m.maxTranslate = function () {
            return -m.snapGrid[m.snapGrid.length - 1];
          }),
          (m.updateAutoHeight = function () {
            var e,
              a = [],
              t = 0;
            if ("auto" !== m.params.slidesPerView && m.params.slidesPerView > 1)
              for (e = 0; e < Math.ceil(m.params.slidesPerView); e++) {
                var s = m.activeIndex + e;
                if (s > m.slides.length) break;
                a.push(m.slides.eq(s)[0]);
              }
            else a.push(m.slides.eq(m.activeIndex)[0]);
            for (e = 0; e < a.length; e++)
              if (void 0 !== a[e]) {
                var i = a[e].offsetHeight;
                t = i > t ? i : t;
              }
            t && m.wrapper.css("height", t + "px");
          }),
          (m.updateContainerSize = function () {
            var e, a;
            (e =
              void 0 !== m.params.width
                ? m.params.width
                : m.container[0].clientWidth),
              (a =
                void 0 !== m.params.height
                  ? m.params.height
                  : m.container[0].clientHeight),
              (0 === e && m.isHorizontal()) ||
                (0 === a && !m.isHorizontal()) ||
                ((e =
                  e -
                  parseInt(m.container.css("padding-left"), 10) -
                  parseInt(m.container.css("padding-right"), 10)),
                (a =
                  a -
                  parseInt(m.container.css("padding-top"), 10) -
                  parseInt(m.container.css("padding-bottom"), 10)),
                (m.width = e),
                (m.height = a),
                (m.size = m.isHorizontal() ? m.width : m.height));
          }),
          (m.updateSlidesSize = function () {
            (m.slides = m.wrapper.children("." + m.params.slideClass)),
              (m.snapGrid = []),
              (m.slidesGrid = []),
              (m.slidesSizesGrid = []);
            var e,
              a = m.params.spaceBetween,
              t = -m.params.slidesOffsetBefore,
              s = 0,
              i = 0;
            if (void 0 !== m.size) {
              var r, n;
              "string" == typeof a &&
                a.indexOf("%") >= 0 &&
                (a = (parseFloat(a.replace("%", "")) / 100) * m.size),
                (m.virtualSize = -a),
                m.rtl
                  ? m.slides.css({ marginLeft: "", marginTop: "" })
                  : m.slides.css({ marginRight: "", marginBottom: "" }),
                m.params.slidesPerColumn > 1 &&
                  ((r =
                    Math.floor(m.slides.length / m.params.slidesPerColumn) ===
                    m.slides.length / m.params.slidesPerColumn
                      ? m.slides.length
                      : Math.ceil(m.slides.length / m.params.slidesPerColumn) *
                        m.params.slidesPerColumn),
                  "auto" !== m.params.slidesPerView &&
                    "row" === m.params.slidesPerColumnFill &&
                    (r = Math.max(
                      r,
                      m.params.slidesPerView * m.params.slidesPerColumn
                    )));
              var o,
                l = m.params.slidesPerColumn,
                p = r / l,
                d = p - (m.params.slidesPerColumn * p - m.slides.length);
              for (e = 0; e < m.slides.length; e++) {
                n = 0;
                var u,
                  c,
                  g,
                  h = m.slides.eq(e);
                if (m.params.slidesPerColumn > 1)
                  "column" === m.params.slidesPerColumnFill
                    ? ((g = e - (c = Math.floor(e / l)) * l),
                      (c > d || (c === d && g === l - 1)) &&
                        ++g >= l &&
                        ((g = 0), c++),
                      (u = c + (g * r) / l),
                      h.css({
                        "-webkit-box-ordinal-group": u,
                        "-moz-box-ordinal-group": u,
                        "-ms-flex-order": u,
                        "-webkit-order": u,
                        order: u,
                      }))
                    : (c = e - (g = Math.floor(e / p)) * p),
                    h
                      .css(
                        "margin-" + (m.isHorizontal() ? "top" : "left"),
                        0 !== g &&
                          m.params.spaceBetween &&
                          m.params.spaceBetween + "px"
                      )
                      .attr("data-swiper-column", c)
                      .attr("data-swiper-row", g);
                "none" !== h.css("display") &&
                  ("auto" === m.params.slidesPerView
                    ? ((n = m.isHorizontal()
                        ? h.outerWidth(!0)
                        : h.outerHeight(!0)),
                      m.params.roundLengths && (n = k(n)))
                    : ((n =
                        (m.size - (m.params.slidesPerView - 1) * a) /
                        m.params.slidesPerView),
                      m.params.roundLengths && (n = k(n)),
                      m.isHorizontal()
                        ? (m.slides[e].style.width = n + "px")
                        : (m.slides[e].style.height = n + "px")),
                  (m.slides[e].swiperSlideSize = n),
                  m.slidesSizesGrid.push(n),
                  m.params.centeredSlides
                    ? ((t = t + n / 2 + s / 2 + a),
                      0 === e && (t = t - m.size / 2 - a),
                      Math.abs(t) < 0.001 && (t = 0),
                      i % m.params.slidesPerGroup == 0 && m.snapGrid.push(t),
                      m.slidesGrid.push(t))
                    : (i % m.params.slidesPerGroup == 0 && m.snapGrid.push(t),
                      m.slidesGrid.push(t),
                      (t = t + n + a)),
                  (m.virtualSize += n + a),
                  (s = n),
                  i++);
              }
              if (
                ((m.virtualSize =
                  Math.max(m.virtualSize, m.size) + m.params.slidesOffsetAfter),
                m.rtl &&
                  m.wrongRTL &&
                  ("slide" === m.params.effect ||
                    "coverflow" === m.params.effect) &&
                  m.wrapper.css({
                    width: m.virtualSize + m.params.spaceBetween + "px",
                  }),
                (m.support.flexbox && !m.params.setWrapperSize) ||
                  (m.isHorizontal()
                    ? m.wrapper.css({
                        width: m.virtualSize + m.params.spaceBetween + "px",
                      })
                    : m.wrapper.css({
                        height: m.virtualSize + m.params.spaceBetween + "px",
                      })),
                m.params.slidesPerColumn > 1 &&
                  ((m.virtualSize = (n + m.params.spaceBetween) * r),
                  (m.virtualSize =
                    Math.ceil(m.virtualSize / m.params.slidesPerColumn) -
                    m.params.spaceBetween),
                  m.isHorizontal()
                    ? m.wrapper.css({
                        width: m.virtualSize + m.params.spaceBetween + "px",
                      })
                    : m.wrapper.css({
                        height: m.virtualSize + m.params.spaceBetween + "px",
                      }),
                  m.params.centeredSlides))
              ) {
                for (o = [], e = 0; e < m.snapGrid.length; e++)
                  m.snapGrid[e] < m.virtualSize + m.snapGrid[0] &&
                    o.push(m.snapGrid[e]);
                m.snapGrid = o;
              }
              if (!m.params.centeredSlides) {
                for (o = [], e = 0; e < m.snapGrid.length; e++)
                  m.snapGrid[e] <= m.virtualSize - m.size &&
                    o.push(m.snapGrid[e]);
                (m.snapGrid = o),
                  Math.floor(m.virtualSize - m.size) -
                    Math.floor(m.snapGrid[m.snapGrid.length - 1]) >
                    1 && m.snapGrid.push(m.virtualSize - m.size);
              }
              0 === m.snapGrid.length && (m.snapGrid = [0]),
                0 !== m.params.spaceBetween &&
                  (m.isHorizontal()
                    ? m.rtl
                      ? m.slides.css({ marginLeft: a + "px" })
                      : m.slides.css({ marginRight: a + "px" })
                    : m.slides.css({ marginBottom: a + "px" })),
                m.params.watchSlidesProgress && m.updateSlidesOffset();
            }
          }),
          (m.updateSlidesOffset = function () {
            for (var e = 0; e < m.slides.length; e++)
              m.slides[e].swiperSlideOffset = m.isHorizontal()
                ? m.slides[e].offsetLeft
                : m.slides[e].offsetTop;
          }),
          (m.currentSlidesPerView = function () {
            var e,
              a,
              t = 1;
            if (m.params.centeredSlides) {
              var s,
                i = m.slides[m.activeIndex].swiperSlideSize;
              for (e = m.activeIndex + 1; e < m.slides.length; e++)
                m.slides[e] &&
                  !s &&
                  (t++,
                  (i += m.slides[e].swiperSlideSize) > m.size && (s = !0));
              for (a = m.activeIndex - 1; a >= 0; a--)
                m.slides[a] &&
                  !s &&
                  (t++,
                  (i += m.slides[a].swiperSlideSize) > m.size && (s = !0));
            } else
              for (e = m.activeIndex + 1; e < m.slides.length; e++)
                m.slidesGrid[e] - m.slidesGrid[m.activeIndex] < m.size && t++;
            return t;
          }),
          (m.updateSlidesProgress = function (e) {
            if (
              (void 0 === e && (e = m.translate || 0), 0 !== m.slides.length)
            ) {
              void 0 === m.slides[0].swiperSlideOffset &&
                m.updateSlidesOffset();
              var a = -e;
              m.rtl && (a = e),
                m.slides.removeClass(m.params.slideVisibleClass);
              for (var t = 0; t < m.slides.length; t++) {
                var s = m.slides[t],
                  i =
                    (a +
                      (m.params.centeredSlides ? m.minTranslate() : 0) -
                      s.swiperSlideOffset) /
                    (s.swiperSlideSize + m.params.spaceBetween);
                if (m.params.watchSlidesVisibility) {
                  var r = -(a - s.swiperSlideOffset),
                    n = r + m.slidesSizesGrid[t];
                  ((r >= 0 && r < m.size) ||
                    (n > 0 && n <= m.size) ||
                    (r <= 0 && n >= m.size)) &&
                    m.slides.eq(t).addClass(m.params.slideVisibleClass);
                }
                s.progress = m.rtl ? -i : i;
              }
            }
          }),
          (m.updateProgress = function (e) {
            void 0 === e && (e = m.translate || 0);
            var a = m.maxTranslate() - m.minTranslate(),
              t = m.isBeginning,
              s = m.isEnd;
            0 === a
              ? ((m.progress = 0), (m.isBeginning = m.isEnd = !0))
              : ((m.progress = (e - m.minTranslate()) / a),
                (m.isBeginning = m.progress <= 0),
                (m.isEnd = m.progress >= 1)),
              m.isBeginning && !t && m.emit("onReachBeginning", m),
              m.isEnd && !s && m.emit("onReachEnd", m),
              m.params.watchSlidesProgress && m.updateSlidesProgress(e),
              m.emit("onProgress", m, m.progress);
          }),
          (m.updateActiveIndex = function () {
            var e,
              a,
              t,
              s = m.rtl ? m.translate : -m.translate;
            for (a = 0; a < m.slidesGrid.length; a++)
              void 0 !== m.slidesGrid[a + 1]
                ? s >= m.slidesGrid[a] &&
                  s <
                    m.slidesGrid[a + 1] -
                      (m.slidesGrid[a + 1] - m.slidesGrid[a]) / 2
                  ? (e = a)
                  : s >= m.slidesGrid[a] &&
                    s < m.slidesGrid[a + 1] &&
                    (e = a + 1)
                : s >= m.slidesGrid[a] && (e = a);
            m.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
              (t = Math.floor(e / m.params.slidesPerGroup)) >=
                m.snapGrid.length && (t = m.snapGrid.length - 1),
              e !== m.activeIndex &&
                ((m.snapIndex = t),
                (m.previousIndex = m.activeIndex),
                (m.activeIndex = e),
                m.updateClasses(),
                m.updateRealIndex());
          }),
          (m.updateRealIndex = function () {
            m.realIndex = parseInt(
              m.slides.eq(m.activeIndex).attr("data-swiper-slide-index") ||
                m.activeIndex,
              10
            );
          }),
          (m.updateClasses = function () {
            m.slides.removeClass(
              m.params.slideActiveClass +
                " " +
                m.params.slideNextClass +
                " " +
                m.params.slidePrevClass +
                " " +
                m.params.slideDuplicateActiveClass +
                " " +
                m.params.slideDuplicateNextClass +
                " " +
                m.params.slideDuplicatePrevClass
            );
            var a = m.slides.eq(m.activeIndex);
            a.addClass(m.params.slideActiveClass),
              t.loop &&
                (a.hasClass(m.params.slideDuplicateClass)
                  ? m.wrapper
                      .children(
                        "." +
                          m.params.slideClass +
                          ":not(." +
                          m.params.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          m.realIndex +
                          '"]'
                      )
                      .addClass(m.params.slideDuplicateActiveClass)
                  : m.wrapper
                      .children(
                        "." +
                          m.params.slideClass +
                          "." +
                          m.params.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          m.realIndex +
                          '"]'
                      )
                      .addClass(m.params.slideDuplicateActiveClass));
            var s = a
              .next("." + m.params.slideClass)
              .addClass(m.params.slideNextClass);
            m.params.loop &&
              0 === s.length &&
              (s = m.slides.eq(0)).addClass(m.params.slideNextClass);
            var i = a
              .prev("." + m.params.slideClass)
              .addClass(m.params.slidePrevClass);
            if (
              (m.params.loop &&
                0 === i.length &&
                (i = m.slides.eq(-1)).addClass(m.params.slidePrevClass),
              t.loop &&
                (s.hasClass(m.params.slideDuplicateClass)
                  ? m.wrapper
                      .children(
                        "." +
                          m.params.slideClass +
                          ":not(." +
                          m.params.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          s.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(m.params.slideDuplicateNextClass)
                  : m.wrapper
                      .children(
                        "." +
                          m.params.slideClass +
                          "." +
                          m.params.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          s.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(m.params.slideDuplicateNextClass),
                i.hasClass(m.params.slideDuplicateClass)
                  ? m.wrapper
                      .children(
                        "." +
                          m.params.slideClass +
                          ":not(." +
                          m.params.slideDuplicateClass +
                          ')[data-swiper-slide-index="' +
                          i.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(m.params.slideDuplicatePrevClass)
                  : m.wrapper
                      .children(
                        "." +
                          m.params.slideClass +
                          "." +
                          m.params.slideDuplicateClass +
                          '[data-swiper-slide-index="' +
                          i.attr("data-swiper-slide-index") +
                          '"]'
                      )
                      .addClass(m.params.slideDuplicatePrevClass)),
              m.paginationContainer && m.paginationContainer.length > 0)
            ) {
              var r,
                n = m.params.loop
                  ? Math.ceil(
                      (m.slides.length - 2 * m.loopedSlides) /
                        m.params.slidesPerGroup
                    )
                  : m.snapGrid.length;
              if (
                (m.params.loop
                  ? ((r = Math.ceil(
                      (m.activeIndex - m.loopedSlides) / m.params.slidesPerGroup
                    )) >
                      m.slides.length - 1 - 2 * m.loopedSlides &&
                      (r -= m.slides.length - 2 * m.loopedSlides),
                    r > n - 1 && (r -= n),
                    r < 0 &&
                      "bullets" !== m.params.paginationType &&
                      (r = n + r))
                  : (r =
                      void 0 !== m.snapIndex
                        ? m.snapIndex
                        : m.activeIndex || 0),
                "bullets" === m.params.paginationType &&
                  m.bullets &&
                  m.bullets.length > 0 &&
                  (m.bullets.removeClass(m.params.bulletActiveClass),
                  m.paginationContainer.length > 1
                    ? m.bullets.each(function () {
                        e(this).index() === r &&
                          e(this).addClass(m.params.bulletActiveClass);
                      })
                    : m.bullets.eq(r).addClass(m.params.bulletActiveClass)),
                "fraction" === m.params.paginationType &&
                  (m.paginationContainer
                    .find("." + m.params.paginationCurrentClass)
                    .text(r + 1),
                  m.paginationContainer
                    .find("." + m.params.paginationTotalClass)
                    .text(n)),
                "progress" === m.params.paginationType)
              ) {
                var o = (r + 1) / n,
                  l = o,
                  p = 1;
                m.isHorizontal() || ((p = o), (l = 1)),
                  m.paginationContainer
                    .find("." + m.params.paginationProgressbarClass)
                    .transform(
                      "translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")"
                    )
                    .transition(m.params.speed);
              }
              "custom" === m.params.paginationType &&
                m.params.paginationCustomRender &&
                (m.paginationContainer.html(
                  m.params.paginationCustomRender(m, r + 1, n)
                ),
                m.emit("onPaginationRendered", m, m.paginationContainer[0]));
            }
            m.params.loop ||
              (m.params.prevButton &&
                m.prevButton &&
                m.prevButton.length > 0 &&
                (m.isBeginning
                  ? (m.prevButton.addClass(m.params.buttonDisabledClass),
                    m.params.a11y && m.a11y && m.a11y.disable(m.prevButton))
                  : (m.prevButton.removeClass(m.params.buttonDisabledClass),
                    m.params.a11y && m.a11y && m.a11y.enable(m.prevButton))),
              m.params.nextButton &&
                m.nextButton &&
                m.nextButton.length > 0 &&
                (m.isEnd
                  ? (m.nextButton.addClass(m.params.buttonDisabledClass),
                    m.params.a11y && m.a11y && m.a11y.disable(m.nextButton))
                  : (m.nextButton.removeClass(m.params.buttonDisabledClass),
                    m.params.a11y && m.a11y && m.a11y.enable(m.nextButton))));
          }),
          (m.updatePagination = function () {
            if (
              m.params.pagination &&
              m.paginationContainer &&
              m.paginationContainer.length > 0
            ) {
              var e = "";
              if ("bullets" === m.params.paginationType) {
                for (
                  var a = m.params.loop
                      ? Math.ceil(
                          (m.slides.length - 2 * m.loopedSlides) /
                            m.params.slidesPerGroup
                        )
                      : m.snapGrid.length,
                    t = 0;
                  t < a;
                  t++
                )
                  m.params.paginationBulletRender
                    ? (e += m.params.paginationBulletRender(
                        m,
                        t,
                        m.params.bulletClass
                      ))
                    : (e +=
                        "<" +
                        m.params.paginationElement +
                        ' class="' +
                        m.params.bulletClass +
                        '"></' +
                        m.params.paginationElement +
                        ">");
                m.paginationContainer.html(e),
                  (m.bullets = m.paginationContainer.find(
                    "." + m.params.bulletClass
                  )),
                  m.params.paginationClickable &&
                    m.params.a11y &&
                    m.a11y &&
                    m.a11y.initPagination();
              }
              "fraction" === m.params.paginationType &&
                ((e = m.params.paginationFractionRender
                  ? m.params.paginationFractionRender(
                      m,
                      m.params.paginationCurrentClass,
                      m.params.paginationTotalClass
                    )
                  : '<span class="' +
                    m.params.paginationCurrentClass +
                    '"></span> / <span class="' +
                    m.params.paginationTotalClass +
                    '"></span>'),
                m.paginationContainer.html(e)),
                "progress" === m.params.paginationType &&
                  ((e = m.params.paginationProgressRender
                    ? m.params.paginationProgressRender(
                        m,
                        m.params.paginationProgressbarClass
                      )
                    : '<span class="' +
                      m.params.paginationProgressbarClass +
                      '"></span>'),
                  m.paginationContainer.html(e)),
                "custom" !== m.params.paginationType &&
                  m.emit("onPaginationRendered", m, m.paginationContainer[0]);
            }
          }),
          (m.update = function (e) {
            var a;
            m &&
              (m.updateContainerSize(),
              m.updateSlidesSize(),
              m.updateProgress(),
              m.updatePagination(),
              m.updateClasses(),
              m.params.scrollbar && m.scrollbar && m.scrollbar.set(),
              e
                ? (m.controller &&
                    m.controller.spline &&
                    (m.controller.spline = void 0),
                  m.params.freeMode
                    ? (t(), m.params.autoHeight && m.updateAutoHeight())
                    : (("auto" === m.params.slidesPerView ||
                        m.params.slidesPerView > 1) &&
                      m.isEnd &&
                      !m.params.centeredSlides
                        ? m.slideTo(m.slides.length - 1, 0, !1, !0)
                        : m.slideTo(m.activeIndex, 0, !1, !0)) || t())
                : m.params.autoHeight && m.updateAutoHeight());
            function t() {
              m.rtl, m.translate;
              (a = Math.min(
                Math.max(m.translate, m.maxTranslate()),
                m.minTranslate()
              )),
                m.setWrapperTranslate(a),
                m.updateActiveIndex(),
                m.updateClasses();
            }
          }),
          (m.onResize = function (e) {
            m.params.breakpoints && m.setBreakpoint();
            var a = m.params.allowSwipeToPrev,
              t = m.params.allowSwipeToNext;
            (m.params.allowSwipeToPrev = m.params.allowSwipeToNext = !0),
              m.updateContainerSize(),
              m.updateSlidesSize(),
              ("auto" === m.params.slidesPerView || m.params.freeMode || e) &&
                m.updatePagination(),
              m.params.scrollbar && m.scrollbar && m.scrollbar.set(),
              m.controller &&
                m.controller.spline &&
                (m.controller.spline = void 0);
            var s = !1;
            if (m.params.freeMode) {
              var i = Math.min(
                Math.max(m.translate, m.maxTranslate()),
                m.minTranslate()
              );
              m.setWrapperTranslate(i),
                m.updateActiveIndex(),
                m.updateClasses(),
                m.params.autoHeight && m.updateAutoHeight();
            } else
              m.updateClasses(),
                (s =
                  ("auto" === m.params.slidesPerView ||
                    m.params.slidesPerView > 1) &&
                  m.isEnd &&
                  !m.params.centeredSlides
                    ? m.slideTo(m.slides.length - 1, 0, !1, !0)
                    : m.slideTo(m.activeIndex, 0, !1, !0));
            m.params.lazyLoading && !s && m.lazy && m.lazy.load(),
              (m.params.allowSwipeToPrev = a),
              (m.params.allowSwipeToNext = t);
          }),
          (m.touchEventsDesktop = {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup",
          }),
          window.navigator.pointerEnabled
            ? (m.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
              })
            : window.navigator.msPointerEnabled &&
              (m.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp",
              }),
          (m.touchEvents = {
            start:
              m.support.touch || !m.params.simulateTouch
                ? "touchstart"
                : m.touchEventsDesktop.start,
            move:
              m.support.touch || !m.params.simulateTouch
                ? "touchmove"
                : m.touchEventsDesktop.move,
            end:
              m.support.touch || !m.params.simulateTouch
                ? "touchend"
                : m.touchEventsDesktop.end,
          }),
          (window.navigator.pointerEnabled ||
            window.navigator.msPointerEnabled) &&
            ("container" === m.params.touchEventsTarget
              ? m.container
              : m.wrapper
            ).addClass("swiper-wp8-" + m.params.direction),
          (m.initEvents = function (e) {
            var a = e ? "off" : "on",
              s = e ? "removeEventListener" : "addEventListener",
              i =
                "container" === m.params.touchEventsTarget
                  ? m.container[0]
                  : m.wrapper[0],
              r = m.support.touch ? i : document,
              n = !!m.params.nested;
            if (m.browser.ie)
              i[s](m.touchEvents.start, m.onTouchStart, !1),
                r[s](m.touchEvents.move, m.onTouchMove, n),
                r[s](m.touchEvents.end, m.onTouchEnd, !1);
            else {
              if (m.support.touch) {
                var o = !(
                  "touchstart" !== m.touchEvents.start ||
                  !m.support.passiveListener ||
                  !m.params.passiveListeners
                ) && { passive: !0, capture: !1 };
                i[s](m.touchEvents.start, m.onTouchStart, o),
                  i[s](m.touchEvents.move, m.onTouchMove, n),
                  i[s](m.touchEvents.end, m.onTouchEnd, o);
              }
              ((t.simulateTouch && !m.device.ios && !m.device.android) ||
                (t.simulateTouch && !m.support.touch && m.device.ios)) &&
                (i[s]("mousedown", m.onTouchStart, !1),
                document[s]("mousemove", m.onTouchMove, n),
                document[s]("mouseup", m.onTouchEnd, !1));
            }
            window[s]("resize", m.onResize),
              m.params.nextButton &&
                m.nextButton &&
                m.nextButton.length > 0 &&
                (m.nextButton[a]("click", m.onClickNext),
                m.params.a11y &&
                  m.a11y &&
                  m.nextButton[a]("keydown", m.a11y.onEnterKey)),
              m.params.prevButton &&
                m.prevButton &&
                m.prevButton.length > 0 &&
                (m.prevButton[a]("click", m.onClickPrev),
                m.params.a11y &&
                  m.a11y &&
                  m.prevButton[a]("keydown", m.a11y.onEnterKey)),
              m.params.pagination &&
                m.params.paginationClickable &&
                (m.paginationContainer[a](
                  "click",
                  "." + m.params.bulletClass,
                  m.onClickIndex
                ),
                m.params.a11y &&
                  m.a11y &&
                  m.paginationContainer[a](
                    "keydown",
                    "." + m.params.bulletClass,
                    m.a11y.onEnterKey
                  )),
              (m.params.preventClicks || m.params.preventClicksPropagation) &&
                i[s]("click", m.preventClicks, !0);
          }),
          (m.attachEvents = function () {
            m.initEvents();
          }),
          (m.detachEvents = function () {
            m.initEvents(!0);
          }),
          (m.allowClick = !0),
          (m.preventClicks = function (e) {
            m.allowClick ||
              (m.params.preventClicks && e.preventDefault(),
              m.params.preventClicksPropagation &&
                m.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation()));
          }),
          (m.onClickNext = function (e) {
            e.preventDefault(), (m.isEnd && !m.params.loop) || m.slideNext();
          }),
          (m.onClickPrev = function (e) {
            e.preventDefault(),
              (m.isBeginning && !m.params.loop) || m.slidePrev();
          }),
          (m.onClickIndex = function (a) {
            a.preventDefault();
            var t = e(this).index() * m.params.slidesPerGroup;
            m.params.loop && (t += m.loopedSlides), m.slideTo(t);
          }),
          (m.updateClickedSlide = function (a) {
            var t = L(a, "." + m.params.slideClass),
              s = !1;
            if (t)
              for (var i = 0; i < m.slides.length; i++)
                m.slides[i] === t && (s = !0);
            if (!t || !s)
              return (m.clickedSlide = void 0), void (m.clickedIndex = void 0);
            if (
              ((m.clickedSlide = t),
              (m.clickedIndex = e(t).index()),
              m.params.slideToClickedSlide &&
                void 0 !== m.clickedIndex &&
                m.clickedIndex !== m.activeIndex)
            ) {
              var r,
                n = m.clickedIndex,
                o =
                  "auto" === m.params.slidesPerView
                    ? m.currentSlidesPerView()
                    : m.params.slidesPerView;
              if (m.params.loop) {
                if (m.animating) return;
                (r = parseInt(
                  e(m.clickedSlide).attr("data-swiper-slide-index"),
                  10
                )),
                  m.params.centeredSlides
                    ? n < m.loopedSlides - o / 2 ||
                      n > m.slides.length - m.loopedSlides + o / 2
                      ? (m.fixLoop(),
                        (n = m.wrapper
                          .children(
                            "." +
                              m.params.slideClass +
                              '[data-swiper-slide-index="' +
                              r +
                              '"]:not(.' +
                              m.params.slideDuplicateClass +
                              ")"
                          )
                          .eq(0)
                          .index()),
                        setTimeout(function () {
                          m.slideTo(n);
                        }, 0))
                      : m.slideTo(n)
                    : n > m.slides.length - o
                    ? (m.fixLoop(),
                      (n = m.wrapper
                        .children(
                          "." +
                            m.params.slideClass +
                            '[data-swiper-slide-index="' +
                            r +
                            '"]:not(.' +
                            m.params.slideDuplicateClass +
                            ")"
                        )
                        .eq(0)
                        .index()),
                      setTimeout(function () {
                        m.slideTo(n);
                      }, 0))
                    : m.slideTo(n);
              } else m.slideTo(n);
            }
          });
        var c,
          g,
          h,
          v,
          f,
          w,
          x,
          y,
          T,
          b,
          S,
          C,
          z = "input, select, textarea, button, video",
          M = Date.now(),
          P = [];
        for (var E in ((m.animating = !1),
        (m.touches = {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        }),
        (m.onTouchStart = function (a) {
          if (
            (a.originalEvent && (a = a.originalEvent),
            (S = "touchstart" === a.type) || !("which" in a) || 3 !== a.which)
          )
            if (m.params.noSwiping && L(a, "." + m.params.noSwipingClass))
              m.allowClick = !0;
            else if (!m.params.swipeHandler || L(a, m.params.swipeHandler)) {
              var t = (m.touches.currentX =
                  "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX),
                s = (m.touches.currentY =
                  "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY);
              if (
                !(
                  m.device.ios &&
                  m.params.iOSEdgeSwipeDetection &&
                  t <= m.params.iOSEdgeSwipeThreshold
                )
              ) {
                if (
                  ((c = !0),
                  (g = !1),
                  (h = !0),
                  (f = void 0),
                  (C = void 0),
                  (m.touches.startX = t),
                  (m.touches.startY = s),
                  (v = Date.now()),
                  (m.allowClick = !0),
                  m.updateContainerSize(),
                  (m.swipeDirection = void 0),
                  m.params.threshold > 0 && (y = !1),
                  "touchstart" !== a.type)
                ) {
                  var i = !0;
                  e(a.target).is(z) && (i = !1),
                    document.activeElement &&
                      e(document.activeElement).is(z) &&
                      document.activeElement.blur(),
                    i && a.preventDefault();
                }
                m.emit("onTouchStart", m, a);
              }
            }
        }),
        (m.onTouchMove = function (a) {
          if (
            (a.originalEvent && (a = a.originalEvent),
            !S || "mousemove" !== a.type)
          ) {
            if (a.preventedByNestedSwiper)
              return (
                (m.touches.startX =
                  "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX),
                void (m.touches.startY =
                  "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY)
              );
            if (m.params.onlyExternal)
              return (
                (m.allowClick = !1),
                void (
                  c &&
                  ((m.touches.startX = m.touches.currentX =
                    "touchmove" === a.type
                      ? a.targetTouches[0].pageX
                      : a.pageX),
                  (m.touches.startY = m.touches.currentY =
                    "touchmove" === a.type
                      ? a.targetTouches[0].pageY
                      : a.pageY),
                  (v = Date.now()))
                )
              );
            if (S && m.params.touchReleaseOnEdges && !m.params.loop)
              if (m.isHorizontal()) {
                if (
                  (m.touches.currentX < m.touches.startX &&
                    m.translate <= m.maxTranslate()) ||
                  (m.touches.currentX > m.touches.startX &&
                    m.translate >= m.minTranslate())
                )
                  return;
              } else if (
                (m.touches.currentY < m.touches.startY &&
                  m.translate <= m.maxTranslate()) ||
                (m.touches.currentY > m.touches.startY &&
                  m.translate >= m.minTranslate())
              )
                return;
            if (
              S &&
              document.activeElement &&
              a.target === document.activeElement &&
              e(a.target).is(z)
            )
              return (g = !0), void (m.allowClick = !1);
            if (
              (h && m.emit("onTouchMove", m, a),
              !(a.targetTouches && a.targetTouches.length > 1))
            ) {
              var s;
              if (
                ((m.touches.currentX =
                  "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX),
                (m.touches.currentY =
                  "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY),
                void 0 === f)
              )
                (m.isHorizontal() && m.touches.currentY === m.touches.startY) ||
                (!m.isHorizontal() && m.touches.currentX === m.touches.startX)
                  ? (f = !1)
                  : ((s =
                      (180 *
                        Math.atan2(
                          Math.abs(m.touches.currentY - m.touches.startY),
                          Math.abs(m.touches.currentX - m.touches.startX)
                        )) /
                      Math.PI),
                    (f = m.isHorizontal()
                      ? s > m.params.touchAngle
                      : 90 - s > m.params.touchAngle));
              if (
                (f && m.emit("onTouchMoveOpposite", m, a),
                void 0 === C &&
                  m.browser.ieTouch &&
                  ((m.touches.currentX === m.touches.startX &&
                    m.touches.currentY === m.touches.startY) ||
                    (C = !0)),
                c)
              )
                if (f) c = !1;
                else if (C || !m.browser.ieTouch) {
                  (m.allowClick = !1),
                    m.emit("onSliderMove", m, a),
                    a.preventDefault(),
                    m.params.touchMoveStopPropagation &&
                      !m.params.nested &&
                      a.stopPropagation(),
                    g ||
                      (t.loop && m.fixLoop(),
                      (x = m.getWrapperTranslate()),
                      m.setWrapperTransition(0),
                      m.animating &&
                        m.wrapper.trigger(
                          "webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"
                        ),
                      m.params.autoplay &&
                        m.autoplaying &&
                        (m.params.autoplayDisableOnInteraction
                          ? m.stopAutoplay()
                          : m.pauseAutoplay()),
                      (b = !1),
                      !m.params.grabCursor ||
                        (!0 !== m.params.allowSwipeToNext &&
                          !0 !== m.params.allowSwipeToPrev) ||
                        m.setGrabCursor(!0)),
                    (g = !0);
                  var i = (m.touches.diff = m.isHorizontal()
                    ? m.touches.currentX - m.touches.startX
                    : m.touches.currentY - m.touches.startY);
                  (i *= m.params.touchRatio),
                    m.rtl && (i = -i),
                    (m.swipeDirection = i > 0 ? "prev" : "next"),
                    (w = i + x);
                  var r = !0;
                  if (
                    (i > 0 && w > m.minTranslate()
                      ? ((r = !1),
                        m.params.resistance &&
                          (w =
                            m.minTranslate() -
                            1 +
                            Math.pow(
                              -m.minTranslate() + x + i,
                              m.params.resistanceRatio
                            )))
                      : i < 0 &&
                        w < m.maxTranslate() &&
                        ((r = !1),
                        m.params.resistance &&
                          (w =
                            m.maxTranslate() +
                            1 -
                            Math.pow(
                              m.maxTranslate() - x - i,
                              m.params.resistanceRatio
                            ))),
                    r && (a.preventedByNestedSwiper = !0),
                    !m.params.allowSwipeToNext &&
                      "next" === m.swipeDirection &&
                      w < x &&
                      (w = x),
                    !m.params.allowSwipeToPrev &&
                      "prev" === m.swipeDirection &&
                      w > x &&
                      (w = x),
                    m.params.threshold > 0)
                  ) {
                    if (!(Math.abs(i) > m.params.threshold || y))
                      return void (w = x);
                    if (!y)
                      return (
                        (y = !0),
                        (m.touches.startX = m.touches.currentX),
                        (m.touches.startY = m.touches.currentY),
                        (w = x),
                        void (m.touches.diff = m.isHorizontal()
                          ? m.touches.currentX - m.touches.startX
                          : m.touches.currentY - m.touches.startY)
                      );
                  }
                  m.params.followFinger &&
                    ((m.params.freeMode || m.params.watchSlidesProgress) &&
                      m.updateActiveIndex(),
                    m.params.freeMode &&
                      (0 === P.length &&
                        P.push({
                          position:
                            m.touches[m.isHorizontal() ? "startX" : "startY"],
                          time: v,
                        }),
                      P.push({
                        position:
                          m.touches[m.isHorizontal() ? "currentX" : "currentY"],
                        time: new window.Date().getTime(),
                      })),
                    m.updateProgress(w),
                    m.setWrapperTranslate(w));
                }
            }
          }
        }),
        (m.onTouchEnd = function (a) {
          if (
            (a.originalEvent && (a = a.originalEvent),
            h && m.emit("onTouchEnd", m, a),
            (h = !1),
            c)
          ) {
            m.params.grabCursor &&
              g &&
              c &&
              (!0 === m.params.allowSwipeToNext ||
                !0 === m.params.allowSwipeToPrev) &&
              m.setGrabCursor(!1);
            var t,
              s = Date.now(),
              i = s - v;
            if (
              (m.allowClick &&
                (m.updateClickedSlide(a),
                m.emit("onTap", m, a),
                i < 300 &&
                  s - M > 300 &&
                  (T && clearTimeout(T),
                  (T = setTimeout(function () {
                    m &&
                      (m.params.paginationHide &&
                        m.paginationContainer.length > 0 &&
                        !e(a.target).hasClass(m.params.bulletClass) &&
                        m.paginationContainer.toggleClass(
                          m.params.paginationHiddenClass
                        ),
                      m.emit("onClick", m, a));
                  }, 300))),
                i < 300 &&
                  s - M < 300 &&
                  (T && clearTimeout(T), m.emit("onDoubleTap", m, a))),
              (M = Date.now()),
              setTimeout(function () {
                m && (m.allowClick = !0);
              }, 0),
              c && g && m.swipeDirection && 0 !== m.touches.diff && w !== x)
            )
              if (
                ((c = g = !1),
                (t = m.params.followFinger
                  ? m.rtl
                    ? m.translate
                    : -m.translate
                  : -w),
                m.params.freeMode)
              ) {
                if (t < -m.minTranslate()) return void m.slideTo(m.activeIndex);
                if (t > -m.maxTranslate())
                  return void (m.slides.length < m.snapGrid.length
                    ? m.slideTo(m.snapGrid.length - 1)
                    : m.slideTo(m.slides.length - 1));
                if (m.params.freeModeMomentum) {
                  if (P.length > 1) {
                    var r = P.pop(),
                      n = P.pop(),
                      o = r.position - n.position,
                      l = r.time - n.time;
                    (m.velocity = o / l),
                      (m.velocity = m.velocity / 2),
                      Math.abs(m.velocity) < m.params.freeModeMinimumVelocity &&
                        (m.velocity = 0),
                      (l > 150 || new window.Date().getTime() - r.time > 300) &&
                        (m.velocity = 0);
                  } else m.velocity = 0;
                  (m.velocity =
                    m.velocity * m.params.freeModeMomentumVelocityRatio),
                    (P.length = 0);
                  var p = 1e3 * m.params.freeModeMomentumRatio,
                    d = m.velocity * p,
                    u = m.translate + d;
                  m.rtl && (u = -u);
                  var f,
                    y = !1,
                    S =
                      20 *
                      Math.abs(m.velocity) *
                      m.params.freeModeMomentumBounceRatio;
                  if (u < m.maxTranslate())
                    m.params.freeModeMomentumBounce
                      ? (u + m.maxTranslate() < -S &&
                          (u = m.maxTranslate() - S),
                        (f = m.maxTranslate()),
                        (y = !0),
                        (b = !0))
                      : (u = m.maxTranslate());
                  else if (u > m.minTranslate())
                    m.params.freeModeMomentumBounce
                      ? (u - m.minTranslate() > S && (u = m.minTranslate() + S),
                        (f = m.minTranslate()),
                        (y = !0),
                        (b = !0))
                      : (u = m.minTranslate());
                  else if (m.params.freeModeSticky) {
                    var C,
                      z = 0;
                    for (z = 0; z < m.snapGrid.length; z += 1)
                      if (m.snapGrid[z] > -u) {
                        C = z;
                        break;
                      }
                    (u =
                      Math.abs(m.snapGrid[C] - u) <
                        Math.abs(m.snapGrid[C - 1] - u) ||
                      "next" === m.swipeDirection
                        ? m.snapGrid[C]
                        : m.snapGrid[C - 1]),
                      m.rtl || (u = -u);
                  }
                  if (0 !== m.velocity)
                    p = m.rtl
                      ? Math.abs((-u - m.translate) / m.velocity)
                      : Math.abs((u - m.translate) / m.velocity);
                  else if (m.params.freeModeSticky) return void m.slideReset();
                  m.params.freeModeMomentumBounce && y
                    ? (m.updateProgress(f),
                      m.setWrapperTransition(p),
                      m.setWrapperTranslate(u),
                      m.onTransitionStart(),
                      (m.animating = !0),
                      m.wrapper.transitionEnd(function () {
                        m &&
                          b &&
                          (m.emit("onMomentumBounce", m),
                          m.setWrapperTransition(m.params.speed),
                          m.setWrapperTranslate(f),
                          m.wrapper.transitionEnd(function () {
                            m && m.onTransitionEnd();
                          }));
                      }))
                    : m.velocity
                    ? (m.updateProgress(u),
                      m.setWrapperTransition(p),
                      m.setWrapperTranslate(u),
                      m.onTransitionStart(),
                      m.animating ||
                        ((m.animating = !0),
                        m.wrapper.transitionEnd(function () {
                          m && m.onTransitionEnd();
                        })))
                    : m.updateProgress(u),
                    m.updateActiveIndex();
                }
                (!m.params.freeModeMomentum || i >= m.params.longSwipesMs) &&
                  (m.updateProgress(), m.updateActiveIndex());
              } else {
                var E,
                  I = 0,
                  k = m.slidesSizesGrid[0];
                for (
                  E = 0;
                  E < m.slidesGrid.length;
                  E += m.params.slidesPerGroup
                )
                  void 0 !== m.slidesGrid[E + m.params.slidesPerGroup]
                    ? t >= m.slidesGrid[E] &&
                      t < m.slidesGrid[E + m.params.slidesPerGroup] &&
                      ((I = E),
                      (k =
                        m.slidesGrid[E + m.params.slidesPerGroup] -
                        m.slidesGrid[E]))
                    : t >= m.slidesGrid[E] &&
                      ((I = E),
                      (k =
                        m.slidesGrid[m.slidesGrid.length - 1] -
                        m.slidesGrid[m.slidesGrid.length - 2]));
                var D = (t - m.slidesGrid[I]) / k;
                if (i > m.params.longSwipesMs) {
                  if (!m.params.longSwipes)
                    return void m.slideTo(m.activeIndex);
                  "next" === m.swipeDirection &&
                    (D >= m.params.longSwipesRatio
                      ? m.slideTo(I + m.params.slidesPerGroup)
                      : m.slideTo(I)),
                    "prev" === m.swipeDirection &&
                      (D > 1 - m.params.longSwipesRatio
                        ? m.slideTo(I + m.params.slidesPerGroup)
                        : m.slideTo(I));
                } else {
                  if (!m.params.shortSwipes)
                    return void m.slideTo(m.activeIndex);
                  "next" === m.swipeDirection &&
                    m.slideTo(I + m.params.slidesPerGroup),
                    "prev" === m.swipeDirection && m.slideTo(I);
                }
              }
            else c = g = !1;
          }
        }),
        (m._slideTo = function (e, a) {
          return m.slideTo(e, a, !0, !0);
        }),
        (m.slideTo = function (e, a, t, s) {
          void 0 === t && (t = !0),
            void 0 === e && (e = 0),
            e < 0 && (e = 0),
            (m.snapIndex = Math.floor(e / m.params.slidesPerGroup)),
            m.snapIndex >= m.snapGrid.length &&
              (m.snapIndex = m.snapGrid.length - 1);
          var i = -m.snapGrid[m.snapIndex];
          if (
            (m.params.autoplay &&
              m.autoplaying &&
              (s || !m.params.autoplayDisableOnInteraction
                ? m.pauseAutoplay(a)
                : m.stopAutoplay()),
            m.updateProgress(i),
            m.params.normalizeSlideIndex)
          )
            for (var r = 0; r < m.slidesGrid.length; r++)
              -Math.floor(100 * i) >= Math.floor(100 * m.slidesGrid[r]) &&
                (e = r);
          return (
            !(
              !m.params.allowSwipeToNext &&
              i < m.translate &&
              i < m.minTranslate()
            ) &&
            !(
              !m.params.allowSwipeToPrev &&
              i > m.translate &&
              i > m.maxTranslate() &&
              (m.activeIndex || 0) !== e
            ) &&
            (void 0 === a && (a = m.params.speed),
            (m.previousIndex = m.activeIndex || 0),
            (m.activeIndex = e),
            m.updateRealIndex(),
            (m.rtl && -i === m.translate) || (!m.rtl && i === m.translate)
              ? (m.params.autoHeight && m.updateAutoHeight(),
                m.updateClasses(),
                "slide" !== m.params.effect && m.setWrapperTranslate(i),
                !1)
              : (m.updateClasses(),
                m.onTransitionStart(t),
                0 === a || m.browser.lteIE9
                  ? (m.setWrapperTranslate(i),
                    m.setWrapperTransition(0),
                    m.onTransitionEnd(t))
                  : (m.setWrapperTranslate(i),
                    m.setWrapperTransition(a),
                    m.animating ||
                      ((m.animating = !0),
                      m.wrapper.transitionEnd(function () {
                        m && m.onTransitionEnd(t);
                      }))),
                !0))
          );
        }),
        (m.onTransitionStart = function (e) {
          void 0 === e && (e = !0),
            m.params.autoHeight && m.updateAutoHeight(),
            m.lazy && m.lazy.onTransitionStart(),
            e &&
              (m.emit("onTransitionStart", m),
              m.activeIndex !== m.previousIndex &&
                (m.emit("onSlideChangeStart", m),
                m.activeIndex > m.previousIndex
                  ? m.emit("onSlideNextStart", m)
                  : m.emit("onSlidePrevStart", m)));
        }),
        (m.onTransitionEnd = function (e) {
          (m.animating = !1),
            m.setWrapperTransition(0),
            void 0 === e && (e = !0),
            m.lazy && m.lazy.onTransitionEnd(),
            e &&
              (m.emit("onTransitionEnd", m),
              m.activeIndex !== m.previousIndex &&
                (m.emit("onSlideChangeEnd", m),
                m.activeIndex > m.previousIndex
                  ? m.emit("onSlideNextEnd", m)
                  : m.emit("onSlidePrevEnd", m))),
            m.params.history &&
              m.history &&
              m.history.setHistory(m.params.history, m.activeIndex),
            m.params.hashnav && m.hashnav && m.hashnav.setHash();
        }),
        (m.slideNext = function (e, a, t) {
          if (m.params.loop) {
            if (m.animating) return !1;
            m.fixLoop();
            m.container[0].clientLeft;
            return m.slideTo(m.activeIndex + m.params.slidesPerGroup, a, e, t);
          }
          return m.slideTo(m.activeIndex + m.params.slidesPerGroup, a, e, t);
        }),
        (m._slideNext = function (e) {
          return m.slideNext(!0, e, !0);
        }),
        (m.slidePrev = function (e, a, t) {
          if (m.params.loop) {
            if (m.animating) return !1;
            m.fixLoop();
            m.container[0].clientLeft;
            return m.slideTo(m.activeIndex - 1, a, e, t);
          }
          return m.slideTo(m.activeIndex - 1, a, e, t);
        }),
        (m._slidePrev = function (e) {
          return m.slidePrev(!0, e, !0);
        }),
        (m.slideReset = function (e, a, t) {
          return m.slideTo(m.activeIndex, a, e);
        }),
        (m.disableTouchControl = function () {
          return (m.params.onlyExternal = !0), !0;
        }),
        (m.enableTouchControl = function () {
          return (m.params.onlyExternal = !1), !0;
        }),
        (m.setWrapperTransition = function (e, a) {
          m.wrapper.transition(e),
            "slide" !== m.params.effect &&
              m.effects[m.params.effect] &&
              m.effects[m.params.effect].setTransition(e),
            m.params.parallax && m.parallax && m.parallax.setTransition(e),
            m.params.scrollbar && m.scrollbar && m.scrollbar.setTransition(e),
            m.params.control &&
              m.controller &&
              m.controller.setTransition(e, a),
            m.emit("onSetTransition", m, e);
        }),
        (m.setWrapperTranslate = function (e, a, t) {
          var s = 0,
            i = 0;
          m.isHorizontal() ? (s = m.rtl ? -e : e) : (i = e),
            m.params.roundLengths && ((s = k(s)), (i = k(i))),
            m.params.virtualTranslate ||
              (m.support.transforms3d
                ? m.wrapper.transform(
                    "translate3d(" + s + "px, " + i + "px, 0px)"
                  )
                : m.wrapper.transform("translate(" + s + "px, " + i + "px)")),
            (m.translate = m.isHorizontal() ? s : i);
          var r = m.maxTranslate() - m.minTranslate();
          (0 === r ? 0 : (e - m.minTranslate()) / r) !== m.progress &&
            m.updateProgress(e),
            a && m.updateActiveIndex(),
            "slide" !== m.params.effect &&
              m.effects[m.params.effect] &&
              m.effects[m.params.effect].setTranslate(m.translate),
            m.params.parallax &&
              m.parallax &&
              m.parallax.setTranslate(m.translate),
            m.params.scrollbar &&
              m.scrollbar &&
              m.scrollbar.setTranslate(m.translate),
            m.params.control &&
              m.controller &&
              m.controller.setTranslate(m.translate, t),
            m.emit("onSetTranslate", m, m.translate);
        }),
        (m.getTranslate = function (e, a) {
          var t, s, i, r;
          return (
            void 0 === a && (a = "x"),
            m.params.virtualTranslate
              ? m.rtl
                ? -m.translate
                : m.translate
              : ((i = window.getComputedStyle(e, null)),
                window.WebKitCSSMatrix
                  ? ((s = i.transform || i.webkitTransform).split(",").length >
                      6 &&
                      (s = s
                        .split(", ")
                        .map(function (e) {
                          return e.replace(",", ".");
                        })
                        .join(", ")),
                    (r = new window.WebKitCSSMatrix("none" === s ? "" : s)))
                  : (t = (r =
                      i.MozTransform ||
                      i.OTransform ||
                      i.MsTransform ||
                      i.msTransform ||
                      i.transform ||
                      i
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,"))
                      .toString()
                      .split(",")),
                "x" === a &&
                  (s = window.WebKitCSSMatrix
                    ? r.m41
                    : 16 === t.length
                    ? parseFloat(t[12])
                    : parseFloat(t[4])),
                "y" === a &&
                  (s = window.WebKitCSSMatrix
                    ? r.m42
                    : 16 === t.length
                    ? parseFloat(t[13])
                    : parseFloat(t[5])),
                m.rtl && s && (s = -s),
                s || 0)
          );
        }),
        (m.getWrapperTranslate = function (e) {
          return (
            void 0 === e && (e = m.isHorizontal() ? "x" : "y"),
            m.getTranslate(m.wrapper[0], e)
          );
        }),
        (m.observers = []),
        (m.initObservers = function () {
          if (m.params.observeParents)
            for (var e = m.container.parents(), a = 0; a < e.length; a++)
              B(e[a]);
          B(m.container[0], { childList: !1 }),
            B(m.wrapper[0], { attributes: !1 });
        }),
        (m.disconnectObservers = function () {
          for (var e = 0; e < m.observers.length; e++)
            m.observers[e].disconnect();
          m.observers = [];
        }),
        (m.createLoop = function () {
          m.wrapper
            .children(
              "." + m.params.slideClass + "." + m.params.slideDuplicateClass
            )
            .remove();
          var a = m.wrapper.children("." + m.params.slideClass);
          "auto" !== m.params.slidesPerView ||
            m.params.loopedSlides ||
            (m.params.loopedSlides = a.length),
            (m.loopedSlides = parseInt(
              m.params.loopedSlides || m.params.slidesPerView,
              10
            )),
            (m.loopedSlides = m.loopedSlides + m.params.loopAdditionalSlides),
            m.loopedSlides > a.length && (m.loopedSlides = a.length);
          var t,
            s = [],
            i = [];
          for (
            a.each(function (t, r) {
              var n = e(this);
              t < m.loopedSlides && i.push(r),
                t < a.length && t >= a.length - m.loopedSlides && s.push(r),
                n.attr("data-swiper-slide-index", t);
            }),
              t = 0;
            t < i.length;
            t++
          )
            m.wrapper.append(
              e(i[t].cloneNode(!0)).addClass(m.params.slideDuplicateClass)
            );
          for (t = s.length - 1; t >= 0; t--)
            m.wrapper.prepend(
              e(s[t].cloneNode(!0)).addClass(m.params.slideDuplicateClass)
            );
        }),
        (m.destroyLoop = function () {
          m.wrapper
            .children(
              "." + m.params.slideClass + "." + m.params.slideDuplicateClass
            )
            .remove(),
            m.slides.removeAttr("data-swiper-slide-index");
        }),
        (m.reLoop = function (e) {
          var a = m.activeIndex - m.loopedSlides;
          m.destroyLoop(),
            m.createLoop(),
            m.updateSlidesSize(),
            e && m.slideTo(a + m.loopedSlides, 0, !1);
        }),
        (m.fixLoop = function () {
          var e;
          m.activeIndex < m.loopedSlides
            ? ((e = m.slides.length - 3 * m.loopedSlides + m.activeIndex),
              (e += m.loopedSlides),
              m.slideTo(e, 0, !1, !0))
            : (("auto" === m.params.slidesPerView &&
                m.activeIndex >= 2 * m.loopedSlides) ||
                m.activeIndex > m.slides.length - 2 * m.params.slidesPerView) &&
              ((e = -m.slides.length + m.activeIndex + m.loopedSlides),
              (e += m.loopedSlides),
              m.slideTo(e, 0, !1, !0));
        }),
        (m.appendSlide = function (e) {
          if (
            (m.params.loop && m.destroyLoop(), "object" == typeof e && e.length)
          )
            for (var a = 0; a < e.length; a++) e[a] && m.wrapper.append(e[a]);
          else m.wrapper.append(e);
          m.params.loop && m.createLoop(),
            (m.params.observer && m.support.observer) || m.update(!0);
        }),
        (m.prependSlide = function (e) {
          m.params.loop && m.destroyLoop();
          var a = m.activeIndex + 1;
          if ("object" == typeof e && e.length) {
            for (var t = 0; t < e.length; t++) e[t] && m.wrapper.prepend(e[t]);
            a = m.activeIndex + e.length;
          } else m.wrapper.prepend(e);
          m.params.loop && m.createLoop(),
            (m.params.observer && m.support.observer) || m.update(!0),
            m.slideTo(a, 0, !1);
        }),
        (m.removeSlide = function (e) {
          m.params.loop &&
            (m.destroyLoop(),
            (m.slides = m.wrapper.children("." + m.params.slideClass)));
          var a,
            t = m.activeIndex;
          if ("object" == typeof e && e.length) {
            for (var s = 0; s < e.length; s++)
              (a = e[s]), m.slides[a] && m.slides.eq(a).remove(), a < t && t--;
            t = Math.max(t, 0);
          } else
            (a = e),
              m.slides[a] && m.slides.eq(a).remove(),
              a < t && t--,
              (t = Math.max(t, 0));
          m.params.loop && m.createLoop(),
            (m.params.observer && m.support.observer) || m.update(!0),
            m.params.loop
              ? m.slideTo(t + m.loopedSlides, 0, !1)
              : m.slideTo(t, 0, !1);
        }),
        (m.removeAllSlides = function () {
          for (var e = [], a = 0; a < m.slides.length; a++) e.push(a);
          m.removeSlide(e);
        }),
        (m.effects = {
          fade: {
            setTranslate: function () {
              for (var e = 0; e < m.slides.length; e++) {
                var a = m.slides.eq(e),
                  t = -a[0].swiperSlideOffset;
                m.params.virtualTranslate || (t -= m.translate);
                var s = 0;
                m.isHorizontal() || ((s = t), (t = 0));
                var i = m.params.fade.crossFade
                  ? Math.max(1 - Math.abs(a[0].progress), 0)
                  : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                a.css({ opacity: i }).transform(
                  "translate3d(" + t + "px, " + s + "px, 0px)"
                );
              }
            },
            setTransition: function (e) {
              if (
                (m.slides.transition(e), m.params.virtualTranslate && 0 !== e)
              ) {
                var a = !1;
                m.slides.transitionEnd(function () {
                  if (!a && m) {
                    (a = !0), (m.animating = !1);
                    for (
                      var e = [
                          "webkitTransitionEnd",
                          "transitionend",
                          "oTransitionEnd",
                          "MSTransitionEnd",
                          "msTransitionEnd",
                        ],
                        t = 0;
                      t < e.length;
                      t++
                    )
                      m.wrapper.trigger(e[t]);
                  }
                });
              }
            },
          },
          flip: {
            setTranslate: function () {
              for (var a = 0; a < m.slides.length; a++) {
                var t = m.slides.eq(a),
                  s = t[0].progress;
                m.params.flip.limitRotation &&
                  (s = Math.max(Math.min(t[0].progress, 1), -1));
                var i = -180 * s,
                  r = 0,
                  n = -t[0].swiperSlideOffset,
                  o = 0;
                if (
                  (m.isHorizontal()
                    ? m.rtl && (i = -i)
                    : ((o = n), (n = 0), (r = -i), (i = 0)),
                  (t[0].style.zIndex =
                    -Math.abs(Math.round(s)) + m.slides.length),
                  m.params.flip.slideShadows)
                ) {
                  var l = m.isHorizontal()
                      ? t.find(".swiper-slide-shadow-left")
                      : t.find(".swiper-slide-shadow-top"),
                    p = m.isHorizontal()
                      ? t.find(".swiper-slide-shadow-right")
                      : t.find(".swiper-slide-shadow-bottom");
                  0 === l.length &&
                    ((l = e(
                      '<div class="swiper-slide-shadow-' +
                        (m.isHorizontal() ? "left" : "top") +
                        '"></div>'
                    )),
                    t.append(l)),
                    0 === p.length &&
                      ((p = e(
                        '<div class="swiper-slide-shadow-' +
                          (m.isHorizontal() ? "right" : "bottom") +
                          '"></div>'
                      )),
                      t.append(p)),
                    l.length && (l[0].style.opacity = Math.max(-s, 0)),
                    p.length && (p[0].style.opacity = Math.max(s, 0));
                }
                t.transform(
                  "translate3d(" +
                    n +
                    "px, " +
                    o +
                    "px, 0px) rotateX(" +
                    r +
                    "deg) rotateY(" +
                    i +
                    "deg)"
                );
              }
            },
            setTransition: function (a) {
              if (
                (m.slides
                  .transition(a)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .transition(a),
                m.params.virtualTranslate && 0 !== a)
              ) {
                var t = !1;
                m.slides.eq(m.activeIndex).transitionEnd(function () {
                  if (!t && m && e(this).hasClass(m.params.slideActiveClass)) {
                    (t = !0), (m.animating = !1);
                    for (
                      var a = [
                          "webkitTransitionEnd",
                          "transitionend",
                          "oTransitionEnd",
                          "MSTransitionEnd",
                          "msTransitionEnd",
                        ],
                        s = 0;
                      s < a.length;
                      s++
                    )
                      m.wrapper.trigger(a[s]);
                  }
                });
              }
            },
          },
          cube: {
            setTranslate: function () {
              var a,
                t = 0;
              m.params.cube.shadow &&
                (m.isHorizontal()
                  ? (0 === (a = m.wrapper.find(".swiper-cube-shadow")).length &&
                      ((a = e('<div class="swiper-cube-shadow"></div>')),
                      m.wrapper.append(a)),
                    a.css({ height: m.width + "px" }))
                  : 0 ===
                      (a = m.container.find(".swiper-cube-shadow")).length &&
                    ((a = e('<div class="swiper-cube-shadow"></div>')),
                    m.container.append(a)));
              for (var s = 0; s < m.slides.length; s++) {
                var i = m.slides.eq(s),
                  r = 90 * s,
                  n = Math.floor(r / 360);
                m.rtl && ((r = -r), (n = Math.floor(-r / 360)));
                var o = Math.max(Math.min(i[0].progress, 1), -1),
                  l = 0,
                  p = 0,
                  d = 0;
                s % 4 == 0
                  ? ((l = 4 * -n * m.size), (d = 0))
                  : (s - 1) % 4 == 0
                  ? ((l = 0), (d = 4 * -n * m.size))
                  : (s - 2) % 4 == 0
                  ? ((l = m.size + 4 * n * m.size), (d = m.size))
                  : (s - 3) % 4 == 0 &&
                    ((l = -m.size), (d = 3 * m.size + 4 * m.size * n)),
                  m.rtl && (l = -l),
                  m.isHorizontal() || ((p = l), (l = 0));
                var u =
                  "rotateX(" +
                  (m.isHorizontal() ? 0 : -r) +
                  "deg) rotateY(" +
                  (m.isHorizontal() ? r : 0) +
                  "deg) translate3d(" +
                  l +
                  "px, " +
                  p +
                  "px, " +
                  d +
                  "px)";
                if (
                  (o <= 1 &&
                    o > -1 &&
                    ((t = 90 * s + 90 * o), m.rtl && (t = 90 * -s - 90 * o)),
                  i.transform(u),
                  m.params.cube.slideShadows)
                ) {
                  var c = m.isHorizontal()
                      ? i.find(".swiper-slide-shadow-left")
                      : i.find(".swiper-slide-shadow-top"),
                    g = m.isHorizontal()
                      ? i.find(".swiper-slide-shadow-right")
                      : i.find(".swiper-slide-shadow-bottom");
                  0 === c.length &&
                    ((c = e(
                      '<div class="swiper-slide-shadow-' +
                        (m.isHorizontal() ? "left" : "top") +
                        '"></div>'
                    )),
                    i.append(c)),
                    0 === g.length &&
                      ((g = e(
                        '<div class="swiper-slide-shadow-' +
                          (m.isHorizontal() ? "right" : "bottom") +
                          '"></div>'
                      )),
                      i.append(g)),
                    c.length && (c[0].style.opacity = Math.max(-o, 0)),
                    g.length && (g[0].style.opacity = Math.max(o, 0));
                }
              }
              if (
                (m.wrapper.css({
                  "-webkit-transform-origin": "50% 50% -" + m.size / 2 + "px",
                  "-moz-transform-origin": "50% 50% -" + m.size / 2 + "px",
                  "-ms-transform-origin": "50% 50% -" + m.size / 2 + "px",
                  "transform-origin": "50% 50% -" + m.size / 2 + "px",
                }),
                m.params.cube.shadow)
              )
                if (m.isHorizontal())
                  a.transform(
                    "translate3d(0px, " +
                      (m.width / 2 + m.params.cube.shadowOffset) +
                      "px, " +
                      -m.width / 2 +
                      "px) rotateX(90deg) rotateZ(0deg) scale(" +
                      m.params.cube.shadowScale +
                      ")"
                  );
                else {
                  var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                    v =
                      1.5 -
                      (Math.sin((2 * h * Math.PI) / 360) / 2 +
                        Math.cos((2 * h * Math.PI) / 360) / 2),
                    f = m.params.cube.shadowScale,
                    w = m.params.cube.shadowScale / v,
                    x = m.params.cube.shadowOffset;
                  a.transform(
                    "scale3d(" +
                      f +
                      ", 1, " +
                      w +
                      ") translate3d(0px, " +
                      (m.height / 2 + x) +
                      "px, " +
                      -m.height / 2 / w +
                      "px) rotateX(-90deg)"
                  );
                }
              var y = m.isSafari || m.isUiWebView ? -m.size / 2 : 0;
              m.wrapper.transform(
                "translate3d(0px,0," +
                  y +
                  "px) rotateX(" +
                  (m.isHorizontal() ? 0 : t) +
                  "deg) rotateY(" +
                  (m.isHorizontal() ? -t : 0) +
                  "deg)"
              );
            },
            setTransition: function (e) {
              m.slides
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                m.params.cube.shadow &&
                  !m.isHorizontal() &&
                  m.container.find(".swiper-cube-shadow").transition(e);
            },
          },
          coverflow: {
            setTranslate: function () {
              for (
                var a = m.translate,
                  t = m.isHorizontal() ? -a + m.width / 2 : -a + m.height / 2,
                  s = m.isHorizontal()
                    ? m.params.coverflow.rotate
                    : -m.params.coverflow.rotate,
                  i = m.params.coverflow.depth,
                  r = 0,
                  n = m.slides.length;
                r < n;
                r++
              ) {
                var o = m.slides.eq(r),
                  l = m.slidesSizesGrid[r],
                  p =
                    ((t - o[0].swiperSlideOffset - l / 2) / l) *
                    m.params.coverflow.modifier,
                  d = m.isHorizontal() ? s * p : 0,
                  u = m.isHorizontal() ? 0 : s * p,
                  c = -i * Math.abs(p),
                  g = m.isHorizontal() ? 0 : m.params.coverflow.stretch * p,
                  h = m.isHorizontal() ? m.params.coverflow.stretch * p : 0;
                Math.abs(h) < 0.001 && (h = 0),
                  Math.abs(g) < 0.001 && (g = 0),
                  Math.abs(c) < 0.001 && (c = 0),
                  Math.abs(d) < 0.001 && (d = 0),
                  Math.abs(u) < 0.001 && (u = 0);
                var v =
                  "translate3d(" +
                  h +
                  "px," +
                  g +
                  "px," +
                  c +
                  "px)  rotateX(" +
                  u +
                  "deg) rotateY(" +
                  d +
                  "deg)";
                if (
                  (o.transform(v),
                  (o[0].style.zIndex = 1 - Math.abs(Math.round(p))),
                  m.params.coverflow.slideShadows)
                ) {
                  var f = m.isHorizontal()
                      ? o.find(".swiper-slide-shadow-left")
                      : o.find(".swiper-slide-shadow-top"),
                    w = m.isHorizontal()
                      ? o.find(".swiper-slide-shadow-right")
                      : o.find(".swiper-slide-shadow-bottom");
                  0 === f.length &&
                    ((f = e(
                      '<div class="swiper-slide-shadow-' +
                        (m.isHorizontal() ? "left" : "top") +
                        '"></div>'
                    )),
                    o.append(f)),
                    0 === w.length &&
                      ((w = e(
                        '<div class="swiper-slide-shadow-' +
                          (m.isHorizontal() ? "right" : "bottom") +
                          '"></div>'
                      )),
                      o.append(w)),
                    f.length && (f[0].style.opacity = p > 0 ? p : 0),
                    w.length && (w[0].style.opacity = -p > 0 ? -p : 0);
                }
              }
              m.browser.ie &&
                (m.wrapper[0].style.perspectiveOrigin = t + "px 50%");
            },
            setTransition: function (e) {
              m.slides
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e);
            },
          },
        }),
        (m.lazy = {
          initialImageLoaded: !1,
          loadImageInSlide: function (a, t) {
            if (
              void 0 !== a &&
              (void 0 === t && (t = !0), 0 !== m.slides.length)
            ) {
              var s = m.slides.eq(a),
                i = s.find(
                  "." +
                    m.params.lazyLoadingClass +
                    ":not(." +
                    m.params.lazyStatusLoadedClass +
                    "):not(." +
                    m.params.lazyStatusLoadingClass +
                    ")"
                );
              !s.hasClass(m.params.lazyLoadingClass) ||
                s.hasClass(m.params.lazyStatusLoadedClass) ||
                s.hasClass(m.params.lazyStatusLoadingClass) ||
                (i = i.add(s[0])),
                0 !== i.length &&
                  i.each(function () {
                    var a = e(this);
                    a.addClass(m.params.lazyStatusLoadingClass);
                    var i = a.attr("data-background"),
                      r = a.attr("data-src"),
                      n = a.attr("data-srcset"),
                      o = a.attr("data-sizes");
                    m.loadImage(a[0], r || i, n, o, !1, function () {
                      if (
                        (i
                          ? (a.css("background-image", 'url("' + i + '")'),
                            a.removeAttr("data-background"))
                          : (n &&
                              (a.attr("srcset", n),
                              a.removeAttr("data-srcset")),
                            o &&
                              (a.attr("sizes", o), a.removeAttr("data-sizes")),
                            r && (a.attr("src", r), a.removeAttr("data-src"))),
                        a
                          .addClass(m.params.lazyStatusLoadedClass)
                          .removeClass(m.params.lazyStatusLoadingClass),
                        s
                          .find(
                            "." +
                              m.params.lazyPreloaderClass +
                              ", ." +
                              m.params.preloaderClass
                          )
                          .remove(),
                        m.params.loop && t)
                      ) {
                        var e = s.attr("data-swiper-slide-index");
                        if (s.hasClass(m.params.slideDuplicateClass)) {
                          var l = m.wrapper.children(
                            '[data-swiper-slide-index="' +
                              e +
                              '"]:not(.' +
                              m.params.slideDuplicateClass +
                              ")"
                          );
                          m.lazy.loadImageInSlide(l.index(), !1);
                        } else {
                          var p = m.wrapper.children(
                            "." +
                              m.params.slideDuplicateClass +
                              '[data-swiper-slide-index="' +
                              e +
                              '"]'
                          );
                          m.lazy.loadImageInSlide(p.index(), !1);
                        }
                      }
                      m.emit("onLazyImageReady", m, s[0], a[0]);
                    }),
                      m.emit("onLazyImageLoad", m, s[0], a[0]);
                  });
            }
          },
          load: function () {
            var a,
              t = m.params.slidesPerView;
            if (
              ("auto" === t && (t = 0),
              m.lazy.initialImageLoaded || (m.lazy.initialImageLoaded = !0),
              m.params.watchSlidesVisibility)
            )
              m.wrapper
                .children("." + m.params.slideVisibleClass)
                .each(function () {
                  m.lazy.loadImageInSlide(e(this).index());
                });
            else if (t > 1)
              for (a = m.activeIndex; a < m.activeIndex + t; a++)
                m.slides[a] && m.lazy.loadImageInSlide(a);
            else m.lazy.loadImageInSlide(m.activeIndex);
            if (m.params.lazyLoadingInPrevNext)
              if (
                t > 1 ||
                (m.params.lazyLoadingInPrevNextAmount &&
                  m.params.lazyLoadingInPrevNextAmount > 1)
              ) {
                var s = m.params.lazyLoadingInPrevNextAmount,
                  i = t,
                  r = Math.min(
                    m.activeIndex + i + Math.max(s, i),
                    m.slides.length
                  ),
                  n = Math.max(m.activeIndex - Math.max(i, s), 0);
                for (a = m.activeIndex + t; a < r; a++)
                  m.slides[a] && m.lazy.loadImageInSlide(a);
                for (a = n; a < m.activeIndex; a++)
                  m.slides[a] && m.lazy.loadImageInSlide(a);
              } else {
                var o = m.wrapper.children("." + m.params.slideNextClass);
                o.length > 0 && m.lazy.loadImageInSlide(o.index());
                var l = m.wrapper.children("." + m.params.slidePrevClass);
                l.length > 0 && m.lazy.loadImageInSlide(l.index());
              }
          },
          onTransitionStart: function () {
            m.params.lazyLoading &&
              (m.params.lazyLoadingOnTransitionStart ||
                (!m.params.lazyLoadingOnTransitionStart &&
                  !m.lazy.initialImageLoaded)) &&
              m.lazy.load();
          },
          onTransitionEnd: function () {
            m.params.lazyLoading &&
              !m.params.lazyLoadingOnTransitionStart &&
              m.lazy.load();
          },
        }),
        (m.scrollbar = {
          isTouched: !1,
          setDragPosition: function (e) {
            var a = m.scrollbar,
              t =
                (m.isHorizontal()
                  ? "touchstart" === e.type || "touchmove" === e.type
                    ? e.targetTouches[0].pageX
                    : e.pageX || e.clientX
                  : "touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0].pageY
                  : e.pageY || e.clientY) -
                a.track.offset()[m.isHorizontal() ? "left" : "top"] -
                a.dragSize / 2,
              s = -m.minTranslate() * a.moveDivider,
              i = -m.maxTranslate() * a.moveDivider;
            t < s ? (t = s) : t > i && (t = i),
              (t = -t / a.moveDivider),
              m.updateProgress(t),
              m.setWrapperTranslate(t, !0);
          },
          dragStart: function (e) {
            var a = m.scrollbar;
            (a.isTouched = !0),
              e.preventDefault(),
              e.stopPropagation(),
              a.setDragPosition(e),
              clearTimeout(a.dragTimeout),
              a.track.transition(0),
              m.params.scrollbarHide && a.track.css("opacity", 1),
              m.wrapper.transition(100),
              a.drag.transition(100),
              m.emit("onScrollbarDragStart", m);
          },
          dragMove: function (e) {
            var a = m.scrollbar;
            a.isTouched &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              a.setDragPosition(e),
              m.wrapper.transition(0),
              a.track.transition(0),
              a.drag.transition(0),
              m.emit("onScrollbarDragMove", m));
          },
          dragEnd: function (e) {
            var a = m.scrollbar;
            a.isTouched &&
              ((a.isTouched = !1),
              m.params.scrollbarHide &&
                (clearTimeout(a.dragTimeout),
                (a.dragTimeout = setTimeout(function () {
                  a.track.css("opacity", 0), a.track.transition(400);
                }, 1e3))),
              m.emit("onScrollbarDragEnd", m),
              m.params.scrollbarSnapOnRelease && m.slideReset());
          },
          draggableEvents:
            !1 !== m.params.simulateTouch || m.support.touch
              ? m.touchEvents
              : m.touchEventsDesktop,
          enableDraggable: function () {
            var a = m.scrollbar,
              t = m.support.touch ? a.track : document;
            e(a.track).on(a.draggableEvents.start, a.dragStart),
              e(t).on(a.draggableEvents.move, a.dragMove),
              e(t).on(a.draggableEvents.end, a.dragEnd);
          },
          disableDraggable: function () {
            var a = m.scrollbar,
              t = m.support.touch ? a.track : document;
            e(a.track).off(a.draggableEvents.start, a.dragStart),
              e(t).off(a.draggableEvents.move, a.dragMove),
              e(t).off(a.draggableEvents.end, a.dragEnd);
          },
          set: function () {
            if (m.params.scrollbar) {
              var a = m.scrollbar;
              (a.track = e(m.params.scrollbar)),
                m.params.uniqueNavElements &&
                  "string" == typeof m.params.scrollbar &&
                  a.track.length > 1 &&
                  1 === m.container.find(m.params.scrollbar).length &&
                  (a.track = m.container.find(m.params.scrollbar)),
                (a.drag = a.track.find(".swiper-scrollbar-drag")),
                0 === a.drag.length &&
                  ((a.drag = e('<div class="swiper-scrollbar-drag"></div>')),
                  a.track.append(a.drag)),
                (a.drag[0].style.width = ""),
                (a.drag[0].style.height = ""),
                (a.trackSize = m.isHorizontal()
                  ? a.track[0].offsetWidth
                  : a.track[0].offsetHeight),
                (a.divider = m.size / m.virtualSize),
                (a.moveDivider = a.divider * (a.trackSize / m.size)),
                (a.dragSize = a.trackSize * a.divider),
                m.isHorizontal()
                  ? (a.drag[0].style.width = a.dragSize + "px")
                  : (a.drag[0].style.height = a.dragSize + "px"),
                a.divider >= 1
                  ? (a.track[0].style.display = "none")
                  : (a.track[0].style.display = ""),
                m.params.scrollbarHide && (a.track[0].style.opacity = 0);
            }
          },
          setTranslate: function () {
            if (m.params.scrollbar) {
              var e,
                a = m.scrollbar,
                t = (m.translate, a.dragSize);
              (e = (a.trackSize - a.dragSize) * m.progress),
                m.rtl && m.isHorizontal()
                  ? (e = -e) > 0
                    ? ((t = a.dragSize - e), (e = 0))
                    : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)
                  : e < 0
                  ? ((t = a.dragSize + e), (e = 0))
                  : e + a.dragSize > a.trackSize && (t = a.trackSize - e),
                m.isHorizontal()
                  ? (m.support.transforms3d
                      ? a.drag.transform("translate3d(" + e + "px, 0, 0)")
                      : a.drag.transform("translateX(" + e + "px)"),
                    (a.drag[0].style.width = t + "px"))
                  : (m.support.transforms3d
                      ? a.drag.transform("translate3d(0px, " + e + "px, 0)")
                      : a.drag.transform("translateY(" + e + "px)"),
                    (a.drag[0].style.height = t + "px")),
                m.params.scrollbarHide &&
                  (clearTimeout(a.timeout),
                  (a.track[0].style.opacity = 1),
                  (a.timeout = setTimeout(function () {
                    (a.track[0].style.opacity = 0), a.track.transition(400);
                  }, 1e3)));
            }
          },
          setTransition: function (e) {
            m.params.scrollbar && m.scrollbar.drag.transition(e);
          },
        }),
        (m.controller = {
          LinearSpline: function (e, a) {
            var t, s;
            (this.x = e), (this.y = a), (this.lastIndex = e.length - 1);
            this.x.length;
            this.interpolate = function (e) {
              return e
                ? ((s = o(this.x, e)),
                  (t = s - 1),
                  ((e - this.x[t]) * (this.y[s] - this.y[t])) /
                    (this.x[s] - this.x[t]) +
                    this.y[t])
                : 0;
            };
            var i,
              r,
              n,
              o = function (e, a) {
                for (r = -1, i = e.length; i - r > 1; )
                  e[(n = (i + r) >> 1)] <= a ? (r = n) : (i = n);
                return i;
              };
          },
          getInterpolateFunction: function (e) {
            m.controller.spline ||
              (m.controller.spline = m.params.loop
                ? new m.controller.LinearSpline(m.slidesGrid, e.slidesGrid)
                : new m.controller.LinearSpline(m.snapGrid, e.snapGrid));
          },
          setTranslate: function (e, a) {
            var t,
              i,
              r = m.params.control;
            function n(a) {
              (e =
                a.rtl && "horizontal" === a.params.direction
                  ? -m.translate
                  : m.translate),
                "slide" === m.params.controlBy &&
                  (m.controller.getInterpolateFunction(a),
                  (i = -m.controller.spline.interpolate(-e))),
                (i && "container" !== m.params.controlBy) ||
                  ((t =
                    (a.maxTranslate() - a.minTranslate()) /
                    (m.maxTranslate() - m.minTranslate())),
                  (i = (e - m.minTranslate()) * t + a.minTranslate())),
                m.params.controlInverse && (i = a.maxTranslate() - i),
                a.updateProgress(i),
                a.setWrapperTranslate(i, !1, m),
                a.updateActiveIndex();
            }
            if (m.isArray(r))
              for (var o = 0; o < r.length; o++)
                r[o] !== a && r[o] instanceof s && n(r[o]);
            else r instanceof s && a !== r && n(r);
          },
          setTransition: function (e, a) {
            var t,
              i = m.params.control;
            function r(a) {
              a.setWrapperTransition(e, m),
                0 !== e &&
                  (a.onTransitionStart(),
                  a.wrapper.transitionEnd(function () {
                    i &&
                      (a.params.loop &&
                        "slide" === m.params.controlBy &&
                        a.fixLoop(),
                      a.onTransitionEnd());
                  }));
            }
            if (m.isArray(i))
              for (t = 0; t < i.length; t++)
                i[t] !== a && i[t] instanceof s && r(i[t]);
            else i instanceof s && a !== i && r(i);
          },
        }),
        (m.hashnav = {
          onHashCange: function (e, a) {
            var t = document.location.hash.replace("#", "");
            t !== m.slides.eq(m.activeIndex).attr("data-hash") &&
              m.slideTo(
                m.wrapper
                  .children(
                    "." + m.params.slideClass + '[data-hash="' + t + '"]'
                  )
                  .index()
              );
          },
          attachEvents: function (a) {
            var t = a ? "off" : "on";
            e(window)[t]("hashchange", m.hashnav.onHashCange);
          },
          setHash: function () {
            if (m.hashnav.initialized && m.params.hashnav)
              if (
                m.params.replaceState &&
                window.history &&
                window.history.replaceState
              )
                window.history.replaceState(
                  null,
                  null,
                  "#" + m.slides.eq(m.activeIndex).attr("data-hash") || ""
                );
              else {
                var e = m.slides.eq(m.activeIndex),
                  a = e.attr("data-hash") || e.attr("data-history");
                document.location.hash = a || "";
              }
          },
          init: function () {
            if (m.params.hashnav && !m.params.history) {
              m.hashnav.initialized = !0;
              var e = document.location.hash.replace("#", "");
              if (e)
                for (var a = 0, t = m.slides.length; a < t; a++) {
                  var s = m.slides.eq(a);
                  if (
                    (s.attr("data-hash") || s.attr("data-history")) === e &&
                    !s.hasClass(m.params.slideDuplicateClass)
                  ) {
                    var i = s.index();
                    m.slideTo(i, 0, m.params.runCallbacksOnInit, !0);
                  }
                }
              m.params.hashnavWatchState && m.hashnav.attachEvents();
            }
          },
          destroy: function () {
            m.params.hashnavWatchState && m.hashnav.attachEvents(!0);
          },
        }),
        (m.history = {
          init: function () {
            if (m.params.history) {
              if (!window.history || !window.history.pushState)
                return (m.params.history = !1), void (m.params.hashnav = !0);
              (m.history.initialized = !0),
                (this.paths = this.getPathValues()),
                (this.paths.key || this.paths.value) &&
                  (this.scrollToSlide(
                    0,
                    this.paths.value,
                    m.params.runCallbacksOnInit
                  ),
                  m.params.replaceState ||
                    window.addEventListener(
                      "popstate",
                      this.setHistoryPopState
                    ));
            }
          },
          setHistoryPopState: function () {
            (m.history.paths = m.history.getPathValues()),
              m.history.scrollToSlide(
                m.params.speed,
                m.history.paths.value,
                !1
              );
          },
          getPathValues: function () {
            var e = window.location.pathname.slice(1).split("/"),
              a = e.length;
            return { key: e[a - 2], value: e[a - 1] };
          },
          setHistory: function (e, a) {
            if (m.history.initialized && m.params.history) {
              var t = m.slides.eq(a),
                s = this.slugify(t.attr("data-history"));
              window.location.pathname.includes(e) || (s = e + "/" + s),
                m.params.replaceState
                  ? window.history.replaceState(null, null, s)
                  : window.history.pushState(null, null, s);
            }
          },
          slugify: function (e) {
            return e
              .toString()
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w\-]+/g, "")
              .replace(/\-\-+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, "");
          },
          scrollToSlide: function (e, a, t) {
            if (a)
              for (var s = 0, i = m.slides.length; s < i; s++) {
                var r = m.slides.eq(s);
                if (
                  this.slugify(r.attr("data-history")) === a &&
                  !r.hasClass(m.params.slideDuplicateClass)
                ) {
                  var n = r.index();
                  m.slideTo(n, e, t);
                }
              }
            else m.slideTo(0, e, t);
          },
        }),
        (m.disableKeyboardControl = function () {
          (m.params.keyboardControl = !1), e(document).off("keydown", H);
        }),
        (m.enableKeyboardControl = function () {
          (m.params.keyboardControl = !0), e(document).on("keydown", H);
        }),
        (m.mousewheel = {
          event: !1,
          lastScrollTime: new window.Date().getTime(),
        }),
        m.params.mousewheelControl &&
          (m.mousewheel.event =
            navigator.userAgent.indexOf("firefox") > -1
              ? "DOMMouseScroll"
              : (function () {
                  var e = "onwheel",
                    a = e in document;
                  if (!a) {
                    var t = document.createElement("div");
                    t.setAttribute(e, "return;"),
                      (a = "function" == typeof t[e]);
                  }
                  !a &&
                    document.implementation &&
                    document.implementation.hasFeature &&
                    !0 !== document.implementation.hasFeature("", "") &&
                    (a = document.implementation.hasFeature(
                      "Events.wheel",
                      "3.0"
                    ));
                  return a;
                })()
              ? "wheel"
              : "mousewheel"),
        (m.disableMousewheelControl = function () {
          if (!m.mousewheel.event) return !1;
          var a = m.container;
          return (
            "container" !== m.params.mousewheelEventsTarged &&
              (a = e(m.params.mousewheelEventsTarged)),
            a.off(m.mousewheel.event, G),
            !0
          );
        }),
        (m.enableMousewheelControl = function () {
          if (!m.mousewheel.event) return !1;
          var a = m.container;
          return (
            "container" !== m.params.mousewheelEventsTarged &&
              (a = e(m.params.mousewheelEventsTarged)),
            a.on(m.mousewheel.event, G),
            !0
          );
        }),
        (m.parallax = {
          setTranslate: function () {
            m.container
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
              )
              .each(function () {
                X(this, m.progress);
              }),
              m.slides.each(function () {
                var a = e(this);
                a.find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                ).each(function () {
                  X(this, Math.min(Math.max(a[0].progress, -1), 1));
                });
              });
          },
          setTransition: function (a) {
            void 0 === a && (a = m.params.speed),
              m.container
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                )
                .each(function () {
                  var t = e(this),
                    s =
                      parseInt(t.attr("data-swiper-parallax-duration"), 10) ||
                      a;
                  0 === a && (s = 0), t.transition(s);
                });
          },
        }),
        (m.zoom = {
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            slide: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            image: void 0,
            imageWrap: void 0,
            zoomMax: m.params.zoomMax,
          },
          image: {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {},
          },
          velocity: {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0,
          },
          getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var a = e.targetTouches[0].pageX,
              t = e.targetTouches[0].pageY,
              s = e.targetTouches[1].pageX,
              i = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - a, 2) + Math.pow(i - t, 2));
          },
          onGestureStart: function (a) {
            var t = m.zoom;
            if (!m.support.gestures) {
              if (
                "touchstart" !== a.type ||
                ("touchstart" === a.type && a.targetTouches.length < 2)
              )
                return;
              t.gesture.scaleStart = t.getDistanceBetweenTouches(a);
            }
            (t.gesture.slide && t.gesture.slide.length) ||
            ((t.gesture.slide = e(this)),
            0 === t.gesture.slide.length &&
              (t.gesture.slide = m.slides.eq(m.activeIndex)),
            (t.gesture.image = t.gesture.slide.find("img, svg, canvas")),
            (t.gesture.imageWrap = t.gesture.image.parent(
              "." + m.params.zoomContainerClass
            )),
            (t.gesture.zoomMax =
              t.gesture.imageWrap.attr("data-swiper-zoom") || m.params.zoomMax),
            0 !== t.gesture.imageWrap.length)
              ? (t.gesture.image.transition(0), (t.isScaling = !0))
              : (t.gesture.image = void 0);
          },
          onGestureChange: function (e) {
            var a = m.zoom;
            if (!m.support.gestures) {
              if (
                "touchmove" !== e.type ||
                ("touchmove" === e.type && e.targetTouches.length < 2)
              )
                return;
              a.gesture.scaleMove = a.getDistanceBetweenTouches(e);
            }
            a.gesture.image &&
              0 !== a.gesture.image.length &&
              (m.support.gestures
                ? (a.scale = e.scale * a.currentScale)
                : (a.scale =
                    (a.gesture.scaleMove / a.gesture.scaleStart) *
                    a.currentScale),
              a.scale > a.gesture.zoomMax &&
                (a.scale =
                  a.gesture.zoomMax -
                  1 +
                  Math.pow(a.scale - a.gesture.zoomMax + 1, 0.5)),
              a.scale < m.params.zoomMin &&
                (a.scale =
                  m.params.zoomMin +
                  1 -
                  Math.pow(m.params.zoomMin - a.scale + 1, 0.5)),
              a.gesture.image.transform(
                "translate3d(0,0,0) scale(" + a.scale + ")"
              ));
          },
          onGestureEnd: function (e) {
            var a = m.zoom;
            (!m.support.gestures &&
              ("touchend" !== e.type ||
                ("touchend" === e.type && e.changedTouches.length < 2))) ||
              (a.gesture.image &&
                0 !== a.gesture.image.length &&
                ((a.scale = Math.max(
                  Math.min(a.scale, a.gesture.zoomMax),
                  m.params.zoomMin
                )),
                a.gesture.image
                  .transition(m.params.speed)
                  .transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                (a.currentScale = a.scale),
                (a.isScaling = !1),
                1 === a.scale && (a.gesture.slide = void 0)));
          },
          onTouchStart: function (e, a) {
            var t = e.zoom;
            t.gesture.image &&
              0 !== t.gesture.image.length &&
              (t.image.isTouched ||
                ("android" === e.device.os && a.preventDefault(),
                (t.image.isTouched = !0),
                (t.image.touchesStart.x =
                  "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX),
                (t.image.touchesStart.y =
                  "touchstart" === a.type
                    ? a.targetTouches[0].pageY
                    : a.pageY)));
          },
          onTouchMove: function (e) {
            var a = m.zoom;
            if (
              a.gesture.image &&
              0 !== a.gesture.image.length &&
              ((m.allowClick = !1), a.image.isTouched && a.gesture.slide)
            ) {
              a.image.isMoved ||
                ((a.image.width = a.gesture.image[0].offsetWidth),
                (a.image.height = a.gesture.image[0].offsetHeight),
                (a.image.startX =
                  m.getTranslate(a.gesture.imageWrap[0], "x") || 0),
                (a.image.startY =
                  m.getTranslate(a.gesture.imageWrap[0], "y") || 0),
                (a.gesture.slideWidth = a.gesture.slide[0].offsetWidth),
                (a.gesture.slideHeight = a.gesture.slide[0].offsetHeight),
                a.gesture.imageWrap.transition(0),
                m.rtl && (a.image.startX = -a.image.startX),
                m.rtl && (a.image.startY = -a.image.startY));
              var t = a.image.width * a.scale,
                s = a.image.height * a.scale;
              if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
                if (
                  ((a.image.minX = Math.min(
                    a.gesture.slideWidth / 2 - t / 2,
                    0
                  )),
                  (a.image.maxX = -a.image.minX),
                  (a.image.minY = Math.min(
                    a.gesture.slideHeight / 2 - s / 2,
                    0
                  )),
                  (a.image.maxY = -a.image.minY),
                  (a.image.touchesCurrent.x =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (a.image.touchesCurrent.y =
                    "touchmove" === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY),
                  !a.image.isMoved && !a.isScaling)
                ) {
                  if (
                    (m.isHorizontal() &&
                      Math.floor(a.image.minX) === Math.floor(a.image.startX) &&
                      a.image.touchesCurrent.x < a.image.touchesStart.x) ||
                    (Math.floor(a.image.maxX) === Math.floor(a.image.startX) &&
                      a.image.touchesCurrent.x > a.image.touchesStart.x)
                  )
                    return void (a.image.isTouched = !1);
                  if (
                    (!m.isHorizontal() &&
                      Math.floor(a.image.minY) === Math.floor(a.image.startY) &&
                      a.image.touchesCurrent.y < a.image.touchesStart.y) ||
                    (Math.floor(a.image.maxY) === Math.floor(a.image.startY) &&
                      a.image.touchesCurrent.y > a.image.touchesStart.y)
                  )
                    return void (a.image.isTouched = !1);
                }
                e.preventDefault(),
                  e.stopPropagation(),
                  (a.image.isMoved = !0),
                  (a.image.currentX =
                    a.image.touchesCurrent.x -
                    a.image.touchesStart.x +
                    a.image.startX),
                  (a.image.currentY =
                    a.image.touchesCurrent.y -
                    a.image.touchesStart.y +
                    a.image.startY),
                  a.image.currentX < a.image.minX &&
                    (a.image.currentX =
                      a.image.minX +
                      1 -
                      Math.pow(a.image.minX - a.image.currentX + 1, 0.8)),
                  a.image.currentX > a.image.maxX &&
                    (a.image.currentX =
                      a.image.maxX -
                      1 +
                      Math.pow(a.image.currentX - a.image.maxX + 1, 0.8)),
                  a.image.currentY < a.image.minY &&
                    (a.image.currentY =
                      a.image.minY +
                      1 -
                      Math.pow(a.image.minY - a.image.currentY + 1, 0.8)),
                  a.image.currentY > a.image.maxY &&
                    (a.image.currentY =
                      a.image.maxY -
                      1 +
                      Math.pow(a.image.currentY - a.image.maxY + 1, 0.8)),
                  a.velocity.prevPositionX ||
                    (a.velocity.prevPositionX = a.image.touchesCurrent.x),
                  a.velocity.prevPositionY ||
                    (a.velocity.prevPositionY = a.image.touchesCurrent.y),
                  a.velocity.prevTime || (a.velocity.prevTime = Date.now()),
                  (a.velocity.x =
                    (a.image.touchesCurrent.x - a.velocity.prevPositionX) /
                    (Date.now() - a.velocity.prevTime) /
                    2),
                  (a.velocity.y =
                    (a.image.touchesCurrent.y - a.velocity.prevPositionY) /
                    (Date.now() - a.velocity.prevTime) /
                    2),
                  Math.abs(
                    a.image.touchesCurrent.x - a.velocity.prevPositionX
                  ) < 2 && (a.velocity.x = 0),
                  Math.abs(
                    a.image.touchesCurrent.y - a.velocity.prevPositionY
                  ) < 2 && (a.velocity.y = 0),
                  (a.velocity.prevPositionX = a.image.touchesCurrent.x),
                  (a.velocity.prevPositionY = a.image.touchesCurrent.y),
                  (a.velocity.prevTime = Date.now()),
                  a.gesture.imageWrap.transform(
                    "translate3d(" +
                      a.image.currentX +
                      "px, " +
                      a.image.currentY +
                      "px,0)"
                  );
              }
            }
          },
          onTouchEnd: function (e, a) {
            var t = e.zoom;
            if (t.gesture.image && 0 !== t.gesture.image.length) {
              if (!t.image.isTouched || !t.image.isMoved)
                return (t.image.isTouched = !1), void (t.image.isMoved = !1);
              (t.image.isTouched = !1), (t.image.isMoved = !1);
              var s = 300,
                i = 300,
                r = t.velocity.x * s,
                n = t.image.currentX + r,
                o = t.velocity.y * i,
                l = t.image.currentY + o;
              0 !== t.velocity.x &&
                (s = Math.abs((n - t.image.currentX) / t.velocity.x)),
                0 !== t.velocity.y &&
                  (i = Math.abs((l - t.image.currentY) / t.velocity.y));
              var p = Math.max(s, i);
              (t.image.currentX = n), (t.image.currentY = l);
              var d = t.image.width * t.scale,
                m = t.image.height * t.scale;
              (t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0)),
                (t.image.maxX = -t.image.minX),
                (t.image.minY = Math.min(t.gesture.slideHeight / 2 - m / 2, 0)),
                (t.image.maxY = -t.image.minY),
                (t.image.currentX = Math.max(
                  Math.min(t.image.currentX, t.image.maxX),
                  t.image.minX
                )),
                (t.image.currentY = Math.max(
                  Math.min(t.image.currentY, t.image.maxY),
                  t.image.minY
                )),
                t.gesture.imageWrap
                  .transition(p)
                  .transform(
                    "translate3d(" +
                      t.image.currentX +
                      "px, " +
                      t.image.currentY +
                      "px,0)"
                  );
            }
          },
          onTransitionEnd: function (e) {
            var a = e.zoom;
            a.gesture.slide &&
              e.previousIndex !== e.activeIndex &&
              (a.gesture.image.transform("translate3d(0,0,0) scale(1)"),
              a.gesture.imageWrap.transform("translate3d(0,0,0)"),
              (a.gesture.slide =
                a.gesture.image =
                a.gesture.imageWrap =
                  void 0),
              (a.scale = a.currentScale = 1));
          },
          toggleZoom: function (a, t) {
            var s,
              i,
              r,
              n,
              o,
              l,
              p,
              d,
              m,
              u,
              c,
              g,
              h,
              v,
              f,
              w,
              x = a.zoom;
            (x.gesture.slide ||
              ((x.gesture.slide = a.clickedSlide
                ? e(a.clickedSlide)
                : a.slides.eq(a.activeIndex)),
              (x.gesture.image = x.gesture.slide.find("img, svg, canvas")),
              (x.gesture.imageWrap = x.gesture.image.parent(
                "." + a.params.zoomContainerClass
              ))),
            x.gesture.image && 0 !== x.gesture.image.length) &&
              (void 0 === x.image.touchesStart.x && t
                ? ((s =
                    "touchend" === t.type
                      ? t.changedTouches[0].pageX
                      : t.pageX),
                  (i =
                    "touchend" === t.type
                      ? t.changedTouches[0].pageY
                      : t.pageY))
                : ((s = x.image.touchesStart.x), (i = x.image.touchesStart.y)),
              x.scale && 1 !== x.scale
                ? ((x.scale = x.currentScale = 1),
                  x.gesture.imageWrap
                    .transition(300)
                    .transform("translate3d(0,0,0)"),
                  x.gesture.image
                    .transition(300)
                    .transform("translate3d(0,0,0) scale(1)"),
                  (x.gesture.slide = void 0))
                : ((x.scale = x.currentScale =
                    x.gesture.imageWrap.attr("data-swiper-zoom") ||
                    a.params.zoomMax),
                  t
                    ? ((f = x.gesture.slide[0].offsetWidth),
                      (w = x.gesture.slide[0].offsetHeight),
                      (r = x.gesture.slide.offset().left + f / 2 - s),
                      (n = x.gesture.slide.offset().top + w / 2 - i),
                      (p = x.gesture.image[0].offsetWidth),
                      (d = x.gesture.image[0].offsetHeight),
                      (m = p * x.scale),
                      (u = d * x.scale),
                      (h = -(c = Math.min(f / 2 - m / 2, 0))),
                      (v = -(g = Math.min(w / 2 - u / 2, 0))),
                      (o = r * x.scale) < c && (o = c),
                      o > h && (o = h),
                      (l = n * x.scale) < g && (l = g),
                      l > v && (l = v))
                    : ((o = 0), (l = 0)),
                  x.gesture.imageWrap
                    .transition(300)
                    .transform("translate3d(" + o + "px, " + l + "px,0)"),
                  x.gesture.image
                    .transition(300)
                    .transform("translate3d(0,0,0) scale(" + x.scale + ")")));
          },
          attachEvents: function (a) {
            var t = a ? "off" : "on";
            if (m.params.zoom) {
              m.slides;
              var s = !(
                "touchstart" !== m.touchEvents.start ||
                !m.support.passiveListener ||
                !m.params.passiveListeners
              ) && { passive: !0, capture: !1 };
              m.support.gestures
                ? (m.slides[t]("gesturestart", m.zoom.onGestureStart, s),
                  m.slides[t]("gesturechange", m.zoom.onGestureChange, s),
                  m.slides[t]("gestureend", m.zoom.onGestureEnd, s))
                : "touchstart" === m.touchEvents.start &&
                  (m.slides[t](m.touchEvents.start, m.zoom.onGestureStart, s),
                  m.slides[t](m.touchEvents.move, m.zoom.onGestureChange, s),
                  m.slides[t](m.touchEvents.end, m.zoom.onGestureEnd, s)),
                m[t]("touchStart", m.zoom.onTouchStart),
                m.slides.each(function (a, s) {
                  e(s).find("." + m.params.zoomContainerClass).length > 0 &&
                    e(s)[t](m.touchEvents.move, m.zoom.onTouchMove);
                }),
                m[t]("touchEnd", m.zoom.onTouchEnd),
                m[t]("transitionEnd", m.zoom.onTransitionEnd),
                m.params.zoomToggle && m.on("doubleTap", m.zoom.toggleZoom);
            }
          },
          init: function () {
            m.zoom.attachEvents();
          },
          destroy: function () {
            m.zoom.attachEvents(!0);
          },
        }),
        (m._plugins = []),
        m.plugins)) {
          var I = m.plugins[E](m, m.params[E]);
          I && m._plugins.push(I);
        }
        return (
          (m.callPlugins = function (e) {
            for (var a = 0; a < m._plugins.length; a++)
              e in m._plugins[a] &&
                m._plugins[a][e](
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5]
                );
          }),
          (m.emitterEventListeners = {}),
          (m.emit = function (e) {
            var a;
            if (
              (m.params[e] &&
                m.params[e](
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5]
                ),
              m.emitterEventListeners[e])
            )
              for (a = 0; a < m.emitterEventListeners[e].length; a++)
                m.emitterEventListeners[e][a](
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5]
                );
            m.callPlugins &&
              m.callPlugins(
                e,
                arguments[1],
                arguments[2],
                arguments[3],
                arguments[4],
                arguments[5]
              );
          }),
          (m.on = function (e, a) {
            return (
              (e = Y(e)),
              m.emitterEventListeners[e] || (m.emitterEventListeners[e] = []),
              m.emitterEventListeners[e].push(a),
              m
            );
          }),
          (m.off = function (e, a) {
            var t;
            if (((e = Y(e)), void 0 === a))
              return (m.emitterEventListeners[e] = []), m;
            if (
              m.emitterEventListeners[e] &&
              0 !== m.emitterEventListeners[e].length
            ) {
              for (t = 0; t < m.emitterEventListeners[e].length; t++)
                m.emitterEventListeners[e][t] === a &&
                  m.emitterEventListeners[e].splice(t, 1);
              return m;
            }
          }),
          (m.once = function (e, a) {
            e = Y(e);
            var t = function () {
              a(
                arguments[0],
                arguments[1],
                arguments[2],
                arguments[3],
                arguments[4]
              ),
                m.off(e, t);
            };
            return m.on(e, t), m;
          }),
          (m.a11y = {
            makeFocusable: function (e) {
              return e.attr("tabIndex", "0"), e;
            },
            addRole: function (e, a) {
              return e.attr("role", a), e;
            },
            addLabel: function (e, a) {
              return e.attr("aria-label", a), e;
            },
            disable: function (e) {
              return e.attr("aria-disabled", !0), e;
            },
            enable: function (e) {
              return e.attr("aria-disabled", !1), e;
            },
            onEnterKey: function (a) {
              13 === a.keyCode &&
                (e(a.target).is(m.params.nextButton)
                  ? (m.onClickNext(a),
                    m.isEnd
                      ? m.a11y.notify(m.params.lastSlideMessage)
                      : m.a11y.notify(m.params.nextSlideMessage))
                  : e(a.target).is(m.params.prevButton) &&
                    (m.onClickPrev(a),
                    m.isBeginning
                      ? m.a11y.notify(m.params.firstSlideMessage)
                      : m.a11y.notify(m.params.prevSlideMessage)),
                e(a.target).is("." + m.params.bulletClass) &&
                  e(a.target)[0].click());
            },
            liveRegion: e(
              '<span class="' +
                m.params.notificationClass +
                '" aria-live="assertive" aria-atomic="true"></span>'
            ),
            notify: function (e) {
              var a = m.a11y.liveRegion;
              0 !== a.length && (a.html(""), a.html(e));
            },
            init: function () {
              m.params.nextButton &&
                m.nextButton &&
                m.nextButton.length > 0 &&
                (m.a11y.makeFocusable(m.nextButton),
                m.a11y.addRole(m.nextButton, "button"),
                m.a11y.addLabel(m.nextButton, m.params.nextSlideMessage)),
                m.params.prevButton &&
                  m.prevButton &&
                  m.prevButton.length > 0 &&
                  (m.a11y.makeFocusable(m.prevButton),
                  m.a11y.addRole(m.prevButton, "button"),
                  m.a11y.addLabel(m.prevButton, m.params.prevSlideMessage)),
                e(m.container).append(m.a11y.liveRegion);
            },
            initPagination: function () {
              m.params.pagination &&
                m.params.paginationClickable &&
                m.bullets &&
                m.bullets.length &&
                m.bullets.each(function () {
                  var a = e(this);
                  m.a11y.makeFocusable(a),
                    m.a11y.addRole(a, "button"),
                    m.a11y.addLabel(
                      a,
                      m.params.paginationBulletMessage.replace(
                        /{{index}}/,
                        a.index() + 1
                      )
                    );
                });
            },
            destroy: function () {
              m.a11y.liveRegion &&
                m.a11y.liveRegion.length > 0 &&
                m.a11y.liveRegion.remove();
            },
          }),
          (m.init = function () {
            m.params.loop && m.createLoop(),
              m.updateContainerSize(),
              m.updateSlidesSize(),
              m.updatePagination(),
              m.params.scrollbar &&
                m.scrollbar &&
                (m.scrollbar.set(),
                m.params.scrollbarDraggable && m.scrollbar.enableDraggable()),
              "slide" !== m.params.effect &&
                m.effects[m.params.effect] &&
                (m.params.loop || m.updateProgress(),
                m.effects[m.params.effect].setTranslate()),
              m.params.loop
                ? m.slideTo(
                    m.params.initialSlide + m.loopedSlides,
                    0,
                    m.params.runCallbacksOnInit
                  )
                : (m.slideTo(
                    m.params.initialSlide,
                    0,
                    m.params.runCallbacksOnInit
                  ),
                  0 === m.params.initialSlide &&
                    (m.parallax &&
                      m.params.parallax &&
                      m.parallax.setTranslate(),
                    m.lazy &&
                      m.params.lazyLoading &&
                      (m.lazy.load(), (m.lazy.initialImageLoaded = !0)))),
              m.attachEvents(),
              m.params.observer && m.support.observer && m.initObservers(),
              m.params.preloadImages &&
                !m.params.lazyLoading &&
                m.preloadImages(),
              m.params.zoom && m.zoom && m.zoom.init(),
              m.params.autoplay && m.startAutoplay(),
              m.params.keyboardControl &&
                m.enableKeyboardControl &&
                m.enableKeyboardControl(),
              m.params.mousewheelControl &&
                m.enableMousewheelControl &&
                m.enableMousewheelControl(),
              m.params.hashnavReplaceState &&
                (m.params.replaceState = m.params.hashnavReplaceState),
              m.params.history && m.history && m.history.init(),
              m.params.hashnav && m.hashnav && m.hashnav.init(),
              m.params.a11y && m.a11y && m.a11y.init(),
              m.emit("onInit", m);
          }),
          (m.cleanupStyles = function () {
            m.container.removeClass(m.classNames.join(" ")).removeAttr("style"),
              m.wrapper.removeAttr("style"),
              m.slides &&
                m.slides.length &&
                m.slides
                  .removeClass(
                    [
                      m.params.slideVisibleClass,
                      m.params.slideActiveClass,
                      m.params.slideNextClass,
                      m.params.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-column")
                  .removeAttr("data-swiper-row"),
              m.paginationContainer &&
                m.paginationContainer.length &&
                m.paginationContainer.removeClass(
                  m.params.paginationHiddenClass
                ),
              m.bullets &&
                m.bullets.length &&
                m.bullets.removeClass(m.params.bulletActiveClass),
              m.params.prevButton &&
                e(m.params.prevButton).removeClass(
                  m.params.buttonDisabledClass
                ),
              m.params.nextButton &&
                e(m.params.nextButton).removeClass(
                  m.params.buttonDisabledClass
                ),
              m.params.scrollbar &&
                m.scrollbar &&
                (m.scrollbar.track &&
                  m.scrollbar.track.length &&
                  m.scrollbar.track.removeAttr("style"),
                m.scrollbar.drag &&
                  m.scrollbar.drag.length &&
                  m.scrollbar.drag.removeAttr("style"));
          }),
          (m.destroy = function (e, a) {
            m.detachEvents(),
              m.stopAutoplay(),
              m.params.scrollbar &&
                m.scrollbar &&
                m.params.scrollbarDraggable &&
                m.scrollbar.disableDraggable(),
              m.params.loop && m.destroyLoop(),
              a && m.cleanupStyles(),
              m.disconnectObservers(),
              m.params.zoom && m.zoom && m.zoom.destroy(),
              m.params.keyboardControl &&
                m.disableKeyboardControl &&
                m.disableKeyboardControl(),
              m.params.mousewheelControl &&
                m.disableMousewheelControl &&
                m.disableMousewheelControl(),
              m.params.a11y && m.a11y && m.a11y.destroy(),
              m.params.history &&
                !m.params.replaceState &&
                window.removeEventListener(
                  "popstate",
                  m.history.setHistoryPopState
                ),
              m.params.hashnav && m.hashnav && m.hashnav.destroy(),
              m.emit("onDestroy"),
              !1 !== e && (m = null);
          }),
          m.init(),
          m
        );
      }
      function k(e) {
        return Math.floor(e);
      }
      function D() {
        var e = m.params.autoplay,
          a = m.slides.eq(m.activeIndex);
        a.attr("data-swiper-autoplay") &&
          (e = a.attr("data-swiper-autoplay") || m.params.autoplay),
          (m.autoplayTimeoutId = setTimeout(function () {
            m.params.loop
              ? (m.fixLoop(), m._slideNext(), m.emit("onAutoplay", m))
              : m.isEnd
              ? t.autoplayStopOnLast
                ? m.stopAutoplay()
                : (m._slideTo(0), m.emit("onAutoplay", m))
              : (m._slideNext(), m.emit("onAutoplay", m));
          }, e));
      }
      function L(a, t) {
        var s = e(a.target);
        if (!s.is(t))
          if ("string" == typeof t) s = s.parents(t);
          else if (t.nodeType) {
            var i;
            return (
              s.parents().each(function (e, a) {
                a === t && (i = t);
              }),
              i ? t : void 0
            );
          }
        if (0 !== s.length) return s[0];
      }
      function B(e, a) {
        a = a || {};
        var t = new (window.MutationObserver || window.WebkitMutationObserver)(
          function (e) {
            e.forEach(function (e) {
              m.onResize(!0), m.emit("onObserverUpdate", m, e);
            });
          }
        );
        t.observe(e, {
          attributes: void 0 === a.attributes || a.attributes,
          childList: void 0 === a.childList || a.childList,
          characterData: void 0 === a.characterData || a.characterData,
        }),
          m.observers.push(t);
      }
      function H(e) {
        e.originalEvent && (e = e.originalEvent);
        var a = e.keyCode || e.charCode;
        if (
          !m.params.allowSwipeToNext &&
          ((m.isHorizontal() && 39 === a) || (!m.isHorizontal() && 40 === a))
        )
          return !1;
        if (
          !m.params.allowSwipeToPrev &&
          ((m.isHorizontal() && 37 === a) || (!m.isHorizontal() && 38 === a))
        )
          return !1;
        if (
          !(
            e.shiftKey ||
            e.altKey ||
            e.ctrlKey ||
            e.metaKey ||
            (document.activeElement &&
              document.activeElement.nodeName &&
              ("input" === document.activeElement.nodeName.toLowerCase() ||
                "textarea" === document.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (37 === a || 39 === a || 38 === a || 40 === a) {
            var t = !1;
            if (
              m.container.parents("." + m.params.slideClass).length > 0 &&
              0 === m.container.parents("." + m.params.slideActiveClass).length
            )
              return;
            var s = { left: window.pageXOffset, top: window.pageYOffset },
              i = window.innerWidth,
              r = window.innerHeight,
              n = m.container.offset();
            m.rtl && (n.left = n.left - m.container[0].scrollLeft);
            for (
              var o = [
                  [n.left, n.top],
                  [n.left + m.width, n.top],
                  [n.left, n.top + m.height],
                  [n.left + m.width, n.top + m.height],
                ],
                l = 0;
              l < o.length;
              l++
            ) {
              var p = o[l];
              p[0] >= s.left &&
                p[0] <= s.left + i &&
                p[1] >= s.top &&
                p[1] <= s.top + r &&
                (t = !0);
            }
            if (!t) return;
          }
          m.isHorizontal()
            ? ((37 !== a && 39 !== a) ||
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
              ((39 === a && !m.rtl) || (37 === a && m.rtl)) && m.slideNext(),
              ((37 === a && !m.rtl) || (39 === a && m.rtl)) && m.slidePrev())
            : ((38 !== a && 40 !== a) ||
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
              40 === a && m.slideNext(),
              38 === a && m.slidePrev());
        }
      }
      function G(e) {
        e.originalEvent && (e = e.originalEvent);
        var a = 0,
          t = m.rtl ? -1 : 1,
          s = (function (e) {
            var a = 10,
              t = 40,
              s = 800,
              i = 0,
              r = 0,
              n = 0,
              o = 0;
            "detail" in e && (r = e.detail);
            "wheelDelta" in e && (r = -e.wheelDelta / 120);
            "wheelDeltaY" in e && (r = -e.wheelDeltaY / 120);
            "wheelDeltaX" in e && (i = -e.wheelDeltaX / 120);
            "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((i = r), (r = 0));
            (n = i * a), (o = r * a), "deltaY" in e && (o = e.deltaY);
            "deltaX" in e && (n = e.deltaX);
            (n || o) &&
              e.deltaMode &&
              (1 === e.deltaMode ? ((n *= t), (o *= t)) : ((n *= s), (o *= s)));
            n && !i && (i = n < 1 ? -1 : 1);
            o && !r && (r = o < 1 ? -1 : 1);
            return { spinX: i, spinY: r, pixelX: n, pixelY: o };
          })(e);
        if (m.params.mousewheelForceToAxis)
          if (m.isHorizontal()) {
            if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return;
            a = s.pixelX * t;
          } else {
            if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return;
            a = s.pixelY;
          }
        else
          a =
            Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;
        if (0 !== a) {
          if ((m.params.mousewheelInvert && (a = -a), m.params.freeMode)) {
            var i =
                m.getWrapperTranslate() + a * m.params.mousewheelSensitivity,
              r = m.isBeginning,
              n = m.isEnd;
            if (
              (i >= m.minTranslate() && (i = m.minTranslate()),
              i <= m.maxTranslate() && (i = m.maxTranslate()),
              m.setWrapperTransition(0),
              m.setWrapperTranslate(i),
              m.updateProgress(),
              m.updateActiveIndex(),
              ((!r && m.isBeginning) || (!n && m.isEnd)) && m.updateClasses(),
              m.params.freeModeSticky
                ? (clearTimeout(m.mousewheel.timeout),
                  (m.mousewheel.timeout = setTimeout(function () {
                    m.slideReset();
                  }, 300)))
                : m.params.lazyLoading && m.lazy && m.lazy.load(),
              m.emit("onScroll", m, e),
              m.params.autoplay &&
                m.params.autoplayDisableOnInteraction &&
                m.stopAutoplay(),
              0 === i || i === m.maxTranslate())
            )
              return;
          } else {
            if (new window.Date().getTime() - m.mousewheel.lastScrollTime > 60)
              if (a < 0)
                if ((m.isEnd && !m.params.loop) || m.animating) {
                  if (m.params.mousewheelReleaseOnEdges) return !0;
                } else m.slideNext(), m.emit("onScroll", m, e);
              else if ((m.isBeginning && !m.params.loop) || m.animating) {
                if (m.params.mousewheelReleaseOnEdges) return !0;
              } else m.slidePrev(), m.emit("onScroll", m, e);
            m.mousewheel.lastScrollTime = new window.Date().getTime();
          }
          return (
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1), !1
          );
        }
      }
      function X(a, t) {
        var s, i, r;
        a = e(a);
        var n = m.rtl ? -1 : 1;
        (s = a.attr("data-swiper-parallax") || "0"),
          (i = a.attr("data-swiper-parallax-x")),
          (r = a.attr("data-swiper-parallax-y")),
          i || r
            ? ((i = i || "0"), (r = r || "0"))
            : m.isHorizontal()
            ? ((i = s), (r = "0"))
            : ((r = s), (i = "0")),
          (i =
            i.indexOf("%") >= 0
              ? parseInt(i, 10) * t * n + "%"
              : i * t * n + "px"),
          (r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px"),
          a.transform("translate3d(" + i + ", " + r + ",0px)");
      }
      function Y(e) {
        return (
          0 !== e.indexOf("on") &&
            (e =
              e[0] !== e[0].toUpperCase()
                ? "on" + e[0].toUpperCase() + e.substring(1)
                : "on" + e),
          e
        );
      }
    };
  s.prototype = {
    isSafari:
      ((t = window.navigator.userAgent.toLowerCase()),
      t.indexOf("safari") >= 0 &&
        t.indexOf("chrome") < 0 &&
        t.indexOf("android") < 0),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      window.navigator.userAgent
    ),
    isArray: function (e) {
      return "[object Array]" === Object.prototype.toString.apply(e);
    },
    browser: {
      ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      ieTouch:
        (window.navigator.msPointerEnabled &&
          window.navigator.msMaxTouchPoints > 1) ||
        (window.navigator.pointerEnabled &&
          window.navigator.maxTouchPoints > 1),
      lteIE9:
        ((a = document.createElement("div")),
        (a.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e"),
        1 === a.getElementsByTagName("i").length),
    },
    device: (function () {
      var e = window.navigator.userAgent,
        a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        t = e.match(/(iPad).*OS\s([\d_]+)/),
        s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        i = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      return { ios: t || i || s, android: a };
    })(),
    support: {
      touch:
        (window.Modernizr && !0 === Modernizr.touch) ||
        !!(
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof DocumentTouch)
        ),
      transforms3d:
        (window.Modernizr && !0 === Modernizr.csstransforms3d) ||
        (function () {
          var e = document.createElement("div").style;
          return (
            "webkitPerspective" in e ||
            "MozPerspective" in e ||
            "OPerspective" in e ||
            "MsPerspective" in e ||
            "perspective" in e
          );
        })(),
      flexbox: (function () {
        for (
          var e = document.createElement("div").style,
            a =
              "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                " "
              ),
            t = 0;
          t < a.length;
          t++
        )
          if (a[t] in e) return !0;
      })(),
      observer:
        "MutationObserver" in window || "WebkitMutationObserver" in window,
      passiveListener: (function () {
        var e = !1;
        try {
          var a = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0;
            },
          });
          window.addEventListener("testPassiveListener", null, a);
        } catch (e) {}
        return e;
      })(),
      gestures: "ongesturestart" in window,
    },
    plugins: {},
  };
  for (var i, r = ["jQuery", "Zepto", "Dom7"], n = 0; n < r.length; n++)
    window[r[n]] && o(window[r[n]]);
  function o(e) {
    e.fn.swiper = function (a) {
      var t;
      return (
        e(this).each(function () {
          var e = new s(this, a);
          t || (t = e);
        }),
        t
      );
    };
  }
  (i =
    "undefined" == typeof Dom7
      ? window.Dom7 || window.Zepto || window.jQuery
      : Dom7) &&
    ("transitionEnd" in i.fn ||
      (i.fn.transitionEnd = function (e) {
        var a,
          t = [
            "webkitTransitionEnd",
            "transitionend",
            "oTransitionEnd",
            "MSTransitionEnd",
            "msTransitionEnd",
          ],
          s = this;
        function i(r) {
          if (r.target === this)
            for (e.call(this, r), a = 0; a < t.length; a++) s.off(t[a], i);
        }
        if (e) for (a = 0; a < t.length; a++) s.on(t[a], i);
        return this;
      }),
    "transform" in i.fn ||
      (i.fn.transform = function (e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;
          t.webkitTransform =
            t.MsTransform =
            t.msTransform =
            t.MozTransform =
            t.OTransform =
            t.transform =
              e;
        }
        return this;
      }),
    "transition" in i.fn ||
      (i.fn.transition = function (e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;
          t.webkitTransitionDuration =
            t.MsTransitionDuration =
            t.msTransitionDuration =
            t.MozTransitionDuration =
            t.OTransitionDuration =
            t.transitionDuration =
              e;
        }
        return this;
      }),
    "outerWidth" in i.fn ||
      (i.fn.outerWidth = function (e) {
        return this.length > 0
          ? e
            ? this[0].offsetWidth +
              parseFloat(this.css("margin-right")) +
              parseFloat(this.css("margin-left"))
            : this[0].offsetWidth
          : null;
      })),
    (window.Swiper = s);
})(),
  "undefined" != typeof module
    ? (module.exports = window.Swiper)
    : "function" == typeof define &&
      define.amd &&
      define([], function () {
        "use strict";
        return window.Swiper;
      });
//# sourceMappingURL=https://assets.astrolighting.com/static/maps/js/libs/swiper.jquery.js.14e87.map
