// select id 
const home = id('home');
const about = id('about');
const resume = id('resume');
const service = id('service');
const portfolio = id('portfolio');
const contact = id('contact');
const side_bar = id('side_bar');
const open_nav = id('open_nav');
const open = id('open');
const close = id('close');
const logo = id('logo');
const go_top = id('go_top');
const logo_img = id('logo_img');
const light_mode = id('light_mode');
const dark_mode = id('dark_mode');
const contactForm = id('contactForm');
const email = id('email');
// selcet class
const about_link = query('.about_link');
const resume_link = query('.resume_link');
const services_link = query('.services_link');
const portfolio_link = query('.portfolio_link');
const contact_link = query('.contact_link');
const container = query('.container ');


// scroll event
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 1024) {
    if (window.scrollY > 400) {
      side_bar.classList.remove('active_left');
      close.classList.remove('show_nav');
      open.classList.add('show_nav');
      go_top.classList.add('active_top');
    } else {
      go_top.classList.remove('active_top');

    }
  }
  if (window.innerWidth >= 992) {
    side_bar.classList.add('active_left');
  }

})




// nav_li
const nav_li = all_class('.nav .ul li');
nav_li.forEach((item) => {
  item.addEventListener('click', () => {
    nav_li.forEach((item) => {
      item.classList.remove('active');
    });
    item.classList.add('active');

  });
})
// desltop_width
const desltop_width = 1200;
// laptop_width
const laptop_width = 1024;
// tablet_width
const tablet_width = 768;
// phone_width
const phone_width = 992;

if (window.innerWidth >= phone_width) {
  side_bar.classList.add('active_left');
}
// condition will be 768px and down
if (window.innerWidth <= tablet_width) {
  open_nav.classList.add('open_nav_show');
  if (open_nav.classList.contains('open_nav_show')) {
    open.addEventListener('click', () => {
      open.classList.remove('show_nav');
      close.classList.add('show_nav');
      side_bar.classList.add('active_left');

    });
    close.addEventListener('click', () => {
      open.classList.add('show_nav');
      close.classList.remove('show_nav');
      side_bar.classList.remove('active_left');
    });
  }
} else {
  open_nav.classList.remove('open_nav_show');
}
if (window.innerWidth <= laptop_width) {
  // about classes
  about.classList.remove('active');
  about.classList.remove('fade_in');
  about.classList.remove('fade_out');
  about.classList.remove('animated');
  // resume classes
  resume.classList.remove('fade_in');
  resume.classList.remove('fade_out');
  resume.classList.remove('animated');
  resume.classList.remove('hidden');
  // service classes
  service.classList.remove('fade_in');
  service.classList.remove('fade_out');
  service.classList.remove('animated');
  service.classList.remove('hidden');
  // porfolio classes
  portfolio.classList.remove('fade_in');
  portfolio.classList.remove('fade_out');
  portfolio.classList.remove('animated');
  portfolio.classList.remove('hidden');
  // contact classes
  contact.classList.remove('fade_in');
  contact.classList.remove('fade_out');
  contact.classList.remove('animated');
  contact.classList.remove('hidden');

}

// condition will be 1024px  up add event
if (window.innerWidth >= desltop_width) {
  about_link.addEventListener('click', () => {
    about.classList.add('active');
    about.classList.add('fade_in');
    about.classList.remove('fade_out');
    about.classList.add('animated');

    resume.classList.remove('fade_in');
    resume.classList.add('fade_out');
    resume.classList.remove('animated');
    resume.classList.add('hidden');

    service.classList.remove('fade_in');
    service.classList.add('fade_out');
    service.classList.remove('animated');
    service.classList.add('hidden');

    portfolio.classList.remove('fade_in');
    portfolio.classList.add('fade_out');
    portfolio.classList.remove('animated');
    portfolio.classList.add('hidden');

    contact.classList.remove('fade_in');
    contact.classList.add('fade_out');
    contact.classList.remove('animated');
    contact.classList.add('hidden');

  })
  resume_link.addEventListener('click', () => {
    about.classList.remove('active');
    about.classList.remove('fade_in');
    about.classList.add('fade_out');
    about.classList.remove('animated');
    about.classList.add('hidden');

    resume.classList.add('active');
    resume.classList.add('fade_in');
    resume.classList.remove('fade_out');
    resume.classList.add('animated');
    resume.classList.remove('hidden');

    service.classList.remove('active');
    service.classList.remove('fade_in');
    service.classList.add('fade_out');
    service.classList.remove('animated');
    service.classList.add('hidden');

    portfolio.classList.remove('active');
    portfolio.classList.remove('fade_in');
    portfolio.classList.add('fade_out');
    portfolio.classList.remove('animated');
    portfolio.classList.add('hidden');

    contact.classList.remove('active');
    contact.classList.remove('fade_in');
    contact.classList.add('fade_out');
    contact.classList.remove('animated');
    contact.classList.add('hidden');

  })
  services_link.addEventListener('click', () => {
    about.classList.remove('active');
    about.classList.remove('fade_in');
    about.classList.add('fade_out');
    about.classList.remove('animated');
    about.classList.add('hidden');

    resume.classList.remove('active');
    resume.classList.remove('fade_in');
    resume.classList.add('fade_out');
    resume.classList.remove('animated');
    resume.classList.add('hidden');

    service.classList.add('active');
    service.classList.add('fade_in');
    service.classList.remove('fade_out');
    service.classList.add('animated');
    service.classList.remove('hidden');

    portfolio.classList.remove('active');
    portfolio.classList.remove('fade_in');
    portfolio.classList.add('fade_out');
    portfolio.classList.remove('animated');
    portfolio.classList.add('hidden');

    contact.classList.remove('active');
    contact.classList.remove('fade_in');
    contact.classList.add('fade_out');
    contact.classList.remove('animated');
    contact.classList.add('hidden');
  })
  portfolio_link.addEventListener('click', () => {
    about.classList.remove('active');
    about.classList.remove('fade_in');
    about.classList.add('fade_out');
    about.classList.remove('animated');
    about.classList.add('hidden');

    resume.classList.remove('active');
    resume.classList.remove('fade_in');
    resume.classList.add('fade_out');
    resume.classList.remove('animated');
    resume.classList.add('hidden');

    service.classList.remove('active');
    service.classList.remove('fade_in');
    service.classList.add('fade_out');
    service.classList.remove('animated');
    service.classList.add('hidden');

    portfolio.classList.add('active');
    portfolio.classList.add('fade_in');
    portfolio.classList.remove('fade_out');
    portfolio.classList.add('animated');
    portfolio.classList.remove('hidden');

    contact.classList.remove('active');
    contact.classList.remove('fade_in');
    contact.classList.add('fade_out');
    contact.classList.remove('animated');
    contact.classList.add('hidden');

  })
  contact_link.addEventListener('click', () => {
    about.classList.remove('active');
    about.classList.remove('fade_in');
    about.classList.add('fade_out');
    about.classList.remove('animated');
    about.classList.add('hidden');

    resume.classList.remove('active');
    resume.classList.remove('fade_in');
    resume.classList.add('fade_out');
    resume.classList.remove('animated');
    resume.classList.add('hidden');

    service.classList.remove('active');
    service.classList.remove('fade_in');
    service.classList.add('fade_out');
    service.classList.remove('animated');
    service.classList.add('hidden');

    portfolio.classList.remove('active');
    portfolio.classList.remove('fade_in');
    portfolio.classList.add('fade_out');
    portfolio.classList.remove('animated');
    portfolio.classList.add('hidden');

    contact.classList.add('active');
    contact.classList.add('fade_in');
    contact.classList.remove('fade_out');
    contact.classList.add('animated');
    contact.classList.remove('hidden');
  })
}

light_mode.addEventListener('click', () => {
  light_mode.classList.remove('active');
  dark_mode.classList.add('active');
  container.classList.add('dark_is_on');
  logo_img.setAttribute('src', 'assets/images/logo/nk.png');

})
dark_mode.addEventListener('click', () => {
  dark_mode.classList.remove('active');
  light_mode.classList.add('active');
  container.classList.remove('dark_is_on');
  logo_img.setAttribute('src', 'assets/images/logo/nkb.png');
})
// catagory
let catagory_ul = all_class(".catagory_ul li");
catagory_ul.forEach((catagory_ul_li) => {
  catagory_ul_li.addEventListener("click", () => {
    catagory_ul.forEach((catagory_ul_li) => {
      catagory_ul_li.classList.remove("activeCaLi");
    });
    catagory_ul_li.classList.add("activeCaLi");
  });
});

let catagory_ul_li = all_class(".catagory_ul li span");
let portfolio_cnt = all_class(".portfolio_contents .single_portfolio");

let filterPortfolio = (e) => {
  query(".active").classList.remove("active");
  e.target.classList.add("active");

  portfolio_cnt.forEach((single_project) => {
    single_project.classList.add("hide");
    if (
      single_project.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      single_project.classList.remove("hide");
    }
  });
};

catagory_ul_li.forEach((span) =>
  span.addEventListener("click", filterPortfolio)
);


// typeing
var typedText = new Typed("#typedText", {
  strings: ["Web-Designer", " ", "Web-Developer", " ", "freelancer"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
});

$('.project_icon_link_galleryVew').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  }
});