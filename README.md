# यहाँ असली फ़ाइलें डालें (Drop real assets here)

`menu.jpg`, `menu-page2.jpg` और `payment-qr.png` — असली फोटो से पहले ही डाले जा चुके हैं।
बाकी नीचे दी गई फ़ाइलें डालते ही साइट अपने आप उन्हें इस्तेमाल करने लगेगी।
जब तक फ़ाइल मौजूद नहीं होती, साइट एक सुंदर placeholder दिखाती है — कोई error नहीं आएगा।

| File name                     | स्थिति | कहाँ इस्तेमाल होगा                        |
|--------------------------------|--------|--------------------------------------------|
| `menu.jpg`                     | ✅ असली फोटो लग चुकी है | video placeholder + lightbox पेज 1 |
| `menu-page2.jpg`                | ✅ असली फोटो लग चुकी है | lightbox पेज 2 |
| `payment-qr.png`               | ✅ असली फोटो से crop किया गया | QR / Connect — Payment card |
| `badshah-spicy-menu-video.mp4` | ⏳ बाकी | Cinematic menu video section |
| `maps-qr.png`                  | ⏳ बाकी (वैकल्पिक — बटन असली Maps लिंक पर पहले से काम कर रहा है) | QR / Connect — Directions card |
| `review-qr.png`                | ⏳ बाकी | QR / Connect — Google Review card |
| `food/*.jpg`                   | ⏳ बाकी | Signature Food कार्ड — फ़ाइलनेम `src/data/menu.js` में item id के हिसाब से |

फ़ाइलें डालने के बाद बस `npm run dev` फिर से refresh करें।
