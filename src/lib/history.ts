export const languages = ["fr", "en", "ar"] as const;
export type Language = (typeof languages)[number];
export function isLanguage(value: string): value is Language { return languages.some(lang => lang === value); }
export const events = [
  {
    "slug": "volubilis",
    "year": -300,
    "date": {
      "fr": "IIIe s. av. J.-C.",
      "en": "3rd century BCE",
      "ar": "القرن الثالث قبل الميلاد"
    },
    "era": "ancient",
    "theme": "culture",
    "place": {
      "fr": "Volubilis",
      "en": "Volubilis",
      "ar": "وليلي"
    },
    "image": "volubilis",
    "title": {
      "fr": "Volubilis, une ville au croisement des mondes",
      "en": "Volubilis, a meeting of worlds",
      "ar": "وليلي، مدينة عند ملتقى الحضارات"
    },
    "summary": {
      "fr": "Volubilis se développe au IIIe siècle avant notre ère. La ville devient ensuite un important centre de la présence romaine en Afrique du Nord. Ses vestiges témoignent de plusieurs cultures successives.",
      "en": "Volubilis developed in the third century BCE. It later became an important Roman centre in North Africa. Its remains reflect successive cultural influences.",
      "ar": "تطورت وليلي في القرن الثالث قبل الميلاد، ثم أصبحت مركزاً مهماً للحضور الروماني في شمال أفريقيا. وتشهد آثارها على تعاقب التأثيرات الثقافية."
    },
    "source": "https://whc.unesco.org/en/list/836/"
  },
  {
    "slug": "fez",
    "year": 789,
    "date": {
      "fr": "789–808",
      "en": "789–808",
      "ar": "789–808"
    },
    "era": "medieval",
    "theme": "culture",
    "place": {
      "fr": "Fès",
      "en": "Fès",
      "ar": "فاس"
    },
    "image": "manuscript",
    "title": {
      "fr": "Fès, les origines d’une capitale",
      "en": "Fez, the origins of a capital",
      "ar": "فاس، بدايات عاصمة"
    },
    "summary": {
      "fr": "La fondation idrisside de Fès s’inscrit entre 789 et 808. Sa médina conserve une mémoire urbaine façonnée par plusieurs dynasties, avec un essor particulièrement important sous les Mérinides.",
      "en": "The Idrisid foundations of Fez date to 789–808. Its medina preserves an urban history shaped by successive dynasties, with an important flourishing under the Marinids.",
      "ar": "تعود بدايات تأسيس فاس في العصر الإدريسي إلى الفترة بين 789 و808. وتحفظ مدينتها القديمة تاريخاً عمرانياً شكلته دول متعاقبة، مع ازدهار بارز في العصر المريني."
    },
    "source": "https://whc.unesco.org/en/list/170/"
  },
  {
    "slug": "marrakesh",
    "year": 1070,
    "date": {
      "fr": "1070–1072",
      "en": "1070–1072",
      "ar": "1070–1072"
    },
    "era": "medieval",
    "theme": "politics",
    "place": {
      "fr": "Marrakech",
      "en": "Marrakech",
      "ar": "مراكش"
    },
    "image": "map",
    "title": {
      "fr": "La fondation de Marrakech",
      "en": "The founding of Marrakesh",
      "ar": "تأسيس مراكش"
    },
    "summary": {
      "fr": "Fondée par les Almoravides entre 1070 et 1072, Marrakech devient un centre politique, économique et culturel majeur. Son influence dépasse le Maroc et s’étend au monde musulman occidental.",
      "en": "Founded by the Almoravids between 1070 and 1072, Marrakesh became a major political, economic and cultural centre, with an influence extending across the western Islamic world.",
      "ar": "أسس المرابطون مراكش بين 1070 و1072. وأصبحت مركزاً سياسياً واقتصادياً وثقافياً مهماً امتد تأثيره إلى الغرب الإسلامي."
    },
    "source": "https://whc.unesco.org/en/list/331/"
  },
  {
    "slug": "essaouira",
    "year": 1700,
    "date": {
      "fr": "XVIIIe siècle",
      "en": "18th century",
      "ar": "القرن الثامن عشر"
    },
    "era": "modern",
    "theme": "trade",
    "place": {
      "fr": "Essaouira",
      "en": "Essaouira",
      "ar": "الصويرة"
    },
    "image": "map",
    "title": {
      "fr": "Essaouira, une ouverture sur l’Atlantique",
      "en": "Essaouira, an Atlantic connection",
      "ar": "الصويرة، انفتاح على الأطلسي"
    },
    "summary": {
      "fr": "La médina d’Essaouira illustre une ville portuaire fortifiée du XVIIIe siècle. Son architecture associe des influences européennes et nord-africaines, dans un lieu d’échanges entre le Maroc et le monde.",
      "en": "Essaouira’s medina represents an eighteenth-century fortified port. Its architecture brings together European and North African influences, reflecting exchanges between Morocco and the wider world.",
      "ar": "تمثل مدينة الصويرة القديمة نموذجاً لميناء محصن من القرن الثامن عشر. ويجمع عمرانها تأثيرات أوروبية وشمال أفريقية تعكس التبادل بين المغرب والعالم."
    },
    "source": "https://whc.unesco.org/en/list/753/"
  },
  {
    "slug": "ait-ben-haddou",
    "year": 1987,
    "date": {
      "fr": "1987",
      "en": "1987",
      "ar": "1987"
    },
    "era": "contemporary",
    "theme": "culture",
    "place": {
      "fr": "Aït Ben Haddou",
      "en": "Aït Ben Haddou",
      "ar": "آيت بن حدو"
    },
    "image": "map",
    "title": {
      "fr": "Aït Ben Haddou entre au patrimoine mondial",
      "en": "Aït Ben Haddou joins the World Heritage List",
      "ar": "إدراج آيت بن حدو ضمن التراث العالمي"
    },
    "summary": {
      "fr": "En 1987, le ksar d’Aït Ben Haddou est inscrit au patrimoine mondial. Son architecture en terre offre un exemple remarquable de l’habitat traditionnel du sud du Maroc.",
      "en": "In 1987, the ksar of Aït Ben Haddou was inscribed on the World Heritage List. Its earthen architecture is an outstanding example of traditional settlement in southern Morocco.",
      "ar": "أُدرج قصر آيت بن حدو في قائمة التراث العالمي سنة 1987. وتقدم عمارته الترابية نموذجاً بارزاً للسكن التقليدي في جنوب المغرب."
    },
    "source": "https://whc.unesco.org/en/list/444/"
  },
  {
    "slug": "volubilis-unesco",
    "year": 1997,
    "date": {
      "fr": "1997",
      "en": "1997",
      "ar": "1997"
    },
    "era": "contemporary",
    "theme": "culture",
    "place": {
      "fr": "Volubilis",
      "en": "Volubilis",
      "ar": "وليلي"
    },
    "image": "volubilis",
    "title": {
      "fr": "La reconnaissance mondiale de Volubilis",
      "en": "World recognition for Volubilis",
      "ar": "الاعتراف العالمي بتراث وليلي"
    },
    "summary": {
      "fr": "L’inscription de Volubilis au patrimoine mondial en 1997 reconnaît la valeur de ce site archéologique et les échanges culturels dont il conserve les traces.",
      "en": "Volubilis was inscribed on the World Heritage List in 1997, recognising the archaeological site and the cultural exchanges preserved in its remains.",
      "ar": "أُدرج موقع وليلي الأثري في قائمة التراث العالمي سنة 1997، اعترافاً بقيمته وبما يحفظه من آثار التبادل الثقافي."
    },
    "source": "https://whc.unesco.org/en/list/836/"
  }
] as const;
export type HistoryEvent = (typeof events)[number];
