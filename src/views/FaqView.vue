<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import { getAssetImg } from '@/utils/getAssetImg'

const openIndex = ref(0)

const faqItems = [
  {
    title: 'What is Signal Registry?',
    content: "Signal Registry is Sinyatek's management panel for tracking and managing signal registration data. After signing in, you can view summary cards, trend and channel charts, a unit table, and edit individual records. Dashboard, profile, and record pages are protected and require a valid session.",
  },
  {
    title: 'What can I see on the dashboard?',
    content: "The dashboard shows summary cards, trend graphs, and channel graphs for a quick overview of signal registration data. The unit table lists all units and can be sorted and filtered. You can switch between data sources and rearrange the layout with drag-and-drop.",
  },
  {
    title: 'How is access and security handled?',
    content: "Access to the dashboard and record pages is controlled by sign-in. The application checks your session continuously; if the session is invalid or expires, you are redirected to the sign-in page. Keep your account details secure and contact us at iletisim@sinyatek.com if you notice any suspicious activity.",
  },
  {
    title: 'How can I get access or support?',
    content: "For access to Signal Registry, implementation details, or technical support, please contact us via the Contact page or at iletisim@sinyatek.com. We can also help with custom API or environment setup.",
  },
]

function toggleAccordion(index) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <div class="centered-logo-mobile">
    <SiteNavbar />

    <!-- Start Page Title Area -->
    <div class="page-title-area item-bg2">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="page-title-content" />
          </div>
        </div>
      </div>
    </div>

    <!-- Start Faq Section -->
    <section class="faq-section ptb-100">
      <div class="container">
        <div class="section-title">
          <span>FAQ</span>
          <h3>Frequently Asked Questions</h3>
        </div>

        <div class="faq-accordion">
          <ul class="accordion">
            <li
              v-for="(item, index) in faqItems"
              :key="index"
              class="accordion-item"
            >
              <a
                href="javascript:void(0)"
                class="accordion-title"
                :class="{ active: openIndex === index }"
                @click.prevent="toggleAccordion(index)"
              >
                <i class="fa fa-plus" />
                {{ item.title }}
              </a>
              <p
                class="accordion-content"
                :class="{ show: openIndex === index }"
              >
                {{ item.content }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Start Faq Contact Section -->
    <div class="faq-contact-section pb-100">
      <div class="container">
        <div class="section-title">
          <h3>Do You Have Any Questions</h3>
        </div>

        <div class="faq-contact-form">
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

    <!-- Start Footer Section -->
    <section class="footer-section ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Developers</h3></div>
              <ul class="footer-quick-links">
                <li><a href="https://github.com/SignalRegistry" target="_blank" rel="noopener">GitHub</a></li>
                
                <li><RouterLink to="/api">API</RouterLink></li>
                
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Resources</h3></div>
              <ul class="footer-quick-links">
                <li><a href="#">Blog</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>Stay in Touch</h3></div>
              <ul class="footer-quick-links">
                <li><a href="mailto:iletisim@sinyatek.com">Email</a></li>
                <li><a href="https://www.linkedin.com/company/si%CC%87nyatek/posts/?feedView=all" target="_blank" rel="noopener">LinkedIn</a></li>
                <li><RouterLink to="/contact">Contact Us</RouterLink></li>
              </ul>
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
            <p>Copyright © 2026 Sinyatek. All Rights Reserved</p>
          </div>
          <div class="col-lg-6 col-md-6">
            <ul>
              <li><RouterLink to="/privacy-policy">Privacy Policy</RouterLink></li>
              <li><RouterLink to="/terms-condition">Terms & Conditions</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Go Top Section -->
  </div>
</template>