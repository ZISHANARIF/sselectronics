function stickyHeader() {
    if ($('.mid-bar').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.mid-bar').addClass('stricky-fixed');
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.mid-bar').removeClass('stricky-fixed');
        }
    };
}

jQuery(window).on('scroll', function () {
    (function ($) {
        stickyHeader();
    })(jQuery);
});

if ($(".navigation").length) {
    $(".navigation .navbar button").on("click", function () {
        $(".navigation .menu").slideToggle();
        $(this).toggleClass('open');
        return false;
    });
    $(".navigation .ls-submenu").children("a").append(function () {
        return '<button class="dropdown-expander"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g  stroke-width="1"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g > <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="currentColor"></path> </g></svg></button>';
    });
}

if (document.documentElement.clientWidth < 1023) {
    $(".navigation .menu .dropdown-expander").on("click", function () {
        $(this).parent().parent().children(".ls-dropdown").slideToggle();
        console.log($(this).parents("li"));
        console.log($(this).parents().children(".dropdown-expander").toggleClass("rotated"));
        return false
    })
    $(document).click(function (e) {
        if (!$(e.target).closest('.navigation .navbar button').length) {
            $('.navigation .menu').stop(true).slideUp();
            $(".navigation .navbar button").removeClass('open');

        }
    });
}

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: false
});

wow.init();





        // **************************faq section code*********************************************
  // document.addEventListener('DOMContentLoaded', function() {
  //           const leftSection = document.getElementById('leftSection');
  //           const faqItems = document.querySelectorAll('.faq-item');
  //           const faqQuestions = document.querySelectorAll('.faq-question');
            
  //           let openCount = 0;
  //           const baseHeight = 400;
  //           const expansionHeight = 80;
             

  //           function updateLeftSectionHeight() {
  //               const newHeight = baseHeight + (openCount * expansionHeight);
  //               leftSection.style.minHeight = newHeight + 'px';
  //           }

  //           faqQuestions.forEach((question, index) => {
  //               question.addEventListener('click', function() {
  //                   const faqItem = this.parentNode;
  //                   const isActive = faqItem.classList.contains('active');

                  
  //                   faqItems.forEach(item => {
  //                       if (item !== faqItem && item.classList.contains('active')) {
  //                           item.classList.remove('active');
  //                           openCount--;
  //                       }
  //                   });

  //                   if (isActive) {
  //                       faqItem.classList.remove('active');
  //                       openCount--;
  //                   } else {
  //                       faqItem.classList.add('active');
  //                       openCount++;
  //                   }

  //                   updateLeftSectionHeight();
  //               });
  //           });

  //           updateLeftSectionHeight();
  //       });




  // ************************swiper section code of ur partners********************************

var swiper = new Swiper(".mySwiper2", {
slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  speed: 6000, // controls continuous speed
  allowTouchMove: false, // prevent user from stopping it
  autoplay: {
    delay: 0,      // no delay at all
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});


         // *********************************************new faq section code page********************************

 document.addEventListener('DOMContentLoaded', function () {
            const customAccordions = document.querySelectorAll('.custom-accordion');

            customAccordions.forEach(accordion => {
                const questions = accordion.querySelectorAll('.custom-accordion-question');
                
                questions.forEach(question => {
                    question.addEventListener('click', function () {
                        const parentItem = this.closest('.custom-accordion-item');

                        // This is your logic: close others in the same accordion
                        accordion.querySelectorAll('.custom-accordion-item').forEach(item => {
                            if (item !== parentItem) {
                                item.classList.remove('active');
                            }
                        });
                        
                        // Toggle the clicked item
                        parentItem.classList.toggle('active');
                    });
                });
            });
        });


      

     
     

    // ******************************progress bar scroll top js*****************************

const btn = document.getElementById("scrollTopBtn");
const circle = document.getElementById("progressCircle");
const circumference = 2 * Math.PI * 20;

circle.style.strokeDasharray = circumference;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;

  const offset = circumference - scrollPercent * circumference;
  circle.style.strokeDashoffset = offset;

  // Show / hide button
  btn.style.display = scrollTop > 200 ? "block" : "none";
});

// Scroll to top
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// **************************star rating section code*******************************



document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".unique-star-rating").forEach(function (container) {

        const stars = container.querySelectorAll(".unique-starR");
        const inputField = container.querySelector("#rating-value");

        stars.forEach((star, index) => {

            star.addEventListener("click", function () {
                let current = star.getAttribute("data-state") || "empty"; 
                let starValue = index + 1;
                let rating = 0;

                // cycle empty → half → full → empty
                if (current === "empty") {
                    star.setAttribute("data-state", "half");
                    rating = starValue - 0.5;
                } 
                else if (current === "half") {
                    star.setAttribute("data-state", "full");
                    rating = starValue;
                } 
                else {
                    star.setAttribute("data-state", "empty");
                    rating = starValue - 1;
                }

                updateStars(stars);

                inputField.value = rating;
            });
        });

    });

    // Update visual stars based on their data-state
    function updateStars(stars) {
        stars.forEach((star, index) => {
            let state = star.getAttribute("data-state") || "empty";
            star.classList.remove("full", "half");

            if (state === "full") {
                star.classList.add("full");
            } 
            else if (state === "half") {
                star.classList.add("half");
            } 
        });
    }
});





// matrix section code/********************************** */
  document.addEventListener('DOMContentLoaded', () => {
            const section = document.getElementById('matrixSection');
            const counters = document.querySelectorAll('.counter');
            const progressBars = document.querySelectorAll('.progress-bar');
            
            let activated = false;

            const animateStats = () => {
                // 1. Animate Numbers
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60fps approx

                    let current = 0;
                    const updateCount = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });

                // 2. Animate Circular Progress Bars
                progressBars.forEach(bar => {
                    const percent = +bar.getAttribute('data-percent');
                    // Circumference is 2 * PI * r (45) approx 283
                    const circumference = 283; 
                    const offset = circumference - (percent / 100) * circumference;
                    
                    bar.style.strokeDashoffset = offset;
                });
            };

            // Intersection Observer to trigger on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !activated) {
                        animateStats();
                        activated = true; // Ensure it runs only once
                    }
                });
            }, { threshold: 0.5 }); // Trigger when 50% visible

            observer.observe(section);
        });


     



  // *****************testimonials section code**************************



var swiper = new Swiper(".mySwiper", {
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            
            // Added based on your "2 card show in one row" request
            slidesPerView: 1, // 1 slide on mobile
            spaceBetween: 30, // 30px gap
            
            breakpoints: {
                // when window width is >= 768px (tablets)
                768: {
                    // NOTE: Changed to 2 to match the SCREENSHOT exactly. 
                    // Set to 3 if you strictly want 3 small cards.
                    slidesPerView: 2, 
                    spaceBetween: 40
                }
            }
        });
    //******************************** */ review section code******************



document.addEventListener("DOMContentLoaded", function () {

  const stars = document.querySelectorAll(".unique-star");



  const hidden = document.getElementById("rating-value");



  let currentStarIndex = -1; // Tracks which star we're working with



  let clickCount = 0; // Tracks clicks on the current star



  function clearAllStars() {

    stars.forEach((star) => {

      star.classList.remove("half", "full");

    });

  }



  function fillStarsUpTo(index, state) {

    clearAllStars();



    stars.forEach((star, i) => {

      if (i < index) {

        star.classList.add("full");

      } else if (i === index) {

        star.classList.add(state);

      }

    });

  }



  stars.forEach((star, index) => {

    star.addEventListener("click", () => {

      // If clicking on a different star, reset



      if (currentStarIndex !== index) {

        currentStarIndex = index;



        clickCount = 1;



        fillStarsUpTo(index, "half");



        hidden.value = index + 0.5;

      } else {

        // Clicking on the same star



        clickCount++;



        if (clickCount === 2) {

          // Second click - fill completely



          fillStarsUpTo(index, "full");



          hidden.value = index + 1;

        } else if (clickCount >= 3) {

          // Third click - reset to half



          clickCount = 1;



          fillStarsUpTo(index, "half");



          hidden.value = index + 0.5;

        }

      }

    });

  });

});






// read morw toggle button section code************************************************************

        document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".aboutind");

  // Create toggle button
  const toggle = document.createElement("span");
  toggle.className = "read-toggle";
  toggle.textContent = "Read More...";

  // Insert toggle after content
  content.after(toggle);

  // Check if content needs toggle (if overflowing)
  const collapsedHeight = 530; // same as CSS max-height
  if (content.scrollHeight <= collapsedHeight + 10) {
    toggle.style.display = "none"; // hide toggle if not overflowing
    content.classList.add("expanded"); // remove fade effect
  }

  // Toggle expand/collapse
  toggle.addEventListener("click", () => {
    content.classList.toggle("expanded");
    toggle.textContent = content.classList.contains("expanded")
      ? "Read Less"
      : "Read More...";
  });
});
    




// ******************india map section code*******************
// ADD YOUR CITY LIST HERE
const citiesToHighlight = [
{ name: "Andhra Pradesh", lat: 15.9129, lng: 79.7400 },
{ name: "Arunachal Pradesh", lat: 28.2180, lng: 94.7278 },
{ name: "Assam", lat: 26.2006, lng: 92.9376 },
{ name: "Bihar", lat: 25.0961, lng: 85.3131 },
{ name: "Chhattisgarh", lat: 21.2787, lng: 81.8661 },
{ name: "Goa", lat: 15.2993, lng: 74.1240 },
{ name: "Gujarat", lat: 22.2587, lng: 71.1924 },
{ name: "Haryana", lat: 29.0588, lng: 76.0856 },
{ name: "Himachal Pradesh", lat: 31.1048, lng: 77.1734 },
{ name: "Jharkhand", lat: 23.6102, lng: 85.2799 },
{ name: "Karnataka", lat: 15.3173, lng: 75.7139 },
{ name: "Kerala", lat: 10.8505, lng: 76.2711 },
{ name: "Madhya Pradesh", lat: 23.4733, lng: 77.9470 },
{ name: "Maharashtra", lat: 19.7515, lng: 75.7139 },
{ name: "Manipur", lat: 24.6637, lng: 93.9063 },
{ name: "Meghalaya", lat: 25.4670, lng: 91.3662 },
{ name: "Mizoram", lat: 23.1645, lng: 92.9376 },
{ name: "Nagaland", lat: 26.1584, lng: 94.5624 },
{ name: "Odisha", lat: 20.9517, lng: 85.0985 },
{ name: "Punjab", lat: 31.1471, lng: 75.3412 },
{ name: "Rajasthan", lat: 27.0238, lng: 74.2179 },
{ name: "Sikkim", lat: 27.5330, lng: 88.5122 },
{ name: "Tamil Nadu", lat: 11.1271, lng: 78.6569 },
{ name: "Telangana", lat: 18.1124, lng: 79.0193 },
{ name: "Tripura", lat: 23.9408, lng: 91.9882 },
{ name: "Uttar Pradesh", lat: 26.8467, lng: 80.9462 },
{ name: "Uttarakhand", lat: 30.0668, lng: 79.0193 },
{ name: "West Bengal", lat: 22.9868, lng: 87.8550 },

{ name: "Andaman and Nicobar Islands", lat: 11.7401, lng: 92.6586 },
{ name: "Chandigarh", lat: 30.7333, lng: 76.7794 },
{ name: "Dadra and Nagar Haveli and Daman and Diu", lat: 20.1809, lng: 73.0169 },
{ name: "Delhi", lat: 28.6139, lng: 77.2090 },
{ name: "Jammu and Kashmir", lat: 33.7782, lng: 76.5762 },
{ name: "Ladakh", lat: 34.1526, lng: 77.5771 },
{ name: "Lakshadweep", lat: 10.5680, lng: 72.6417 },
{ name: "Puducherry", lat: 11.9416, lng: 79.8083 }


];

const isMobile = window.innerWidth <= 768;



// MAP INIT WITH ALL ZOOM DISABLED
var map = L.map('map', {
  zoomControl: false,       // hides + âˆ’ buttons
  scrollWheelZoom: false,  // disables mouse wheel zoom
  doubleClickZoom: false,  // disables double click zoom
  touchZoom: false,        // disables pinch zoom on mobile
  boxZoom: false,          // disables shift+drag zoom
  keyboard: false,         // disables keyboard zoom
  dragging: false           // âœ… keep dragging enabled
}).setView([22.9734, 78.6569], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

let markers = [];
let bounds = [];



// AUTO HIGHLIGHT FUNCTION
function autoHighlightCities() {
  citiesToHighlight.forEach(city => {

    // Blinking Marker
    let marker = L.marker([city.lat, city.lng], {
      icon: L.divIcon({
        className: "",
        html: '<div class="blinking-marker"></div>',
        iconSize: [20, 20]
      })
    }).addTo(map);

    //Hover Popup
    let hoverPopup;

    marker.on("mouseover", () => {
      hoverPopup = setTimeout(() => {
        L.popup({ offset: [0, -10], closeButton: false })
          .setLatLng([city.lat, city.lng])
          .setContent(`<b>${city.name}</b>`)
          .openOn(map);
      }, 150);
    });

    marker.on("mouseout", () => {
      clearTimeout(hoverPopup);
      map.closePopup();
    });

    markers.push(marker);
    bounds.push([city.lat, city.lng]);
  });

  // Auto fit but still NO ZOOM interaction allowed
  map.fitBounds(bounds, { padding: [20, 20] });
}

window.onload = autoHighlightCities;