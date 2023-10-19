let currentSlide = 1;
let isPaused = false; // Variable to check if the slideshow is paused

// Function to change the slide
const changeSlide = () => {
  if (!isPaused) {
    document.getElementById(`s${currentSlide}`).checked = true;
    currentSlide++;
    if (currentSlide > 5) {
      currentSlide = 1;
    }
  }
};

// Start the auto-scroll
let slideInterval = setInterval(changeSlide, 5000);

// Function to pause the auto-scroll
const pauseSlide = () => {
  isPaused = true;
};

// Function to resume the auto-scroll
const resumeSlide = () => {
  isPaused = false;
};

// Adding event listeners to pause and resume auto-scroll on hover
document.querySelectorAll('.zoom-container').forEach((container) => {
  container.addEventListener('mouseover', () => {
    pauseSlide();
    container.classList.add('zoomed');
    container.style.overflow = 'visible'; // Change overflow to visible when zoomed
  });
  container.addEventListener('mouseout', () => {
    resumeSlide();
    container.classList.remove('zoomed');
    container.style.overflow = 'hidden'; // Change overflow back to hidden when not zoomed
  });
  container.addEventListener('mousemove', (event) => {
    if (!container.classList.contains('zoomed')) {
      return;
    }
    const boundingRect = container.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;
    if (
      offsetX < 0 || offsetX > boundingRect.width ||
      offsetY < 0 || offsetY > boundingRect.height
    ) {
      container.classList.remove('zoomed');
      container.style.overflow = 'hidden'; // Change overflow back to hidden when not zoomed
    }
  });
});






$(".owl-carousel").on("initialized.owl.carousel", () => {
  setTimeout(() => {
    $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
    $("section").show();
  }, 200);
});

const $owlCarousel = $(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: false,
  dots:true,

  navText: [
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */
  ]
});

$owlCarousel.on("changed.owl.carousel", e => {
  $(".owl-slide-animated").removeClass("is-transitioned");

  const $currentOwlItem = $(".owl-item").eq(e.item.index);
  $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");

  const $target = $currentOwlItem.find(".owl-slide-text");
  doDotsCalculations($target);
});

$owlCarousel.on("resize.owl.carousel", () => {
  setTimeout(() => {
    setOwlDotsPosition();
  }, 50);
});

/*if there isn't content underneath the carousel*/
//$owlCarousel.trigger("refresh.owl.carousel");

setOwlDotsPosition();

function setOwlDotsPosition() {
  const $target = $(".owl-item.active .owl-slide-text");
  doDotsCalculations($target);
}

function doDotsCalculations(el) {
  const height = el.height();
  const {top, left} = el.position();
  const res = height + top + 20;

  $(".owl-carousel .owl-dots").css({
    top: `${res}px`,
    left: `${left}px`
  });
}







jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});






