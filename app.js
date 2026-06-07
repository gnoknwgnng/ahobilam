/* ================================
   AHOBILAM DEVASTHANAM – APP.JS
   ================================ */

// ---- STICKY HEADER SHADOW ----
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  const backToTop = document.getElementById('backToTop');
  if (window.scrollY > 80) {
    header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
    backToTop.classList.add('visible');
  } else {
    header.style.boxShadow = '';
    backToTop.classList.remove('visible');
  }
});

// ---- MOBILE MENU ----
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
  });
});

// ---- LANGUAGE SWITCHER ----
function changeLang(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    if (lang === 'te') {
      el.textContent = el.dataset.te || el.dataset.en;
    } else if (lang === 'ta') {
      el.textContent = el.dataset.ta || el.dataset.en;
    } else if (lang === 'kn') {
      el.textContent = el.dataset.kn || el.dataset.en;
    } else {
      el.textContent = el.dataset.en;
    }
  });

  // Also translate input placeholders
  document.querySelectorAll('[data-en-placeholder]').forEach(el => {
    if (lang === 'te') {
      el.placeholder = el.dataset.tePlaceholder || el.dataset.enPlaceholder;
    } else if (lang === 'ta') {
      el.placeholder = el.dataset.taPlaceholder || el.dataset.enPlaceholder;
    } else if (lang === 'kn') {
      el.placeholder = el.dataset.knPlaceholder || el.dataset.enPlaceholder;
    } else {
      el.placeholder = el.dataset.enPlaceholder;
    }
  });
}

// ---- TEMPLE FILTER ----
function filterTemples(area) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.temple-card').forEach(card => {
    if (area === 'all' || card.dataset.area === area) {
      card.style.display = '';
      card.style.animation = 'fadeIn 0.4s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

// ---- TEMPLE MODAL DATA (Nava Narasimha – 9 shrines) ----
const templeData = [
  {
    num: '01',
    name: 'Jwala Narasimha',
    sanskrit: 'ज्वाल नरसिंह',
    localImg: 'jwala.jpg',
    area: 'Upper Ahobilam',
    meaning: '"Jwala" = Flame — the blazing, fiery form',
    history: `Jwala Narasimha is the most sacred and powerful shrine in Ahobilam. This is believed to be the very spot where Lord Narasimha burst through the pillar in a blazing flame of divine fire (Jwala) to slay the demon king Hiranyakashipu. The form is described in ancient texts as radiating fire in all directions — "Jvalantam Sarvato Mukham" (blazing with faces on all sides). The trek to this shrine through river beds and forest paths mimics the arduous devotion of Prahlada. Pilgrims experience an intense spiritual energy upon reaching the sanctum. During the annual Brahmothsavam, this temple draws the largest crowds for the symbolic reenactment of the Lord's appearance.`,
    significance: 'The primary site of Lord Narasimha\'s divine manifestation. Most revered of the nine shrines.',
    trek: '~2 hours one way · River bed & mountain path',
    difficulty: 'Moderate–Challenging',
    tip: 'Start by 7 AM. Hire a guide (₹200). Carry 2+ litres water. Do NOT attempt alone in monsoon.',
    darshan: 'Open 6:00 AM – 5:00 PM'
  },
  {
    num: '02',
    name: 'Ahobila Narasimha',
    sanskrit: 'अहोबिल नरसिंह',
    localImg: 'ahobila.jpg',
    area: 'Upper Ahobilam — Principal Temple',
    meaning: '"Aho Balam" = What great strength! — exclaimed by the gods upon witnessing Lord\'s power',
    history: `Ahobila Narasimha is the main presiding deity of the entire Kshetram. When Lord Narasimha slew Hiranyakashipu, all the celestial beings (Devas) exclaimed "Aho Balam! Aho Balam!" (What extraordinary strength!) in awe — giving this place its name Ahobilam. The temple is referenced in 9th-century Tamil Nalayira Divya Prabandham hymns by the Alvars, making it one of the oldest living temples of South India. The main sanctum has a swayambhu (self-manifested) idol of the Lord in his fierce Ugra Narasimha form. The temple reached its greatest architectural glory during the Vijayanagara period (14th–16th century). It is listed as Divya Desam #19 of the 108 sacred Vaishnava pilgrimage sites.`,
    significance: 'Swayambhu kshetram, Divya Desam #19, principal shrine of the entire complex',
    trek: 'Main Upper Ahobilam complex — easily accessible',
    difficulty: 'Easy',
    tip: 'Arrive early to avoid queues. Darshan on Swathi Nakshatra days is especially auspicious.',
    darshan: 'Open 6:00 AM – 8:00 PM'
  },
  {
    num: '03',
    name: 'Malola Narasimha',
    sanskrit: 'मलोल नरसिंह',
    localImg: 'malola.jpg',
    area: 'Upper Ahobilam',
    meaning: '"Maa" (Goddess Lakshmi) + "Lola" (beloved) — the one who is dear to Lakshmi',
    history: `Malola Narasimha represents the most benevolent and compassionate form of Lord Narasimha — the one who is beloved by Goddess Mahalakshmi. After the fierce slaying of Hiranyakashipu, the gods were terrified of the Lord's anger. Goddess Lakshmi herself, at the request of the Devas, approached the Lord in this form and pacified him. The idol depicts the Lord seated with Goddess Lakshmi on his lap in a gracious, affectionate pose — a stark contrast to the fearsome Jwala form. This temple is particularly significant for couples seeking matrimonial blessings and for prayers for family welfare. The presiding deity is also known as the "Festival form" (Utsava Murti) of the Kshetram.`,
    significance: 'The benevolent, Lakshmi-accompanied form. Sought for family blessings and matrimonial prayers.',
    trek: '~1.5 hours from base · En route to Jwala',
    difficulty: 'Moderate',
    tip: 'Visited as part of the Jwala trek sequence: Kroda → Malola → Jwala.',
    darshan: 'Open 6:00 AM – 5:00 PM'
  },
  {
    num: '04',
    name: 'Kroda Narasimha',
    sanskrit: 'क्रोड नरसिंह',
    localImg: 'kroda.jpg',
    area: 'Upper Ahobilam',
    meaning: '"Kroda" = Boar — the combined Varaha-Narasimha form',
    history: `Kroda Narasimha is a rare and unique form that combines two of Vishnu's ten principal avatars — Varaha (the divine boar, 3rd avatar) and Narasimha (the lion-man, 4th avatar). This combined manifestation is unique to Ahobilam and is not commonly found elsewhere in South India. Scripturally, Varaha appeared to rescue the earth goddess (Bhudevi) from the demon Hiranyaksha, while Narasimha appeared to rescue Prahlada from Hiranyakashipu — both demons being brothers. The Kroda form commemorates this divine connection. The idol in this shrine is notable for displaying both boar-headed and lion-maned features simultaneously. Ancient Puranas describe this form as particularly powerful for removing obstacles (vighna nashaka).`,
    significance: 'Unique combined Varaha-Narasimha form. Rare manifestation found only at Ahobilam.',
    trek: '~1 hour from base · Along Jwala route',
    difficulty: 'Moderate',
    tip: 'First stop on the Jwala trek route. Usually visited with Malola before continuing to Jwala.',
    darshan: 'Open 6:00 AM – 5:00 PM'
  },
  {
    num: '05',
    name: 'Kaaranja Narasimha',
    sanskrit: 'कारञ्ज नरसिंह',
    localImg: 'kaaranja.jpg',
    area: 'Upper Ahobilam',
    meaning: '"Kaaranja" = Pongamia tree (Karanja/Honge tree) — the form beneath the sacred tree',
    history: `Kaaranja Narasimha is enshrined beneath a sacred Kaaranja tree (Pongamia pinnata), a tree considered holy in Vaishnava tradition for its medicinal and ritual properties. The tree's oil is used in temple lamps, and its presence is associated with Lord Vishnu in ancient texts. This is one of the most accessible shrines in Upper Ahobilam — located roadside, making it a blessing for elderly pilgrims and those who cannot undertake the mountain treks. The deity here is in a seated, peaceful posture. Tradition holds that prayers offered here beneath the Kaaranja tree grant swift resolution of legal disputes and protection from enemies. The Pongamia tree near the shrine is believed to be several centuries old.`,
    significance: 'Roadside accessible shrine. Prayers here resolve legal disputes and remove enemies.',
    trek: 'No trek — roadside access',
    difficulty: 'Very Easy',
    tip: 'Ideal for elderly visitors and those with limited mobility. Visit before the main Ahobila temple.',
    darshan: 'Open 6:00 AM – 6:00 PM'
  },
  {
    num: '06',
    name: 'Bhargava Narasimha',
    sanskrit: 'भार्गव नरसिंह',
    localImg: 'bhargava.jpg',
    area: 'Upper Ahobilam',
    meaning: '"Bhargava" refers to Parashurama (Bhrigu lineage sage) who worshipped this form',
    history: `Bhargava Narasimha is the form of the Lord worshipped and obtained as a special boon by the legendary sage-warrior Parashurama (Bhargava Rama), the sixth avatar of Vishnu. According to tradition, Parashurama, after completing his campaigns, came to Ahobilam to perform penance and worship Lord Narasimha. Pleased by his intense devotion, the Lord appeared before him as Bhargava Narasimha. The presence of a Narasimha form worshipped by another avatar of Vishnu makes this shrine theologically unique — it represents the devotion of one avatar to another. The idol here holds the Sudarshana Chakra (divine discus) prominently. This shrine is located about 2 km from the main complex, accessible by jeep through a beautiful forest stretch.`,
    significance: 'Worshipped by Parashurama (6th avatar of Vishnu). Unique inter-avatar devotional significance.',
    trek: '2 km by jeep/auto from main complex',
    difficulty: 'Easy (by vehicle)',
    tip: 'Take a shared jeep from the main complex area. Negotiate fare before boarding (₹50–100).',
    darshan: 'Open 6:30 AM – 5:30 PM'
  },
  {
    num: '07',
    name: 'Yogananda Narasimha',
    sanskrit: 'योगानन्द नरसिंह',
    localImg: 'yogananda.jpg',
    area: 'Upper Ahobilam',
    meaning: '"Yoga" + "Ananda" = the bliss of yoga — the meditating form',
    history: `Yogananda Narasimha represents the supreme meditative aspect of Lord Narasimha — a profound contrast to his fearsome lion-man manifestation. After slaying Hiranyakashipu and blessing Prahlada, the Lord entered a state of deep yogic meditation (samadhi) to restore cosmic balance and inner peace. This form, seated in padmasana (lotus posture) with eyes closed in contemplation, is considered particularly auspicious for spiritual seekers, yogis, and those seeking liberation (moksha). Ancient acharyas of the Sri Vaishnava tradition meditated upon this form during their spiritual practices. The temple is easily accessible on a paved road, 2 km from the base, making it one of the more frequently visited shrines. The peaceful darshan here is said to calm the mind and grant clarity of thought.`,
    significance: 'The meditating form. Especially auspicious for spiritual seekers and those seeking moksha.',
    trek: '2 km on paved road — easily accessible',
    difficulty: 'Easy',
    tip: 'Visit together with Kshatravata Narasimha — both are close on the same paved road.',
    darshan: 'Open 6:00 AM – 6:00 PM'
  },
  {
    num: '08',
    name: 'Kshatravata Narasimha',
    sanskrit: 'क्षत्रवट नरसिंह',
    localImg: 'kshatravata.jpg',
    area: 'Upper Ahobilam',
    meaning: '"Kshatravata" = Under the canopy of the Vata (banyan) tree — the sheltered form',
    history: `Kshatravata Narasimha (also written Chatravata) is the form of the Lord seated beneath the sacred Vata (banyan) tree, whose spreading canopy serves as a natural umbrella (chatra). The banyan tree is one of the most sacred trees in Hindu tradition — it is the Akshaya Vata (immortal tree) under which Lord Vishnu himself meditated during the great dissolution (pralaya). The Kshatravata shrine commemorates the Lord's eternal presence under this cosmic tree. The deity here is depicted in a relaxed, royal pose (Maharaja posture) — suggesting the Lord's sovereign reign over the universe while resting in divine leisure beneath the tree. This form is invoked for blessings of longevity, protection of family lineages, and prosperity. The temple is close to Yogananda Narasimha on the same 2 km paved road.`,
    significance: 'The Lord seated beneath the cosmic banyan tree. Invoked for longevity and family protection.',
    trek: '2 km on paved road — near Yogananda temple',
    difficulty: 'Easy',
    tip: 'Visit with Yogananda Narasimha. Both temples are very close to each other on the paved road.',
    darshan: 'Open 6:00 AM – 6:00 PM'
  },
  {
    num: '09',
    name: 'Pavana Narasimha',
    sanskrit: 'पावन नरसिंह',
    localImg: 'pavana.jpg',
    area: 'Upper Ahobilam',
    meaning: '"Pavana" = the Purifier — the form that cleanses all sins',
    history: `Pavana Narasimha is revered as the ultimate purifier — the form of the Lord that washes away all sins, karma, and impurities of the devotee. The very sight (darshan) of this form is said to purify one for seven generations (sapta janma). The name "Pavana" connects to Lord Vayu (wind god, also called Pavana), and by extension to Hanuman (Pavaputra, son of Vayu) — reinforcing the theme of purification through devotion. The trek to this shrine is among the most challenging — 250 steep stone steps carved into the mountain followed by a 4 km walk through pristine forest. This arduous journey itself is considered a form of penance (tapas) and adds to the spiritual merit of the pilgrimage. Devotees believe that completing the Nava Narasimha darshan circuit by ending at Pavana Narasimha grants complete liberation (mukti) from the cycle of rebirth.`,
    significance: 'The all-purifying form. Completing darshan here after the other 8 temples grants liberation.',
    trek: '250 steep steps + 4 km flat · 3 hrs round trip · Jeep route also available (~2 hrs)',
    difficulty: 'Challenging',
    tip: 'Not for those with knee/heart conditions. Jeep route available. Start by 7 AM. Carry extra water.',
    darshan: 'Open 6:30 AM – 4:30 PM'
  }
];

function openTemple(index) {
  if (index >= templeData.length) return;
  const t = templeData[index];
  const modal = document.getElementById('temple-modal');
  document.getElementById('modal-body').innerHTML = `
    <button class="modal-close-btn" onclick="closeModal()">✕</button>

    <!-- Header with image -->
    <div class="tm-header">
      <div class="tm-img-wrap">
        <img src="images/${t.localImg}" alt="${t.name}" />
        <div class="tm-img-gradient"></div>
        <div class="tm-num">${t.num}</div>
      </div>
      <div class="tm-title-block">
        <span class="tm-area-badge">${t.area}</span>
        <h2 class="tm-name">${t.name}</h2>
        <p class="tm-sanskrit">${t.sanskrit}</p>
        <p class="tm-meaning"><em>"${t.meaning}"</em></p>
      </div>
    </div>

    <!-- Significance ribbon -->
    <div class="tm-significance">
      <span class="tm-sig-label">✦ Significance</span>
      <p>${t.significance}</p>
    </div>

    <!-- History -->
    <div class="tm-section">
      <h4 class="tm-sec-title">📜 History & Spiritual Importance</h4>
      <p class="tm-history">${t.history}</p>
    </div>

    <!-- Info pills grid -->
    <div class="tm-info-grid">
      <div class="tm-info-pill">
        <span class="tm-pill-label">🥾 Trek / Access</span>
        <span class="tm-pill-value">${t.trek}</span>
      </div>
      <div class="tm-info-pill">
        <span class="tm-pill-label">💪 Difficulty</span>
        <span class="tm-pill-value">${t.difficulty}</span>
      </div>
      <div class="tm-info-pill">
        <span class="tm-pill-label">⏰ Darshan Hours</span>
        <span class="tm-pill-value">${t.darshan}</span>
      </div>
    </div>

    <!-- Tip -->
    <div class="tm-tip">
      <span>💡</span>
      <p>${t.tip}</p>
    </div>

    <a href="#contact" onclick="closeModal()" class="tm-cta">🙏 Book Guide for ${t.name}</a>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('temple-modal')) {
    document.getElementById('temple-modal').classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});


// ---- SEVA TABS ----
function showSevaTab(id) {
  document.querySelectorAll('.seva-tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  
  // Activate correct button in the tab group
  const tabButton = Array.from(document.querySelectorAll('.stab')).find(btn => btn.getAttribute('onclick').includes(id));
  if (tabButton) {
    tabButton.classList.add('active');
  }
}

// ---- VISIT TABS ----
function showVisitTab(id) {
  document.querySelectorAll('.visit-tab').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.vtab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  
  // Activate correct button in the tab group
  const tabButton = Array.from(document.querySelectorAll('.vtab')).find(btn => btn.getAttribute('onclick').includes(id));
  if (tabButton) {
    tabButton.classList.add('active');
  }
}

// ---- CONTACT FORM ----
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  const orig = btn.textContent;
  btn.textContent = '✓ Message Sent! We will contact you soon.';
  btn.style.background = 'linear-gradient(135deg,#22a022,#166616)';
  btn.disabled = true;
  e.target.reset();
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    btn.disabled = false;
  }, 4000);
}

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.temple-card, .seva-card, .guide-card, .reach-card, .trek-card, .heritage-card, .vol-card, .timings-card, .gallery-item, .news-card, .accommodation-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// ---- ACTIVE NAV HIGHLIGHT ----
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 150) current = s.getAttribute('id');
  });
  
  // Highlight main nav links
  document.querySelectorAll('.nav-links > li > a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === '#' + current) {
      a.style.color = 'var(--gold-light)';
    } else if (href === '#hero' && ['about', 'sevas', 'timings', 'visit', 'guides', 'trekking', 'heritage', 'volunteer', 'live-darshan'].includes(current)) {
      a.style.color = 'var(--gold-light)';
    } else {
      a.style.color = '';
    }
  });

  // Highlight dropdown items
  document.querySelectorAll('.dropdown-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === '#sevas' && current === 'sevas') {
      a.style.color = 'var(--gold-light)';
    } else if (href === '#timings' && current === 'timings') {
      a.style.color = 'var(--gold-light)';
    } else if (href === '#visit' && current === 'visit') {
      a.style.color = 'var(--gold-light)';
    } else if (href === '#guides' && current === 'guides') {
      a.style.color = 'var(--gold-light)';
    } else if (href === '#news-events' && current === 'news-events') {
      a.style.color = 'var(--gold-light)';
    } else {
      a.style.color = '';
    }
  });
});

// Add fadeIn keyframes dynamically
const style = document.createElement('style');
style.textContent = '@keyframes fadeIn { from { opacity:0; transform:scale(0.97); } to { opacity:1; transform:scale(1); } }';
document.head.appendChild(style);

// ---- DESKTOP/TABLET DROPDOWN TOGGLE ----
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener('click', (e) => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth > 768 && !dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
}

// ---- PRELOADER HIDE ----
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 1500); // 1.5 second delay for smooth, premium devotional experience
  }
});

// ---- GALLERY LIGHTBOX ----
function openLightbox(src, element) {
  const lightbox = document.getElementById('gallery-lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  if (lightbox && img && cap) {
    img.src = src;
    const titleEl = element.querySelector('h4');
    cap.textContent = titleEl ? titleEl.textContent : '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden'; // Disable scroll under overlay
  }
}

function closeLightbox(event) {
  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox) {
    // Only close if clicked on background or close button
    if (event && event.target !== lightbox && !event.target.classList.contains('lightbox-close-btn')) {
      return;
    }
    lightbox.classList.remove('open');
    document.body.style.overflow = ''; // Restore scroll
  }
}

// ---- CHAT WIDGET LOGIC ----
function toggleChat() {
  const widget = document.getElementById('chatWidget');
  if (widget) {
    widget.classList.toggle('open');
    if (widget.classList.contains('open')) {
      const chatInput = document.getElementById('chatInput');
      if (chatInput) chatInput.focus();
    }
  }
}

// Bot responses configured for the 4 supported languages
const botAnswers = {
  trek: {
    en: "Ahobilam has three main trekking routes:\n1. **Jwala Narasimha Trek**: Moderate 3-hour round trip through river beds and forest paths (Guide recommended).\n2. **Pavana Narasimha Trek**: Strenuous climb of 250 steep steps followed by 4 km forest walk (Jeep routes available).\n3. **Accessible Route**: Karanja, Yogananda, and Chatravata temples are easily reachable by road.",
    te: "అహోబిలంలో మూడు ప్రధాన ట్రెక్కింగ్ మార్గాలు ఉన్నాయి:\n1. **జ్వాలా నరసింహ మార్గం**: నది పడకలు మరియు అటవీ మార్గాల గుండా వెళ్లే 3 గంటల ప్రయాణం (గైడ్ సిఫార్సు చేయబడింది).\n2. **పావన నరసింహ మార్గం**: 250 నిటారుగా ఉన్న మెట్లు ఎక్కిన తర్వాత 4 కి.మీ అటవీ నడక (జీపు సౌకర్యం ఉంది).\n3. **సులభమైన మార్గం**: కరంజ, యోగానంద మరియు ఛత్రవట ఆలయాలను రోడ్డు మార్గం ద్వారా సులభంగా చేరుకోవచ్చు.",
    ta: "அகோபிலத்தில் மூன்று முக்கிய மலையேற்ற பாதைகள் உள்ளன:\n1. **ஜுவாலா நரசிம்மர் பாதை**: நதி படுக்கைகள் மற்றும் காட்டு பாதைகள் வழியாக 3 மணி நேர மலையேற்றம் (வழிகாட்டி பரிந்துரைக்கப்படுகிறது).\n2. **பாவன நரசிம்மர் பாதை**: 250 செங்குத்தான படிகள் ஏறி, பின் 4 கி.மீ காடு வழி நடை பயணம் (ஜீப் வசதி உள்ளது).\n3. **எளிதான பாதை**: கரஞ்சா, யோகானந்தா மற்றும் சத்ரவதா கோயில்களை சாலை வழியாக எளிதில் அடையலாம்.",
    kn: "ಅಹೋಬಿಲಂನಲ್ಲಿ ಮೂರು ಪ್ರಮುಖ ಟ್ರೆಕ್ಕಿಂಗ್ ಮಾರ್ಗಗಳಿವೆ:\n1. **ಜ್ವಾಲಾ ನರಸಿಂಹ ಮಾರ್ಗ**: ನದಿ ತೀರ ಮತ್ತು ಅರಣ್ಯ ಮಾರ್ಗದ ಮೂಲಕ 3 ಗಂಟೆಗಳ ಪ್ರಯಾಣ (ಮಾರ್ಗದರ್ಶಿ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ).\n2. **ಪ್ರಮುಖ ಮಾರ್ಗ**: ಕಾರಂಜ, ಯೋಗಾನಂದ ಮತ್ತು ಛತ್ರವಟ ದೇವಾಲಯಗಳನ್ನು ರಸ್ತೆ ಮೂಲಕ ಸುಲಭವಾಗಿ ತಲುಪಬಹುದು."
  },
  timings: {
    en: "The general temple timings are:\n- **Morning Darshan**: 6:30 AM – 1:00 PM\n- **Evening Darshan**: 4:00 PM – 8:00 PM\n- **Annadanam (Meals)**: 12:30 PM onwards\nNote: Upper Ahobilam forest shrines close by 5:00 PM for safety.",
    te: "సాధారణ ఆలయ వేళలు:\n- **ఉదయం దర్శనం**: 6:30 AM – 1:00 PM\n- **సాయంత్రం దర్శనం**: 4:00 PM – 8:00 PM\n- **అన్నదానం**: 12:30 PM నుండి ప్రారంభం\nగమనిక: రక్షణ దృష్ట్యా ఎగువ అహోబిలం అటవీ ఆలయాలు సాయంత్రం 5:00 గంటలకు మూసివేయబడతాయి.",
    ta: "பொதுவான தரிசன நேரங்கள்:\n- **காலை தரிசனம்**: காலை 6:30 - மதியம் 1:00\n- **மாலை தரிசனம்**: மாலை 4:00 - இரவு 8:00\n- **அன்னதானம்**: மதியம் 12:30 மணி முதல்\nகுறிப்பு: பாதுகாப்பு கருதி மேல் அகோபில காட்டு சன்னதிகள் மாலை 5:00 மணிக்குள் மூடப்படும்.",
    kn: "ಸಾಮಾನ್ಯ ದೇವಾಲಯದ ಸಮಯಗಳು:\n- **ಬೆಳಗಿನ ದರ್ಶನ**: 6:30 AM – 1:00 PM\n- **ಸಂಜೆಯ ದರ್ಶನ**: 4:00 PM – 8:00 PM\n- **ಅನ್ನದಾನ**: ಮಧ್ಯಾಹ್ನ 12:30 ರಿಂದ\nಗಮನಿಸಿ: ಸುರಕ್ಷತೆಯ ದೃಷ್ಟಿಯಿಂದ ಮೇಲಿನ ಅಹೋಬಿಲಂ ಅರಣ್ಯ ದೇವಾಲಯಗಳು ಸಂಜೆ 5:00 ಗಂಟೆಗೆ ಮುಚ್ಚಲ್ಪಡುತ್ತವೆ."
  },
  stay: {
    en: "Devasthanam provides accommodation options:\n- **Malola Guest House**: Standard rooms located near Lower Temple (Phone: 08519-252045).\n- **Haritha Hotel (APTDC)**: Deluxe AC/Non-AC rooms (Booking via APTDC portal).\n- **Sri Ahobila Mutt Guest House**: Nomination/donation-based pilgrim rooms (Phone: 08519-252024).",
    te: "దేవస్థానం వసతి సౌకర్యాలు:\n- **మాలోల గెస్ట్ హౌస్**: దిగువ ఆలయ సమీపంలో గదులు (ఫోన్: 08519-252045).\n- **హరిత హోటల్ (APTDC)**: డీలక్స్ ఏసీ మరియు నాన్-ఏసీ గదులు (APTDC పోర్టల్ ద్వారా బుకింగ్).\n- **శ్రీ అహోబిల మఠం సత్రం**: సాంప్రదాయ గదులు (ఫోన్: 08519-252024).",
    ta: "தேவஸ்தானம் தங்கும் வசதிகள்:\n- **மாலோலா விருந்தினர் இல்லம்**: கீழ் கோயில் அருகில் உள்ள சாதாரண அறைகள் (தொலைபேசி: 08519-252045).\n- **ஹரிதா ஹோட்டல் (APTDC)**: டீலக்ஸ் ஏசி/ஏசி அல்லாத அறைகள் (APTDC ஆன்லைன் தளம்).\n- **ஸ்ரீ அகோபில மடம் தங்கும் இல்லம்**: பாரம்பரிய யாத்ரீகர்கள் அறைகள் (தொலைபேசி: 08519-252024).",
    kn: "ದೇವಸ್ಥಾನದ ವಸತಿ ಆಯ್ಕೆಗಳು:\n- **ಮಾಲೋಲ ಅತಿಥಿ ಗೃಹ**: ಕೆಳಗಿನ ದೇವಾಲಯದ ಹತ್ತಿರವಿರುವ ಕೊಠಡಿಗಳು (ದೂರವಾಣಿ: 08519-252045).\n- **ಹರಿತ ಹೋಟೆಲ್ (APTDC)**: ಡೀಲಕ್ಸ್ ಎಸಿ ಮತ್ತು ನಾನ್-ಎಸಿ ಕೊಠಡಿಗಳು (APTDC ಮೂಲಕ ಬುಕಿಂಗ್).\n- **ಶ್ರೀ ಅಹೋಬಿಲ ಮಠದ ಅತಿಥಿ ಗೃಹ**: ಸಾಂಪ್ರದಾಯಿಕ ಯಾತ್ರಿಕರ ಕೊಠಡಿಗಳು (ದೂರವಾಣಿ: 08519-252024)."
  },
  guide: {
    en: "Registered forest guides are available to accompany you for treks to Jwala and Ugra Stambham. You can book them at the Lower Ahobilam guest house counter. Average guide charges are around ₹200–₹300.",
    te: "జ్వాలా మరియు ఉగ్రస్తంభం ట్రెక్కింగ్ల కొరకు రిజిస్టర్డ్ ఫారెస్ట్ గైడ్లు అందుబాటులో ఉన్నారు. మీరు వారిని దిగువ అహోబిలం గెస్ట్ హౌస్ కౌంటర్ వద్ద బుక్ చేసుకోవచ్చు. సగటు రుసుము ₹200–₹300 ఉంటుంది.",
    ta: "ஜுவாலா மற்றும் உக்கிர ஸ்தம்பம் மலையேற்றத்திற்கு பதிவு செய்யப்பட்ட வன வழிகாட்டிகள் உள்ளனர். கீழ் அகோபிலம் விருந்தினர் இல்ல கவுண்டரில் அவர்களை முன்பதிவு செய்யலாம். கட்டணம் தோராயமாக ₹200-₹300.",
    kn: "ಜ್ವಾಲಾ ಮತ್ತು ಉಗ್ರ ಸ್ತಂಭದ ಟ್ರೆಕ್ಕಿಂಗ್‌ಗಾಗಿ ನೋಂದಾಯಿತ ಅರಣ್ಯ ಮಾರ್ಗದರ್ಶಿಗಳು ಲಭ್ಯವಿದ್ದಾರೆ. ಕೆಳಗಿನ ಅಹೋಬಿಲಂ ಅತಿಥಿ ಗೃಹದ ಕೌಂಟರ್‌ನಲ್ಲಿ ಅವರನ್ನು ಬುಕ್ ಮಾಡಬಹುದು. ಸರಾಸರಿ ಶುಲ್ಕ ₹೨೦೦–₹೩೦೦."
  },
  default: {
    en: "Thank you for your message. For detailed inquiries, please use our contact form below or call the Devasthanam office at 08519-252045. May Lord Lakshmi Narasimha bless you! 🙏",
    te: "మీ సమాచారానికి ధన్యవాదాలు. మరిన్ని వివరాల కోసం దయచేసి క్రింది సంప్రదింపు ఫారమ్‌ను ఉపయోగించండి లేదా దేవస్థానం కార్యాలయాన్ని 08519-252045 నంబరులో సంప్రదించండి. శ్రీ లక్ష్మీ నరసింహ స్వామి అనుగ్రహం మీకు కలుగుగాక! 🙏",
    ta: "உங்கள் செய்திக்கு நன்றி. விரிவான விசாரணைகளுக்கு, கீழே உள்ள தொடர்பு படிவத்தைப் பயன்படுத்தவும் அல்லது தேவஸ்தான அலுவலகத்தை 08519-252045 என்ற எண்ணில் தொடர்பு கொள்ளவும். லட்சுமி நரசிம்மர் உங்களுக்கு அருள் புரிவாராக! 🙏",
    kn: "ನಿಮ್ಮ ಸಂದೇಶಕ್ಕೆ ಧನ್ಯವಾದಗಳು. ವಿವರವಾದ ವಿಚಾರಣೆಗಾಗಿ, ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಸಂಪರ್ಕ ಫಾರ್ಮ್ ಬಳಸಿ ಅಥವಾ ದೇವಸ್ಥಾನದ ಕಚೇರಿಯನ್ನು 08519-252045 ಸಂಪರ್ಕಿಸಿ. ಶ್ರೀ ಲಕ್ಷ್ಮಿ ನರಸಿಂಹ ಸ್ವಾಮಿ ನಿಮಗೆ ಒಳಿತನ್ನು ಮಾಡಲಿ! 🙏"
  }
};

function getActiveLanguage() {
  const select = document.getElementById('lang-select');
  return select ? select.value : 'en';
}

function appendMessage(text, sender) {
  const log = document.getElementById('chatLog');
  if (!log) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${sender}`;
  msgDiv.innerHTML = `<p>${text.replace(/\n/g, '<br>')}</p>`;
  log.appendChild(msgDiv);
  log.scrollTop = log.scrollHeight;
}

function handleChipClick(category, element) {
  event.preventDefault();
  event.stopPropagation();
  const lang = getActiveLanguage();
  const userText = element.textContent;
  
  // Append user chip message
  appendMessage(userText, 'user');
  
  // Show typing indicator
  showTypingIndicator();
  
  setTimeout(() => {
    removeTypingIndicator();
    const botText = botAnswers[category] ? botAnswers[category][lang] : botAnswers['default'][lang];
    appendMessage(botText, 'bot');
  }, 1000);
}

function handleChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('chatInput');
  if (!input || !input.value.trim()) return;
  
  const text = input.value.trim();
  input.value = '';
  
  appendMessage(text, 'user');
  showTypingIndicator();
  
  setTimeout(() => {
    removeTypingIndicator();
    const lang = getActiveLanguage();
    let reply = botAnswers['default'][lang];
    
    // Simple keyword matching for bot replies
    const lower = text.toLowerCase();
    if (lower.includes('trek') || lower.includes('route') || lower.includes('climb') || lower.includes('way')) {
      reply = botAnswers['trek'][lang];
    } else if (lower.includes('time') || lower.includes('darshan') || lower.includes('open') || lower.includes('close')) {
      reply = botAnswers['timings'][lang];
    } else if (lower.includes('stay') || lower.includes('room') || lower.includes('hotel') || lower.includes('guest') || lower.includes('hostel')) {
      reply = botAnswers['stay'][lang];
    } else if (lower.includes('guide') || lower.includes('book guide') || lower.includes('help')) {
      reply = botAnswers['guide'][lang];
    }
    
    appendMessage(reply, 'bot');
  }, 1000);
}

function showTypingIndicator() {
  const log = document.getElementById('chatLog');
  if (!log) return;
  const indicator = document.createElement('div');
  indicator.className = 'chat-msg bot typing-indicator-wrap';
  indicator.id = 'typingIndicator';
  indicator.innerHTML = `
    <div class="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  log.appendChild(indicator);
  log.scrollTop = log.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) indicator.remove();
}

