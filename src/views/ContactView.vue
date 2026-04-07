<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
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
            <div class="contact-hero-content">
              <span class="contact-hero-eyebrow">Contact Signal Registry</span>
              <h1>Connect with our team for onboarding, support, and implementation</h1>
              <p>
                Reach out to discuss access planning, deployment requirements, or operational guidance.
                We help teams move from evaluation to production with a clear support path.
              </p>
              <div class="contact-hero-actions">
                <RouterLink to="/contact" class="default-btn-one">
                  Contact Team
                  <span />
                </RouterLink>
                <span class="contact-hero-note">Response-oriented support. Enterprise-ready communication.</span>
              </div>
            </div>
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
        <div class="contact-surface">
          <div class="row g-0 align-items-stretch">
            <div class="col-lg-5">
              <div class="contact-surface__info">
                <h3>So glad we're getting in touch!</h3>
                <p>
                  Signal Registry helps teams manage signal operations with clarity, speed, and secure governance.
                </p>
                <ul class="contact-surface__list">
                  <li>
                    <i class="fa fa-line-chart" aria-hidden="true" />
                    <div>
                      <strong>Operational Intelligence</strong>
                      <span>Track trends, channels, and critical KPIs in one place.</span>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-random" aria-hidden="true" />
                    <div>
                      <strong>Workflow Simplicity</strong>
                      <span>Move from monitoring to editing through one structured flow.</span>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-shield" aria-hidden="true" />
                    <div>
                      <strong>Enterprise Trust</strong>
                      <span>Built with secure access controls and environment-aware operations.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="contact-form contact-form--pro">
                <div class="contact-form__head">
                  <h3>Contact Our Team</h3>
                  <p>Share your requirements and we will return with the right implementation path.</p>
                </div>
                <form id="contactForm" @submit.prevent>
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="First name">
                        <div class="help-block with-errors" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <input type="text" name="last_name" id="last_name" class="form-control" required data-error="Please enter your last name" placeholder="Last name">
                        <div class="help-block with-errors" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Business email">
                        <div class="help-block with-errors" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <input type="text" name="company_name" id="company_name" class="form-control" required data-error="Please enter your company name" placeholder="Company name">
                        <div class="help-block with-errors" />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <textarea name="message" class="form-control" id="message" cols="30" rows="6" required data-error="Write your message" placeholder="Tell us how we can help" />
                        <div class="help-block with-errors" />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <p class="contact-form__policy">
                        By clicking contact us, you agree to our terms of service and privacy policy.
                      </p>
                      <button type="submit" class="submit-btn">Contact us</button>
                      <div id="msgSubmit" class="h3 text-center hidden" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Subscribe Section -->
    <section class="subscribe-Section ptb-100">
      <div class="container">
        <div class="subscribe-content-area mb-0 subscribe-content-area--pro">
          <div class="subscribe-content">
            <span class="subscribe-content__eyebrow">Newsletter</span>
            <h2>Stay updated with product releases and support announcements</h2>
            <p>Get curated updates about Signal Registry capabilities, platform improvements, and service notifications.</p>
          </div>
          <form class="newsletter-form newsletter-form--pro" @submit.prevent>
            <input type="email" class="input-newsletter" placeholder="Enter your business email" name="EMAIL" required autocomplete="off">
            <button type="submit">Subscribe</button>
            <div id="validator-newsletter" class="form-result" />
          </form>
        </div>
      </div>
    </section>

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
  position: relative;
}

.page-title-area--contact::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(16, 18, 37, 0.62);
  z-index: 0;
}

.contact-hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: #ffffff;
  padding: 36px 0 28px;
}

.contact-hero-eyebrow {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.24);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.contact-hero-content h1 {
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 44px;
  line-height: 1.2;
}

.contact-hero-content p {
  margin-bottom: 22px;
  max-width: 690px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
  line-height: 1.7;
}

.contact-hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.contact-hero-note {
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 500;
}

.contact-form--pro {
  background: #ffffff;
  border: 1px solid #e3ebfb;
  border-radius: 16px;
  padding: 28px 24px;
  height: 100%;
}

.contact-surface {
  position: relative;
  background: #ffffff;
  border: 1px solid #dfe9fb;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 34px rgba(18, 56, 117, 0.12);
}

.contact-section {
  background: #ffffff !important;
}

.subscribe-Section {
  background: #ffffff;
}

.subscribe-content-area {
  background: #ffffff;
}

.subscribe-content-area--pro {
  border: 1px solid #dbe6fb;
  border-radius: 18px;
  padding: 36px 32px;
  box-shadow: 0 14px 30px rgba(20, 44, 92, 0.1);
  margin-bottom: 0 !important;
}

.subscribe-content-area--pro .subscribe-image {
  display: none !important;
}

.subscribe-content-area--pro .subscribe-content {
  margin-bottom: 18px;
  text-align: center;
}

.subscribe-content-area--pro .subscribe-content h2 {
  max-width: none;
  margin-bottom: 10px;
  font-size: 34px;
  line-height: 1.2;
  color: #1d2d52;
}

.subscribe-content-area--pro .subscribe-content p {
  max-width: 720px;
  color: #596a92;
  margin: 0 auto;
}

.subscribe-content__eyebrow {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid #d7e3fc;
  background: #f6f9ff;
  color: #1e4fa3;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.newsletter-form--pro {
  max-width: 760px;
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-left: auto !important;
  margin-right: auto !important;
}

.newsletter-form--pro .input-newsletter {
  position: static;
  height: 54px;
  border: 1px solid #d3e0fb;
  background: #ffffff;
  border-radius: 12px;
  padding: 0 16px;
  font-size: 15px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.newsletter-form--pro .input-newsletter:focus {
  border-color: #57b7f0;
  box-shadow: 0 0 0 3px rgba(87, 183, 240, 0.18);
}

.newsletter-form--pro button {
  position: static;
  min-width: 165px;
  height: 54px;
  border-radius: 12px;
  font-weight: 600;
  letter-spacing: 0.01em;
}

@media only screen and (max-width: 767px) {
  .subscribe-content-area--pro {
    padding: 26px 18px;
  }

  .subscribe-content-area--pro .subscribe-content h2 {
    font-size: 27px;
  }

  .newsletter-form--pro {
    flex-direction: column;
  }

  .newsletter-form--pro button {
    width: 100%;
  }
}

.contact-surface__info {
  color: #334164;
  padding: 34px 28px;
  height: 100%;
  background: #ffffff;
  border-right: 1px solid #e1eafb;
}

.contact-surface__info h3 {
  color: #1d2d52;
  font-size: 40px;
  line-height: 1.1;
  margin-bottom: 14px;
}

.contact-surface__info p {
  color: #536287;
  margin-bottom: 18px;
}

.contact-surface__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
}

.contact-surface__list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.contact-surface__list i {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #cddcf9;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #2e6fd6;
  margin-top: 1px;
  background: #f4f8ff;
}

.contact-surface__list strong {
  display: block;
  color: #1d2d52;
  font-size: 15px;
  margin-bottom: 2px;
}

.contact-surface__list span {
  color: #5a6a91;
  font-size: 13px;
  line-height: 1.45;
}

.contact-form__head {
  margin-bottom: 14px;
}

.contact-form__head h3 {
  margin-bottom: 6px;
  color: #1d2d52;
  font-size: 30px;
}

.contact-form__head p {
  color: #5a6a91;
  margin-bottom: 0;
}

.contact-form--pro .form-control {
  border: 1px solid #dce6fb;
  border-radius: 10px;
  min-height: 52px;
  box-shadow: none;
  color: #243351;
  background: #fdfefe;
}

.contact-form--pro .form-control::placeholder {
  color: #8694b5;
}

.contact-form--pro textarea.form-control {
  min-height: 170px;
}

.contact-form__policy {
  color: #7a89ab;
  font-size: 12px;
  margin-bottom: 12px;
}

.contact-form--pro .submit-btn {
  border-radius: 12px;
  min-height: 50px;
  font-weight: 600;
  padding: 0 28px;
}

@media only screen and (max-width: 767px) {
  .contact-hero-content {
    padding: 24px 0 12px;
  }

  .contact-hero-content h1 {
    font-size: 30px;
  }

  .contact-hero-content p {
    font-size: 15px;
    line-height: 1.65;
  }

  .contact-surface__info h3 {
    font-size: 32px;
  }

  .contact-surface__info,
  .contact-form--pro {
    padding: 22px 16px;
  }

  .contact-form__head h3 {
    font-size: 24px;
  }
}

</style>