
.postreq {
    background-color: var(--bg1-color);
}

.contact-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    width: 100%;
}

/* --- Left Side (Dark) --- */
.contact-info-panel {
    background-color: var(--footer-color);
    color: #fff;
    padding: 60px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
}

.icon-box {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: 20px;
}

/* --- Right Side (Form) --- */
.contact-form-panel {
    padding: 60px 50px;
    background-color: var(--bg2-color);
    box-shadow: 0 10px 30px rgba(144, 12, 12, 0.5);
}



.map-container-51 {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 25%;
}

.map-container-51 iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
}
/*************** our vision and mission section code************** */

.Mission-section{
    background-color: var(--bg2-color);
}

section.mission_vision {
  height: auto;
}

/* Main Card */
section.mission_vision .mission_vision_item {
  background: #F2F2F2;
  padding: 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  position: sticky;
  top: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
  transition: 0.3s;
  background-image: none;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  section.mission_vision .mission_vision_item {
    flex-wrap: wrap;
    gap: 25px;
  }
}

@media only screen and (max-width: 767px) {
  section.mission_vision .mission_vision_item {
    flex-wrap: wrap;
    gap: 25px;
    padding: 20px;
  }
}

section.mission_vision .mission_vision_item * {
  transition: 0.3s;
}

/* Hover Effects */
section.mission_vision .mission_vision_item:hover {
  background-image: url("https://html.themewant.com/invena/assets/images/service/06.webp");
  background-position: center center;
}

section.mission_vision .mission_vision_item:hover .mission_vision_left img {
  filter: brightness(0) saturate(100%) invert(97%) sepia(97%) saturate(0%) hue-rotate(325deg) brightness(102%) contrast(100%);
}

section.mission_vision .mission_vision_item:hover * {
  color: #fff;
}
 
section.mission_vision .mission_vision_item:hover .mission_vision_right .arrow {
  background: var(--secondary-color);
}

section.mission_vision .mission_vision_item:hover .mission_vision_right .arrow svg {
  color: var(--light-color);
}

/* Last Item */
section.mission_vision .mission_vision_item:last-child {
  top: 30px !important;
  margin-bottom: 0;
}

/* Left Side */
section.mission_vision .mission_vision_left {
  display: flex;
  align-items: center;
  gap: 50px;
  flex-basis: 36%;
}

@media only screen and (max-width: 1199px) {
  section.mission_vision .mission_vision_left {
    gap: 10px;
  }
}

@media only screen and (max-width: 767px) {
  section.mission_vision .mission_vision_left {
    flex-basis: 100%;
  }
}

/* Right Side */
section.mission_vision .mission_vision_right {
  flex-basis: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media only screen and (max-width: 575px) {
  section.mission_vision .mission_vision_right {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}

section.mission_vision .mission_vision_right p {
  margin: 0;
  max-width: 70%;
}

@media only screen and (max-width: 575px) {
  section.mission_vision .mission_vision_right p {
    max-width: 100%;
  }
}

/* Arrow */
section.mission_vision .mission_vision_right .arrow {
  height: 62px;
  width: 62px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 575px) {
  section.mission_vision .mission_vision_right .arrow {
    height: 40px;
    width: 40px;
  }
}

section.mission_vision .mission_vision_right .arrow svg {
  
  color: #FFFFFF;
}

 

/* ******************************faq section code ***************************** */

.faq-container {
    background-color: var(--bg1-color);
    position: relative;
    overflow: hidden;
}

/* .left-section {
    padding: 10px;
    min-height: 1px !important;
    transition: min-height 0.3s ease;
} */

.faq-container:before {
    aspect-ratio: 4/1;
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("https://html.themewant.com/invena/assets/images/about/shape/01.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    animation: bounceY 3s ease-in-out infinite;
    z-index: 0;
    top: -1%;
    opacity: 1;
}

.faq-img-sec img {
    width: 100%;
    clip-path: polygon(48.93% 0.356%, 48.93% 0.356%, 49.136% 0.264%, 49.349% 0.194%, 49.568% 0.143%, 49.791% 0.113%, 50.015% 0.103%, 50.24% 0.113%, 50.463% 0.143%, 50.681% 0.194%, 50.895% 0.264%, 51.101% 0.356%, 98.912% 24.359%, 98.912% 24.359%, 99.106% 24.469%, 99.283% 24.594%, 99.444% 24.734%, 99.586% 24.887%, 99.708% 25.052%, 99.811% 25.227%, 99.892% 25.411%, 99.951% 25.602%, 99.988% 25.798%, 100% 26%, 100% 74%, 100% 74%, 99.988% 74.202%, 99.951% 74.398%, 99.892% 74.589%, 99.811% 74.773%, 99.708% 74.948%, 99.586% 75.113%, 99.444% 75.266%, 99.283% 75.406%, 99.106% 75.531%, 98.912% 75.641%, 51.101% 99.645%, 51.101% 99.645%, 50.895% 99.736%, 50.681% 99.806%, 50.463% 99.857%, 50.24% 99.887%, 50.015% 99.897%, 49.791% 99.887%, 49.568% 99.857%, 49.349% 99.806%, 49.136% 99.736%, 48.93% 99.645%, 1.119% 75.641%, 1.119% 75.641%, 0.925% 75.531%, 0.747% 75.406%, 0.587% 75.266%, 0.445% 75.113%, 0.322% 74.948%, 0.22% 74.773%, 0.138% 74.589%, 0.079% 74.398%, 0.043% 74.202%, 0.031% 74%, 0.031% 26%, 0.031% 26%, 0.043% 25.798%, 0.079% 25.602%, 0.138% 25.411%, 0.22% 25.227%, 0.322% 25.052%, 0.445% 24.887%, 0.587% 24.734%, 0.747% 24.594%, 0.925% 24.469%, 1.119% 24.359%, 48.93% 0.356%);
    aspect-ratio: 4/3;
}


.faq-title {
    font-size: var(--title-size);
    font-weight: 600;
    color: var(--heading-color);
    margin-bottom: 10px;
    line-height: 1.2;
}

.right-section {
    flex: 1;
    padding: 30px;
}

.faq-item {
    position: relative;
    margin-bottom: 15px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
}

.faq-item:last-child {
    border-bottom: none;
}

.faq-question {
    background: var(--light-color);
    border: 1px solid #dfdfdf;
    padding: 18px 40px 18px 10px;
    font-size: var(--heading-size);
    font-weight: 500;
    color: var(--heading-color);
    cursor: pointer;
    width: 100%;
    text-align: left;
    position: relative;
    transition: all 0.3s ease;
    /* box-shadow: 5px 5px 27px rgba(0, 0, 0, 0.1); */
}

.faq-question::after {
    content: "\f107";
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    position: absolute;
    right: 3%;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    transition: transform 0.3s ease;
    font-size: 16px;
    color: var(--dark-text);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: 0.3s ease;
    padding: 0;
    color: var(--para-color);
    font-size: var(--para-size);
    line-height: 1.6;
}

/* Active states */

.faq-item.active .faq-question::after {
    transform: translateY(-50%) rotate(0deg);
    padding: 5px 10px;
}

.faq-item.active .faq-answer {
    max-height: 200px;
    padding: 5px 10px 5px 10px;
    background-color: var(--light-color);
}

@media (max-width: 768px) {
    .faq-wrapper {
        flex-direction: column;
    }

    .left-section {
        flex: none;
        padding: 30px 20px;
    }

    .right-section {
        padding: 30px 20px;
    }

    .faq-title {
        font-size: 28px;
    }


}

/* *****************blog section code***************************** */

.latest-news-section {
    background-color: var(--bg2-color);
}

.blog-card {
    display: block;

    border: 1px solid var(--border-light);

    border-radius: 1px;

    transition: all 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-5px);

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.blog-card .card-img-wrapper {
    position: relative;
}

.blog-card .card-img-top {
    border-radius: 0;

    aspect-ratio: 4 / 3;

    object-fit: cover;
}

.blog-card .card-category-tag {
    position: absolute;

    bottom: 15px;

    left: 15px;

    background-color: var(--white);

    color: var(--secondary-color);

    padding: 4px 10px;

    font-size: var(--para-size);

    font-weight: 500;

    text-transform: uppercase;
}

/* Card body styles */

.blog-card .card-body {
    padding: 21px;
}

.blog-card .card-meta {
    color: var(--secondary-color);

    font-size: var(--para-size);

    text-transform: uppercase;

    margin-bottom: 10px;
}

/* *******************matrix section code/******************** */
.matrix-section {
    background-color: var(--bg1-color);
    padding-bottom: 56px;
}

.stat-item-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    position: relative;
}

/* --- Vertical Divider Logic --- */
.stat-col {
    position: relative;
}

.stat-col::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 60px;
    width: 1px;
    background-color: #E5E7EB;
}

/* Remove divider for the last item and on mobile */
.stat-col:last-child::after {
    display: none;
}

@media (max-width: 991px) {
    .stat-col::after {
        display: none;
    }

    .stat-col {
        margin-bottom: 40px;
    }

    .stat-col:last-child {
        margin-bottom: 0;
    }
}

/* --- Circular Progress --- */
.progress-circle-container {
    width: 110px;
    height: 110px;
    position: relative;
    flex-shrink: 0;
}

.progress-svg {
    transform: rotate(-90deg);
    /* Start from top */
    width: 100%;
    height: 100%;
}

.progress-bg {
    fill: var(--light-color);
    stroke: none;
}

.progress-bar {
    fill: none;
    stroke: var(--primary-color);
    stroke-width: 6px;
    stroke-linecap: round;
    /* 2 * PI * R (approx 45 radius) = ~283 */
    stroke-dasharray: 283;
    stroke-dashoffset: 283;
    /* Start empty */
    transition: stroke-dashoffset 2s ease-out;
}

.icon-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-overlay svg {
    /* Adjust stroke width if using regular fontawesome or custom SVG */
    -webkit-text-stroke: 1px transparent;
}

.stat-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.stat-number {
    font-size: 42px;
    font-weight: 700;
    color: var(--heading-color);
    line-height: 1;
    margin-bottom: 5px;
}


/********************** testimonial section code*************** */
/* --- Dark Hero Section --- */
.testimonial-hero {
    background-color: #0a0a0a;
    background-image:
        linear-gradient(135deg, #000000 0%, #1a1a1a 100%),
        repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 10px);
    background-size: cover;
    position: relative;
    padding: 56px 0 156px 0;
    color: #fff;
    overflow: hidden;
}

.testimonial-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
    transform: rotate(30deg);
    pointer-events: none;
}

/* --- Cards Wrapper --- */
.testimonial-cards-wrapper {
    margin-top: -120px;
    position: relative;
    z-index: 10;
}

/* --- Swiper Customization --- */
.swiper {
    width: 100%;
    padding-bottom: 56px;
    overflow: visible;
}

.swiper-wrapper {
    align-items: stretch;
}

.swiper-slide {
    height: auto;
}

/* --- Individual Card Styling --- */
.review-cardB {
    background: var(--bg1-color);
    padding: 23px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    height: 100%;
    transition: transform 0.3s ease;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.review-cardB:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}



/* ******************************review page code section*********************** */

.review-wrapper {
  background-color: var(--bg2-color);
}

.review-card {
  background-color: var(--bg1-color);

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);

  overflow: hidden;
}

.review-card__image-section {
  padding: 0;

  aspect-ratio: 1/1;
}

.review-card__image-section img {
  width: 100%;

  height: 100%;

  object-fit: cover;
}


.review-card__form-section {
  padding: 20px;
}

.unique-star-rating {
  display: flex;

  justify-content: flex-start;

  margin-bottom: 20px;

  gap: 5px;
}

.unique-star {
  position: relative;

  width: 36px;

  height: 36px;

  cursor: pointer;

  transition: transform 0.2s ease;

  user-select: none;
}

.unique-starM {
  position: relative;

  width: 36px;

  height: 36px;

  cursor: pointer;

  transition: transform 0.2s ease;

  user-select: none;
}

.unique-starM::before {
  content: "★";

  position: absolute;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

  font-size: 36px;

  color: var(--border-light);

  display: flex;

  align-items: center;

  justify-content: center;

  line-height: 1;
}

.unique-star:hover {
  transform: scale(1.15);
}

/* Empty star (default) */

.unique-star::before {
  content: "★";

  position: absolute;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

  font-size: 36px;

  color: var(--border-light);

  display: flex;

  align-items: center;

  justify-content: center;

  line-height: 1;
}

/* Half filled star */

.unique-star.half::after {
  content: "★";

  position: absolute;

  top: 0;

  left: 2px;

  width: 50%;

  height: 100%;

  font-size: 36px;

  color: var(--primary-color);

  overflow: hidden;

  display: flex;

  align-items: center;

  justify-content: flex-start;

  line-height: 1;
}

.review-card__form-section {
  background-color: var(--bg2-color);
}

/* Full filled star */

.unique-star.full::before {
  color: var(--primary-color);
}

@media (max-width: 991.98px) {
  .review-card__image-section {
    height: 300px;
  }

  .review-card__image-section img {
    min-height: auto;
  }

  .review-card__input-row {
    flex-direction: column;
  }
}
/* ********************why choose us section code******************** */

.why-choose-us-section {
    position: relative;
    background: var(--dark-overlay-gradient), url('https://media.istockphoto.com/id/1347088244/photo/kerala-most-beautiful-place-of-india.jpg?s=612x612&w=0&k=20&c=oBVJ6rUfq1YOua_4Oqhj0B1TFwcMFhniaysLJEN_eh8=') no-repeat center center;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: hidden;
}

.image-wrapperA {
    position: relative;
    padding: 1rem;
    border-radius: var(--radius);
    width: 100%;
}

.image-wrapperA img {
    aspect-ratio: 4/3;
    width: 100%;
    height: auto;
    border-radius: var(--radius);
}

.image-wrapperA::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -20%;
    width: 50%;
    height: 120%;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: -1;
}


.feature-boxA {
    background-color: var(--primary-color);
    padding: 2rem 1rem;
    text-align: center;
    border: 1px solid var(--primary-color);
    border-radius: var(--radius);
    transition: transform 0.3s ease, border-color 0.3s ease;
    height: 100%;
}

.feature-boxA:hover {
    transform: translateY(-8px);
    border-color: var(--primary-color);
    background-color: var(--hover-color2);
}

.feature-boxA svg {
    color: var(--white);
    margin-bottom: 1rem;
}


/* *********************category page section code************************** */
.lab-section {
    background-color: var(--bg2-color);
}

.content-section {
    width: 100%;
}

.left-content-wrapper {
    float: right;
    max-width: 400px;
    width: 100%;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    /* border: 1px solid var(--secondary-color); */
}

.image-container {
    aspect-ratio: 1/1;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;
    border-radius: 0;
    margin-bottom: 20px;
}

.image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-description p,
.product-description li,
.product-description ul {
    line-height: 1.6;
    text-align: justify;
    margin-bottom: 6px;
}

.button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.aboutind{
  max-height: 470px;
  overflow: hidden;
}
.aboutind.expanded {
  max-height: 3000px; /* large value to fully open */
      overflow: unset;

}

.read-toggle {
  display: inline-block;
  color: var(--secondary-color);
  cursor: pointer;
  font-weight: 600;
  margin-top: 10px;
  user-select: none;
}

.read-toggle:hover {
  color: var(--primary-color);
}


/* *******************************blog section code***************************** */
.blog-section {
    background-color: var(--bg2-color)
}

.blog-card {
    background-color: var(--bg1-color);
    border-radius: var(--radius);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.card-img-wrapper {
    position: relative;
}


.card-img-wrapper .card-img-top {
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
    object-fit: cover;
}

.date-badge {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background-color: var(--primary-color);
    color: var(--white);
    border-radius: var(--radius);
    padding: 8px 10px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.1;
}

.date-badge span {
    font-size: 18px;
    display: block;
}

.blog-card-body {
    padding: 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.card-title-wrapper {
    margin-bottom: 0.75rem;
}

.card-title-wrapper .card-title {
    font-size: var(--heading-size);
    font-weight: 600;
    color: var(--heading-color);
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    margin-bottom: 1px;
    -webkit-box-orient: vertical;
    text-decoration: none;
}

.card-title:hover {
    color: var(--hover-color);
}

.card-text-wrapper {
    flex-grow: 1;
    margin-bottom: 1rem;
}


/* ************************BLOG DETIL PAGE SECTION************************************ */
.blog-section105 {
    background-color: var(--bg2-color);
}

.main-content105 {
    background-color: var(--bg1-color);
    padding: 2rem;
    border: 1px solid var(--border-color);
}

.blog-title-wrapper105 {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 10px;
}

.blog-title105 {
    font-size: 2.25rem;
    font-weight: 900;
    color: var(--heading-color);
}

.blog-image105 {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 2rem;
}

.post-dateX {
    font-size: var(--para-size);
    color: var(--secondary-color);

}

.sidebar105 .widget105 {
    background-color: var(--bg1-color);
    padding: 1.5rem;
    border: 1px solid var(--bg2-color);
}

.widget-title105 {
    font-size: var(--heading-size);
    font-weight: 600;
    color: var(--primary-color);
    padding-bottom: 0.75rem;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--primary-color);
}

.related-blogs-list105 {
    list-style: none;
    padding: 0;
    margin: 0;
}

.related-post-item105 {
    display: flex;
    gap: 1rem;
}

.related-post-item105:not(:last-child) {
    margin-bottom: 1rem;
}

.related-post-item105 img {
    aspect-ratio: 4 / 3;
    width: 100%;
    height: auto;
    border-radius: var(--radius)
}

.related-post-item105 .post-title105 {
    font-weight: 500;
    line-height: 1.4;
    font-size: 18px;

}

.related-post-item105 .post-title105 a {
    text-decoration: none;
    color: var(--heading-color);
    transition: color 0.3s ease;
}

.related-post-item105 .post-title105 a:hover {
    color: var(--hover-color1);
}


.category-item-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 400;
    font-size: var(--heading-size);
    transition: all 0.3s ease;
    background-color: var(--bg2-color);
}

.category-item-link:hover {

    background-color: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    color: var(--light-color);
}

 .blog-meta-wrapper5 {
            width: 100%;
            background: #fff;
        }

        /* --- Left Side: Category & Date --- */
        .blog-cate5 {
            padding-left: 0;
            list-style: none;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px; /* Space between Category pill and Date text */
            margin: 0;
        }

        .blog-cate5 li {
            font-size: 15px;
            color: var(--heading-color);
            display: flex;
            align-items: center;
        }

        /* 1. Category Badge (Lead Generation) */
        .blog-cate5 li.category5 a {
            text-decoration: none;
            border-radius: 50px; /* Pill shape */
            color: var(--white); /* Red Text */
            font-weight: 500;
            padding: 8px 20px;
            background-color: var(--primary-color); /* Light Pink Background */
            transition: background 0.3s;
            display: inline-block;
            line-height: 1;
        }
        
        /* 2. Date Section */
        .blog-cate5 li.date5 {
            color: var(--heading-color);
            font-weight: 400;
        }

        .blog-cate5 li.date5 b {
           
            margin-right: 4px;
            margin-left: 4px;
           
        }
        
        /* The Calendar Icon */
        .blog-cate5 li svg.bi-calendar-check {
            color: var(--primary-color); /* Red Icon */
            width: 18px;
            height: 18px;
            margin-right: 8px;
            margin-top: -2px;
        }

        /* --- Right Side: Share Section --- */
        .share-section5 {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--heading-color);
            font-weight: 500;
            font-size: 16px;
        }

        .share-section5 span {
            margin-right: 5px;
        }
        .share-section5 a {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            border-radius: 50%; 
            text-decoration: none;
            transition: transform 0.2s;
        }

        .share-section5 a:hover {
            transform: translateY(-2px);
        }

        

@media (max-width: 767.98px) {
    .main-content105 {
        padding: 1.5rem;
    }
}

/* faq page ******************************* */

.faq-section62{
            background-color: var(--bg1-color);
            padding: 6px 0px 56px 0px;
        }
        
        /* --- Bootstrap Nav Tabs Styling --- */
        .faq-nav-tabs {
            border-bottom: none;
            justify-content: center;
        }
        .nav-link{
            margin-bottom: 5px;
        }
        .faq-nav-tabs .nav-link {
            border: none;
            color: var(--white);
            background-color: var(--primary-color);
            border-radius: var(--radius);
            padding: 0.5rem 1.5rem;
            font-weight: 500;
            margin: 0.5rem;
            transition: all 0.2s ease-in-out;
        }
        .faq-nav-tabs .nav-link:hover{
            background: var(--hover-color1);
        }
        .faq-nav-tabs .nav-link.active {
            color: var(--white);
            background-color: var(--hover-color1);
        }
        
        
        .custom-accordion-item {
           
            
            border-radius: 0.75rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.20);
            margin-bottom: 1rem;
            padding: 1.25rem 1.5rem;
        }
        .custom-accordion-question {
            font-weight: 500;
            color: var(--heading-color);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .custom-accordion-answer {
            max-height: 0;
            overflow: hidden;
            color: var(--para-color);
            transition: max-height 0.3s ease-in-out, padding-top 0.3s ease-in-out;
        }
        
        /* Active State (Toggled by JavaScript) */
        .custom-accordion-item.active .custom-accordion-question {
            font-weight: 600;
            color: var(--primary-color);
        }
        .custom-accordion-item.active .custom-accordion-answer {
            max-height: 200px;
            padding-top: 0.75rem;
            font-size: var(--para-size);

        }
        
        /* Plus/Minus Icon */
        .icon-toggle {
           width: 1.75rem;
    height: 1.75rem;
    background-color:var(--primary-color);  
    color: var(--white);           
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius); 
    cursor: pointer;
        }
        .custom-accordion-item.active .icon-toggle {
              background-color: var(--hover-color1); 
    background-image: none; 
              }

              .custom-accordion-item.active .icon-toggle::after {
    content: "−";  /* minus sign */
}

/* Default state: show plus */
.icon-toggle::after {
    content: "+";  /* plus sign */
}


.faq-redesign-section {
  background-color: var(--bg1-color);
}

.faq-nav-vertical .nav-link {
  font-size: var(--heading-size);

  font-weight: 500;

  color: var(--heading-color);

  padding: 1rem;

  border: none;

  border-top: 1px solid var(--primary-color);

  border-radius: 0;

  position: relative;

  background: var(--bg2-color);

  transition: none;
}

.faq-nav-vertical .nav-link:first-child {
  border-top: none;
}

/* Style for the active nav link */

.faq-nav-vertical .nav-link.active {
  color: var(--primary-color);

  background-color: var(--bg1-color);

  border-left: 2px solid var(--primary-color);

  font-weight: 600;

  padding-left: 2.25rem;
}

.faq-nav-vertical .nav-link.active {
  border-top-color: transparent;
}

.faq-tab-content {
  background-color: var(--bg2-color);
}

/* ******************Project section code**************************************** */

.portfolio-section {

    background-color: var(--bg1-color);

}

.portfolio-card {

    width: 100%;

    position: relative;

    border-radius: var(--radius);

    overflow: hidden;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);

    transition: transform 0.3s ease;

}

.portfolio-card:hover {

    transform: translateY(-5px);

}



.portfolio-card .portfolio-image {

    aspect-ratio: 4/3;

    display: block;

    width: 100%;

    height: auto;

    transition: transform 0.4s ease;
}

.portfolio-card:hover .portfolio-image {

    transform: scale(1.05);

}

/* UPDATED CAPTION STYLES */

.portfolio-card .portfolio-caption {

    position: absolute;

    top: 0;

    left: 0;

    right: 0;

    bottom: 0;

    padding: 1.5rem;

    /* Gradient overlay for text readability */

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%);

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    opacity: 1;

    /* Hidden by default */

    transition: opacity 0.4s ease;

}

.portfolio-card .location-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: rgba(30, 30, 30, 0.7);
    backdrop-filter: blur(5px);
    color: var(--white);
    border-radius: 50rem;
    font-size: var(--para-size);
    font-weight: 500;
    align-self: flex-start;
}

            /*************************** privacy policy content********************** */

.privacy-container {
    background-color: var(--bg2-color);
}


.privacy-container a {
    font-size: var(--para-size);
    color: var(--primary-color);
}

.privacy-box{
    padding: 20px;
    background: var(--bg1-color);
}

   /* *****************************siteMap Section code**************************** */
.sitemap-section {
    
    background: var(--bg2-color);

}
.sitemapbox{
    padding: 20px;
    background: var(--bg1-color);
}
.sitemap-section .sitempheading {
    font-size: var(--heading2-size);
    font-weight: 600;
    margin-bottom: 20px;
    border-bottom: 3px solid var(--secondary-color);
    display: inline-block;
    padding-bottom: 5px;
    color: var(--header-color);
}

.sitemapcon {
    list-style: none;
    padding-left: 0;
    margin: 0;
    font-size: var(--para-size);
}

.sitemapcon>li {
    position: relative;
    margin: 10px 0;
    padding-left: 20px;
}

.sitemapcon>li::before {
    content: "";
    position: absolute;
    top: 0;
    left: 8px;
    bottom: 0;
    border-left: 2px solid var(--primary-color);
}

.sitemapcon>li::after {
    content: "";
    position: absolute;
    top: 12px;
    left: 8px;
    width: 10px;
    border-top: 2px solid var(--primary-color);
}

.sitemapcon a {
    text-decoration: none;
    color: var(--para-color);
    font-size: var(--para-size);
    transition: color 0.2s;
}

.sitemapcon a:hover {
    color: var(--hover-color1);
    font-weight: 600;
}

.sitemapsubcat {
    list-style: none;
    margin: 5px 0 5px 20px;
    padding-left: 15px;
    border-left: 2px solid var(--secondary-color);
}

.sitemapsubcat li {
    position: relative;
    margin: 10px 0;
    padding-left: 15px;
}

.sitemapsubcat li::before {
    content: "";
    position: absolute;
    top: 12px;
    left: -15px;
    width: 15px;
    border-top: 2px solid var(--secondary-color);
}

@media (max-width: 767px) {
    .sitemap-section {
        padding: 20px 10px;
    }
    .sitemap-section .you_may {
        font-size: 16px;
    }
    .sitemapcon {
        font-size: 13px;
    }
}


/* ****************market area section code ************** */

.market-area {
    background: var(--bg2-color)
}

.Marektheading {
    text-align: center;
    margin-bottom: 30px;
}

.Marektheading {
    font-size: var(--title-size);
    font-weight: 600;
    color: var(--heading-color);
}

.market-area h2 {
    font-size: var(--heading2-size);
    font-weight: 600;
    margin: 30px 0 15px;
    color: var(--heading-color);
    border-left: 5px solid var(--primary-color);
    padding-left: 10px;
}

.marketcard {
    display: block;
    text-align: center;
    padding: 12px 10px;
    border-radius: var(--radius);
    background: var(--bg1-color);
    box-shadow: 0 4px 10px rgba(59, 59, 59, 0.1);
    font-size: 16px;
    color: var(--heading-color);
    text-decoration: none;
    transition: all 0.3s ease;
}

.marketcard:hover {
    color: var(--white);
    transform: translateY(-3px);
    background-color: var(--primary-color);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}


/* ****************error page section code************ */
.errorsection {
    background-color: var(--bg1-color);
}



.error-image {
    aspect-ratio: 2/1;
    width: 100%;
    overflow: hidden;
}

.error-image img {
    aspect-ratio: 2/1;
    width: 100%;
    height: auto;
    object-fit: contain;
}


