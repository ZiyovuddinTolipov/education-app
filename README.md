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