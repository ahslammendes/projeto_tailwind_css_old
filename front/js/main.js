/* ==========================================================================
   PizzaArte – Motion Engine & Interatividade (GSAP + ScrollTrigger + Lenis)
   ========================================================================== */
(function () {
  var hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  if (hasGSAP) {
    gsap.registerPlugin(ScrollTrigger);
  }

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.matchMedia('(max-width: 767px)').matches;

  /* 0. Lenis Smooth Scroll (lerp .08 alimentando ScrollTrigger) */
  var lenis = null;
  if (!reduced && typeof window.Lenis !== 'undefined' && hasGSAP) {
    lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 1 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) {
      lenis.raf(t * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  /* Menu Mobile Responsivo */
  var btnMobile = document.getElementById('btn-mobile-menu');
  var mobileMenu = document.getElementById('mobile-menu');
  if (btnMobile && mobileMenu) {
    btnMobile.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  /* Navegação suave por âncoras via Lenis */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(target);
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  /* 1. Preloader Motion & Hero Entrance */
  var loader = document.getElementById('loader');
  var pctEl = document.getElementById('loaderPct');
  var barEl = document.getElementById('loaderBar');

  function heroEntrance() {
    if (!hasGSAP || reduced) return;
    gsap.fromTo('#hero-bg', { scale: 1.16 }, { scale: 1.02, duration: 2.4, ease: 'power2.out' });
    gsap.fromTo('.heroLine',
      { yPercent: 110, rotate: 2 },
      { yPercent: 0, rotate: 0, duration: 1.1, ease: 'power4.out', stagger: 0.12, delay: 0.15 }
    );
    gsap.fromTo('.heroFade',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 1, delay: 0.7, stagger: 0.1, ease: 'power2.out' }
    );
  }

  if (loader && hasGSAP && !reduced) {
    var prog = { v: 0 };
    gsap.fromTo('#loaderWord', { letterSpacing: '0.5em' }, { letterSpacing: '0.02em', duration: 1.2, ease: 'power3.out' });
    gsap.to(prog, {
      v: 100,
      duration: 1.35,
      ease: 'power2.out',
      onUpdate: function () {
        var val = Math.round(prog.v);
        if (pctEl) pctEl.textContent = val + '%';
        if (barEl) barEl.style.transform = 'scaleX(' + (val / 100) + ')';
      },
      onComplete: function () {
        if (barEl) barEl.style.background = '#C4472F';
        gsap.to('#loader', {
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.9,
          ease: 'power4.inOut',
          delay: 0.15,
          onComplete: function () {
            loader.style.display = 'none';
          }
        });
        heroEntrance();
      }
    });
  } else if (loader) {
    loader.style.display = 'none';
  }

  /* 2. Scroll Motions (Hero scrub, Sheet radius, Manifesto Lines, Capsules, Counters, Wordmark) */
  if (hasGSAP && !reduced) {
    /* Hero Parallax & Fade no Scroll */
    gsap.to('#hero-content', {
      yPercent: -30,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    /* Sheet Border Radius 32px -> 0px ao atingir o topo */
    gsap.fromTo('#sobre',
      { borderTopLeftRadius: 32, borderTopRightRadius: 32 },
      {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#sobre',
          start: 'top 65%',
          end: 'top top',
          scrub: true
        }
      }
    );

    /* Manifesto Line Reveal (.mLine > span) */
    gsap.utils.toArray('.mLine > span').forEach(function (el, i) {
      gsap.fromTo(el,
        { yPercent: 110, rotate: 1.5 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.1,
          ease: 'power4.out',
          delay: i * 0.09,
          scrollTrigger: {
            trigger: '.manifesto',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    /* Image Capsules abertura 0 -> 140px */
    gsap.utils.toArray('.mImg').forEach(function (el) {
      gsap.fromTo(el,
        { width: 0 },
        {
          width: 140,
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: '.manifesto',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    /* Contadores Animados (power2.out 1.6s com snap) */
    gsap.utils.toArray('.counter').forEach(function (el) {
      var to = parseFloat(el.getAttribute('data-to')) || 0;
      gsap.fromTo(el,
        { textContent: 0 },
        {
          textContent: to,
          duration: 1.6,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    /* Wordmark Rise no Rodapé */
    gsap.fromTo('#wordmark',
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 1.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '#footer',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  } else {
    document.querySelectorAll('.mImg').forEach(function (el) { el.style.width = '140px'; });
    document.querySelectorAll('.counter').forEach(function (el) { el.textContent = el.getAttribute('data-to'); });
    var wm = document.getElementById('wordmark');
    if (wm) wm.style.transform = 'translateY(0%)';
  }

  /* 3. Film Grain Canvas */
  var gCan = document.getElementById('grain');
  if (gCan && !reduced) {
    var gCtx = gCan.getContext('2d');
    gCan.width = 160;
    gCan.height = 160;
    var gf = 0;
    function drawGrain() {
      if (++gf % 4 === 0) {
        var d = gCtx.createImageData(160, 160);
        var p = d.data;
        for (var i = 0; i < p.length; i += 4) {
          var v = Math.random() * 255;
          p[i] = p[i + 1] = p[i + 2] = v;
          p[i + 3] = 255;
        }
        gCtx.putImageData(d, 0, 0);
      }
      requestAnimationFrame(drawGrain);
    }
    drawGrain();
  }

  /* 4. Custom Cursor com interpolação lerp .15 */
  var dot = document.getElementById('curDot');
  var ring = document.getElementById('curRing');
  if (!isMobile && window.matchMedia('(pointer: fine)').matches && dot && ring) {
    var rx = -100, ry = -100, tx = -100, ty = -100;
    window.addEventListener('pointermove', function (e) {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = 'translate(' + (tx - 4) + 'px,' + (ty - 4) + 'px)';
    });
    function loopCursor() {
      rx += (tx - rx) * 0.15;
      ry += (ty - ry) * 0.15;
      ring.style.transform = 'translate(' + (rx - 16) + 'px,' + (ry - 16) + 'px)';
      requestAnimationFrame(loopCursor);
    }
    loopCursor();

    document.querySelectorAll('a, button, input, textarea, .gal-card').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.marginLeft = '-12px';
        ring.style.marginTop = '-12px';
      });
      el.addEventListener('mouseleave', function () {
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.marginLeft = '0px';
        ring.style.marginTop = '0px';
      });
    });
  }

  /* 5. Botão Magnético com elastic.out(1, 0.4) */
  var mag = document.getElementById('magnet');
  if (mag && !isMobile) {
    mag.addEventListener('mousemove', function (e) {
      var r = mag.getBoundingClientRect();
      var x = (e.clientX - r.left - r.width / 2) * 0.3;
      var y = (e.clientY - r.top - r.height / 2) * 0.3;
      if (hasGSAP && !reduced) {
        gsap.to(mag, { x: x, y: y, duration: 0.4 });
      } else {
        mag.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      }
    });
    mag.addEventListener('mouseleave', function () {
      if (hasGSAP && !reduced) {
        gsap.to(mag, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' });
      } else {
        mag.style.transform = 'translate(0px, 0px)';
      }
    });
  }

  /* 6. Fit Wordmark Responsivo no Rodapé */
  var wordmark = document.getElementById('wordmark');
  function fitWordmark() {
    if (!wordmark) return;
    wordmark.style.fontSize = Math.max(3.2, window.innerWidth / 5.4 / 16) + 'rem';
  }
  fitWordmark();
  window.addEventListener('resize', function () {
    fitWordmark();
    if (hasGSAP) ScrollTrigger.refresh();
  });

  /* 7. Interação das Estações do Cardápio (#galBar e #galCount) */
  var galBar = document.getElementById('galBar');
  var galCount = document.getElementById('galCount');
  var cards = document.querySelectorAll('.gal-card');
  cards.forEach(function (card, idx) {
    card.addEventListener('mouseenter', function () {
      cards.forEach(function (c) { c.classList.remove('is-active'); });
      card.classList.add('is-active');
      var step = idx + 1;
      if (galBar) galBar.style.transform = 'scaleX(' + (step / cards.length) + ')';
      if (galCount) galCount.textContent = '0' + step + ' — 0' + cards.length;
    });
  });

  /* Botões "Pedir Esta Estação" preenchem o formulário e rolam suavemente */
  document.querySelectorAll('.btn-pedir').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pizza = btn.getAttribute('data-pizza');
      var msgInput = document.getElementById('input-msg');
      var contatoSec = document.getElementById('contato');
      if (msgInput && pizza) {
        msgInput.value = 'Olá! Gostaria de pedir a Estação: ' + pizza + '.';
      }
      if (contatoSec) {
        if (lenis) {
          lenis.scrollTo(contatoSec);
        } else {
          contatoSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  /* 8. Capítulos de Depoimentos (.rom-btn interativos) */
  var romBtns = document.querySelectorAll('.rom-btn');
  var reviewCards = document.querySelectorAll('.review-card');
  var filmBar = document.getElementById('filmBar');
  var filmTime = document.getElementById('filmTime');

  function activateChapter(idx) {
    romBtns.forEach(function (b, i) {
      b.classList.toggle('text-pizza-primary', i === idx);
      b.classList.toggle('text-pizza-light/45', i !== idx);
    });
    reviewCards.forEach(function (card, i) {
      card.classList.toggle('border-pizza-primary', i === idx);
      card.classList.toggle('border-pizza-light/15', i !== idx);
    });
    var step = idx + 1;
    if (filmBar) filmBar.style.transform = 'scaleX(' + (step / 3) + ')';
    if (filmTime) filmTime.textContent = 'CAP. 0' + step + ' / 03';
  }

  romBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      activateChapter(parseInt(btn.getAttribute('data-rom'), 10));
    });
  });
  reviewCards.forEach(function (card, idx) {
    card.addEventListener('mouseenter', function () {
      activateChapter(idx);
    });
  });

  /* 9. Animações de Entrada por Bloco (.anim-fade-up) */
  var fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('.anim-fade-up').forEach(function (el) {
    fadeObserver.observe(el);
  });

  /* 10. Estados do Header (.nav--scrolled / .nav--night) e Progress Rail (#railFill / #secIdx) */
  var header = document.getElementById('header');
  var railFill = document.getElementById('railFill');
  var secIdx = document.getElementById('secIdx');
  var heroSec = document.getElementById('hero');
  var nightSec = document.getElementById('depoimentos');
  var sections = document.querySelectorAll('section[data-section]');

  function onScroll() {
    var sy = window.scrollY;
    var docH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var progress = Math.min(1, Math.max(0, sy / docH));

    if (railFill) {
      railFill.style.transform = 'scaleY(' + progress + ')';
    }

    if (header) {
      header.classList.toggle('nav--scrolled', sy > 80);

      var inHero = heroSec && sy < (heroSec.offsetHeight - 80);
      var inNight = false;
      if (nightSec) {
        var nr = nightSec.getBoundingClientRect();
        inNight = nr.top <= 90 && nr.bottom >= 90;
      }
      header.classList.toggle('nav--night', Boolean(inHero || inNight));
    }

    var currentCode = '01';
    sections.forEach(function (sec) {
      var r = sec.getBoundingClientRect();
      if (r.top <= window.innerHeight * 0.45 && r.bottom >= window.innerHeight * 0.25) {
        currentCode = sec.getAttribute('data-section') || currentCode;
      }
    });
    if (secIdx) {
      secIdx.textContent = currentCode + ' / 05';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* 11. Feedback do Formulário de Contato */
  var form = document.getElementById('contato-form');
  var feedback = document.getElementById('form-feedback');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (feedback) {
        feedback.classList.remove('hidden');
        setTimeout(function () {
          feedback.classList.add('hidden');
        }, 5000);
      }
      form.reset();
    });
  }
})();
