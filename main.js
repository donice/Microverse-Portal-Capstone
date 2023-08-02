// Mobile Nav menu
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('#close');
const navLinks = document.querySelectorAll('.nav-links');

// Functions that toggle the display of the mobile nav
function toggleMobileNav() {
  hamburger.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active');
}

// Onclick of various querySelector, call the toggleMobileNav function
hamburger.addEventListener('click', toggleMobileNav);
mobileNavClose.addEventListener('click', toggleMobileNav);

// Loop through all links, and close mobile nav on click any
navLinks.forEach((link) => {
  link.addEventListener('click', toggleMobileNav);
});

function scrollToSection(event) {
  event.preventDefault();
  const target = document.querySelector(event.target.getAttribute('href'));
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

const anchorTags = document.querySelectorAll('a[href^="#"]');

anchorTags.forEach((anchor) => {
  anchor.addEventListener('click', scrollToSection);
});

// Features
const features = [
  {
    key: 1,
    name: 'Yochai Benkler',
    img: './assets/shared/features/speaker_01.svg',
    position:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    key: 2,
    name: 'SohYeong Noh',
    img: './assets/shared/features/speaker_02.svg',
    position: 'Director of Art Centre Nabi and a board member of CC Korea',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    key: 3,
    name: 'Lila tretikov',
    img: './assets/shared/features/speaker_03.svg',
    position: 'Executive Director of the Wikimedia Foundation',
    description:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    key: 4,
    name: 'Kilnam Chon',
    img: './assets/shared/features/speaker_04.svg',
    position: '',
    description:
      'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    key: 5,
    name: 'Julia Leda',
    img: './assets/shared/features/speaker_05.svg',
    position: 'President of Young Pirates of Europe',
    description:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    key: 6,
    name: 'Ryan Merkley',
    img: './assets/shared/features/speaker_06.svg',
    position: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

const featureSection = document.querySelector('.feature-cards');

function dynamicallyDisplayFeature() {
  featureSection.innerHTML = '';
  features.forEach((featureItem) => {
    const feature = document.createElement('div');
    feature.classList.add('feature-card');

    const featureContent = `
      <img src='${featureItem.img}' alt='${featureItem.name}' class='feature-card-image' />
      <div class='feature-info'>
        <h4>${featureItem.name}</h4>
        <span class='theme'>${featureItem.position}</span>
        <div class='feature-info-underline'></div>
        <p>${featureItem.description}</p>
      </div>
    `;

    feature.innerHTML = featureContent;
    featureSection.appendChild(feature);
  });
}

dynamicallyDisplayFeature();
