import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
var ls = require('local-storage');
var lang=ls.get('lang');
if(lang===null)lang='du'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "home": "Home",
          "services": "Services",
          "gallery": "Photos Gallery",
          "testimonials": "Testimonials",
          "about": "About Us",
          "welcome_message": "Moving Doesn't have to be stressful",
          "first_q": "What's your current address ? ",
          "second_q": "Where do you want to move ? ",
          "third_q": "What items do you have ? ",
          "choose_data": "Choose a date ? ",
          "choose_time": "Choose a time ? ",
          "submit": "Submit",
          "name": "Name",
          "review": "Review",
          "happe_customers": "Happy Customers ",
          "about_us": "Welcome to JAD Umzugs! We are a small transportation and relocation company that assists individuals in moving to new homes in Germany. Our goal is to provide exceptional and reliable service to our clients, making the moving process easy and comfortable. Depending on your needs, we offer packing and unpacking services, transportation, and arrangement in the new home. By submitting your data through this form, you acknowledge that the website owner will collect and process your data for the purposes outlined in the website's Privacy Policy. However, your data will not be stored by the website owner. Contact us today for a free consultation and a smooth moving experience to your new home.",
          "copy_rights": "Copyright © 2023 JadUmZug. All rights reserved"

        }
      },
      ar: {
        translation: {
          "home": "الصفحة الرئيسية",

          "services": "الخدمات",
          "gallery": "معرض الصور",
          "testimonials": "شهادات",
          "about": "من نحن",
          "welcome_message": "الانتقال لا يحتاج إلى أن يكون مجهدًا",
          "first_q": "ما هو عنوانك الحالي؟",
          "second_q": "إلى أين ترغب في الانتقال؟",
          "third_q": "ما اﻷغراض التي لديك؟",
          "choose_data": "اختر تاريخًا ؟",
          "choose_time": "اختر وقتًا ؟",
          "submit": "إرسال",
          "name": "الاسم",
          "review": "مراجعة",
          "happe_customers": "زبائن سعداء",
          "about_us": "مرحبًا بك في شركة جاد للنقل ! نحن شركة صغيرة للنقل والترحيل نساعد الأشخاص في الانتقال إلى منازل جديدة في ألمانيا. نهدف إلى تقديم خدمة استثنائية وموثوقة لعملائنا، وجعل عملية الانتقال تجربة سهلة ومريحة. اعتمادًا على احتياجاتك، نوفر خدمات التعبئة والتغليف، والنقل، والترتيب في المنزل الجديد.بإرسال بياناتك من خلال هذا النموذج، فإنك تقر بأن صاحب الموقع سيقوم بجمع ومعالجة بياناتك للأغراض المبينة في سياسة الخصوصية الخاصة بالموقع. ومع ذلك، فلن يتم تخزين بياناتك من قبل صاحب الموقع. اتصل بنا اليوم للحصول على استشارة مجانية وتجربة فعالة للانتقال إلى منزلك الجديد",
          "copy_rights": "جميع الحقوق محفوظة © 2023 JadUmZug"
        }
      },
      du: {
        translation: {
          "home": "Startseite",
          "services": "Dienstleistungen",
          "gallery": "Fotogalerie",
          "testimonials": "Kundenbewertungen",
          "about": "Über uns",
          "welcome_message": "Umziehen muss nicht stressig sein",
          "first_q": "Was ist Ihre aktuelle Adresse?",
          "second_q": "Wohin möchten Sie umziehen?",
          "third_q": "Welche Gegenstände haben Sie?",
          "choose_data": "Wählen Sie ein Datum?",
          "choose_time": "Wählen Sie eine Uhrzeit?",
          "submit": "Absenden",
          "name": "Name",
          "review": "Bewertung",
          "happe_customers": "Zufriedene Kunden",
          "about_us": "Willkommen bei JAD Umzugs! Wir sind ein kleines Transport- und Umzugsunternehmen, das Einzelpersonen beim Umzug in neue Häuser in Deutschland unterstützt. Unser Ziel ist es, unseren Kunden außergewöhnlichen und zuverlässigen Service zu bieten und den Umzugsprozess einfach und komfortabel zu gestalten. Je nach Ihren Bedürfnissen bieten wir Verpackungs- und Entpackungsdienste, Transport und Einrichtung im neuen Zuhause an. Durch die Übermittlung Ihrer Daten über dieses Formular bestätigen Sie, dass der Website-Betreiber Ihre Daten gemäß der Datenschutzrichtlinie der Website erheben und verarbeiten wird. Ihre Daten werden jedoch nicht vom Website-Betreiber gespeichert. Kontaktieren Sie uns noch heute für eine kostenlose Beratung und eine reibungslose Umzugserfahrung in Ihr neues Zuhause.",
          "copy_rights": "Copyright © 2023 JadUmZug. Alle Rechte vorbehalten."
        }
      }
    },
    lng: lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
export default i18n;