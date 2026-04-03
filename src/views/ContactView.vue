<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import PageDesignSection from '@/components/PageDesignSection.vue'
import { getAssetImg } from '@/utils/getAssetImg'

const contactHeroBg = getAssetImg('contactUs.jpg')
</script>

<template>
  <div class="centered-logo-mobile">
    <SiteNavbar />

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

    <PageDesignSection
      eyebrow="Contact Journey"
      title="Assisted contact flow with structured communication paths"
      description="Contact interactions are now supported with a cleaner conversion layer that aligns with product-first and workflow-based UX."
      :chips="['Lead Capture', 'Support Routing', 'Fast Response', 'Trust Signals']"
    />

    <SiteFooter />

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