

$(document).on('shopify:section:load', function(e){ 
  $('#' + e.target.id).find('[data-section]').sectionJs();
}).ready(function() {
  $('[data-section]').each(function(){ $(this).sectionJs() });
});

$.fn.sectionJs = function(){
  var $this = this;
  if($this.data('section') == "headerSection") {
    $this.headerSection();
  }else if($this.data('section') == "SlideshowActivation") {
    $this.find('.ltn__slide-one-active').SlideshowActivation();
  }else if($this.data('section') == "tabWithProduct") {
    $this.find('.ltn__tab-product-slider-one-active').tabWithProduct();
  }else if($this.data('section') == "countdownBanner") {
    $this.countdownBanner();
  }else if($this.data('section') == "featuredCollection") {
    $this.find('.ltn__product-slider-item-four-active').featuredCollection();
  }else if($this.data('section') == "testimonialTab") {
    $this.testimonialTab();
  }else if($this.data('section') == "brandLogo") {
    $this.find('.ltn__brand-logo-active').brandLogo();
  }else if($this.data('section') == "latestBlog") {
    $this.find('.ltn__blog-slider-one-active').latestBlog();
  }else if($this.data('section') == "footerActive") {
    $this.footerActive();
  }else if($this.data('section') == "sliderWithPopupVideo") {
    $this.find('.ltn__slide-one-active').sliderWithPopupVideo();
  }else if($this.data('section') == "serviceSectionTwo") {
    $this.serviceSectionTwo();
  }else if($this.data('section') == "aboutWithContact") {
    $this.aboutWithContact();
  }else if($this.data('section') == "serviceInfoCounter") {
    $this.serviceInfoCounter();
  }else if($this.data('section') == "serviceBlog") {
    $this.find('.ltn__image-slider-3-active').serviceBlog();
  }else if($this.data('section') == "tabWithProduct2") {
    $this.find('.ltn__tab-product-slider-one-active').tabWithProduct2();
  }else if($this.data('section') == "serviceImage") {
    $this.find('.ltn__image-slider-2-active').serviceImage();
  }else if($this.data('section') == "serviceBlogTwo") {
    $this.find('.ltn__image-slider-4-active').serviceBlogTwo();
  }else if($this.data('section') == "popupVideoBanner") {
    $this.popupVideoBanner();
  }else if($this.data('section') == "testimonialSlider") {
    $this.find('.ltn__testimonial-slider-2-active').testimonialSlider();
  }else if($this.data('section') == "slideshowTwoActivation") {
    $this.find('.ltn__slide-one-active').slideshowTwoActivation();
  }else if($this.data('section') == "testimonialSliderThree") {
    $this.find('.ltn__testimonial-slider-3-active').testimonialSliderThree();
  }else if($this.data('section') == "aboutService") {
    $this.aboutService();
  }else if($this.data('section') == "latestBlog2") {
    $this.find('.ltn__blog-slider-one-active').latestBlog2();
  }else if($this.data('section') == "popupVideoBanner2") {
    $this.find('.ltn__slide-one-active').popupVideoBanner2();
  }else if($this.data('section') == "searchInventory2") {
    $this.searchInventory2();
  }else if($this.data('section') == "productTemplate") {
    $this.productTemplate();
  }else if($this.data('section') == "teamSkill") {
    $this.teamSkill();
  }else if($this.data('section') == "contactForm") {
    $this.contactForm();
  }else if($this.data('section') == "ourJourney") {
    $this.ourJourney();
  }else if($this.data('section') == "pricingTable") {
    $this.pricingTable();
  }else if($this.data('section') == "passwordPage") {
    $this.passwordPage();
  }else if($this.data('section') == "featuredProduct") {
    $this.featuredProduct();
  }else if($this.data('section') == "countdownBanner2") {
    $this.countdownBanner2();
  }else if($this.data('section') == "searchInventory3") {
    $this.searchInventory3();
  }else if($this.data('section') == "heroBanner2") {
    $this.heroBanner2();
  }else if($this.data('section') == "slideshowCategoryMenu") {
    $this.find('.ltn__slide-one-active').slideshowCategoryMenu();
  }else if($this.data('section') == "featuredCollectionList2") {
    $this.find('.ltn__small-product-slider-active').featuredCollectionList2();
  }else if($this.data('section') == "categoryList2") {
    $this.find('.ltn__category-slider-active').categoryList2();
  }else if($this.data('section') == "categoryList3") {
    $this.find('.ltn__category-slider-active').categoryList3();
  }else if($this.data('section') == "collectionTemplate") {
    $this.collectionTemplate();
  }else if($this.data('section') == "slideshowThreeActivation") {
    $this.find('.ltn__slide-one-active').slideshowThreeActivation();
  }else{}   
}

// 36. Header menu sticky
$.fn.headerSection = function() {
  /* --------------------------------------------------------
            1. Variables
        --------------------------------------------------------- */
  var $window = $(window),
      $body = $('body');
  
  $(window).on('scroll',function() {    
    var scroll = $(window).scrollTop();
    if (scroll < 445) {
      $(".ltn__header-sticky").removeClass("sticky-active");
    } else {
      $(".ltn__header-sticky").addClass("sticky-active");
    }
  }); 

  /* --------------------------------------------------------
            2. Mobile Menu
        --------------------------------------------------------- */
  /* ---------------------------------
            Utilize Function 
        ----------------------------------- */
  (function () {
    var $ltn__utilizeToggle = $('.ltn__utilize-toggle'),
        $ltn__utilize = $('.ltn__utilize'),
        $ltn__utilizeOverlay = $('.ltn__utilize-overlay'),
        $mobileMenuToggle = $('.mobile-menu-toggle');
    $ltn__utilizeToggle.on('click', function (e) {
      e.preventDefault();
      var $this = $(this),
          $target = $this.attr('href');
      $body.addClass('ltn__utilize-open');
      $($target).addClass('ltn__utilize-open');
      $ltn__utilizeOverlay.fadeIn();
      if ($this.parent().hasClass('mobile-menu-toggle')) {
        $this.addClass('close');
      }
    });
    $('.ltn__utilize-close, .ltn__utilize-overlay').on('click', function (e) {
      e.preventDefault();
      $body.removeClass('ltn__utilize-open');
      $ltn__utilize.removeClass('ltn__utilize-open');
      $ltn__utilizeOverlay.fadeOut();
      $mobileMenuToggle.find('a').removeClass('close');
    });
  })();

  /* ------------------------------------
            Utilize Menu
        ----------------------------------- */
  function mobileltn__utilizeMenu() {
    var $ltn__utilizeNav = $('.ltn__utilize-menu, .overlay-menu'),
        $ltn__utilizeNavSubMenu = $ltn__utilizeNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $ltn__utilizeNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

    /*Category Sub Menu Toggle*/
    $ltn__utilizeNav.on('click', 'li a, .menu-expand', function (e) {
      var $this = $(this);
      if ($this.attr('href') === '#' || $this.hasClass('menu-expand')) {
        e.preventDefault();
        if ($this.siblings('ul:visible').length) {
          $this.parent('li').removeClass('active');
          $this.siblings('ul').slideUp();
          $this.parent('li').find('li').removeClass('active');
          $this.parent('li').find('ul:visible').slideUp();
        } else {
          $this.parent('li').addClass('active');
          $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
          $this.closest('li').siblings('li').find('ul:visible').slideUp();
          $this.siblings('ul').slideDown();
        }
      }
    });
  }
  mobileltn__utilizeMenu();

  /* --------------------------------------------------------
            3. Mega Menu
        --------------------------------------------------------- */
  $('.mega-menu').each(function(){
    if($(this).children('li').length){
      var ulChildren = $(this).children('li').length;
      $(this).addClass('column-'+ulChildren)
    }
  });


  /* Remove Attribute( href ) from sub-menu title in mega-menu */
  /*
        $('.mega-menu > li > a').removeAttr('href');
        */


  /* Mega Munu  */
  // $(".mega-menu").parent().css({"position": "inherit"});
  $(".mega-menu").parent().addClass("mega-menu-parent");


  /* Add space for Elementor Menu Anchor link */
  $( window ).on( 'elementor/frontend/init', function() {
    elementorFrontend.hooks.addFilter( 'frontend/handlers/menu_anchor/scroll_top_distance', function( scrollTop ) {
      return scrollTop - 75;
    });
  });


  /* ---------------------------------------------------------
            4. One Page Navigation ( jQuery Easing Plugin )
        --------------------------------------------------------- */
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });


  /* --------------------------------------------------------
            5. Toogle Search
        -------------------------------------------------------- */
  // Handle click on toggle search button
  $('.header-search-1').on('click', function() {
    $('.header-search-1, .header-search-1-form').toggleClass('search-open');
    return false;
  });
  
  $(".ltn__currency-menu > ul > li > a").removeAttr("href");

  // Language and Currency Activation
  class LocalizationForm extends HTMLElement {
    constructor() {
      super();
      this.elements = {
        input: this.querySelector('input[name="language_code"], input[name="country_code"]'),
        button: this.querySelector('button'),
        panel: this.querySelector('ul'),
      };
      this.elements.button.addEventListener('click', this.openSelector.bind(this));
      this.elements.button.addEventListener('focusout', this.closeSelector.bind(this));
      this.addEventListener('keyup', this.onContainerKeyUp.bind(this));
  
      this.querySelectorAll('a').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));
    }
  
    hidePanel() {
      this.elements.button.setAttribute('aria-expanded', 'false');
      this.elements.panel.setAttribute('hidden', true);
    }
  
    onContainerKeyUp(event) {
      if (event.code.toUpperCase() !== 'ESCAPE') return;
  
      this.hidePanel();
      this.elements.button.focus();
    }
  
    onItemClick(event) {
      event.preventDefault();
      const form = this.querySelector('form');
      this.elements.input.value = event.currentTarget.dataset.value;
      if (form) form.submit();
    }
  
    openSelector() {
      this.elements.button.focus();
      this.elements.panel.toggleAttribute('hidden');
      this.elements.button.setAttribute('aria-expanded', (this.elements.button.getAttribute('aria-expanded') === 'false').toString());
    }
  
    closeSelector(event) {
      const shouldClose = event.relatedTarget && event.relatedTarget.nodeName === 'BUTTON';
      if (event.relatedTarget === null || shouldClose) {
        this.hidePanel();
      }
    }
  }
  
  customElements.define('localization-form', LocalizationForm);

};

// 15. Slider One Active
$.fn.SlideshowActivation = function() {
  var SlideshowActivation_slider = this;
  SlideshowActivation_slider.slick({
    arrows: true,
    dots: true,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  }).on('afterChange', function(){
    new WOW().init();
  });
};

// 17. Tab Product Slider One
$.fn.tabWithProduct = function() {
  var tabWithProduct_slider = this;
  tabWithProduct_slider.slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
    
  });
};

// Countdown Banner Active
$.fn.countdownBanner = function() {
  /* --------------------------------------------------------
            29. Countdown
        --------------------------------------------------------- */
  $('[data-countdown].ltn__countdown-1').each(function () {

    var $this = $(this),
        finalDate = $(this).data('countdown');
    if (!$this.hasClass('countdown-full-format')) {
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<div class="single"><h6>%D</h6><p>Days</p></div> <div class="single"><h6>%H</h6><p>Hrs</p></div> <div class="single"><h6>%M</h6><p>Mins</p></div> <div class="single"><h6>%S</h6><p>Secs</p></div>'));
      });
    } else {
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<div class="single"><h6>%Y</h6><p>Years</p></div> <div class="single"><h6>%m</h6><p>Months</p></div> <div class="single"><h6>%W</h6><p>Weeks</p></div> <div class="single"><h6>%d</h6><p>Days</p></div> <div class="single"><h6>%H</h6><p>Hrs</p></div> <div class="single"><h6>%M</h6><p>Mins</p></div> <div class="single"><h6>%S</h6><p>Secs</p></div>'));
      });
    }

  });
};

// 16. Product Slider One
$.fn.featuredCollection = function() {
  var $featuredCollection_slider = this;
  $featuredCollection_slider.slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    
  });
};

// 36. Testimonial Slider 4 Active
$.fn.testimonialTab = function() {
  var $ltn__testimonial_quote_slider = $('.ltn__testimonial-slider-4-active');
  $ltn__testimonial_quote_slider.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    fade: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    
    responsive: [
      {
        breakpoint: 992,
        settings: {
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 580,
        settings: {
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });

  /* have to write code for bind it with static images */
  $ltn__testimonial_quote_slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var liIndex = nextSlide + 1;
    var slideImageliIndex = (slick.slideCount == liIndex) ? liIndex - 1 : liIndex;
    var cart = $('.ltn__testimonial-slider-4 .slick-slide[data-slick-index="' + slideImageliIndex + '"]').find('.ltn__testimonial-image');
    var imgtodrag = $('.ltn__testimonial-quote-menu li:nth-child(' + liIndex + ')').find("img").eq(0);
    if (imgtodrag) {
      AnimateTestimonialImage(imgtodrag, cart)
    }
  });

  /* have to write code for bind static image to slider accordion to slide index of images */
  $(document).on('click', '.ltn__testimonial-quote-menu li', function (e) {
    var el = $(this);
    var elIndex = el.prevAll().length;
    $ltn__testimonial_quote_slider.slick('slickGoTo', elIndex);
    var cart = $('.ltn__testimonial-slider-4 .slick-slide[data-slick-index="' + elIndex + '"]').find('.ltn__testimonial-image');
    var imgtodrag = el.find("img").eq(0);
    if (imgtodrag) {
      AnimateTestimonialImage(imgtodrag, cart)
    }

  });
  
  function AnimateTestimonialImage(imgtodrag, cart) {
    var imgclone = imgtodrag.clone().offset({
      top: imgtodrag.offset().top,
      left: imgtodrag.offset().left
    }).css({
      'opacity': '0.5',
      'position': 'absolute',
      'height': '130px',
      'width': '130px',
      'z-index': '100'
    }).addClass('quote-animated-image').appendTo($('body')).animate({
      'top': cart.offset().top + 10,
      'left': cart.offset().left + 10,
      'width': 130,
      'height': 130
    }, 300);


    imgclone.animate({
      'visibility': 'hidden',
      'opacity': '0'
    }, function () {
      $(this).remove()
    });
  }
};

// 27. Brand Logo Active
$.fn.brandLogo = function() {
  var $brandLogoSlider = this;
  $brandLogoSlider.slick({
    rtl: false,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
    
  });
};

// 18. Blog Slider One Active
$.fn.latestBlog = function() {
  var $latestBlogSlider = this;
  $latestBlogSlider.slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
    
  });
  // 7. Background Image
  var $backgroundImage = $('.bg-image');
  $backgroundImage.each(function() {
    var $this = $(this),
        $bgImage = $this.data('bg');
    $this.css('background-image', 'url('+$bgImage+')');
  });
};

// Footer Active
$.fn.footerActive = function() {
  // 6. Current Year Copyright area
  $(".current-year").text((new Date).getFullYear());
  // 7. Background Image
  var $backgroundImage = $('.bg-image');
  $backgroundImage.each(function() {
    var $this = $(this),
        $bgImage = $this.data('bg');
    $this.css('background-image', 'url('+$bgImage+')');
  });

  $('.widget-collapse .footer-title').on("click", function(){
    $(this).siblings('.widget-collapse-hide').slideToggle();
    $(this).toggleClass('widget-collapse-show');
  });
  
};

// 15. Slider One Active
$.fn.sliderWithPopupVideo = function() {
  var $sliderWithPopupVideo_slider = this;
  $sliderWithPopupVideo_slider.slick({
    arrows: true,
    dots: true,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  }).on('afterChange', function(){
    new WOW().init();
  });
  
  /* --------------------------------------------------------
            14. LightCase jQuery Active
        --------------------------------------------------------- */
  $('a[data-rel^=lightcase]').lightcase({
    transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
    swipe: true,
    maxWidth: 1170,
    maxHeight: 600,
  });
};

// Service Two Active
$.fn.serviceSectionTwo = function() {
  // 7. Background Image
  var $backgroundImage = $('.bg-image');
  $backgroundImage.each(function() {
    var $this = $(this),
        $bgImage = $this.data('bg');
    $this.css('background-image', 'url('+$bgImage+')');
  });
};

// About with Contact Active
$.fn.aboutWithContact = function() {
  // 10. Nice Select
  $('.get-a-quote-wrap select').niceSelect();
};

// Counter Active
$.fn.serviceInfoCounter = function() {
  /* --------------------------------------------------------
            30. Counter Up
        --------------------------------------------------------- */
  // $('.ltn__counter').counterUp();

  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  $('.counter').addClass('animated fadeInDownBig');  
  $('h3').addClass('animated fadeIn');
};

// 25. Image Slide - 3 Active
$.fn.serviceBlog = function() {
  var $serviceBlogSlider = this;
  $serviceBlogSlider.slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '0px',
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
    
  });
  
  /* --------------------------------------------------------
            14. LightCase jQuery Active
        --------------------------------------------------------- */
  $('a[data-rel^=lightcase]').lightcase({
    transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
    swipe: true,
    maxWidth: 1170,
    maxHeight: 600,
  });
};

// Tab Product Slider Two
$.fn.tabWithProduct2 = function() {
  var $tabWithProduct_slider = this;
  $tabWithProduct_slider.slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
    
  });
};

// 25. Image Slide - 3 Active
$.fn.serviceImage = function() {
  var $serviceImageSlider = this;
  $serviceImageSlider.slick({
    rtl: false,
    arrows: true,
    loop: false,
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '80px',
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
    
  });
  
  /* --------------------------------------------------------
            14. LightCase jQuery Active
        --------------------------------------------------------- */
  $('a[data-rel^=lightcase]').lightcase({
    transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
    swipe: true,
    maxWidth: 1170,
    maxHeight: 600,
  });
};

// 26. Image Slide - 4 Active
$.fn.serviceBlogTwo = function() {
  var $serviceBlogTwoSlider = this;
  $serviceBlogTwoSlider.slick({
    rtl: false,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '0px',
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
    
  });
  
  /* --------------------------------------------------------
            14. LightCase jQuery Active
        --------------------------------------------------------- */
  $('a[data-rel^=lightcase]').lightcase({
    transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
    swipe: true,
    maxWidth: 1170,
    maxHeight: 600,
  });
};

// 18. Blog Slider One Active
$.fn.popupVideoBanner = function() {
  /* --------------------------------------------------------
            14. LightCase jQuery Active
        --------------------------------------------------------- */
  $('a[data-rel^=lightcase]').lightcase({
    transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
    swipe: true,
    maxWidth: 1170,
    maxHeight: 600,
  });
  
  // 7. Background Image
  var $backgroundImage = $('.bg-image');
  $backgroundImage.each(function() {
    var $this = $(this),
        $bgImage = $this.data('bg');
    $this.css('background-image', 'url('+$bgImage+')');
  });
};

// 20. Testimonial Slider - 2 Active
$.fn.testimonialSlider = function() {
  var $testimonialSliderActive = this;
  $testimonialSliderActive.slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
    
  });
};

// Slider Two Active
$.fn.slideshowTwoActivation = function() {
  var $slideshowTwoActivation_slider = this;
  $slideshowTwoActivation_slider.slick({
    arrows: true,
    dots: true,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  }).on('afterChange', function(){
    new WOW().init();
  });
  
  // 7. Background Image
  var $backgroundImage = $('.bg-image');
  $backgroundImage.each(function() {
    var $this = $(this),
        $bgImage = $this.data('bg');
    $this.css('background-image', 'url('+$bgImage+')');
  });
};

// Slider Two Active
$.fn.testimonialSliderThree = function() {
  var $testimonialSliderThree_slider = this;
  $testimonialSliderThree_slider.slick({
    arrows: true,
    centerMode: true,
    centerPadding: '80px',
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
    
  });
};

// About Service Active
$.fn.aboutService = function() {
  /* --------------------------------------------------------
            35. Parallax active ( About Section  )
        -------------------------------------------------------- */
  /* 
        > 1 page e 2 ta call korle 1 ta kaj kore 
        */
  if($('.ltn__parallax-effect-active').length){
    var scene = $('.ltn__parallax-effect-active').get(0);
    var parallaxInstance = new Parallax(scene);
  }
};

// 18. Blog Slider Two Active
$.fn.latestBlog2 = function() {
  var $latestBlog2Slider = this;
  $latestBlog2Slider.slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
    
  });
};

// 18. Blog Slider One Active
$.fn.popupVideoBanner2 = function() {
  var $popupVideoBanner2_slider = this;
  $popupVideoBanner2_slider.slick({
    arrows: true,
    dots: true,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  }).on('afterChange', function(){
    new WOW().init();
  });
  /* --------------------------------------------------------
            14. LightCase jQuery Active
        --------------------------------------------------------- */
  $('a[data-rel^=lightcase]').lightcase({
    transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
    swipe: true,
    maxWidth: 1170,
    maxHeight: 600,
  });

  // 7. Background Image
  var $backgroundImage = $('.bg-image');
  $backgroundImage.each(function() {
    var $this = $(this),
        $bgImage = $this.data('bg');
    $this.css('background-image', 'url('+$bgImage+')');
  });
};

// Search Inventory 2 Active
$.fn.searchInventory2 = function() {
  // 7. Background Image
  var $backgroundImage = $('.bg-image');
  $backgroundImage.each(function() {
    var $this = $(this),
        $bgImage = $this.data('bg');
    $this.css('background-image', 'url('+$bgImage+')');
  });
};

// Search Inventory 3 Active
$.fn.searchInventory3 = function() { 
  var SlideshowActivation_slider = this;
  SlideshowActivation_slider.slick({
    arrows: true,
    dots: true,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  }).on('afterChange', function(){
    new WOW().init();
  });
  
  // 7. Background Image
  var $backgroundImage = $('.bg-image');
  $backgroundImage.each(function() {
    var $this = $(this),
        $bgImage = $this.data('bg');
    $this.css('background-image', 'url('+$bgImage+')');
  });
};

// Product Template Active
$.fn.productTemplate = function() {
  /* --------------------------------------------------------
            12. Product Details Page
        --------------------------------------------------------- */
  $('.ltn__shop-details-large-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.ltn__shop-details-small-img',
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    
  });
  $('.ltn__shop-details-small-img').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.ltn__shop-details-large-img',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  var $window_2 = $(window);
      $window_2.on('scroll', function () {
        var scroll = $window_2.scrollTop();
        if (scroll < 900) {
          $(".product-addtocart-sticky").removeClass("is-sticky-2");
        } else {
          $(".product-addtocart-sticky").addClass("is-sticky-2");
        }
      });
};

// Team Skill Active
$.fn.teamSkill = function() {
  /* --------------------------------------------------------
            14. LightCase jQuery Active
        --------------------------------------------------------- */
  $('a[data-rel^=lightcase]').lightcase({
    transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
    swipe: true,
    maxWidth: 1170,
    maxHeight: 600,
  });
  
  // 7. Background Image
  var $backgroundImage = $('.bg-image');
  $backgroundImage.each(function() {
    var $this = $(this),
        $bgImage = $this.data('bg');
    $this.css('background-image', 'url('+$bgImage+')');
  });
};

// Contact Form Active
$.fn.contactForm = function() {
  // 10. Nice Select
  $('.ltn__contact-message-area select').niceSelect();
};

// Our Journey Active
$.fn.ourJourney = function() {
  /* --------------------------------------------------------
            11. Default active and hover item active
        --------------------------------------------------------- */
  var ltn__active_item = $('.ltn__our-journey-wrap ul li')
  ltn__active_item.mouseover(function() {
    ltn__active_item.removeClass('active');
    $(this).addClass('active');
  });
};

// Pricing Table Active
$.fn.pricingTable = function() {
  /* --------------------------------------------------------
            11. Default active and hover item active
        --------------------------------------------------------- */
  var ltn__active_item = $('.ltn__pricing-plan-item')
  ltn__active_item.mouseover(function() {
    ltn__active_item.removeClass('active');
    $(this).addClass('active');
  });
};

// Countdown Banner Active
$.fn.passwordPage = function() {
  /* --------------------------------------------------------
            29. Countdown
        --------------------------------------------------------- */
  $('.ltn__coming-soon-area [data-countdown].ltn__countdown').each(function () {

    var $this = $(this),
        finalDate = $(this).data('countdown');
    if (!$this.hasClass('countdown-full-format')) {
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<div class="single"><h1>%D</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'));
      });
    } else {
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<div class="single"><h1>%Y</h1><p>Years</p></div> <div class="single"><h1>%m</h1><p>Months</p></div> <div class="single"><h1>%W</h1><p>Weeks</p></div> <div class="single"><h1>%d</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'));
      });
    }

  });
};

// Featured product active js
$.fn.featuredProduct = function() {
  $('.featured-product [data-countdown]').each(function () {
    var $this = $(this),
        finalDate = $(this).data('countdown');
    if (!$this.hasClass('countdown-full-format')) {
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<div class="single"><h6>%D</h6><p>Days</p></div> <div class="single"><h6>%H</h6><p>Hrs</p></div> <div class="single"><h6>%M</h6><p>Mins</p></div> <div class="single"><h6>%S</h6><p>Secs</p></div>'));
      });
    } else {
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<div class="single"><h6>%Y</h6><p>Years</p></div> <div class="single"><h6>%m</h6><p>Months</p></div> <div class="single"><h6>%W</h6><p>Weeks</p></div> <div class="single"><h6>%d</h6><p>Days</p></div> <div class="single"><h6>%H</h6><p>Hrs</p></div> <div class="single"><h6>%M</h6><p>Mins</p></div> <div class="single"><h6>%S</h6><p>Secs</p></div>'));
      });
    }
  });
};

// Countdown Banner 2 Active
$.fn.countdownBanner2 = function() {
  /* --------------------------------------------------------
            29. Countdown
        --------------------------------------------------------- */
  $('[data-countdown].ltn__countdown-3').each(function () {

    var $this = $(this),
        finalDate = $(this).data('countdown');
    if (!$this.hasClass('countdown-full-format')) {
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<div class="single"><h6>%D</h6><p>Days</p></div> <div class="single"><h6>%H</h6><p>Hrs</p></div> <div class="single"><h6>%M</h6><p>Mins</p></div> <div class="single"><h6>%S</h6><p>Secs</p></div>'));
      });
    } else {
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<div class="single"><h6>%Y</h6><p>Years</p></div> <div class="single"><h6>%m</h6><p>Months</p></div> <div class="single"><h6>%W</h6><p>Weeks</p></div> <div class="single"><h6>%d</h6><p>Days</p></div> <div class="single"><h6>%H</h6><p>Hrs</p></div> <div class="single"><h6>%M</h6><p>Mins</p></div> <div class="single"><h6>%S</h6><p>Secs</p></div>'));
      });
    }

  });
};

// Search Inventory 3 Active
$.fn.heroBanner2 = function() { 
  var SlideshowActivation_slider = this;
  SlideshowActivation_slider.slick({
    arrows: true,
    dots: true,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  }).on('afterChange', function(){
    new WOW().init();
  });
  
  // 7. Background Image
  var $backgroundImage = $('.bg-image');
  $backgroundImage.each(function() {
    var $this = $(this),
        $bgImage = $this.data('bg');
    $this.css('background-image', 'url('+$bgImage+')');
  });
};

// 15. Slider + Category Menu
$.fn.slideshowCategoryMenu = function() {
  var slideshowCategoryMenu_slider = this;
  slideshowCategoryMenu_slider.slick({
    arrows: false,
    dots: true,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  }).on('afterChange', function(){
    new WOW().init();
  });
  
  
  /* --------------------------------------------------------
    3-2. Category Menu
--------------------------------------------------------- */

  $('.ltn__category-menu-title').on('click', function(){
    $('.ltn__category-menu-toggle').slideToggle(500);
  });	

  /* Category Menu More Item show */
  $('.ltn__category-menu-more-item-parent').on('click', function(){
    $('.ltn__category-menu-more-item-child').slideToggle();
    $(this).toggleClass('rx-change');

  });

  /* Category Submenu Column Count */
//   $('.ltn__category-submenu').each(function(){
//     if($(this).children('li').length){
//       var ulChildren = $(this).children('li').length;
//       $(this).addClass('ltn__category-column-no-'+ulChildren)
//     }
//   });

  /* Category Menu Responsive */
  function ltn__CategoryMenuToggle(){
    $('.ltn__category-menu-toggle .ltn__category-menu-drop > a').on('click', function(){
      if($(window).width() < 991){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp();
        }
        else {
          element.addClass('open');
          element.children('ul').slideDown();
          element.siblings('li').children('ul').slideUp();
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp();
        }
      }
    });
    $('.ltn__category-menu-toggle .ltn__category-menu-drop > a').append('<span class="expand"></span>');
  }
  ltn__CategoryMenuToggle();
  
};


// 17. Small Product Slider One
$.fn.featuredCollectionList2 = function() {
  var $featuredCollectionList2Slider = this;
  $featuredCollectionList2Slider.slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
};


// Category Slider 2
$.fn.categoryList2 = function() {
  var $categoryList2Slider = this;
  $categoryList2Slider.slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
    
  });
};



// Category Slider 3
$.fn.categoryList3 = function() {
  var $categoryList3Slider = this;
  $categoryList3Slider.slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>'
    
  });
};

// Category Slider 3
$.fn.collectionTemplate = function() {
   /* Slidebar collapse */ 
  $('.widget-collapse .ltn__widget-title').on("click", function(){
    $(this).siblings('.widget-collapse-hide').slideToggle();
    $(this).toggleClass('widget-collapse-show');
  });

  $('.collection-filter-title').on("click", function(){
    $(this).siblings('.filter-collapse-hide').slideToggle();
    $(this).toggleClass('filter-collapse-show');
  });
  
  $('input[type="checkbox"]').click(function() {
    setTimeout(function() {
      $('form[name="storefrontfilter"]').submit();
    }, 500);
  });

  // Filter Drawer
  $('.collection-filter-drawer-title').on('click', function() {
      $('.ltn__utilize-cart-menu').addClass('ltn__utilize-open');
      $('body').addClass('ltn__utilize-open');
      $('.ltn__utilize-overlay').fadeIn();
  });
};


// 15. Slider One Active
$.fn.slideshowThreeActivation = function() {
  var $slideshowThreeActivation_slider = this;
  $slideshowThreeActivation_slider.slick({
    arrows: true,
    autoplaySpeed: 5000,
    dots: true,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    prevArrow: '<a class="slick-prev"><i class="fas fa-chevron-left"></i></a>',
    nextArrow: '<a class="slick-next"><i class="fas fa-chevron-right"></i></a>',
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          dots: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          dots: true,
        }
      }
    ]
  }).on('afterChange', function(){
    new WOW().init();
  });
};


(function($) {
  "use strict";

  jQuery(document).ready(function(){

    /* --------------------------------------------------------
            1. Variables
        --------------------------------------------------------- */
    var $window = $(window),
        $body = $('body');




    /* ---------------------------------------------------------
            8. wow js init
        --------------------------------------------------------- */
    new WOW().init();


    /* ---------------------------------------------------------
            9. Tooltip
        --------------------------------------------------------- */
    $('[data-toggle="tooltip"]').tooltip();


    /* --------------------------------------------------------
            10. Nice Select
        --------------------------------------------------------- 
        $('select').niceSelect();

        */ 


    /* --------------------------------------------------------
            33. Quantity plus minus
        -------------------------------------------------------- */
      jQuery('<div class="quantity-button quantity-down dec qtybtn qtybutton">-</div>').insertBefore('.quantity input');
      jQuery('<div class="quantity-button quantity-up inc qtybtn qtybutton">+</div>').insertAfter('.quantity input');
      jQuery('.quantity').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');
    
        btnUp.click(function() {
          var oldValue = parseFloat(input.val());
          if (oldValue >= max) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue + 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
        });
    
        btnDown.click(function() {
          var oldValue = parseFloat(input.val());
          if (oldValue <= min) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue - 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
        });
      });

    /* ----------------------------
            AOS Scroll Animation 
        -------------------------------*/
        AOS.init({
            offset: 10,
            duration: 1000,
            once: true,
            easing: 'ease',
        });

      // Product grid color variant activation code. 
    $('.product-color li.grid-swatch-selector label').click(function(){
      $('li.grid-swatch-selector label').removeClass("active");
      jQuery(this).addClass('active');
      var variantURL = jQuery(this).parent().find('.product-url a').attr('href');
      
      var variantImage = jQuery(this).parent().find('.hidden a').attr('href');
      jQuery(this).parents('.product-wrapper').find('.popup_cart_image').attr({ src: variantImage, srcset: variantImage }); 

      jQuery(this).parents('.product-wrapper').find('.product-title a').attr({ href: variantURL });
      jQuery(this).parents('.product-wrapper').find('.product-img > a').attr({ href: variantURL });
      return false;
    });
  
      // Cart Drawer
      $('.ajax-spin-cart-drawer').on('click', function() {
        setTimeout(function () {
          $('#ltn__utilize-cart-menu').addClass('ltn__utilize-open');
          $('body').addClass('ltn__utilize-open');
          $('.ltn__utilize-overlay').fadeIn();
        },1000);
      });

  });

  
/*-----------------
            preloader
        ------------------*/
  $(window).on('load',function(){
    if($('#preloader').length){
      var preLoder = $("#preloader");
      preLoder.fadeOut(1000);
    };
  });

})(jQuery);