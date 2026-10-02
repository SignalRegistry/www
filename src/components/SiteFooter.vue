<script setup>
import { RouterLink } from 'vue-router'
import { getAssetImg } from '@/utils/getAssetImg'
import { useLanguage } from '@/utils/language'

const { language } = useLanguage()
</script>

<template>
  <footer class="app-site-footer">
    <section class="footer-section ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>{{ language === 'tr' ? 'Geliştiriciler' : 'Developers' }}</h3></div>
              <ul class="footer-quick-links">
                <li><a href="https://github.com/SignalRegistry" target="_blank" rel="noopener">GitHub</a></li>
                <li><RouterLink to="/api">API</RouterLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>{{ language === 'tr' ? 'Kaynaklar' : 'Resources' }}</h3></div>
              <ul class="footer-quick-links">
                <li><RouterLink to="/blog">Blog</RouterLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <div class="footer-heading"><h3>{{ language === 'tr' ? 'İletişimde kalın' : 'Stay in Touch' }}</h3></div>
              <ul class="footer-quick-links">
                <li><a href="mailto:iletisim@sinyatek.com">Email</a></li>
                <li>
                  <a href="https://www.linkedin.com/company/si%CC%87nyatek/posts/?feedView=all" target="_blank" rel="noopener">LinkedIn</a>
                </li>
                <li><RouterLink to="/contact">{{ language === 'tr' ? 'İletişim' : 'Contact Us' }}</RouterLink></li>
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

    <div class="copyright-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p>Copyright © 2026 Sinyatek. {{ language === 'tr' ? 'Tüm hakları saklıdır.' : 'All Rights Reserved' }}</p>
          </div>
          <div class="col-lg-6 col-md-6">
            <ul>
              <li><RouterLink to="/privacy-policy">{{ language === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy' }}</RouterLink></li>
              <li><RouterLink to="/terms-condition">{{ language === 'tr' ? 'Kullanım Koşulları' : 'Terms & Conditions' }}</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-site-footer :deep(.copyright-area) {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.app-site-footer :deep(.copyright-area p) {
  letter-spacing: 0.01em;
  font-size: 0.9375rem;
}

.app-site-footer :deep(.copyright-area ul a) {
  letter-spacing: 0.01em;
  font-size: 0.9375rem;
}
</style>
