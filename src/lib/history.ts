export const languages = ["fr", "en", "ar"] as const;
export type Language = (typeof languages)[number];
export const eras = ["prehistoric", "ancient", "medieval", "earlyModern", "industrial", "contemporary"] as const;
export type Era = (typeof eras)[number];
export const regions = ["africa", "asia", "middleEast", "europe", "americas", "oceania", "global"] as const;
export type Region = (typeof regions)[number];
export const themes = ["politics", "conflict", "science", "religion", "society", "culture", "trade"] as const;
export type Theme = (typeof themes)[number];
export type Localized = Record<Language, string>;
export type HistoryEvent = {slug: string; year: number; era: Era; region: Region; theme: Theme; place: Localized; title: Localized; summary: Localized; impact: Localized; source: string; sourceName: string; approximate: boolean; date?: Localized};
export function isLanguage(value: string): value is Language { return languages.some(lang => lang === value); }
export function formatDate(event: HistoryEvent, lang: Language): string {
 if(event.date) return event.date[lang];
 const number = Math.abs(event.year).toLocaleString(lang === 'ar' ? 'ar-u-nu-latn' : lang);
 const prefix = event.approximate ? ({fr:'Vers ',en:'c. ',ar:'نحو '}[lang]) : '';
 return prefix + number + (event.year < 0 ? ({fr:' av. J.-C.',en:' BCE',ar:' قبل الميلاد'}[lang]) : '');
}
export const editorialUpdated = "2026-10-04";
export const events: readonly HistoryEvent[] = [
  {
    "slug": "homo-sapiens",
    "year": -298000,
    "era": "prehistoric",
    "region": "africa",
    "theme": "society",
    "place": {
      "fr": "Afrique",
      "en": "Africa",
      "ar": "أفريقيا"
    },
    "title": {
      "fr": "L’émergence d’Homo sapiens",
      "en": "The emergence of Homo sapiens",
      "ar": "ظهور الإنسان العاقل"
    },
    "summary": {
      "fr": "Notre espèce apparaît en Afrique il y a environ 300 000 ans. Cette date est un repère archéologique, pas un instant précis.",
      "en": "Our species emerged in Africa about 300,000 years ago. This is an archaeological estimate, not a precise moment.",
      "ar": "ظهر نوعنا في أفريقيا قبل نحو 300 ألف سنة. هذا تقدير أثري وليس لحظة محددة."
    },
    "impact": {
      "fr": "C’est le début du parcours de notre espèce, qui se disperse ensuite à travers le monde.",
      "en": "It marks the early history of our species, which later spread across the world.",
      "ar": "تمثل هذه المرحلة بداية تاريخ نوعنا الذي انتشر لاحقاً في العالم."
    },
    "source": "https://humanorigins.si.edu/evidence/human-fossils/species/homo-sapiens",
    "sourceName": "Smithsonian",
    "approximate": true,
    "date": {
      "fr": "Il y a ≈ 300 000 ans",
      "en": "≈ 300,000 years ago",
      "ar": "قبل نحو 300 ألف سنة"
    }
  },
  {
    "slug": "agriculture",
    "year": -10000,
    "era": "prehistoric",
    "region": "middleEast",
    "theme": "society",
    "place": {
      "fr": "Plusieurs foyers, dont le Croissant fertile",
      "en": "Multiple centres, including the Fertile Crescent",
      "ar": "مناطق متعددة، منها الهلال الخصيب"
    },
    "title": {
      "fr": "Les débuts de l’agriculture",
      "en": "The beginnings of agriculture",
      "ar": "بدايات الزراعة"
    },
    "summary": {
      "fr": "À partir d’environ 10 000 avant notre ère, des communautés commencent à produire leur nourriture. La transition se fait progressivement et dans plusieurs régions.",
      "en": "From around 10,000 BCE, communities began producing food. The transition was gradual and took place in several regions.",
      "ar": "منذ نحو 10 آلاف سنة قبل الميلاد بدأت جماعات بإنتاج غذائها. حدث التحول تدريجياً وفي مناطق متعددة."
    },
    "impact": {
      "fr": "La culture et l’élevage transforment les modes de vie et les paysages.",
      "en": "Farming and herding transformed ways of life and landscapes.",
      "ar": "غيرت الزراعة وتربية الحيوانات أساليب العيش والمناظر الطبيعية."
    },
    "source": "https://humanorigins.si.edu/human-characteristics/change",
    "sourceName": "Smithsonian",
    "approximate": true
  },
  {
    "slug": "writing",
    "year": -3200,
    "era": "ancient",
    "region": "middleEast",
    "theme": "culture",
    "place": {
      "fr": "Mésopotamie",
      "en": "Mesopotamia",
      "ar": "بلاد الرافدين"
    },
    "title": {
      "fr": "L’écriture transforme la mémoire",
      "en": "Writing transforms memory",
      "ar": "الكتابة تغير الذاكرة"
    },
    "summary": {
      "fr": "Vers 3200 avant notre ère, les cités de Mésopotamie utilisent une écriture pour tenir leurs comptes. Le cunéiforme évolue ensuite vers des usages plus variés.",
      "en": "Around 3200 BCE, Mesopotamian cities used writing for record keeping. Cuneiform later developed a wider range of uses.",
      "ar": "نحو 3200 قبل الميلاد استخدمت مدن بلاد الرافدين الكتابة لتسجيل الحسابات. وتوسعت لاحقاً استخدامات الكتابة المسمارية."
    },
    "impact": {
      "fr": "L’information peut être conservée et transmise au-delà de la mémoire individuelle.",
      "en": "Information could be preserved and transmitted beyond individual memory.",
      "ar": "أصبح بالإمكان حفظ المعلومات ونقلها خارج حدود الذاكرة الفردية."
    },
    "source": "https://www.britishmuseum.org/blog/how-write-cuneiform",
    "sourceName": "British Museum",
    "approximate": true
  },
  {
    "slug": "egypt-unification",
    "year": -3100,
    "era": "ancient",
    "region": "africa",
    "theme": "politics",
    "place": {
      "fr": "Vallée du Nil",
      "en": "Nile Valley",
      "ar": "وادي النيل"
    },
    "title": {
      "fr": "L’unification de l’Égypte",
      "en": "The unification of Egypt",
      "ar": "توحيد مصر"
    },
    "summary": {
      "fr": "Vers 3100 avant notre ère, la Haute et la Basse-Égypte sont réunies. Ce processus ouvre la période des premières dynasties.",
      "en": "Around 3100 BCE, Upper and Lower Egypt were united, opening the Early Dynastic Period.",
      "ar": "نحو 3100 قبل الميلاد توحدت مصر العليا والسفلى، وبدأ عصر الأسرات المبكر."
    },
    "impact": {
      "fr": "Un pouvoir central se développe à l’échelle du royaume.",
      "en": "Central authority developed across the kingdom.",
      "ar": "تطور حكم مركزي على مستوى المملكة."
    },
    "source": "https://egymonuments.gov.eg/en/historical-periods/early-dynastic-period",
    "sourceName": "Egypt — Ministry of Tourism and Antiquities",
    "approximate": true
  },
  {
    "slug": "indus-cities",
    "year": -2600,
    "era": "ancient",
    "region": "asia",
    "theme": "culture",
    "place": {
      "fr": "Vallée de l’Indus",
      "en": "Indus Valley",
      "ar": "وادي السند"
    },
    "title": {
      "fr": "Les villes de la civilisation de l’Indus",
      "en": "The cities of the Indus civilisation",
      "ar": "مدن حضارة وادي السند"
    },
    "summary": {
      "fr": "Au IIIe millénaire avant notre ère, Mohenjo Daro témoigne d’une grande civilisation urbaine. Ses rues et bâtiments révèlent un urbanisme organisé.",
      "en": "In the third millennium BCE, Mohenjo Daro was part of a major urban civilisation. Its streets and buildings reveal organised city planning.",
      "ar": "في الألفية الثالثة قبل الميلاد كانت موهينجو دارو جزءاً من حضارة مدينية كبرى، وتشهد شوارعها ومبانيها على تنظيم عمراني."
    },
    "impact": {
      "fr": "Ces vestiges montrent que de grandes sociétés urbaines se développaient aussi en Asie du Sud.",
      "en": "These remains show the development of large urban societies in South Asia.",
      "ar": "تكشف هذه الآثار تطور مجتمعات مدينية كبيرة في جنوب آسيا."
    },
    "source": "https://whc.unesco.org/en/list/138/",
    "sourceName": "UNESCO",
    "approximate": true,
    "date": {
      "fr": "IIIe millénaire av. J.-C.",
      "en": "3rd millennium BCE",
      "ar": "الألفية الثالثة قبل الميلاد"
    }
  },
  {
    "slug": "shang",
    "year": -1600,
    "era": "ancient",
    "region": "asia",
    "theme": "culture",
    "place": {
      "fr": "Chine",
      "en": "China",
      "ar": "الصين"
    },
    "title": {
      "fr": "La dynastie Shang",
      "en": "The Shang dynasty",
      "ar": "سلالة شانغ"
    },
    "summary": {
      "fr": "La dynastie Shang, datée approximativement de 1600 à 1046 avant notre ère, produit des bronzes rituels élaborés.",
      "en": "The Shang dynasty, dated approximately 1600–1046 BCE, produced elaborate ritual bronzes.",
      "ar": "أنتجت سلالة شانغ، المؤرخة تقريباً بين 1600 و1046 قبل الميلاد، أدوات برونزية طقسية متقنة."
    },
    "impact": {
      "fr": "Ses objets témoignent de la maîtrise du bronze et de traditions politiques et religieuses anciennes en Chine.",
      "en": "Its objects preserve evidence of bronze technology and early political and religious traditions in China.",
      "ar": "تشهد آثارها على تقنيات البرونز وتقاليد سياسية ودينية قديمة في الصين."
    },
    "source": "https://www.metmuseum.org/art/collection/search/44781",
    "sourceName": "The Metropolitan Museum of Art",
    "approximate": true,
    "date": {
      "fr": "Vers 1600 av. J.-C.",
      "en": "c. 1600 BCE",
      "ar": "نحو 1600 قبل الميلاد"
    }
  },
  {
    "slug": "persian-empire",
    "year": -550,
    "era": "ancient",
    "region": "middleEast",
    "theme": "politics",
    "place": {
      "fr": "Iran et Proche-Orient",
      "en": "Iran and the Near East",
      "ar": "إيران والشرق الأدنى"
    },
    "title": {
      "fr": "L’essor de l’Empire perse",
      "en": "The rise of the Persian Empire",
      "ar": "صعود الإمبراطورية الفارسية"
    },
    "summary": {
      "fr": "Vers 550 avant notre ère, Cyrus établit la puissance perse achéménide. L’empire s’étend ensuite sur de vastes territoires.",
      "en": "Around 550 BCE, Cyrus established Achaemenid Persian power. The empire later expanded across vast territories.",
      "ar": "نحو 550 قبل الميلاد أسس كورش القوة الفارسية الأخمينية، ثم توسعت الإمبراطورية في مناطق واسعة."
    },
    "impact": {
      "fr": "Un nouvel ensemble impérial relie des peuples et des régions du Proche-Orient.",
      "en": "A new imperial system connected peoples and regions of the Near East.",
      "ar": "ربط كيان إمبراطوري جديد شعوباً ومناطق من الشرق الأدنى."
    },
    "source": "https://www.britishmuseum.org/collection/term/x108702",
    "sourceName": "British Museum",
    "approximate": true
  },
  {
    "slug": "athenian-democracy",
    "year": -508,
    "era": "ancient",
    "region": "europe",
    "theme": "politics",
    "place": {
      "fr": "Athènes",
      "en": "Athens",
      "ar": "أثينا"
    },
    "title": {
      "fr": "Les réformes démocratiques d’Athènes",
      "en": "Athens’ democratic reforms",
      "ar": "الإصلاحات الديمقراطية في أثينا"
    },
    "summary": {
      "fr": "En 508 avant notre ère, les réformes de Clisthène réorganisent la vie politique athénienne. La participation reste limitée aux citoyens masculins.",
      "en": "In 508 BCE, Cleisthenes’ reforms reorganised Athenian politics. Participation remained limited to male citizens.",
      "ar": "في 508 قبل الميلاد أعادت إصلاحات كليستينس تنظيم السياسة الأثينية، مع اقتصار المشاركة على المواطنين الذكور."
    },
    "impact": {
      "fr": "Athènes devient une référence durable dans l’histoire de la démocratie, avec des exclusions importantes.",
      "en": "Athens became a lasting reference in democratic history, with significant exclusions.",
      "ar": "أصبحت أثينا مرجعاً في تاريخ الديمقراطية، رغم استبعاد فئات واسعة."
    },
    "source": "https://www.britishmuseum.org/sites/default/files/2023-04/Luxury_and_power_large_print_guide.pdf",
    "sourceName": "British Museum",
    "approximate": false
  },
  {
    "slug": "ashoka-buddhism",
    "year": -260,
    "era": "ancient",
    "region": "asia",
    "theme": "religion",
    "place": {
      "fr": "Sous-continent indien",
      "en": "Indian subcontinent",
      "ar": "شبه القارة الهندية"
    },
    "title": {
      "fr": "Ashoka et la diffusion du bouddhisme",
      "en": "Ashoka and the spread of Buddhism",
      "ar": "أشوكا وانتشار البوذية"
    },
    "summary": {
      "fr": "Vers 260 avant notre ère, après la guerre de Kalinga, Ashoka adopte le bouddhisme et soutient sa diffusion.",
      "en": "Around 260 BCE, after the Kalinga war, Ashoka adopted Buddhism and supported its spread.",
      "ar": "نحو 260 قبل الميلاد، وبعد حرب كالينغا، اعتنق أشوكا البوذية ودعم انتشارها."
    },
    "impact": {
      "fr": "Les enseignements bouddhiques circulent dans le sous-continent et au-delà.",
      "en": "Buddhist teachings circulated within the subcontinent and beyond.",
      "ar": "انتشرت التعاليم البوذية في شبه القارة وخارجها."
    },
    "source": "https://82nd-and-fifth.metmuseum.org/toah/ht/04/ssa.html",
    "sourceName": "The Metropolitan Museum of Art",
    "approximate": true
  },
  {
    "slug": "qin-unification",
    "year": -221,
    "era": "ancient",
    "region": "asia",
    "theme": "politics",
    "place": {
      "fr": "Chine",
      "en": "China",
      "ar": "الصين"
    },
    "title": {
      "fr": "L’unification de la Chine sous les Qin",
      "en": "China’s unification under the Qin",
      "ar": "توحيد الصين تحت حكم تشين"
    },
    "summary": {
      "fr": "En 221 avant notre ère, Qin Shihuang unifie les royaumes rivaux et devient le premier empereur de Chine.",
      "en": "In 221 BCE, Qin Shihuang unified rival kingdoms and became China’s first emperor.",
      "ar": "في 221 قبل الميلاد وحد تشين شي هوانغ الممالك المتنافسة وأصبح أول إمبراطور للصين."
    },
    "impact": {
      "fr": "Un État impérial centralisé remplace les royaumes rivaux.",
      "en": "A centralised imperial state replaced the rival kingdoms.",
      "ar": "حل حكم إمبراطوري مركزي محل الممالك المتنافسة."
    },
    "source": "https://www.metmuseum.org/pt/essays/qin-dynasty-221-206-b-c",
    "sourceName": "The Metropolitan Museum of Art",
    "approximate": false
  },
  {
    "slug": "roman-empire",
    "year": -27,
    "era": "ancient",
    "region": "europe",
    "theme": "politics",
    "place": {
      "fr": "Rome et Méditerranée",
      "en": "Rome and the Mediterranean",
      "ar": "روما والبحر المتوسط"
    },
    "title": {
      "fr": "Auguste et la naissance de l’Empire romain",
      "en": "Augustus and the Roman Empire",
      "ar": "أغسطس وبداية الإمبراطورية الرومانية"
    },
    "summary": {
      "fr": "En 27 avant notre ère, Octavien reçoit le titre d’Auguste. Son pouvoir marque le début du principat romain.",
      "en": "In 27 BCE, Octavian received the title Augustus. His rule marked the beginning of the Roman principate.",
      "ar": "في 27 قبل الميلاد حصل أوكتافيان على لقب أغسطس، وبدأت معه مرحلة الحكم الإمبراطوري الروماني."
    },
    "impact": {
      "fr": "Le centre du pouvoir politique se concentre autour de l’empereur.",
      "en": "Political power became concentrated around the emperor.",
      "ar": "تركزت السلطة السياسية حول الإمبراطور."
    },
    "source": "https://www.metmuseum.org/pt/essays/augustan-rule-27-b-c-14-a-d",
    "sourceName": "The Metropolitan Museum of Art",
    "approximate": false
  },
  {
    "slug": "christianity",
    "year": 1,
    "era": "ancient",
    "region": "middleEast",
    "theme": "religion",
    "place": {
      "fr": "Judée romaine",
      "en": "Roman Judaea",
      "ar": "يهودا الرومانية"
    },
    "title": {
      "fr": "Les débuts du christianisme",
      "en": "The beginnings of Christianity",
      "ar": "بدايات المسيحية"
    },
    "summary": {
      "fr": "Au Ier siècle, le christianisme apparaît dans le contexte du judaïsme et de l’Empire romain, autour des enseignements de Jésus de Nazareth.",
      "en": "In the first century, Christianity emerged within Judaism and the Roman Empire, around the teachings of Jesus of Nazareth.",
      "ar": "في القرن الأول ظهرت المسيحية في سياق اليهودية والإمبراطورية الرومانية، حول تعاليم يسوع الناصري."
    },
    "impact": {
      "fr": "De nouvelles communautés religieuses se développent puis se diffusent au-delà de leur région d’origine.",
      "en": "New religious communities developed and spread beyond their region of origin.",
      "ar": "تطورت جماعات دينية جديدة وانتشرت خارج موطنها الأول."
    },
    "source": "https://www.worldhistory.org/christianity/",
    "sourceName": "World History Encyclopedia",
    "approximate": true,
    "date": {
      "fr": "Ier siècle",
      "en": "1st century CE",
      "ar": "القرن الأول الميلادي"
    }
  },
  {
    "slug": "classic-maya",
    "year": 250,
    "era": "ancient",
    "region": "americas",
    "theme": "culture",
    "place": {
      "fr": "Mésoamérique",
      "en": "Mesoamerica",
      "ar": "أمريكا الوسطى"
    },
    "title": {
      "fr": "Les cités de l’époque classique maya",
      "en": "The cities of the Classic Maya period",
      "ar": "مدن العصر الكلاسيكي للمايا"
    },
    "summary": {
      "fr": "Entre environ 250 et 900, les cités mayas développent une architecture monumentale et une tradition d’écriture hiéroglyphique.",
      "en": "Between about 250 and 900, Maya cities developed monumental architecture and a hieroglyphic writing tradition.",
      "ar": "بين نحو 250 و900 طورت مدن المايا عمارة ضخمة وتقاليد للكتابة الهيروغليفية."
    },
    "impact": {
      "fr": "Leurs monuments et inscriptions préservent des histoires politiques et culturelles des Amériques.",
      "en": "Their monuments and inscriptions preserve political and cultural histories of the Americas.",
      "ar": "تحفظ آثارها ونقوشها تاريخاً سياسياً وثقافياً للأمريكيتين."
    },
    "source": "https://82nd-and-fifth.metmuseum.org/toah/ht/05/caa.html",
    "sourceName": "The Metropolitan Museum of Art",
    "approximate": true,
    "date": {
      "fr": "Vers 250–900",
      "en": "c. 250–900 CE",
      "ar": "نحو 250–900 ميلادية"
    }
  },
  {
    "slug": "hijra",
    "year": 622,
    "era": "medieval",
    "region": "middleEast",
    "theme": "religion",
    "place": {
      "fr": "La Mecque → Médine",
      "en": "Mecca → Medina",
      "ar": "مكة ← المدينة"
    },
    "title": {
      "fr": "L’Hégire",
      "en": "The Hijra",
      "ar": "الهجرة النبوية"
    },
    "summary": {
      "fr": "En 622, Muhammad et ses compagnons migrent de La Mecque vers Médine. L’événement devient le point de départ du calendrier musulman.",
      "en": "In 622, Muhammad and his companions migrated from Mecca to Medina. The event became the starting point of the Islamic calendar.",
      "ar": "في 622 هاجر النبي محمد وأصحابه من مكة إلى المدينة، وأصبح الحدث مبدأ التقويم الهجري."
    },
    "impact": {
      "fr": "Médine devient un centre de la communauté musulmane naissante.",
      "en": "Medina became a centre of the developing Muslim community.",
      "ar": "أصبحت المدينة مركزاً للمجتمع الإسلامي الناشئ."
    },
    "source": "https://www.worldhistory.org/Prophet_Muhammad/",
    "sourceName": "World History Encyclopedia",
    "approximate": false
  },
  {
    "slug": "abbasid-caliphate",
    "year": 750,
    "era": "medieval",
    "region": "middleEast",
    "theme": "politics",
    "place": {
      "fr": "Irak et monde islamique",
      "en": "Iraq and the Islamic world",
      "ar": "العراق والعالم الإسلامي"
    },
    "title": {
      "fr": "L’avènement des Abbassides",
      "en": "The rise of the Abbasids",
      "ar": "قيام الدولة العباسية"
    },
    "summary": {
      "fr": "En 750, les Abbassides remplacent les Omeyyades. Bagdad, fondée en 762, devient leur nouvelle capitale.",
      "en": "In 750, the Abbasids replaced the Umayyads. Baghdad, founded in 762, became their new capital.",
      "ar": "في 750 خلف العباسيون الأمويين، وأصبحت بغداد التي تأسست سنة 762 عاصمتهم الجديدة."
    },
    "impact": {
      "fr": "Le centre politique et culturel du califat se déplace de la Syrie vers l’Irak.",
      "en": "The caliphate’s political and cultural centre shifted from Syria to Iraq.",
      "ar": "انتقل المركز السياسي والثقافي للخلافة من سوريا إلى العراق."
    },
    "source": "https://www.metmuseum.org/essays/the-art-of-the-abbasid-period-750-1258",
    "sourceName": "The Metropolitan Museum of Art",
    "approximate": false
  },
  {
    "slug": "mongol-empire",
    "year": 1206,
    "era": "medieval",
    "region": "asia",
    "theme": "politics",
    "place": {
      "fr": "Mongolie et Eurasie",
      "en": "Mongolia and Eurasia",
      "ar": "منغوليا وأوراسيا"
    },
    "title": {
      "fr": "La fondation de l’Empire mongol",
      "en": "The foundation of the Mongol Empire",
      "ar": "تأسيس الإمبراطورية المغولية"
    },
    "summary": {
      "fr": "En 1206, Temüjin est reconnu comme Gengis Khan après l’unification de groupes mongols. Ses conquêtes fondent un vaste empire.",
      "en": "In 1206, Temujin was recognised as Genghis Khan after unifying Mongol groups. His conquests established a vast empire.",
      "ar": "في 1206 أُعلن تيموجين جنكيز خان بعد توحيد جماعات مغولية، وأسست فتوحاته إمبراطورية واسعة."
    },
    "impact": {
      "fr": "Les conquêtes provoquent de grandes destructions tout en reliant des territoires eurasiatiques.",
      "en": "The conquests caused immense destruction while connecting Eurasian territories.",
      "ar": "أحدثت الفتوحات دماراً واسعاً مع ربط مناطق أوراسية."
    },
    "source": "https://www.worldhistory.org/Genghis_Khan/",
    "sourceName": "World History Encyclopedia",
    "approximate": false
  },
  {
    "slug": "mali-empire",
    "year": 1235,
    "era": "medieval",
    "region": "africa",
    "theme": "politics",
    "place": {
      "fr": "Afrique de l’Ouest",
      "en": "West Africa",
      "ar": "غرب أفريقيا"
    },
    "title": {
      "fr": "L’essor de l’Empire du Mali",
      "en": "The rise of the Mali Empire",
      "ar": "صعود إمبراطورية مالي"
    },
    "summary": {
      "fr": "Le XIIIe siècle voit l’essor de l’Empire du Mali dans l’espace mandé. Sa chronologie est traditionnellement située à partir de 1235.",
      "en": "The thirteenth century saw the rise of the Mali Empire in the Mande region, conventionally dated from 1235.",
      "ar": "شهد القرن الثالث عشر صعود إمبراطورية مالي في منطقة الماندي، ويؤرخ لبدايتها عادة منذ 1235."
    },
    "impact": {
      "fr": "Un grand ensemble politique se développe dans plusieurs territoires de l’Afrique de l’Ouest.",
      "en": "A major political system developed across several West African territories.",
      "ar": "تطور كيان سياسي كبير في مناطق متعددة من غرب أفريقيا."
    },
    "source": "https://www.metmuseum.org/art/collection/search/501109",
    "sourceName": "The Metropolitan Museum of Art",
    "approximate": true,
    "date": {
      "fr": "Vers 1235",
      "en": "c. 1235 CE",
      "ar": "نحو 1235 ميلادية"
    }
  },
  {
    "slug": "tenochtitlan",
    "year": 1325,
    "era": "medieval",
    "region": "americas",
    "theme": "culture",
    "place": {
      "fr": "Mexique",
      "en": "Mexico",
      "ar": "المكسيك"
    },
    "title": {
      "fr": "La fondation de Tenochtitlan",
      "en": "The founding of Tenochtitlan",
      "ar": "تأسيس تينوتشتيتلان"
    },
    "summary": {
      "fr": "En 1325 selon la chronologie traditionnelle, les Mexicas fondent Tenochtitlan sur une île du lac Texcoco.",
      "en": "In 1325, according to the traditional chronology, the Mexica founded Tenochtitlan on an island in Lake Texcoco.",
      "ar": "وفق التسلسل التقليدي أسس شعب المكسيكا تينوتشتيتلان على جزيرة في بحيرة تيكسكوكو سنة 1325."
    },
    "impact": {
      "fr": "La ville devient un centre politique, économique et religieux majeur de la Mésoamérique.",
      "en": "The city became a major political, economic and religious centre of Mesoamerica.",
      "ar": "أصبحت المدينة مركزاً سياسياً واقتصادياً ودينياً مهماً في أمريكا الوسطى."
    },
    "source": "https://www.metmuseum.org/es/essays/tenochtitlan-templo-mayor",
    "sourceName": "The Metropolitan Museum of Art",
    "approximate": true
  },
  {
    "slug": "black-death",
    "year": 1347,
    "era": "medieval",
    "region": "global",
    "theme": "society",
    "place": {
      "fr": "Eurasie et Afrique du Nord",
      "en": "Eurasia and North Africa",
      "ar": "أوراسيا وشمال أفريقيا"
    },
    "title": {
      "fr": "La peste noire",
      "en": "The Black Death",
      "ar": "الطاعون الأسود"
    },
    "summary": {
      "fr": "Au milieu du XIVe siècle, une pandémie de peste touche de nombreuses régions. En Europe, la vague majeure commence en 1347.",
      "en": "In the mid-fourteenth century, a plague pandemic affected many regions. In Europe, the major wave began in 1347.",
      "ar": "في منتصف القرن الرابع عشر أصاب وباء الطاعون مناطق عديدة، وبدأت موجته الكبرى في أوروبا سنة 1347."
    },
    "impact": {
      "fr": "Les pertes humaines bouleversent les communautés et les relations sociales.",
      "en": "Human losses disrupted communities and social relations.",
      "ar": "غيرت الخسائر البشرية حياة الجماعات والعلاقات الاجتماعية."
    },
    "source": "https://www.worldhistory.org/Black_Death/",
    "sourceName": "World History Encyclopedia",
    "approximate": false,
    "date": {
      "fr": "À partir de 1347",
      "en": "From 1347 CE",
      "ar": "منذ 1347 ميلادية"
    }
  },
  {
    "slug": "inca-expansion",
    "year": 1438,
    "era": "medieval",
    "region": "americas",
    "theme": "politics",
    "place": {
      "fr": "Andes",
      "en": "Andes",
      "ar": "جبال الأنديز"
    },
    "title": {
      "fr": "L’expansion de l’État inca",
      "en": "The expansion of the Inca state",
      "ar": "توسع دولة الإنكا"
    },
    "summary": {
      "fr": "À partir du XVe siècle, l’État inca étend son pouvoir dans les Andes. La période impériale est généralement datée de 1438 à 1532.",
      "en": "From the fifteenth century, the Inca state expanded through the Andes. Its imperial period is generally dated to 1438–1532.",
      "ar": "منذ القرن الخامس عشر توسعت دولة الإنكا في الأنديز، ويؤرخ عصرها الإمبراطوري عادة بين 1438 و1532."
    },
    "impact": {
      "fr": "Elle forme le plus vaste empire des Amériques précolombiennes.",
      "en": "It formed the largest empire in the pre-Columbian Americas.",
      "ar": "شكلت أكبر إمبراطورية في الأمريكيتين قبل كولومبوس."
    },
    "source": "https://82nd-and-fifth.metmuseum.org/toah/ht/08/sanc.html",
    "sourceName": "The Metropolitan Museum of Art",
    "approximate": true
  },
  {
    "slug": "constantinople",
    "year": 1453,
    "era": "earlyModern",
    "region": "middleEast",
    "theme": "conflict",
    "place": {
      "fr": "Constantinople",
      "en": "Constantinople",
      "ar": "القسطنطينية"
    },
    "title": {
      "fr": "La prise de Constantinople",
      "en": "The capture of Constantinople",
      "ar": "فتح القسطنطينية"
    },
    "summary": {
      "fr": "En 1453, les Ottomans prennent Constantinople. La capitale byzantine passe sous un nouveau pouvoir.",
      "en": "In 1453, the Ottomans captured Constantinople. The Byzantine capital came under new rule.",
      "ar": "في 1453 استولى العثمانيون على القسطنطينية، وانتقلت العاصمة البيزنطية إلى حكم جديد."
    },
    "impact": {
      "fr": "La chute de la capitale marque la fin de l’Empire byzantin.",
      "en": "The fall of the capital marked the end of the Byzantine Empire.",
      "ar": "مثل سقوط العاصمة نهاية الإمبراطورية البيزنطية."
    },
    "source": "https://www.metmuseum.org/de/essays/byzantium-ca-330-1453",
    "sourceName": "The Metropolitan Museum of Art",
    "approximate": false
  },
  {
    "slug": "gutenberg",
    "year": 1455,
    "era": "earlyModern",
    "region": "europe",
    "theme": "culture",
    "place": {
      "fr": "Mayence",
      "en": "Mainz",
      "ar": "ماينتس"
    },
    "title": {
      "fr": "Gutenberg et le livre imprimé",
      "en": "Gutenberg and the printed book",
      "ar": "غوتنبرغ والكتاب المطبوع"
    },
    "summary": {
      "fr": "Vers 1454–1455, la Bible de Gutenberg est imprimée à Mayence. Elle constitue une étape majeure de l’imprimerie typographique européenne.",
      "en": "Around 1454–1455, the Gutenberg Bible was printed in Mainz, a landmark in European typographic printing.",
      "ar": "نحو 1454–1455 طُبعت نسخة غوتنبرغ من الكتاب المقدس في ماينتس، في محطة مهمة للطباعة الأوروبية."
    },
    "impact": {
      "fr": "L’impression permet de reproduire des livres en série ; elle n’est pas née partout au même moment.",
      "en": "Printing enabled books to be reproduced in series; it did not begin everywhere at the same time.",
      "ar": "أتاحت الطباعة إنتاج الكتب في نسخ متعددة، ولم تبدأ في كل المناطق في الوقت نفسه."
    },
    "source": "https://guides.loc.gov/gutenberg",
    "sourceName": "Library of Congress",
    "approximate": true,
    "date": {
      "fr": "Vers 1454–1455",
      "en": "c. 1454–1455 CE",
      "ar": "نحو 1454–1455 ميلادية"
    }
  },
  {
    "slug": "atlantic-contact",
    "year": 1492,
    "era": "earlyModern",
    "region": "americas",
    "theme": "trade",
    "place": {
      "fr": "Atlantique et Caraïbes",
      "en": "Atlantic and Caribbean",
      "ar": "الأطلسي والكاريبي"
    },
    "title": {
      "fr": "1492 : un tournant transatlantique",
      "en": "1492: an Atlantic turning point",
      "ar": "1492: تحول عبر الأطلسي"
    },
    "summary": {
      "fr": "Le voyage de Colomb atteint les Caraïbes en 1492. Les Amériques sont déjà peuplées de sociétés autochtones.",
      "en": "Columbus’ voyage reached the Caribbean in 1492. The Americas were already home to Indigenous societies.",
      "ar": "وصلت رحلة كولومبوس إلى الكاريبي سنة 1492، وكانت الأمريكيتان مأهولتين بمجتمعات أصلية."
    },
    "impact": {
      "fr": "Les contacts durables ouvrent une période de conquête et de colonisation aux effets profonds.",
      "en": "Sustained contact opened a period of conquest and colonisation with profound consequences.",
      "ar": "بدأت اتصالات مستمرة تلتها مرحلة غزو واستعمار ذات آثار عميقة."
    },
    "source": "https://www.loc.gov/exhibits/1492/index.html",
    "sourceName": "Library of Congress",
    "approximate": false
  },
  {
    "slug": "reformation",
    "year": 1517,
    "era": "earlyModern",
    "region": "europe",
    "theme": "religion",
    "place": {
      "fr": "Wittenberg et Europe",
      "en": "Wittenberg and Europe",
      "ar": "فيتنبرغ وأوروبا"
    },
    "title": {
      "fr": "La Réforme protestante",
      "en": "The Protestant Reformation",
      "ar": "الإصلاح البروتستانتي"
    },
    "summary": {
      "fr": "En 1517, Martin Luther publie ses 95 thèses sur les indulgences. Elles deviennent un repère du mouvement réformateur.",
      "en": "In 1517, Martin Luther published his 95 theses on indulgences, a landmark in the Reformation.",
      "ar": "في 1517 نشر مارتن لوثر أطروحاته الخمس والتسعين بشأن صكوك الغفران، فأصبحت محطة في حركة الإصلاح."
    },
    "impact": {
      "fr": "Le mouvement transforme la chrétienté européenne et contribue à des divisions confessionnelles.",
      "en": "The movement transformed European Christianity and contributed to religious divisions.",
      "ar": "غيرت الحركة المسيحية الأوروبية وأسهمت في انقسامات مذهبية."
    },
    "source": "https://www.luther2017.de/de/jubilaeum/index.html",
    "sourceName": "Luther 2017",
    "approximate": false
  },
  {
    "slug": "copernicus",
    "year": 1543,
    "era": "earlyModern",
    "region": "europe",
    "theme": "science",
    "place": {
      "fr": "Europe",
      "en": "Europe",
      "ar": "أوروبا"
    },
    "title": {
      "fr": "Copernic et le modèle héliocentrique",
      "en": "Copernicus and the heliocentric model",
      "ar": "كوبرنيكوس والنموذج الشمسي"
    },
    "summary": {
      "fr": "En 1543 paraît De revolutionibus de Copernic, qui présente un modèle plaçant le Soleil au centre des mouvements planétaires.",
      "en": "In 1543, Copernicus’ De revolutionibus presented a model placing the Sun at the centre of planetary motions.",
      "ar": "في 1543 صدر كتاب كوبرنيكوس الذي قدم نموذجاً يجعل الشمس مركزاً للحركات الكوكبية."
    },
    "impact": {
      "fr": "Le livre devient une référence dans la transformation de l’astronomie.",
      "en": "The book became a landmark in the transformation of astronomy.",
      "ar": "أصبح الكتاب مرجعاً في تحول علم الفلك."
    },
    "source": "https://www.loc.gov/item/92516339/",
    "sourceName": "Library of Congress",
    "approximate": false
  },
  {
    "slug": "tokugawa",
    "year": 1603,
    "era": "earlyModern",
    "region": "asia",
    "theme": "politics",
    "place": {
      "fr": "Japon",
      "en": "Japan",
      "ar": "اليابان"
    },
    "title": {
      "fr": "L’installation du pouvoir Tokugawa",
      "en": "The establishment of Tokugawa rule",
      "ar": "قيام حكم توكوغاوا"
    },
    "summary": {
      "fr": "En 1603, Tokugawa Ieyasu devient shogun. Son pouvoir établit une dynastie à Edo, l’actuelle Tokyo.",
      "en": "In 1603, Tokugawa Ieyasu became shogun, establishing a ruling dynasty at Edo, present-day Tokyo.",
      "ar": "في 1603 أصبح توكوغاوا إيئه-ياسو شوغوناً وأسس أسرة حاكمة في إيدو، طوكيو الحالية."
    },
    "impact": {
      "fr": "Le Japon entre dans une longue période de gouvernement Tokugawa.",
      "en": "Japan entered a long period of Tokugawa government.",
      "ar": "دخلت اليابان فترة طويلة من حكم توكوغاوا."
    },
    "source": "https://www.worldhistory.org/Edo_Period/",
    "sourceName": "World History Encyclopedia",
    "approximate": false
  },
  {
    "slug": "industrial-revolution",
    "year": 1760,
    "era": "industrial",
    "region": "europe",
    "theme": "science",
    "place": {
      "fr": "Grande-Bretagne, puis autres régions",
      "en": "Britain, then other regions",
      "ar": "بريطانيا ثم مناطق أخرى"
    },
    "title": {
      "fr": "La révolution industrielle",
      "en": "The Industrial Revolution",
      "ar": "الثورة الصناعية"
    },
    "summary": {
      "fr": "À partir de la seconde moitié du XVIIIe siècle, la Grande-Bretagne connaît une expansion de la production mécanisée et de la puissance à vapeur.",
      "en": "From the second half of the eighteenth century, Britain saw expanding mechanised production and steam power.",
      "ar": "منذ النصف الثاني من القرن الثامن عشر توسع الإنتاج الميكانيكي واستخدام البخار في بريطانيا."
    },
    "impact": {
      "fr": "La production, le travail et les transports se transforment progressivement.",
      "en": "Production, work and transport were gradually transformed.",
      "ar": "تغيرت تدريجياً أساليب الإنتاج والعمل والنقل."
    },
    "source": "https://blog.sciencemuseum.org.uk/steaming-through-the-centuries/",
    "sourceName": "Science Museum",
    "approximate": true,
    "date": {
      "fr": "À partir de ≈ 1760",
      "en": "From c. 1760 CE",
      "ar": "منذ نحو 1760 ميلادية"
    }
  },
  {
    "slug": "endeavour",
    "year": 1770,
    "era": "industrial",
    "region": "oceania",
    "theme": "trade",
    "place": {
      "fr": "Côte est de l’Australie",
      "en": "Eastern Australia",
      "ar": "شرق أستراليا"
    },
    "title": {
      "fr": "L’Endeavour et les peuples d’Australie",
      "en": "Endeavour and the peoples of Australia",
      "ar": "إنديفور وشعوب أستراليا"
    },
    "summary": {
      "fr": "En 1770, l’Endeavour de James Cook longe la côte est australienne. Les peuples autochtones y vivent depuis des dizaines de milliers d’années.",
      "en": "In 1770, James Cook’s Endeavour travelled along eastern Australia. Indigenous peoples had lived there for tens of thousands of years.",
      "ar": "في 1770 أبحرت إنديفور بقيادة جيمس كوك بمحاذاة شرق أستراليا، حيث عاشت الشعوب الأصلية منذ عشرات آلاف السنين."
    },
    "impact": {
      "fr": "L’événement appartient à une histoire de rencontres racontée depuis le navire et depuis le rivage.",
      "en": "The event belongs to a history of encounters told from both the ship and the shore.",
      "ar": "يمثل الحدث تاريخاً للقاءات يروى من وجهة نظر السفينة والساحل معاً."
    },
    "source": "https://www.nma.gov.au/exhibitions/endeavour-voyage",
    "sourceName": "National Museum of Australia",
    "approximate": false
  },
  {
    "slug": "american-independence",
    "year": 1776,
    "era": "industrial",
    "region": "americas",
    "theme": "politics",
    "place": {
      "fr": "Amérique du Nord",
      "en": "North America",
      "ar": "أمريكا الشمالية"
    },
    "title": {
      "fr": "La Déclaration d’indépendance américaine",
      "en": "The American Declaration of Independence",
      "ar": "إعلان الاستقلال الأمريكي"
    },
    "summary": {
      "fr": "Le 4 juillet 1776, le Congrès adopte la Déclaration d’indépendance des treize colonies envers la Grande-Bretagne.",
      "en": "On 4 July 1776, Congress adopted the Declaration of Independence of the thirteen colonies from Britain.",
      "ar": "في 4 يوليو 1776 أقر الكونغرس إعلان استقلال المستعمرات الثلاث عشرة عن بريطانيا."
    },
    "impact": {
      "fr": "Le texte affirme une rupture politique dans une guerre d’indépendance déjà engagée.",
      "en": "The document asserted a political break during an ongoing war of independence.",
      "ar": "أكدت الوثيقة قطيعة سياسية خلال حرب استقلال كانت جارية."
    },
    "source": "https://www.archives.gov/milestone-documents/declaration-of-independence",
    "sourceName": "US National Archives",
    "approximate": false,
    "date": {
      "fr": "4 juillet 1776",
      "en": "4 July 1776",
      "ar": "4 يوليو 1776"
    }
  },
  {
    "slug": "french-revolution",
    "year": 1789,
    "era": "industrial",
    "region": "europe",
    "theme": "politics",
    "place": {
      "fr": "France",
      "en": "France",
      "ar": "فرنسا"
    },
    "title": {
      "fr": "La Révolution française",
      "en": "The French Revolution",
      "ar": "الثورة الفرنسية"
    },
    "summary": {
      "fr": "En 1789, la France entre dans une période de révolution. La prise de la Bastille devient l’un de ses symboles.",
      "en": "In 1789, France entered a revolutionary period. The storming of the Bastille became one of its symbols.",
      "ar": "في 1789 دخلت فرنسا مرحلة ثورية وأصبح اقتحام الباستيل أحد رموزها."
    },
    "impact": {
      "fr": "La révolution remet en cause l’ordre politique de l’Ancien Régime.",
      "en": "The revolution challenged the political order of the Old Regime.",
      "ar": "تحدت الثورة النظام السياسي القديم."
    },
    "source": "https://loc.gov/exhibits/jefferson/jeffworld.html",
    "sourceName": "Library of Congress",
    "approximate": false
  },
  {
    "slug": "haitian-revolution",
    "year": 1791,
    "era": "industrial",
    "region": "americas",
    "theme": "society",
    "place": {
      "fr": "Saint-Domingue → Haïti",
      "en": "Saint-Domingue → Haiti",
      "ar": "سان دومينغ ← هايتي"
    },
    "title": {
      "fr": "La Révolution haïtienne",
      "en": "The Haitian Revolution",
      "ar": "الثورة الهايتية"
    },
    "summary": {
      "fr": "À partir de 1791, des personnes réduites en esclavage se soulèvent à Saint-Domingue. Les conflits aboutissent à l’indépendance d’Haïti en 1804.",
      "en": "From 1791, enslaved people rose up in Saint-Domingue. The conflicts led to Haiti’s independence in 1804.",
      "ar": "منذ 1791 ثار مستعبدون في سان دومينغ، وانتهت الصراعات باستقلال هايتي سنة 1804."
    },
    "impact": {
      "fr": "Cette révolution constitue un tournant dans l’histoire de l’émancipation et du monde colonial.",
      "en": "The revolution was a turning point in emancipation and colonial history.",
      "ar": "شكلت الثورة تحولاً في تاريخ التحرر والعالم الاستعماري."
    },
    "source": "https://guides.loc.gov/haiti-reimagined",
    "sourceName": "Library of Congress",
    "approximate": false,
    "date": {
      "fr": "1791–1804",
      "en": "1791–1804",
      "ar": "1791–1804"
    }
  },
  {
    "slug": "slavery-abolition",
    "year": 1833,
    "era": "industrial",
    "region": "global",
    "theme": "society",
    "place": {
      "fr": "Empire britannique",
      "en": "British Empire",
      "ar": "الإمبراطورية البريطانية"
    },
    "title": {
      "fr": "L’abolition dans les colonies britanniques",
      "en": "Abolition in Britain’s colonies",
      "ar": "إلغاء الرق في المستعمرات البريطانية"
    },
    "summary": {
      "fr": "En 1833, le Parlement britannique adopte le Slavery Abolition Act. Il ne s’agit pas d’une abolition mondiale ni instantanée.",
      "en": "In 1833, the British Parliament passed the Slavery Abolition Act. This was not an immediate or worldwide abolition.",
      "ar": "في 1833 أقر البرلمان البريطاني قانون إلغاء الرق، ولم يكن إلغاءً فورياً أو عالمياً."
    },
    "impact": {
      "fr": "La loi représente une étape majeure d’un processus plus long de lutte contre l’esclavage.",
      "en": "The law was a major step in a longer struggle against slavery.",
      "ar": "كان القانون خطوة مهمة في نضال أطول ضد العبودية."
    },
    "source": "https://heritagecollections.parliament.uk/stories/the-transatlantic-slave-trade/",
    "sourceName": "UK Parliament",
    "approximate": false
  },
  {
    "slug": "meiji",
    "year": 1868,
    "era": "industrial",
    "region": "asia",
    "theme": "politics",
    "place": {
      "fr": "Japon",
      "en": "Japan",
      "ar": "اليابان"
    },
    "title": {
      "fr": "La restauration de Meiji",
      "en": "The Meiji Restoration",
      "ar": "إصلاح ميجي"
    },
    "summary": {
      "fr": "En 1868, la restauration de Meiji transforme l’organisation du pouvoir japonais. Les anciens privilèges des samouraïs sont remis en cause.",
      "en": "In 1868, the Meiji Restoration changed Japan’s political organisation, challenging the samurai’s former privileges.",
      "ar": "في 1868 غير إصلاح ميجي تنظيم السلطة في اليابان وتحدى امتيازات الساموراي السابقة."
    },
    "impact": {
      "fr": "Le bouleversement ouvre une nouvelle phase de l’histoire politique et sociale du Japon.",
      "en": "The upheaval opened a new phase in Japan’s political and social history.",
      "ar": "فتح التحول مرحلة جديدة في تاريخ اليابان السياسي والاجتماعي."
    },
    "source": "https://www.metmuseum.org/art/collection/search/55266",
    "sourceName": "The Metropolitan Museum of Art",
    "approximate": false
  },
  {
    "slug": "first-world-war",
    "year": 1914,
    "era": "contemporary",
    "region": "global",
    "theme": "conflict",
    "place": {
      "fr": "Monde",
      "en": "Worldwide",
      "ar": "العالم"
    },
    "title": {
      "fr": "La Première Guerre mondiale",
      "en": "The First World War",
      "ar": "الحرب العالمية الأولى"
    },
    "summary": {
      "fr": "En 1914, une crise européenne devient une guerre mondiale. Le conflit dure jusqu’en 1918 et mobilise aussi les empires coloniaux.",
      "en": "In 1914, a European crisis became a world war. The conflict lasted until 1918 and also mobilised colonial empires.",
      "ar": "في 1914 تحولت أزمة أوروبية إلى حرب عالمية استمرت حتى 1918 وشملت الإمبراطوريات الاستعمارية."
    },
    "impact": {
      "fr": "Les combats et la mobilisation bouleversent les sociétés à une échelle inédite.",
      "en": "Fighting and mobilisation disrupted societies on an unprecedented scale.",
      "ar": "غير القتال والتعبئة المجتمعات على نطاق غير مسبوق."
    },
    "source": "https://www.iwm.org.uk/history/first-world-war",
    "sourceName": "Imperial War Museums",
    "approximate": false,
    "date": {
      "fr": "1914–1918",
      "en": "1914–1918",
      "ar": "1914–1918"
    }
  },
  {
    "slug": "russian-revolution",
    "year": 1917,
    "era": "contemporary",
    "region": "europe",
    "theme": "politics",
    "place": {
      "fr": "Russie",
      "en": "Russia",
      "ar": "روسيا"
    },
    "title": {
      "fr": "Les révolutions russes",
      "en": "The Russian revolutions",
      "ar": "الثورات الروسية"
    },
    "summary": {
      "fr": "En 1917, une première révolution renverse le pouvoir impérial russe. Une seconde porte les bolcheviks au pouvoir.",
      "en": "In 1917, one revolution overthrew Russia’s imperial government. A second brought the Bolsheviks to power.",
      "ar": "في 1917 أطاحت ثورة بالحكم الإمبراطوري الروسي، ثم أوصلت ثورة ثانية البلاشفة إلى السلطة."
    },
    "impact": {
      "fr": "Ces événements changent profondément l’organisation politique de la Russie.",
      "en": "These events fundamentally changed Russia’s political organisation.",
      "ar": "غيرت هذه الأحداث تنظيم روسيا السياسي بصورة عميقة."
    },
    "source": "https://encyclopedia.ushmm.org/content/en/article/the-russian-revolution-1917",
    "sourceName": "United States Holocaust Memorial Museum",
    "approximate": false
  },
  {
    "slug": "second-world-war",
    "year": 1939,
    "era": "contemporary",
    "region": "global",
    "theme": "conflict",
    "place": {
      "fr": "Monde",
      "en": "Worldwide",
      "ar": "العالم"
    },
    "title": {
      "fr": "La Seconde Guerre mondiale et la Shoah",
      "en": "The Second World War and the Holocaust",
      "ar": "الحرب العالمية الثانية والهولوكوست"
    },
    "summary": {
      "fr": "La guerre commence en Europe avec l’invasion allemande de la Pologne en 1939 et se termine en 1945. Le régime nazi et ses collaborateurs perpètrent la Shoah.",
      "en": "War began in Europe with Germany’s invasion of Poland in 1939 and ended in 1945. The Nazi regime and its collaborators perpetrated the Holocaust.",
      "ar": "بدأت الحرب في أوروبا بغزو ألمانيا لبولندا سنة 1939 وانتهت سنة 1945. وارتكب النظام النازي والمتعاونون معه الهولوكوست."
    },
    "impact": {
      "fr": "Le conflit et les génocides provoquent des destructions et des traumatismes majeurs.",
      "en": "The conflict and genocides caused immense destruction and trauma.",
      "ar": "خلفت الحرب وجرائم الإبادة دماراً وصدمات هائلة."
    },
    "source": "https://www.ushmm.org/learn/holocaust/world-war-ii-and-the-holocaust-1939-1945",
    "sourceName": "United States Holocaust Memorial Museum",
    "approximate": false,
    "date": {
      "fr": "1939–1945",
      "en": "1939–1945",
      "ar": "1939–1945"
    }
  },
  {
    "slug": "united-nations",
    "year": 1945,
    "era": "contemporary",
    "region": "global",
    "theme": "politics",
    "place": {
      "fr": "San Francisco et monde",
      "en": "San Francisco and the world",
      "ar": "سان فرانسيسكو والعالم"
    },
    "title": {
      "fr": "La création des Nations unies",
      "en": "The creation of the United Nations",
      "ar": "تأسيس الأمم المتحدة"
    },
    "summary": {
      "fr": "La Charte des Nations unies est signée en juin 1945. L’organisation entre officiellement en existence le 24 octobre.",
      "en": "The UN Charter was signed in June 1945. The organisation officially came into existence on 24 October.",
      "ar": "وُقع ميثاق الأمم المتحدة في يونيو 1945، وأصبحت المنظمة قائمة رسمياً في 24 أكتوبر."
    },
    "impact": {
      "fr": "Un nouveau cadre de coopération internationale est créé après la guerre.",
      "en": "A new framework for international cooperation was created after the war.",
      "ar": "نشأ إطار جديد للتعاون الدولي بعد الحرب."
    },
    "source": "https://www.un.org/en/about-us/history-of-the-un",
    "sourceName": "United Nations",
    "approximate": false,
    "date": {
      "fr": "24 octobre 1945",
      "en": "24 October 1945",
      "ar": "24 أكتوبر 1945"
    }
  },
  {
    "slug": "india-pakistan",
    "year": 1947,
    "era": "contemporary",
    "region": "asia",
    "theme": "politics",
    "place": {
      "fr": "Asie du Sud",
      "en": "South Asia",
      "ar": "جنوب آسيا"
    },
    "title": {
      "fr": "Indépendance et partition de l’Inde",
      "en": "Independence and the partition of India",
      "ar": "استقلال الهند وتقسيمها"
    },
    "summary": {
      "fr": "En août 1947, la fin du pouvoir britannique s’accompagne de la création de l’Inde et du Pakistan indépendants.",
      "en": "In August 1947, the end of British rule was accompanied by the creation of independent India and Pakistan.",
      "ar": "في أغسطس 1947 انتهى الحكم البريطاني ونشأت الهند وباكستان كدولتين مستقلتين."
    },
    "impact": {
      "fr": "La partition entraîne de vastes déplacements et des violences qui marquent durablement la région.",
      "en": "Partition caused vast displacement and violence with a lasting regional impact.",
      "ar": "أدى التقسيم إلى نزوح واسع وعنف ترك آثاراً دائمة في المنطقة."
    },
    "source": "https://www.nam.ac.uk/explore/independence-and-partition-1947",
    "sourceName": "National Army Museum",
    "approximate": false,
    "date": {
      "fr": "Août 1947",
      "en": "August 1947",
      "ar": "أغسطس 1947"
    }
  },
  {
    "slug": "human-rights",
    "year": 1948,
    "era": "contemporary",
    "region": "global",
    "theme": "society",
    "place": {
      "fr": "Paris et monde",
      "en": "Paris and the world",
      "ar": "باريس والعالم"
    },
    "title": {
      "fr": "La Déclaration universelle des droits de l’homme",
      "en": "The Universal Declaration of Human Rights",
      "ar": "الإعلان العالمي لحقوق الإنسان"
    },
    "summary": {
      "fr": "Le 10 décembre 1948, l’Assemblée générale des Nations unies proclame la Déclaration universelle des droits de l’homme.",
      "en": "On 10 December 1948, the UN General Assembly proclaimed the Universal Declaration of Human Rights.",
      "ar": "في 10 ديسمبر 1948 أعلنت الجمعية العامة للأمم المتحدة الإعلان العالمي لحقوق الإنسان."
    },
    "impact": {
      "fr": "Elle fixe un idéal commun de droits et de libertés pour tous les peuples.",
      "en": "It established a common standard of rights and freedoms for all peoples.",
      "ar": "وضع الإعلان معياراً مشتركاً للحقوق والحريات لجميع الشعوب."
    },
    "source": "https://www.un.org/en/about-us/universal-declaration-of-human-rights",
    "sourceName": "United Nations",
    "approximate": false,
    "date": {
      "fr": "10 décembre 1948",
      "en": "10 December 1948",
      "ar": "10 ديسمبر 1948"
    }
  },
  {
    "slug": "decolonization",
    "year": 1960,
    "era": "contemporary",
    "region": "global",
    "theme": "politics",
    "place": {
      "fr": "Afrique, Asie et monde",
      "en": "Africa, Asia and the world",
      "ar": "أفريقيا وآسيا والعالم"
    },
    "title": {
      "fr": "La décolonisation et le droit à l’indépendance",
      "en": "Decolonisation and the right to independence",
      "ar": "إنهاء الاستعمار والحق في الاستقلال"
    },
    "summary": {
      "fr": "En 1960, l’ONU adopte sa déclaration sur l’indépendance des pays et peuples coloniaux, au cœur d’une vaste vague de décolonisation.",
      "en": "In 1960, the UN adopted its declaration on independence for colonial countries and peoples during a broad wave of decolonisation.",
      "ar": "في 1960 أقرت الأمم المتحدة إعلان استقلال البلدان والشعوب المستعمرة خلال موجة واسعة لإنهاء الاستعمار."
    },
    "impact": {
      "fr": "La déclaration renforce un cadre international en faveur de l’autodétermination.",
      "en": "The declaration strengthened an international framework supporting self-determination.",
      "ar": "عزز الإعلان إطاراً دولياً يدعم تقرير المصير."
    },
    "source": "https://www.un.org/en/global-issues/decolonization/",
    "sourceName": "United Nations",
    "approximate": false
  },
  {
    "slug": "apollo-11",
    "year": 1969,
    "era": "contemporary",
    "region": "global",
    "theme": "science",
    "place": {
      "fr": "La Lune",
      "en": "The Moon",
      "ar": "القمر"
    },
    "title": {
      "fr": "Les premiers pas sur la Lune",
      "en": "The first steps on the Moon",
      "ar": "أول خطوات على القمر"
    },
    "summary": {
      "fr": "Le 20 juillet 1969, Apollo 11 se pose sur la Lune. Neil Armstrong et Buzz Aldrin y marchent, tandis que Michael Collins reste en orbite.",
      "en": "On 20 July 1969, Apollo 11 landed on the Moon. Neil Armstrong and Buzz Aldrin walked there while Michael Collins remained in orbit.",
      "ar": "في 20 يوليو 1969 هبطت أبولو 11 على القمر. مشى نيل أرمسترونغ وباز ألدرين على سطحه وبقي مايكل كولينز في المدار."
    },
    "impact": {
      "fr": "La mission réalise le premier alunissage humain dans le contexte de la course spatiale.",
      "en": "The mission achieved the first crewed lunar landing during the space race.",
      "ar": "حققت المهمة أول هبوط بشري على القمر في سياق سباق الفضاء."
    },
    "source": "https://www.nasa.gov/mission/apollo-11/",
    "sourceName": "NASA",
    "approximate": false,
    "date": {
      "fr": "20 juillet 1969",
      "en": "20 July 1969",
      "ar": "20 يوليو 1969"
    }
  },
  {
    "slug": "world-wide-web",
    "year": 1989,
    "era": "contemporary",
    "region": "global",
    "theme": "science",
    "place": {
      "fr": "CERN, Suisse",
      "en": "CERN, Switzerland",
      "ar": "سيرن، سويسرا"
    },
    "title": {
      "fr": "La naissance du World Wide Web",
      "en": "The birth of the World Wide Web",
      "ar": "ولادة شبكة الويب"
    },
    "summary": {
      "fr": "En 1989, Tim Berners-Lee propose le World Wide Web au CERN. Le Web est un système d’information utilisant Internet, pas la naissance d’Internet lui-même.",
      "en": "In 1989, Tim Berners-Lee proposed the World Wide Web at CERN. The Web is an information system using the Internet, not the invention of the Internet itself.",
      "ar": "في 1989 اقترح تيم برنرز لي شبكة الويب في سيرن. الويب نظام معلومات يستخدم الإنترنت وليس اختراع الإنترنت نفسه."
    },
    "impact": {
      "fr": "Les pages reliées par des liens changent l’accès et le partage de l’information.",
      "en": "Linked pages transformed access to and sharing of information.",
      "ar": "غيرت الصفحات المترابطة الوصول إلى المعلومات ومشاركتها."
    },
    "source": "https://home.cern/science/computing/the-birth-of-the-web/",
    "sourceName": "CERN",
    "approximate": false
  },
  {
    "slug": "berlin-wall",
    "year": 1989,
    "era": "contemporary",
    "region": "europe",
    "theme": "politics",
    "place": {
      "fr": "Berlin",
      "en": "Berlin",
      "ar": "برلين"
    },
    "title": {
      "fr": "L’ouverture du mur de Berlin",
      "en": "The opening of the Berlin Wall",
      "ar": "فتح جدار برلين"
    },
    "summary": {
      "fr": "Le 9 novembre 1989, les points de passage du mur de Berlin s’ouvrent. Les habitants franchissent la frontière divisant la ville.",
      "en": "On 9 November 1989, Berlin Wall crossings opened. Residents crossed the border dividing the city.",
      "ar": "في 9 نوفمبر 1989 فتحت معابر جدار برلين وعبر السكان الحدود التي قسمت المدينة."
    },
    "impact": {
      "fr": "L’événement devient un symbole de la fin de la division de l’Europe pendant la guerre froide.",
      "en": "The event became a symbol of the ending of Europe’s Cold War division.",
      "ar": "أصبح الحدث رمزاً لنهاية انقسام أوروبا خلال الحرب الباردة."
    },
    "source": "https://www.berlin.de/en/history/8482274-8619314-opening-and-fall-of-the-berlin-wall.en.html",
    "sourceName": "Berlin.de",
    "approximate": false,
    "date": {
      "fr": "9 novembre 1989",
      "en": "9 November 1989",
      "ar": "9 نوفمبر 1989"
    }
  },
  {
    "slug": "south-africa-democracy",
    "year": 1994,
    "era": "contemporary",
    "region": "africa",
    "theme": "society",
    "place": {
      "fr": "Afrique du Sud",
      "en": "South Africa",
      "ar": "جنوب أفريقيا"
    },
    "title": {
      "fr": "L’Afrique du Sud vote après l’apartheid",
      "en": "South Africa votes after apartheid",
      "ar": "جنوب أفريقيا تنتخب بعد الفصل العنصري"
    },
    "summary": {
      "fr": "En avril 1994, l’Afrique du Sud organise ses premières élections démocratiques nationales sans exclusion raciale.",
      "en": "In April 1994, South Africa held its first national democratic elections without racial exclusion.",
      "ar": "في أبريل 1994 أجرت جنوب أفريقيا أول انتخابات ديمقراطية وطنية دون استبعاد عنصري."
    },
    "impact": {
      "fr": "La victoire de l’ANC ouvre une nouvelle phase de construction démocratique.",
      "en": "The ANC’s victory opened a new phase of democratic development.",
      "ar": "فتح فوز المؤتمر الوطني الأفريقي مرحلة جديدة من البناء الديمقراطي."
    },
    "source": "https://www.nelsonmandela.org/democracy",
    "sourceName": "Nelson Mandela Foundation",
    "approximate": false,
    "date": {
      "fr": "Avril 1994",
      "en": "April 1994",
      "ar": "أبريل 1994"
    }
  },
  {
    "slug": "paris-agreement",
    "year": 2015,
    "era": "contemporary",
    "region": "global",
    "theme": "society",
    "place": {
      "fr": "Paris et monde",
      "en": "Paris and the world",
      "ar": "باريس والعالم"
    },
    "title": {
      "fr": "L’Accord de Paris sur le climat",
      "en": "The Paris Agreement on climate",
      "ar": "اتفاق باريس للمناخ"
    },
    "summary": {
      "fr": "Le 12 décembre 2015, les pays réunis à la COP21 adoptent l’Accord de Paris sur le climat.",
      "en": "On 12 December 2015, countries at COP21 adopted the Paris Agreement on climate.",
      "ar": "في 12 ديسمبر 2015 اعتمدت الدول المجتمعة في مؤتمر COP21 اتفاق باريس للمناخ."
    },
    "impact": {
      "fr": "L’accord établit un cadre collectif pour limiter le réchauffement et renforcer l’action climatique.",
      "en": "The agreement established a collective framework to limit warming and strengthen climate action.",
      "ar": "وضع الاتفاق إطاراً جماعياً للحد من الاحترار وتعزيز العمل المناخي."
    },
    "source": "https://unfccc.int/news/bringing-the-paris-agreement-into-force",
    "sourceName": "UNFCCC",
    "approximate": false,
    "date": {
      "fr": "12 décembre 2015",
      "en": "12 December 2015",
      "ar": "12 ديسمبر 2015"
    }
  },
  {
    "slug": "covid-19",
    "year": 2020,
    "era": "contemporary",
    "region": "global",
    "theme": "society",
    "place": {
      "fr": "Monde",
      "en": "Worldwide",
      "ar": "العالم"
    },
    "title": {
      "fr": "La pandémie de COVID-19",
      "en": "The COVID-19 pandemic",
      "ar": "جائحة كوفيد-19"
    },
    "summary": {
      "fr": "Le 11 mars 2020, l’OMS qualifie l’épidémie de COVID-19 de pandémie. Le virus s’est déjà propagé dans plusieurs régions.",
      "en": "On 11 March 2020, WHO characterised the COVID-19 outbreak as a pandemic, after the virus had spread across multiple regions.",
      "ar": "في 11 مارس 2020 وصفت منظمة الصحة العالمية تفشي كوفيد-19 بأنه جائحة، بعد انتشاره في مناطق عديدة."
    },
    "impact": {
      "fr": "L’événement constitue un repère majeur de l’histoire sanitaire mondiale récente.",
      "en": "The event became a major milestone in recent global public-health history.",
      "ar": "شكل الحدث محطة مهمة في التاريخ الصحي العالمي الحديث."
    },
    "source": "https://www.who.int/europe/emergencies/situations/covid-19",
    "sourceName": "World Health Organization",
    "approximate": false,
    "date": {
      "fr": "11 mars 2020",
      "en": "11 March 2020",
      "ar": "11 مارس 2020"
    }
  },
  {
    "slug": "high-seas-treaty",
    "year": 2026,
    "era": "contemporary",
    "region": "global",
    "theme": "society",
    "place": {
      "fr": "Haute mer",
      "en": "High seas",
      "ar": "أعالي البحار"
    },
    "title": {
      "fr": "Le traité sur la haute mer entre en vigueur",
      "en": "The High Seas Treaty enters into force",
      "ar": "دخول معاهدة أعالي البحار حيز التنفيذ"
    },
    "summary": {
      "fr": "Le 17 janvier 2026, l’accord BBNJ entre en vigueur. Il encadre la protection de la biodiversité marine au-delà des juridictions nationales.",
      "en": "On 17 January 2026, the BBNJ Agreement entered into force, creating a framework for marine biodiversity beyond national jurisdiction.",
      "ar": "في 17 يناير 2026 دخل اتفاق BBNJ حيز التنفيذ، واضعاً إطاراً لحماية التنوع البحري خارج الولايات الوطنية."
    },
    "impact": {
      "fr": "C’est une nouvelle étape de la coopération mondiale pour la protection de l’océan.",
      "en": "It marks a new step in global cooperation to protect the ocean.",
      "ar": "يمثل مرحلة جديدة في التعاون العالمي لحماية المحيط."
    },
    "source": "https://www.ioc.unesco.org/en/articles/bbnj-treaty-enters-force",
    "sourceName": "UNESCO — IOC",
    "approximate": false,
    "date": {
      "fr": "17 janvier 2026",
      "en": "17 January 2026",
      "ar": "17 يناير 2026"
    }
  }
];
