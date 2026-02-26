<script setup>
import { RouterLink } from 'vue-router'
import { getAssetImg } from '@/utils/getAssetImg'
</script>

<template>
  <div>
    <!-- Navbar -->
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
            <RouterLink class="navbar-brand" to="/">
              <img :src="getAssetImg('logo.png')" class="white-logo" alt="logo">
              <img :src="getAssetImg('logo-black.png')" class="black-logo" alt="logo">
            </RouterLink>
            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item"><RouterLink to="/about" class="nav-link">About Us</RouterLink></li>
                <li class="nav-item"><RouterLink to="/projects" class="nav-link">Projects</RouterLink></li>
                <li class="nav-item"><RouterLink to="/api" class="nav-link">API</RouterLink></li>
                <li class="nav-item"><RouterLink to="/contact" class="nav-link">Contact</RouterLink></li>
                <li class="nav-item"><RouterLink to="/faq" class="nav-link">FAQ</RouterLink></li>
              </ul>
              <div class="other-option">
                <RouterLink class="default-btn" to="/pricing">Free Quote <span /></RouterLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <!-- Page Title -->
    <div class="page-title-area item-bg1">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="page-title-content">
              <h2>Terms & Conditions</h2>
              <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Terms & Conditions Content -->
    <section class="privacy-policy ptb-100">
      <div class="container">
        <div class="single-privacy">
          <h3 class="mt-0">Signal Registry Kullanım Şartları</h3>
          <p>
            Bu şartlar, <strong>Sinyatek</strong> tarafından sunulan <strong>Signal Registry</strong> yönetim paneli (dash.signalregistry.net)
            uygulamasının kullanımına ilişkindir. Signal Registry, sinyal kayıt verilerini takip ve yönetmek için kullanılır; giriş yapılmadan
            dashboard, profil ve kayıt sayfalarına erişim sağlanmaz. Platforma erişerek veya hesap kullanarak bu şartları kabul etmiş sayılırsınız.
            Sinyatek, hizmetleri ve özellikleri önceden bildirimde bulunmaksızın güncelleme hakkını saklı tutar.
          </p>
          <p>
            Signal Registry üzerinden yalnızca yasal ve yetkiniz dahilinde işlem yapmanız, hesap bilgilerinizi güvende tutmanız ve üçüncü taraflarla
            paylaşmamanız gerekmektedir. Platformda görüntülediğiniz sinyal kayıtları, özet verileri, trend/kanal grafikleri, birim tabloları
            ve kayıt düzenleme çıktılarının kullanımı ve sorumluluğu size aittir.
          </p>

          <h3>Hesap ve erişim</h3>
          <p>
            Signal Registry'ye erişim, oturum (session) ile kontrol edilir; geçersiz oturumda kullanıcı giriş sayfasına yönlendirilir. Hesap
            bilgilerinizi yetkisiz kullanımdan korumak sizin sorumluluğunuzdadır. Şüpheli bir erişim fark ederseniz derhal
            <a href="mailto:iletisim@sinyatek.com">iletisim@sinyatek.com</a> üzerinden bize ulaşın. Sinyatek, kötüye kullanım, şartlara aykırı
            kullanım veya güvenlik gerekçesiyle erişimi askıya alma veya sonlandırma hakkını saklı tutar.
          </p>

          <h3>Fikri mülkiyet ve veri</h3>
          <p>
            Signal Registry'ye ait arayüz, marka, logo ve yazılım Sinyatek'e aittir. Platformda görüntülediğiniz veya dışa
            aktardığınız verilerin kullanımı, ilgili veri sahipliği ve müşteri sözleşmelerine tabidir. Bu şartlar veri sahipliğinizi devretmez;
            yalnızca hizmetin kullanım koşullarını düzenler. Değişiklikler bu sayfada yayımlandığı anda yürürlüğe girer. Kullanıma devam
            etmeniz güncel şartları kabul ettiğiniz anlamına gelir. Sorularınız için <a href="mailto:iletisim@sinyatek.com">iletisim@sinyatek.com</a> adresine yazabilirsiniz.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
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
  </div>
</template>
