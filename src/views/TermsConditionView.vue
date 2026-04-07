<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { getAssetImg } from '@/utils/getAssetImg'

const termsHeroBg = getAssetImg('projects_image.jpg')
</script>

<template>
  <div>
    <SiteNavbar />

    <!-- Page Title -->
    <div
      class="page-title-area page-title-area--terms"
      :style="termsHeroBg ? { backgroundImage: `url(${termsHeroBg})` } : {}"
    >
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="terms-hero-content">
              <span class="terms-hero-eyebrow">Signal Registry Terms</span>
              <h1>Secure, clear, and responsible operations through well-defined terms</h1>
              <p>
                This page outlines Signal Registry platform usage rules, access conditions, and
                responsibilities of all parties in a clear and practical structure.
              </p>
              <div class="terms-hero-actions">
                <a href="#terms-content" class="default-btn-one">
                  Review Terms
                  <span />
                </a>
                <span class="terms-hero-note">Current conditions. Clear responsibility boundaries.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Terms & Conditions Content -->
    <section id="terms-content" class="privacy-policy ptb-100">
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

    <SiteFooter />
  </div>
</template>

<style scoped>
.page-title-area--terms {
  background-color: #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.page-title-area--terms::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(16, 18, 37, 0.62);
  z-index: 0;
}

.terms-hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: #ffffff;
  padding: 36px 0 28px;
}

.terms-hero-eyebrow {
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

.terms-hero-content h1 {
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 44px;
  line-height: 1.2;
}

.terms-hero-content p {
  margin-bottom: 22px;
  max-width: 690px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 17px;
  line-height: 1.7;
}

.terms-hero-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.terms-hero-note {
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  font-weight: 500;
}

@media only screen and (max-width: 767px) {
  .terms-hero-content {
    padding: 24px 0 12px;
  }

  .terms-hero-content h1 {
    font-size: 30px;
  }

  .terms-hero-content p {
    font-size: 15px;
    line-height: 1.65;
  }
}
</style>