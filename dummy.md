
        <div class="container testimonial-cards-wrapper">



            <!-- Swiper -->

            <div class="swiper mySwiper">

                <div class="swiper-wrapper">



                    


                        <div class="swiper-slide">

                            <div class="review-cardB">

                                <!-- <div class="leadsuresubheading">Great Business Solution</div> -->

                                <p class="leadsurepara">Reliable Spares & Consumables maintains a decent range of industrial spare parts and consumables, but the name oversells the experience.</p>

                                <div class="d-flex justify-content-between align-items-center">

                                    <div>

                                        <div class="leadsuresubheading">Roy</div>

                                        <span class="leadsurepara"><strong>Finance Manager</strong></span>

                                    </div>

                                    <div class="unique-star-rating" data-rating="4">


                                        <div class="unique-star-rating" data-rating="3.5">
                                            <div class="unique-starM" data-star="1"></div>
                                            <div class="unique-starM" data-star="2"></div>
                                            <div class="unique-starM" data-star="3"></div>
                                            <div class="unique-starM" data-star="4"></div>
                                            <div class="unique-starM" data-star="5"></div>
                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>


                    


                        <div class="swiper-slide">

                            <div class="review-cardB">

                                <!-- <div class="leadsuresubheading">Great Business Solution</div> -->

                                <p class="leadsurepara">Product specs were accurate and documentation was complete. Delivery timeline slipped by a day, but communication was transparent and material quality justified the delay.</p>

                                <div class="d-flex justify-content-between align-items-center">

                                    <div>

                                        <div class="leadsuresubheading">Rohit Sharma</div>

                                        <span class="leadsurepara"><strong>Procurement Head</strong></span>

                                    </div>

                                    <div class="unique-star-rating" data-rating="4">


                                        <div class="unique-star-rating" data-rating="4">
                                            <div class="unique-starM" data-star="1"></div>
                                            <div class="unique-starM" data-star="2"></div>
                                            <div class="unique-starM" data-star="3"></div>
                                            <div class="unique-starM" data-star="4"></div>
                                            <div class="unique-starM" data-star="5"></div>
                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>


                    


                        <div class="swiper-slide">

                            <div class="review-cardB">

                                <!-- <div class="leadsuresubheading">Great Business Solution</div> -->

                                <p class="leadsurepara">Zero quality deviation, competitive pricing, and genuine spares. Finally found a vendor who doesn’t overpromise and disappear. Definitely continuing supply contracts.</p>

                                <div class="d-flex justify-content-between align-items-center">

                                    <div>

                                        <div class="leadsuresubheading">Ananya Deshpande</div>

                                        <span class="leadsurepara"><strong>Operations Manager</strong></span>

                                    </div>

                                    <div class="unique-star-rating" data-rating="4">


                                        <div class="unique-star-rating" data-rating="4.5">
                                            <div class="unique-starM" data-star="1"></div>
                                            <div class="unique-starM" data-star="2"></div>
                                            <div class="unique-starM" data-star="3"></div>
                                            <div class="unique-starM" data-star="4"></div>
                                            <div class="unique-starM" data-star="5"></div>
                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>


                    


                        <div class="swiper-slide">

                            <div class="review-cardB">

                                <!-- <div class="leadsuresubheading">Great Business Solution</div> -->

                                <p class="leadsurepara">Good response time and well-packed shipment. Could improve stock availability for urgent orders, but overall reliable partner in industrial components sourcing.</p>

                                <div class="d-flex justify-content-between align-items-center">

                                    <div>

                                        <div class="leadsuresubheading">Kunal Verma</div>

                                        <span class="leadsurepara"><strong>Maintenance Supervisor</strong></span>

                                    </div>

                                    <div class="unique-star-rating" data-rating="4">


                                        <div class="unique-star-rating" data-rating="4.5">
                                            <div class="unique-starM" data-star="1"></div>
                                            <div class="unique-starM" data-star="2"></div>
                                            <div class="unique-starM" data-star="3"></div>
                                            <div class="unique-starM" data-star="4"></div>
                                            <div class="unique-starM" data-star="5"></div>
                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>


                    


                </div>



            </div>



        </div>






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


