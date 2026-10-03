import { computed, ref } from 'vue'

const savedLanguage = typeof localStorage !== 'undefined' ? localStorage.getItem('site-language') : null
const language = ref(savedLanguage === 'tr' ? 'tr' : 'en')

const messages = {
  en: {
    nav: ['About Us', 'Projects', 'API', 'Pricing', 'Contact', 'FAQ'],
    quote: 'Contact us', navDescription: 'Signal registration management platform', language: 'Language',
    heroEyebrow: 'Signal Registry', heroTitle: 'A governed workspace for signal operations',
    heroText: 'Signal Registry gives organizations one environment for live monitoring, registry administration, and controlled workflow design.',
    about: 'View the platform', contact: 'Contact us',
    overviewEyebrow: 'Platform', overviewTitle: 'From signal records to controlled workflows',
    overviewText: 'Review activity through summaries, charts, and unit tables. Administer registry records, then connect sources and actions in the visual editor.',
    featuresEyebrow: 'Capabilities', featuresTitle: 'Operational control across the signal record lifecycle',
    features: [
      ['Live monitoring', 'Summary cards, trend charts, status, and device information in one operational view.'],
      ['Visual workflows', 'Connect sources, actions, and alerts in a defined editor, without custom code.'],
      ['Data delivery', 'Send information to signal sources. Device location is attached when it is available.'],
      ['Operational reporting', 'Review activity, status changes, and detailed records in a consistent format.'],
      ['Access control', 'Sign-in, account administration, and role-based access. Administrators govern users and sessions.'],
      ['Language support', 'English, Turkish, German, French, Spanish, and Italian. The dashboard can open in the browser’s preferred language.'],
    ],
    dashboardEyebrow: 'Dashboard', dashboardTitle: 'A single view of signal status',
    dashboardText: 'Summary cards, trend charts, status distribution, device tables, and pinned monitors are arranged for the operating team.',
    access: 'Request a briefing', mobileEyebrow: 'Workflow design', mobileTitle: 'A controlled editor for signal workflows',
    mobileText: 'Define each step of a signal workflow and connect it in the editor. Follow how information moves from its source to a monitor or alert.',
    mobileList: ['Connect sources to the steps that process them', 'See how each part of the workflow is related', 'Follow signal activity as it changes'],
    partnership: 'Signal Registry', partnershipTitle: 'One operating model for signal data',
    partnershipText: 'Monitoring, registry administration, and workflow design run in the same platform. Speak with Sinyatek about deployment.',
    getInTouch: 'Contact us', resources: 'About the platform',
    aboutPage: {
      title: 'About — Signal Registry',
      description: 'Signal Registry is Sinyatek’s enterprise platform for governed signal registration operations, reporting, and controlled record administration.',
      eyebrow: 'About Signal Registry',
      heroTitle: 'A governed platform for signal registration operations',
      heroText: 'Signal Registry gives organizations one controlled workspace to monitor records, review operational trends, and manage updates under defined access rules.',
      briefing: 'Request a briefing',
      heroNote: 'Controlled workflows. Enterprise support.',
      platformLabel: 'Platform',
      platformTitle: 'One workspace for signal registration operations',
      platformText: 'Authorized teams review record status, trend and channel reporting, and individual updates in the same environment. Access and implementation are arranged directly with Sinyatek.',
      viewProject: 'View the project',
      contact: 'Contact us',
      imageAlt: 'Signal Registry operational workspace',
      enterpriseLabel: 'Enterprise platform',
      intro: ' is Sinyatek’s platform for administering signal registration data with consistent operations, controlled access, and a complete record lifecycle.',
      introSecondary: 'Portfolio visibility, operational reporting, and record updates remain in one workspace, so management review and compliance use the same source of record.',
      metrics: [
        ['Centralized operations', 'One workspace for every team that handles records'],
        ['Accountable workflows', 'Updates stay traceable and aligned with policy'],
        ['Controlled access', 'Role-based authorization and governed sessions'],
      ],
      points: [
        'Management view of record volume, status, trends, and channel performance',
        'Role-based authorization with controlled session governance',
        'Structured record administration, with traceability across environments',
      ],
      modelLabel: 'Operating model',
      modelTitle: 'How the platform is governed',
      cards: [
        ['Operational control', ['Defined workflows for routine and exception work', 'Status visible from summary to individual record', 'Consistent handling across teams and environments', 'Clear ownership of each update']],
        ['Data governance', ['Structured record lifecycle', 'Traceable edits', 'Separation between operating environments', 'Shared standards for every team']],
        ['Implementation', ['Staged rollout with Sinyatek', 'Approval before a production change', 'Repeatable operating procedures', 'Security built into the architecture']],
      ],
    },
  },
  tr: {
    nav: ['Hakkımızda', 'Projeler', 'API', 'Fiyatlandırma', 'İletişim', 'SSS'],
    quote: 'Bize ulaşın', navDescription: 'Sinyal kayıt yönetim platformu', language: 'Dil',
    heroEyebrow: 'Signal Registry', heroTitle: 'Sinyal operasyonları için yönetişimli bir çalışma alanı',
    heroText: 'Signal Registry, kurumlara canlı izleme, kayıt yönetimi ve kontrollü iş akışı tasarımı için tek bir ortam sunar.',
    about: 'Platformu inceleyin', contact: 'Bize ulaşın',
    overviewEyebrow: 'Platform', overviewTitle: 'Sinyal kayıtlarından kontrollü iş akışlarına',
    overviewText: 'Hareketi özetler, grafikler ve birim tabloları üzerinden inceleyin. Kayıt defterini yönetin; kaynakları ve işlemleri görsel editörde birbirine bağlayın.',
    featuresEyebrow: 'Yetenekler', featuresTitle: 'Sinyal kayıt yaşam döngüsünde operasyonel kontrol',
    features: [
      ['Canlı izleme', 'Özet kartlar, eğilim grafikleri, durum ve cihaz bilgisi tek operasyon görünümünde.'],
      ['Görsel iş akışları', 'Kaynakları, işlemleri ve uyarıları tanımlı bir editörde, özel kod olmadan bağlayın.'],
      ['Veri iletimi', 'Bilgiyi sinyal kaynaklarına gönderin. Cihaz konumu uygun olduğunda eklenir.'],
      ['Operasyonel raporlama', 'Hareketi, durum değişikliklerini ve ayrıntılı kayıtları tutarlı bir biçimde inceleyin.'],
      ['Erişim kontrolü', 'Oturum açma, hesap yönetimi ve rol tabanlı erişim. Yöneticiler kullanıcıları ve oturumları yönetir.'],
      ['Dil desteği', 'İngilizce, Türkçe, Almanca, Fransızca, İspanyolca ve İtalyanca. Dashboard, tarayıcının tercih ettiği dille açılabilir.'],
    ],
    dashboardEyebrow: 'Dashboard', dashboardTitle: 'Sinyal durumunun tek görünümü',
    dashboardText: 'Özet kartlar, eğilim grafikleri, durum dağılımı, cihaz tabloları ve sabitlenen monitörler operasyon ekibi için düzenlenir.',
    access: 'Bilgilendirme talep edin', mobileEyebrow: 'İş akışı tasarımı', mobileTitle: 'Sinyal iş akışları için kontrollü bir editör',
    mobileText: 'Bir sinyal iş akışının her adımını tanımlayın ve editörde birbirine bağlayın. Bilginin kaynaktan izlemeye veya uyarıya nasıl ilerlediğini takip edin.',
    mobileList: ['Kaynakları veriyi işleyen adımlara bağlayın', 'İş akışındaki parçaların ilişkisini görün', 'Sinyal hareketini değiştikçe takip edin'],
    partnership: 'Signal Registry', partnershipTitle: 'Sinyal verisi için tek işletim modeli',
    partnershipText: 'İzleme, kayıt yönetimi ve iş akışı tasarımı aynı platformda yürür. Kurulum için Sinyatek ile görüşün.',
    getInTouch: 'Bize ulaşın', resources: 'Platform hakkında',
    aboutPage: {
      title: 'Hakkımızda — Signal Registry',
      description: 'Signal Registry, Sinyatek’in sinyal kayıt operasyonları, raporlama ve kontrollü kayıt yönetimi için kurumsal platformudur.',
      eyebrow: 'Signal Registry hakkında',
      heroTitle: 'Sinyal kayıt operasyonları için yönetişimli bir platform',
      heroText: 'Signal Registry, kurumlara kayıtları izlemek, operasyonel eğilimleri incelemek ve güncellemeleri tanımlı erişim kuralları altında yönetmek için tek bir kontrollü çalışma alanı sunar.',
      briefing: 'Bilgilendirme talep edin',
      heroNote: 'Kontrollü iş akışları. Kurumsal destek.',
      platformLabel: 'Platform',
      platformTitle: 'Sinyal kayıt operasyonları için tek çalışma alanı',
      platformText: 'Yetkili ekipler kayıt durumunu, eğilim ve kanal raporlarını ve tekil güncellemeleri aynı ortamda inceler. Erişim ve kurulum doğrudan Sinyatek ile planlanır.',
      viewProject: 'Projeyi inceleyin',
      contact: 'Bize ulaşın',
      imageAlt: 'Signal Registry operasyon çalışma alanı',
      enterpriseLabel: 'Kurumsal platform',
      intro: ', Sinyatek’in sinyal kayıt verilerini tutarlı operasyon, kontrollü erişim ve eksiksiz bir kayıt yaşam döngüsü ile yöneten platformudur.',
      introSecondary: 'Portföy görünürlüğü, operasyonel raporlama ve kayıt güncellemeleri aynı çalışma alanında kalır; yönetim incelemesi ve uyum aynı kayıt kaynağını kullanır.',
      metrics: [
        ['Merkezi operasyon', 'Kayıtlarla çalışan her ekip için tek çalışma alanı'],
        ['Hesap verebilir iş akışları', 'Güncellemeler izlenebilir kalır ve politikayla uyumludur'],
        ['Kontrollü erişim', 'Rol tabanlı yetkilendirme ve yönetilen oturumlar'],
      ],
      points: [
        'Kayıt hacmi, durum, eğilim ve kanal performansının yönetim görünümü',
        'Kontrollü oturum yönetişimiyle rol tabanlı yetkilendirme',
        'Ortamlar arasında izlenebilirlik sağlayan yapılandırılmış kayıt yönetimi',
      ],
      modelLabel: 'İşletim modeli',
      modelTitle: 'Platform nasıl yönetilir',
      cards: [
        ['Operasyonel kontrol', ['Rutin ve istisna işler için tanımlı iş akışları', 'Özetten tekil kayda kadar görünür durum', 'Ekipler ve ortamlar arasında tutarlı uygulama', 'Her güncellemenin net sahibi']],
        ['Veri yönetişimi', ['Yapılandırılmış kayıt yaşam döngüsü', 'İzlenebilir düzenlemeler', 'Operasyon ortamlarının ayrımı', 'Tüm ekipler için ortak standartlar']],
        ['Uygulama', ['Sinyatek ile aşamalı devreye alma', 'Üretim değişikliğinden önce onay', 'Tekrarlanabilir operasyon prosedürleri', 'Mimariye dahil güvenlik']],
      ],
    },
  },
}

export function documentMeta(routeName) {
  if (routeName !== 'about') return null
  const page = messages[language.value].aboutPage
  return { title: page.title, description: page.description }
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
