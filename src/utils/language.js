import { computed, ref } from 'vue'

const savedLanguage = typeof localStorage !== 'undefined' ? localStorage.getItem('site-language') : null
const language = ref(savedLanguage === 'tr' ? 'tr' : 'en')

const messages = {
  en: {
    nav: ['About Us', 'Projects', 'API', 'Pricing', 'Contact', 'FAQ'],
    quote: 'Contact us', navDescription: 'Signal registration management platform', language: 'Language',
    heroEyebrow: 'Signal Registry · Signal data management', heroTitle: 'Monitor signals. Build smarter data flows.',
    heroText: 'Signal Registry brings live signal monitoring, registry management and a visual flow editor into one workspace. Explore your data, organize records and connect sources, functions, triggers and monitors.',
    about: 'Explore the platform', contact: 'Contact our team',
    overviewEyebrow: 'One connected platform', overviewTitle: 'From registered signals to connected workflows.',
    overviewText: 'Follow signal activity through dashboard summaries, charts and unit tables. Manage registry records, then use the visual editor to connect the building blocks of your data flow.',
    featuresEyebrow: 'Key capabilities', featuresTitle: 'Everything you need to work with signal data.',
    features: [
      ['Live monitoring dashboard', 'See key summaries, temperature trends, status and device information together. Keep the monitors you care about close at hand as new data arrives.'],
      ['Build workflows visually', 'Connect signal sources, actions and alerts with a few simple moves. Create a clear workflow without writing code.'],
      ['Easy data sharing', 'Send information to your signal sources and let the platform add the device location automatically when available.'],
      ['Charts that fit your data', 'View activity, status changes, number sequences and detailed records in a format that makes them easy to understand.'],
      ['Accounts and access', 'Sign in, manage your account and give team members the access they need. Administrators can manage users and sessions.'],
      ['Six languages, ready for your team', 'Choose English, Turkish, German, French, Spanish or Italian. The dashboard can start in your browser’s preferred language.'],
    ],
    dashboardEyebrow: 'Dashboard', dashboardTitle: 'See the state of your signals at a glance.',
    dashboardText: 'Combine summary cards, trend charts, status distribution, device tables and pinned monitors in a dashboard tailored to your workflow.',
    access: 'Request a demo', mobileEyebrow: 'Visual workflow design', mobileTitle: 'Bring your signal workflow together visually.',
    mobileText: 'Arrange the parts of a signal workflow and connect them in a clear visual editor. Follow how information moves from its source through each step to the resulting monitor or alert.',
    mobileList: ['Connect signal sources with the steps that process them', 'See how each part of the workflow relates', 'Follow signal activity as it changes'],
    partnership: 'Signal Registry', partnershipTitle: 'Turn signal data into a connected operation.',
    partnershipText: 'See how dashboard monitoring, registry management and visual flow design work together. Contact our team to learn more about Signal Registry.',
    getInTouch: 'Contact us', resources: 'Learn about Signal Registry',
  },
  tr: {
    nav: ['Hakkımızda', 'Projeler', 'API', 'Fiyatlandırma', 'İletişim', 'SSS'],
    quote: 'Bize ulaşın', navDescription: 'Sinyal kayıt yönetim platformu', language: 'Dil',
    heroEyebrow: 'Signal Registry · Sinyal veri yönetimi', heroTitle: 'Sinyalleri izleyin. Akıllı veri akışları kurun.',
    heroText: 'Signal Registry; canlı sinyal izleme, kayıt defteri yönetimi ve görsel akış editörünü tek bir çalışma alanında buluşturur. Verilerinizi inceleyin, kayıtlarınızı düzenleyin; kaynakları, fonksiyonları, tetikleyicileri ve monitörleri birbirine bağlayın.',
    about: 'Platformu keşfedin', contact: 'Ekibimizle iletişime geçin',
    overviewEyebrow: 'Birbiriyle bağlantılı platform', overviewTitle: 'Sinyal kayıtlarından bağlantılı iş akışlarına.',
    overviewText: 'Sinyal hareketlerini özet paneller, grafikler ve birim tabloları üzerinden takip edin. Kayıt defterlerinizi yönetin; görsel editörde veri akışınızın bileşenlerini birbirine bağlayın.',
    featuresEyebrow: 'Öne çıkan özellikler', featuresTitle: 'Sinyal verileriyle çalışmak için ihtiyacınız olan her şey.',
    features: [
      ['Canlı izleme paneli', 'Önemli özetleri, sıcaklık eğilimlerini, durumları ve cihaz bilgilerini tek yerde görün. Veriler güncellenirken takip etmek istediklerinizi panelinize sabitleyin.'],
      ['Görsel iş akışları', 'Sinyal kaynaklarını, işlemleri ve uyarıları birkaç kolay adımla birbirine bağlayın. Kod yazmadan anlaşılır bir iş akışı oluşturun.'],
      ['Kolay veri paylaşımı', 'Sinyal kaynaklarınıza bilgi gönderin; uygun olduğunda cihaz konumu otomatik olarak eklensin.'],
      ['Verinize uygun grafikler', 'Hareketleri, durum değişikliklerini, sayı dizilerini ve ayrıntılı kayıtları kolay anlaşılır görünümlerle inceleyin.'],
      ['Hesap ve erişim yönetimi', 'Oturum açın, hesabınızı yönetin ve ekip üyelerine ihtiyaç duydukları erişimi verin. Yöneticiler kullanıcıları ve oturumları yönetebilir.'],
      ['Ekibiniz için altı dil', 'İngilizce, Türkçe, Almanca, Fransızca, İspanyolca veya İtalyanca kullanın. Dashboard, tarayıcınızın tercih ettiği dille açılabilir.'],
    ],
    dashboardEyebrow: 'Dashboard', dashboardTitle: 'Sinyallerinizin durumunu bir bakışta görün.',
    dashboardText: 'Özet kartlarını, eğilim grafiklerini, durum dağılımını, cihaz tablolarını ve sabitlenebilir monitörleri iş akışınıza göre düzenleyin.',
    access: 'Demo talep edin', mobileEyebrow: 'Görsel iş akışı tasarımı', mobileTitle: 'Sinyal iş akışınızı görsel olarak bir araya getirin.',
    mobileText: 'Bir sinyal iş akışının parçalarını düzenleyip görsel editörde birbirine bağlayın. Bilginin kaynağından başlayarak her adımda nasıl ilerlediğini ve hangi izleme ya da uyarıya ulaştığını görün.',
    mobileList: ['Sinyal kaynaklarını veriyi işleyen adımlara bağlayın', 'İş akışındaki parçaların ilişkisini görün', 'Sinyal hareketlerini değiştikçe takip edin'],
    partnership: 'Signal Registry', partnershipTitle: 'Sinyal verilerinizi bağlantılı bir operasyona dönüştürün.',
    partnershipText: 'Dashboard izleme, kayıt defteri yönetimi ve görsel akış tasarımının birlikte nasıl çalıştığını keşfedin. Signal Registry hakkında bilgi almak için ekibimizle iletişime geçin.',
    getInTouch: 'Bize ulaşın', resources: 'Signal Registry hakkında bilgi alın',
  },
}

export function useLanguage() {
  const t = computed(() => messages[language.value])
  function setLanguage(value) {
    language.value = value === 'tr' ? 'tr' : 'en'
    if (typeof localStorage !== 'undefined') localStorage.setItem('site-language', language.value)
    if (typeof document !== 'undefined') document.documentElement.lang = language.value
  }
  return { language, t, setLanguage }
}
