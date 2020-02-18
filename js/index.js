const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// Images - Logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Images - CTA
let heroImg = document.getElementById('cta-img');
heroImg.setAttribute('src', siteContent['cta']['img-src']);

// Images - Middle

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Nav
let topNav = document.querySelectorAll('nav a');
topNav[0].textContent = siteContent['nav']['nav-item-1'];
topNav[1].textContent = siteContent['nav']['nav-item-2'];
topNav[2].textContent = siteContent['nav']['nav-item-3'];
topNav[3].textContent = siteContent['nav']['nav-item-4'];
topNav[4].textContent = siteContent['nav']['nav-item-5'];
topNav[5].textContent = siteContent['nav']['nav-item-6'];

// Nav styling
for (i = 0; i < topNav.length; i++) {
  topNav[i].style.color = 'green';
}

// New nav items
let addNav = document.querySelector('nav')

let newNav1 = document.createElement('a')
newNav1.textContent = 'Home'
newNav1.href = '#'
newNav1.style.color = 'green'
addNav.prepend(newNav1)

let newNav2 = document.createElement('a')
newNav2.textContent = 'Blog'
newNav2.href = '#'
newNav2.style.color = 'green'
addNav.appendChild(newNav2)

// CTA
let mainTag = document.querySelector('h1');
mainTag.textContent = siteContent['cta']['h1'];

let mainBtn = document.querySelector('button');
mainBtn.textContent = siteContent['cta']['button'];

// Main-Content
let artHeaders = document.querySelectorAll('h4');
artHeaders[0].textContent = siteContent['main-content']['features-h4'];
artHeaders[1].textContent = siteContent['main-content']['about-h4'];
artHeaders[2].textContent = siteContent['main-content']['services-h4'];
artHeaders[3].textContent = siteContent['main-content']['product-h4'];
artHeaders[4].textContent = siteContent['main-content']['vision-h4'];

let artPara = document.querySelectorAll('section p');
artPara[0].textContent = siteContent['main-content']['features-content'];
artPara[1].textContent = siteContent['main-content']['about-content'];
artPara[2].textContent = siteContent['main-content']['services-content'];
artPara[3].textContent = siteContent['main-content']['product-content'];
artPara[4].textContent = siteContent['main-content']['vision-content'];

// Contact
artHeaders[5].textContent = siteContent['contact']['contact-h4'];
artPara[5].textContent = siteContent['contact']['address'];
artPara[6].textContent = siteContent['contact']['phone'];
artPara[7].textContent = siteContent['contact']['email'];

// Footer

let copyright = document.querySelector('footer p');
copyright.textContent = siteContent['footer']['copyright'];

// Stretch - Styling Updates
document.body.style.backgroundColor = 'lightblue';
mainTag.style.color = 'purple';

artHeaders[0].style.fontSize = '1rem';
artHeaders[1].style.fontSize = '1rem';
artHeaders[2].style.fontSize = '1rem';
artHeaders[3].style.fontSize = '1rem';
artHeaders[4].style.fontSize = '1rem';

artHeaders[5].style.textAlign = 'center';
artHeaders[5].style.color = 'darkblue';
artHeaders[5].style.fontSize = '1.5rem';
artPara[5].style.textAlign = 'center';
artPara[5].style.color = 'darkblue';
artPara[5].style.fontWeight = '700';
artPara[6].style.textAlign = 'center';
artPara[6].style.color = 'darkblue';
artPara[6].style.fontWeight = '700';
artPara[7].style.textAlign = 'center';
artPara[7].style.color = 'darkblue';
artPara[7].style.fontWeight = '700';