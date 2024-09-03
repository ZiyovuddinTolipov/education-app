# Loyiha haqida ma'lumot

## Umumiy maqsad
Ushbu loyiha ta'lim tizimini boshqarish va kuzatish uchun mo'ljallangan. Loyihada o'qituvchilar, talabalar va administratorlar uchun turli xil boshqaruv panellari mavjud.

## Texnologiyalar va kutubxonalar

### Frontend
- **React**: UI komponentlarini yaratish uchun.
- **React Router**: Marshrutlash va sahifalar o'rtasida navigatsiya qilish uchun.
- **React Icons**: Ikonalar kutubxonasi.
- **React Chartjs-2**: Diagrammalarni chizish uchun.
- **React Quill**: Rich text editor.
- **Tailwind CSS**: UI dizaynini yaratish uchun CSS framework.
- **AOS (Animate On Scroll)**: Scroll animatsiyalari uchun.

### Backend
- **localStorage**: Foydalanuvchi ma'lumotlarini saqlash uchun.

## Fayl tuzilishi
<pre>
src/
├── components/
│ ├── admin/
│ ├── teacher/
│ ├── student/
│ └── common/
├── pages/
│ ├── admin/
│ ├── teacher/
│ ├── student/
│ └── common/
├── layouts/
│ ├── admin/
│ ├── teacher/
│ ├── student/
│ └── common/
├── context/
│ ├── AdminProvider.jsx
│ ├── TeacherProvider.jsx
│ ├── StudentProvider.jsx
│ └── ThemeProvider.jsx
├── hooks/
│ ├── useAdminAuth.jsx
│ ├── useTeacherAuth.jsx
│ └── useStudentAuth.jsx
├── data/
│ └── data.js
├── scss/
│ ├── index.scss
│ ├── loading.scss
│ └── rich-text.scss
└── routes/
└── Routes.jsx
</pre>

## Rollar va ularning vazifalari

### Administrator
- **AdminDashboard**: Administrator uchun boshqaruv paneli.
- **AdminProvider**: Administrator konteksti va autentifikatsiyasi.
- **Komponentlar**: Administrator uchun maxsus komponentlar `components/admin` papkasida joylashgan.

### O'qituvchi
- **TeacherDashboard**: O'qituvchi uchun boshqaruv paneli.
- **TeacherProvider**: O'qituvchi konteksti va autentifikatsiyasi.
- **Komponentlar**: O'qituvchi uchun maxsus komponentlar `components/teacher` papkasida joylashgan.
- **TeacherGrading**: O'qituvchilar uchun baholash komponenti.
- **LabAssignment**: Laboratoriya vazifalari komponenti.
- **TestUpload**: Test yuklash komponenti.
- **TopicCreation**: Mavzu yaratish komponenti.

### Talaba
- **StudentDashboard**: Talaba uchun boshqaruv paneli.
- **StudentProvider**: Talaba konteksti va autentifikatsiyasi.
- **Komponentlar**: Talaba uchun maxsus komponentlar `components/student` papkasida joylashgan.

### Umumiy
- **Dashboard**: Boshqaruv paneli sahifasi.
- **Files**: Hujjatlar sahifasi.
- **Messages**: Xabarlar sahifasi.
- **Login**: Kirish sahifasi.
- **Profile**: Profil sahifasi.
- **Komponentlar**: Umumiy foydalaniladigan komponentlar `components/common` papkasida joylashgan.
- **Layouts**: Umumiy foydalaniladigan layoutlar `layouts/common` papkasida joylashgan.

## Dasturda ishlatilgan texnologiyalar

- **React**: UI komponentlarini yaratish uchun.
- **React Router**: Marshrutlash va sahifalar o'rtasida navigatsiya qilish uchun.
- **React Icons**: Ikonalar kutubxonasi.
- **React Chartjs-2**: Diagrammalarni chizish uchun.
- **React Quill**: Rich text editor.
- **Tailwind CSS**: UI dizaynini yaratish uchun CSS framework.
- **AOS (Animate On Scroll)**: Scroll animatsiyalari uchun.
- **localStorage**: Foydalanuvchi ma'lumotlarini saqlash uchun.

Ushbu ma'lumotlar loyihangizning umumiy tuzilishi, unda ishlatilgan texnologiyalar va rollar vazifalari haqida to'liq tasavvur beradi.

## Admin uchun funksionalliklar:

1. Testlarni boshqarish:
   - Testlarni o'chirish, qo'shish va tahrirlash
   - Test turlarini yaratish (masalan, ko'p tanlovli, to'g'ri/noto'g'ri, qisqa javob)
   - Testlarni mavzular va qiyinlik darajasi bo'yicha kategoriyalash

2. Foydalanuvchi profillarini boshqarish:
   - Yangi profillar yaratish (o'quvchi, o'qituvchi, admin)
   - Mavjud profillarni tahrirlash va o'chirish
   - Foydalanuvchi huquqlarini boshqarish
   - Guruhlar va kurslarni yaratish, tahrirlash

3. O'quvchilar statistikasini ko'rish va tahlil qilish:
   - Davomat (kunlik, oylik, semestr, yillik)
   - O'rtacha ball va individual baholar dinamikasi
   - Jins, guruh, kurs, fakultet bo'yicha statistika
   - Statistik hisobotlarni eksport qilish (PDF, Excel)

4. Fayllar va resurslarni boshqarish:
   - Turli formatdagi fayllarni (PDF, DOC, video) yuklash, tahrirlash, o'chirish
   - Fayllarni kategoriyalash va teglar bilan belgilash
   - Foydalanuvchi guruhlari uchun fayllardan foydalanish huquqlarini belgilash

5. O'qituvchilar baholash tizimini boshqarish:
   - So'rovnomalar yaratish, tahrirlash va o'chirish
   - Baholash mezonlarini belgilash
   - Natijalarni tahlil qilish va hisobotlar tayyorlash

6. Tizim sozlamalarini boshqarish:
   - Tizim tilini o'zgartirish
   - Xavfsizlik sozlamalarini boshqarish (parol murakkabligi, seanslar davomiyligi)
   - Tizim zaxira nusxasini yaratish va tiklash

7. Moliyaviy operatsiyalarni boshqarish:
   - To'lovlarni kuzatish va hisobotlar tayyorlash
   - Stipendiyalarni belgilash va boshqarish

## O'qituvchi uchun funksionalliklar:

1. O'quvchilarni baholash:
   - Turli xil baholash mezonlarini belgilash (test, laboratoriya ishi, loyiha)
   - Baholarni kiritish va tahrirlash
   - Individual va guruh bo'yicha baholash natijalari tahlili

2. Laboratoriya ishlarini boshqarish:
   - Yangi laboratoriya ishlarini yaratish va mavjudlarini tahrirlash
   - Topshiriqlarni belgilash va muddatlarni o'rnatish
   - Natijalarni tekshirish va baholash
   - Avtomatlashtirilgan tekshirish tizimini joriy etish (dasturlash topshiriqlari uchun)

3. Testlarni yaratish va boshqarish:
   - Turli formatdagi testlar yaratish
   - Test savollarini kategoriyalash va qiyinlik darajasini belgilash
   - Testlarni vaqt chegarasi bilan sozlash
   - Test natijalarini avtomatik hisoblash va tahlil qilish

4. O'quv materiallarini boshqarish:
   - Mavzular bo'yicha materiallarni yuklash (PDF, video, audio)
   - Mavzulararo bog'liqliklarni o'rnatish
   - Materiallarni ketma-ketlikda ochish tizimini sozlash
   - Foydalanuvchi faolligiga qarab materiallarni tavsiya qilish

5. O'quvchilar bilan aloqa:
   - Xabarlar almashish tizimi
   - Guruhiy muhokamalar yaratish
   - Online konsultatsiyalar o'tkazish

6. Hisobotlar va tahlillar:
   - O'quvchilar faolligi va yutuqlari bo'yicha hisobotlar
   - Mavzular bo'yicha o'zlashtirish darajasi tahlili
   - O'z faoliyati samaradorligi tahlili

7. Dars jadvali va topshiriqlarni rejalashtirish:
   - Dars jadvalini yaratish va boshqarish
   - Topshiriqlar va loyihalar uchun muddatlarni belgilash

## O'quvchi uchun funksionalliklar:

1. O'qituvchini baholash:
   - Anonim so'rovnomalarda qatnashish
   - O'qituvchi faoliyati bo'yicha fikr-mulohaza bildirish

2. O'qituvchi va adminstratsiya bilan aloqa:
   - Xabarlar yuborish va qabul qilish
   - Guruhiy muhokamalarda ishtirok etish
   - Online konsultatsiyalarga yozilish

3. O'quv jarayonida ishtirok etish:
   - Laboratoriya ishlarini topshirish
   - Testlarni topshirish
   - Loyiha va topshiriqlarni yuklash

4. O'quv materiallaridan foydalanish:
   - Mavzular bo'yicha materiallarga kirish
   - Video va audio materiallarni ko'rish/tinglash
   - Qo'shimcha resurslardan foydalanish

5. Shaxsiy yutuqlarni kuzatish:
   - Baholar va reytingni ko'rish
   - Davomat statistikasini kuzatish
   - O'zlashtirish darajasi tahlilini ko'rish

6. Shaxsiy profilni boshqarish:
   - Shaxsiy ma'lumotlarni yangilash
   - Parolni o'zgartirish
   - Bildirishnomalarni sozlash

7. Hamkorlikda ishlash:
   - Guruhiy loyihalarda ishtirok etish
   - Hamkurslar bilan materiallar almashish
   - Peer-review jarayonida qatnashish

8. Mobil qurilmalar uchun versiya:
   - Mobil ilovadan foydalanish
   - Offline rejimda ishlash imkoniyati