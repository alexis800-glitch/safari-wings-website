/* ============================================================
   Safari Wings — Hotel & Travel Booking Concierge
   Main Script
   ============================================================ */

const navbar    = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// ---- Navbar: transparent → white on scroll ----
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    backToTop.classList.toggle('visible', window.scrollY > 420);
}, { passive: true });

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---- Mobile hamburger menu ----
hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ---- Date inputs: set today as minimum ----
const today         = new Date().toISOString().split('T')[0];
const checkinInput  = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');

if (checkinInput)  checkinInput.min  = today;
if (checkoutInput) checkoutInput.min = today;

if (checkinInput && checkoutInput) {
    checkinInput.addEventListener('change', () => {
        checkoutInput.min = checkinInput.value || today;
        if (checkoutInput.value && checkoutInput.value < checkinInput.value) {
            checkoutInput.value = checkinInput.value;
        }
    });
}

// ---- Booking bar: scroll to contact on submit ----
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', e => {
        e.preventDefault();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// ---- Contact form: open WhatsApp with enquiry details ----
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const formData     = new FormData(contactForm);
        const firstName    = (formData.get('firstname') || '').toString().trim();
        const lastName     = (formData.get('lastname') || '').toString().trim();
        const email        = (formData.get('email') || '').toString().trim();
        const phone        = (formData.get('phone') || '').toString().trim();
        const destination  = (formData.get('destination_interest') || '').toString().trim() || 'Not specified';
        const purpose      = (formData.get('purpose') || '').toString().trim() || 'Not specified';
        const request      = (formData.get('message') || '').toString().trim() || 'No additional details provided.';

        const whatsappMessage = [
            '*Safari Wings Travel Enquiry*',
            '',
            `*First name:* ${firstName}`,
            `*Last name:* ${lastName}`,
            `*Email:* ${email}`,
            `*Phone / WhatsApp:* ${phone}`,
            `*Hotel / Destination:* ${destination}`,
            `*Travel purpose:* ${purpose}`,
            `*Request / Message:* ${request}`
        ].join('\n');

        const waUrl = `https://wa.me/2348168139364?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(waUrl, '_blank', 'noopener');

        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

// ---- Newsletter form ----
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
        e.preventDefault();
        const btn   = newsletterForm.querySelector('button');
        const input = newsletterForm.querySelector('input');
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.style.background = '#27ae60';
        input.value = '';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-paper-plane"></i>';
            btn.style.background = '';
        }, 3500);
    });
}

// ---- Hotel card "Check Rates" button ----
const hcardBtn = document.querySelector('.hcard-btn');
if (hcardBtn) {
    hcardBtn.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// ---- Counter animation (Why Choose Us stats) ----
function animateCounter(el) {
    const target   = parseInt(el.dataset.count, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1800;
    const start    = performance.now();

    function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString() + (progress >= 1 ? suffix : '');
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ---- Scroll-reveal (data-aos elements) ----
const aosObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || 0, 10);
            setTimeout(() => entry.target.classList.add('aos-in'), delay);
            aosObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

// ---- Testimonials slider ----
(function () {
    const track    = document.getElementById('sliderTrack');
    const dotsWrap = document.getElementById('sliderDots');
    const prevBtn  = document.getElementById('prevBtn');
    const nextBtn  = document.getElementById('nextBtn');
    if (!track) return;

    const cards = track.querySelectorAll('.tcard');
    const total = cards.length;
    let current  = 0;
    let autoTimer;

    // Build dots
    cards.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Slide ' + (i + 1));
        dot.addEventListener('click', () => { goTo(i); resetAuto(); });
        dotsWrap.appendChild(dot);
    });

    function updateDots() {
        dotsWrap.querySelectorAll('.dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
    }

    function goTo(index) {
        current = (index + total) % total;
        track.style.transform = 'translateX(-' + (current * 100) + '%)';
        updateDots();
    }

    prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
    nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

    function startAuto() { autoTimer = setInterval(() => goTo(current + 1), 5500); }
    function resetAuto()  { clearInterval(autoTimer); startAuto(); }
    startAuto();

    // Swipe support
    let touchX = 0;
    track.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = touchX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) { goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
    }, { passive: true });
}());

// ---- How It Works: animated progress line ----
(function () {
    const hiwSection = document.querySelector('.hiw-section');
    const fill = document.getElementById('stepsProgressFill');
    if (!hiwSection || !fill) return;
    const hiwObs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            setTimeout(function () { fill.classList.add('animated'); }, 320);
            hiwObs.disconnect();
        }
    }, { threshold: 0.28 });
    hiwObs.observe(hiwSection);
}());

// ---- Active nav link highlight on scroll ----
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let closest = null;
    let minDist = Infinity;
    const mid   = window.scrollY + window.innerHeight / 3;

    sections.forEach(sec => {
        const dist = Math.abs(sec.offsetTop - mid);
        if (dist < minDist) { minDist = dist; closest = sec; }
    });

    navAnchors.forEach(a => {
        const id = a.getAttribute('href').slice(1);
        a.style.color = (closest && id === closest.id) ? 'var(--blue)' : '';
    });
}, { passive: true });
