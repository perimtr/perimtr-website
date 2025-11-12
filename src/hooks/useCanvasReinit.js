// src/hooks/useCanvasReinit.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useCanvasReinit() {
  const loc = useLocation();

  useEffect(() => {
    const S = window.SEMICOLON || window.Semicolon || window.SEMICOLONCORE;

    // General Canvas init
    try { S?.Core?.init?.(); } catch {}
    try { S?.Modules?.initialize?.(); } catch {}
    try { S?.run?.(); } catch {}

    // 👇 Sliders/FlexSlider initializers (covering several Canvas versions)
    try { S?.Modules?.Sliders?.init?.(); } catch {}
    try { S?.Modules?.FlexSlider?.init?.(); } catch {}
    try { S?.Widgets?.FlexSlider?.init?.(); } catch {}
    try { S?.Modules?.OnePage?.init?.(); } catch {}
    try { S?.Widgets?.OnePageMenu?.init?.(); } catch {}


    // jQuery/FlexSlider direct fallback (works if plugin is present in plugins.min.js)
    try {
      const $ = window.jQuery || window.$;
      if ($ && $.fn.flexslider) {
        $('.fslider .flexslider').each(function () {
          const $el = $(this);
          if ($el.data('__inited')) return;
          $el.data('__inited', 1);
          $el.flexslider({
            animation: 'slide',
            selector: '.slider-wrap > .slide',
            controlNav: true,
            directionNav: false,
            slideshow: true,
            slideshowSpeed: 5500,
            animationSpeed: 600,
            smoothHeight: true,
            touch: true
          });
        });
      }
    } catch {}
  }, [loc.pathname, loc.search, loc.hash]);
}
