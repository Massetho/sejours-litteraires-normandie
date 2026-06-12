import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VISIBLE = { opacity: 1, y: 0, x: 0 };
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReduced) {
  document.querySelectorAll<HTMLElement>('.gsap-hidden, .gsap-hidden-x').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
} else {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}

function init() {
  initNav();
  initHero();
  initBatchElements();
}

function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  ScrollTrigger.create({
    start: 'top -80',
    onEnter: () => {
      nav.style.backgroundColor = 'rgba(30, 43, 47, 0.95)';
      nav.style.backdropFilter = 'blur(8px)';
      nav.style.boxShadow = '0 1px 20px rgba(0,0,0,0.15)';
      nav.style.paddingTop = '0.75rem';
      nav.style.paddingBottom = '0.75rem';
    },
    onLeaveBack: () => {
      nav.style.backgroundColor = '';
      nav.style.backdropFilter = '';
      nav.style.boxShadow = '';
      nav.style.paddingTop = '';
      nav.style.paddingBottom = '';
    },
  });
}

function initHero() {
  const heroBg = document.getElementById('hero-bg');
  if (!heroBg) return;

  gsap.to(heroBg, {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.fromTo('#hero-bg',       { scale: 1.08 }, { scale: 1, duration: 2.2, ease: 'power2.out' })
    .fromTo('#hero-eyebrow',  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=1.6')
    .fromTo('#hero-headline', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.4')
    .fromTo('#hero-sub',      { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .fromTo('#hero-cta',      { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5');

  const scrollLine = document.getElementById('scroll-line');
  if (scrollLine) {
    gsap.to(scrollLine, {
      y: '200%',
      duration: 1.4,
      ease: 'power1.inOut',
      repeat: -1,
    });
  }
}

function initBatchElements() {
  ScrollTrigger.batch('.gsap-hidden', {
    start: 'top 88%',
    once: true,
    onEnter: (batch) => {
      gsap.fromTo(batch,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    },
  });
}
