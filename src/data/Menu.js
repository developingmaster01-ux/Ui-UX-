// ─────────────────────────────────────────────────────────────
// असली जानकारी — भेजी गई मेन्यू फोटो और मैसेज से ली गई है
// ─────────────────────────────────────────────────────────────

// WhatsApp नंबर फोटो में अलग से नहीं दिया — कॉल नंबर को अपने आप WhatsApp नहीं माना जा सकता।
// कन्फर्म करने के बाद यहाँ country code के साथ डालें, जैसे "917307472042"
export const WHATSAPP_NUMBER = "";

// असली Google Review लिंक मिलने पर यहाँ डालें
export const GOOGLE_REVIEW_URL = "";

export const RESTAURANT = {
  name: "बादशाह स्पाइसी",
  nameEn: "Badshah Spicy",
  category: "फास्ट फूड",
  tagline: "स्वाद जो याद रह जाए",
  addressLines: [
    "हाईवे रोड, मरहाला चौराहा के आगे",
    "आर्य नगर, शुक्लागंज",
    "उन्नाव, उत्तर प्रदेश",
  ],
  phones: ["7307472042", "9807893014"],
  ratesEffective: "15 अगस्त 2026 से नये रेट लागू",
};

// पूरे पते से बना हुआ Google Maps सर्च लिंक — कोई अलग coordinate/listing नहीं बनाया गया,
// सिर्फ असली पते के text से एक search query बनाई गई है।
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${RESTAURANT.name} ${RESTAURANT.addressLines.join(" ")}`
)}`;

export const CATEGORIES = [
  "फ्राइड राइस",
  "नूडल्स",
  "मंचूरियन",
  "चिली स्पेशल",
  "स्नैक्स",
  "स्प्रिंग रोल",
  "बर्गर व सूप",
];

// half/full = हाफ/फुल दाम। कुछ आइटम सिर्फ एक ही दाम में मिलते हैं (प्लेट/पीस) —
// उनके लिए single: { price, unit } इस्तेमाल किया गया है।
export const MENU_ITEMS = [
  // फ्राइड राइस
  { id: "vfr", name: "वेज फ्राइड राइस", category: "फ्राइड राइस", half: 60, full: 90 },
  { id: "pr", name: "पनीर राइस", category: "फ्राइड राइस", half: 70, full: 100 },
  { id: "cgfr", name: "चिली गार्लिक फ्राइड राइस", category: "फ्राइड राइस", half: 70, full: 100 },

  // नूडल्स
  { id: "vn", name: "वेज नूडल्स", category: "नूडल्स", half: 60, full: 90 },
  { id: "pn", name: "पनीर नूडल्स", category: "नूडल्स", half: 70, full: 100 },
  { id: "cgn", name: "चिली गार्लिक नूडल्स", category: "नूडल्स", half: 70, full: 100 },

  // मंचूरियन
  { id: "vmd", name: "वेज मंचूरियन ड्राई", category: "मंचूरियन", half: 70, full: 110 },
  { id: "vmg", name: "वेज मंचूरियन ग्रेवी", category: "मंचूरियन", half: 80, full: 120 },
  { id: "pm", name: "पनीर मंचूरियन", category: "मंचूरियन", half: 90, full: 130 },

  // चिली स्पेशल
  { id: "cpd", name: "चिली पनीर ड्राई", category: "चिली स्पेशल", half: 80, full: 120 },
  { id: "cpg", name: "चिली पनीर ग्रेवी", category: "चिली स्पेशल", half: 90, full: 130 },
  { id: "cpod", name: "चिली पोटैटो ड्राई", category: "चिली स्पेशल", half: 80, full: 120 },
  { id: "cpog", name: "चिली पोटैटो ग्रेवी", category: "चिली स्पेशल", half: 90, full: 130 },
  { id: "hcp", name: "हनी चिली पोटैटा", category: "चिली स्पेशल", half: 90, full: 130 },
  { id: "hpd", name: "हनी पनीर ड्राई", category: "चिली स्पेशल", half: 80, full: 120 },

  // स्नैक्स
  { id: "fc", name: "फिंगर चिप्स", category: "स्नैक्स", half: 50, full: 80 },
  { id: "snf", name: "सोया नगेट फ्राई", category: "स्नैक्स", half: 40, full: 80 },
  { id: "ng", name: "नगेट ग्रेवी", category: "स्नैक्स", half: 80, full: 120 },
  { id: "pk", name: "पकौड़ी", category: "स्नैक्स", single: { price: 80, unit: "प्लेट" } },
  { id: "ppk", name: "पनीर पकौड़ी", category: "स्नैक्स", single: { price: 90, unit: "प्लेट" } },

  // स्प्रिंग रोल
  { id: "sr", name: "स्प्रिंग रोल", category: "स्प्रिंग रोल", half: 40, full: 80 },
  { id: "vccr", name: "वेज चीज़ कॉर्न रोल", category: "स्प्रिंग रोल", half: 60, full: 110 },

  // बर्गर व सूप
  { id: "vb", name: "वेज बर्गर", category: "बर्गर व सूप", single: { price: 40, unit: "पीस" } },
  { id: "pb", name: "पनीर बर्गर", category: "बर्गर व सूप", single: { price: 60, unit: "पीस" } },
  { id: "shs", name: "सूप हॉट एंड सॉर", category: "बर्गर व सूप", single: { price: 50, unit: "प्लेट" } },
  { id: "vms", name: "वेज मंचाओ सूप", category: "बर्गर व सूप", single: { price: 60, unit: "प्लेट" } },
  { id: "cc", name: "क्रिस्पी कॉर्न", category: "बर्गर व सूप", single: { price: 70, unit: "प्लेट" } },
  { id: "cs", name: "चीज़ सैंडविच", category: "बर्गर व सूप", single: { price: 80, unit: "प्लेट" } },
];

// सिग्नेचर फूड सेक्शन — मेन्यू की हर कैटेगरी में से लोकप्रिय आइटम
export const SIGNATURE_FOOD = [
  { id: "vfr", tag: "फ्राइड राइस", desc: "वोक में तेज़ आँच पर भुना हुआ, हल्के मसालों के साथ।" },
  { id: "vn", tag: "नूडल्स", desc: "सब्ज़ियों के साथ क्लासिक स्ट्रीट-स्टाइल नूडल्स।" },
  { id: "pm", tag: "मंचूरियन", desc: "पनीर की कुरकुरी परत, गाढ़ी मंचूरियन सॉस में।" },
  { id: "cpg", tag: "चिली स्पेशल", desc: "तीखा और चटपटा — शौकीनों की पहली पसंद।" },
  { id: "hcp", tag: "चिली स्पेशल", desc: "शहद जैसी मिठास और तीखेपन का बैलेंस।" },
  { id: "sr", tag: "स्प्रिंग रोल", desc: "कुरकुरी परत के अंदर भरपूर सब्ज़ियों की स्टफिंग।" },
  { id: "pb", tag: "बर्गर व सूप", desc: "गरमागरम, हल्के मसालेदार पैटी के साथ।" },
  { id: "shs", tag: "बर्गर व सूप", desc: "ठंड में राहत देने वाला गरमागरम सूप।" },
].map((sig) => ({ ...sig, name: MENU_ITEMS.find((m) => m.id === sig.id)?.name || "" }));
