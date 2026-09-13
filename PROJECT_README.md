# बादशाह स्पाइसी — Digital Brand Showcase

React + Vite + Tailwind CSS + Framer Motion से बना cinematic client-pitch वेबसाइट।

## चलाने के लिए

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## ✅ अब असली जानकारी इस्तेमाल हो रही है

आपकी भेजी गई मेन्यू फोटो और मैसेज से यह सब असली डेटा साइट में लगा दिया गया है:

- **सारे 27 items, दोनों पेज, असली हाफ/फुल दाम** — `src/data/menu.js` में (कोई दाम बनाया नहीं गया)
- **मेन्यू की असली फोटो** — `public/assets/menu.jpg` और `menu-page2.jpg` (दोनों पेज lightbox में स्वाइप करके देखे जा सकते हैं)
- **Payment QR** — आपकी फोटो से crop करके `public/assets/payment-qr.png` में डाला गया
- **पूरा पता** — हाईवे रोड, मरहाला चौराहा के आगे, आर्य नगर, शुक्लागंज, उन्नाव, उत्तर प्रदेश
- **दोनों फ़ोन नंबर** — 7307472042, 9807893014 (Call बटन में)
- **GET DIRECTIONS** — अब असली पते से बनी Google Maps सर्च लिंक पर जाता है (कोई अलग coordinate नहीं बनाया)
- **"15 अगस्त 2026 से नये रेट लागू"** — मेन्यू सेक्शन में असली नोट के रूप में दिखता है

## ⚙️ नया — Advanced Add-ons

- **ऑर्डर बिल्डर**: हर डिश पर "जोड़ें" बटन से quantity select करें
- **Floating order bar**: नीचे स्क्रीन पर चुने गए आइटम और running total दिखता है
- **ऑर्डर समरी शीट**: quantity बदलें, कुल देखें, और:
  - WhatsApp नंबर सेट होने पर सीधे WhatsApp पर prefilled ऑर्डर भेजें
  - नहीं तो एक टैप में कॉल करें
  - "ऑर्डर लिस्ट कॉपी करें" — पूरा ऑर्डर text रूप में कॉपी हो जाता है (कॉल पर पढ़ने के लिए)
- **Scroll progress bar** — पेज टॉप पर पतली gold/ember लाइन
- **Animated category tabs** — sliding pill indicator, spring animation के साथ
- **Two-page menu lightbox** — दोनों असली मेन्यू फोटो में page switch करके देखी जा सकती हैं

## ⚠️ अभी भी confirm करना बाकी है

1. **WhatsApp नंबर** — फोटो में कॉल नंबर दिया है, WhatsApp अलग से confirm नहीं हुआ।
   `src/data/menu.js` में `WHATSAPP_NUMBER = "917307472042"` की तरह डालें (जो नंबर सही हो)।
2. **Google Review लिंक** — असली मिलते ही `GOOGLE_REVIEW_URL` में डालें।
3. **Maps/Review QR इमेज** — payment QR क्रॉप हो चुका है; अगर अलग QR (सिर्फ़ location या review के लिए) हैं तो
   `public/assets/maps-qr.png` और `review-qr.png` में डालें, नहीं तो card सिर्फ़ बटन की तरह काम करता रहेगा।
4. **Cinematic menu video** और **dish photos** — जैसे ही मिलें, `public/assets/README.md` में बताई गई जगह डाल दें।

## Tech Stack
React 19 · Vite · Tailwind CSS 3 · Framer Motion · Lucide React

## Design tokens
- रंग: matte black (`#0B0908`), warm ivory (`#F4E9D8`), gold (`#D9A441`), ember red-orange (`#C4451C`)
- फ़ॉन्ट: Baloo 2 (display/headings), Hind (body)
