<script setup>
import { RouterLink } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import PageDesignSection from '@/components/PageDesignSection.vue'
import { getAssetImg } from '@/utils/getAssetImg'
</script>

<template>
  <div>
    <SiteNavbar />

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

    <PageDesignSection
      eyebrow="Terms Experience"
      title="Operational terms communicated with a modern visual hierarchy"
      description="Terms and conditions now use the same product language so legal and operational expectations are easier to parse."
      :chips="['Legal Clarity', 'Operational Scope', 'Readable Layout', 'Unified Design']"
    />

    <SiteFooter />
  </div>
</template>