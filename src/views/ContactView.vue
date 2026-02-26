<script setup>
import { RouterLink } from 'vue-router'
import { getAssetImg } from '@/utils/getAssetImg'

const contactHeroBg = getAssetImg('contactUs.jpg')
</script>

<template>
  <div>
    <!-- Start Navbar Area -->
    <div class="navbar-area">
      <div class="plamb-responsive-nav">
        <div class="container">
          <div class="plamb-responsive-menu">
            <div class="logo">
              <RouterLink class="navbar-brand logo-text" to="/"><i class="fas fa-bolt" /> Signal Registry</RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div class="plamb-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <RouterLink class="navbar-brand logo-text" to="/"><i class="fas fa-bolt" /> Signal Registry</RouterLink>
            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <RouterLink to="/about" class="nav-link">About Us</RouterLink>
                </li>
                <li class="nav-item"><RouterLink to="/projects" class="nav-link">Projects</RouterLink></li>
                <li class="nav-item"><RouterLink to="/api" class="nav-link">API</RouterLink></li>
                <li class="nav-item">
                  <RouterLink to="/contact" class="nav-link active">Contact</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/faq" class="nav-link">FAQ</RouterLink>
                </li>
              </ul>
              <div class="other-option">
                <RouterLink class="default-btn" to="/pricing">
                  Free Quote
                  <span />
                </RouterLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <!-- Start Page Title Area -->
    <div
      class="page-title-area page-title-area--contact"
      :style="contactHeroBg ? { backgroundImage: `url(${contactHeroBg})` } : {}"
    >
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="page-title-content" />
          </div>
        </div>
      </div>
    </div>

    <!-- Start Contact Box Area -->
    <section class="contact-box pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-contact-box">
              <i class="fa fa-map-marker" />
              <div class="content-title">
                <h3>Address</h3>
                <p>Barış Koşu Yolu Caddesi, Gebze, Kocaeli <br> Kocaeli/Gebze</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-contact-box">
              <i class="fa fa-envelope" />
              <div class="content-title">
                <h3>Email</h3>
                <a href="mailto:iletisim@sinyatek.com">iletisim@sinyatek.com</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
            <div class="single-contact-box">
              <i class="fa fa-phone" />
              <div class="content-title">
                <h3>Phone</h3>
                <a href="tel:+882-569-756">+123(456)123</a>
                <a href="tel:+882-569-756">+123(456)123</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Start Contact Section -->
    <div class="contact-section ptb-100">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="contact-image">
              <img :src="getAssetImg('contact.png')" alt="image">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-form">
              <form id="contactForm" @submit.prevent>
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Name">
                      <div class="help-block with-errors" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Email">
                      <div class="help-block with-errors" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" class="form-control" placeholder="Phone">
                      <div class="help-block with-errors" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input type="text" name="msg_subject" id="msg_subject" class="form-control" required data-error="Please enter your subject" placeholder="Subject">
                      <div class="help-block with-errors" />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <textarea name="message" class="form-control" id="message" cols="30" rows="6" required data-error="Write your message" placeholder="Your Message" />
                      <div class="help-block with-errors" />
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <button type="submit" class="submit-btn">Submit Now!</button>
                    <div id="msgSubmit" class="h3 text-center hidden" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Subscribe Section -->
    <section class="subscribe-Section ptb-100">
      <div class="container">
        <div class="subscribe-content-area mb-0">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6">
              <div class="subscribe-image">
                <img :src="getAssetImg('subscribe.png')" alt="image">
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="subscribe-content">
                <h2>Don't Miss Our News And Updates</h2>
                <p>Subscribe to our newsletter to receive announcements and updates about Signal Registry.</p>
              </div>
              <form class="newsletter-form" @submit.prevent>
                <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL" required autocomplete="off">
                <button type="submit">Subscribe Now</button>
                <div id="validator-newsletter" class="form-result" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Start Footer Section -->
    <section class="footer-section ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>About Us</h3></div>
              <p>Sinyatek, Signal Registry ile sinyal kayıt verilerini takip ve yönetmek için kullanılan yönetim paneli uygulamasını sunar.</p>
              <ul class="footer-social">
                <li><a href="https://www.facebook.com/login/" target="_blank" rel="noopener"><i class="fab fa-facebook-f" /></a></li>
                <li><a href="https://twitter.com/login" target="_blank" rel="noopener"><i class="fab fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/company/si%CC%87nyatek/posts/?feedView=all" target="_blank" rel="noopener"><i class="fab fa-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Important Links</h3></div>
              <ul class="footer-quick-links">
                <li><RouterLink to="/about">About Us</RouterLink></li>
                <li><RouterLink to="/projects">Project</RouterLink></li>
                                <li><RouterLink to="/contact">Contact</RouterLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Featured Service</h3></div>
              <ul class="footer-quick-links">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Contact</h3></div>
              <div class="footer-info-contact">
                <i class="flaticon-call-answer" />
                <h3>Phone</h3>
                <span><a href="tel:+882-569-756">+123(456)123</a></span>
              </div>
              <div class="footer-info-contact">
                <i class="flaticon-envelope" />
                <h3>Email</h3>
                <span><a href="mailto:iletisim@sinyatek.com">iletisim@sinyatek.com</a></span>
              </div>
              <div class="footer-info-contact">
                <i class="flaticon-maps-and-flags" />
                <h3>Address</h3>
                <span>Barış Koşu Yolu Caddesi, Gebze, Kocaeli - Kocaeli/Gebze</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lines">
        <div class="line" />
        <div class="line" />
        <div class="line" />
      </div>
      <div class="partner-shape-img1">
        <img :src="getAssetImg('shape/partnar-shape-2.png')" alt="image">
      </div>
    </section>

    <!-- Start Copy Right Section -->
    <div class="copyright-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p>© 2026 Signal Registry by Sinyatek. All rights reserved.</p>
          </div>
          <div class="col-lg-6 col-md-6">
            <ul>
              <li><RouterLink to="/terms-condition">Terms & Conditions</RouterLink></li>
              <li><RouterLink to="/privacy-policy">Privacy Policy</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Go Top Section -->
    </div>
</template>

<style scoped>
.page-title-area--contact {
  background-color: #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
