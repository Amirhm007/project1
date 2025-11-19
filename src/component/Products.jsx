// src/component/Products.jsx
const devAntiPatterns = [
  {
    id: 1,
    name: "Console.log زیاد",
    icon: "FaBug",
    description:
      "فراموش کردن حذف دستورات Console.log در کدهای پروداکشن (نهایی).",
    severity: 4,
    author: "آقای عجول",
    translator: "بانو سهل‌انگار",
    price: 120000,
    year: 2005,
  },
  {
    id: 2,
    name: "استفاده از 'any' در تایپ‌اسکریپت",
    icon: "FaMagic",
    description:
      "به کار بردن نوع 'any' به جای تعریف دقیق نوع داده برای فرار از مشکل تایپینگ.",
    severity: 5,
    author: "دکتر گریز از قوانین",
    translator: "پرفسور آسون‌گیر",
    price: 250000,
    year: 2014,
  },
  {
    id: 3,
    name: "کامپوننت‌های تو در تو",
    icon: "FaLayerGroup",
    description:
      "پیچیدگی بیش از حد در ساختار کامپوننت‌ها (Callback Hell در JSX).",
    severity: 3,
    author: "استاد پِیچیده",
    translator: "ماری جادوگر",
    price: 95000,
    year: 2016,
  },
  {
    id: 4,
    name: "کدهای جادویی (Magic Numbers)",
    icon: "FaExclamationTriangle",
    description:
      "استفاده از مقادیر عددی ثابت و بدون توضیح (Hardcoded) به جای تعریف متغیر.",
    severity: 4,
    author: "آقا میرعماد",
    translator: "مهندس گیج",
    price: 150000,
    year: 1980,
  },
  {
    id: 5,
    name: "فراموشی Key در Map",
    icon: "FaKey",
    description: "عدم تعریف پرآپ 'key' در هنگام استفاده از متد map() در React.",
    severity: 3,
    author: "خانم ناپایدار",
    translator: "رضا گندم‌کار",
    price: 70000,
    year: 2015,
  },
  {
    id: 6,
    name: "مرورگر 'Chrome' است دیگر!",
    icon: "FaGlobe",
    description:
      "تست نکردن کدها در مرورگرهای مختلف (Safari, Firefox, Edge) و نادیده گرفتن باگ‌های کراس-بروزر.",
    severity: 4,
    author: "برونو یک‌بینی",
    translator: "سارا خودرأی",
    price: 180000,
    year: 2010,
  },
  {
    id: 7,
    name: "اعتماد به داده‌های ورودی کاربر",
    icon: "FaUserSecret",
    description:
      "عدم اعتبارسنجی و پاکسازی داده‌های ورودی کاربر (SQL Injection, XSS).",
    severity: 5,
    author: "هکر مبتدی",
    translator: "مدافع ساده‌لوح",
    price: 350000,
    year: 1998,
  },
  {
    id: 8,
    name: "کامیت‌های بی‌معنی",
    icon: "FaGit",
    description:
      "استفاده از پیام‌های کامیت (Commit Messages) مبهم مانند 'Fix' یا 'Update'.",
    severity: 2,
    author: "حسن بی‌حوصله",
    translator: "سامان بی‌خیال",
    price: 45000,
    year: 2012,
  },
  {
    id: 9,
    name: "نداشتن فایل Readme.md",
    icon: "FaBookOpen",
    description: "راه‌اندازی پروژه بدون مستندات اولیه و دستورالعمل نصب.",
    severity: 2,
    author: "گروه مخفی‌کاران",
    translator: "مترجم گمراه",
    price: 80000,
    year: 2008,
  },
  {
    id: 10,
    name: "انتخاب نام‌های تک‌حرفی",
    icon: "FaSignature",
    description:
      "استفاده از متغیرهایی مانند 'a' یا 'i' در متغیرهای مهم و خارج از حلقه.",
    severity: 3,
    author: "نویسنده A",
    translator: "مترجم I",
    price: 110000,
    year: 1975,
  },
  {
    id: 11,
    name: "کدهای کپی-پیست شده",
    icon: "FaCopy",
    description:
      "تکرار بلاک‌های بزرگ کد به جای تعریف یک تابع یا کامپوننت قابل استفاده مجدد.",
    severity: 4,
    author: "کپی و پیست",
    translator: "دکتر تکرار",
    price: 190000,
    year: 1990,
  },
  {
    id: 12,
    name: "وابستگی بیش از حد به NPM",
    icon: "FaNpm",
    description:
      "نصب پکیج‌های حجیم برای کارهایی که با چند خط کد ساده قابل انجام هستند.",
    severity: 3,
    author: "جک تنبل",
    translator: "مینا نارسیس",
    price: 160000,
    year: 2013,
  },
  {
    id: 13,
    name: "کدهای کامنت شده مرده",
    icon: "FaCommentSlash",
    description:
      "نگهداری کدهای قدیمی و از کار افتاده در سورس کد با کامنت کردن آن‌ها.",
    severity: 2,
    author: "باستان‌شناس کد",
    translator: "زکریا حذف‌کن",
    price: 55000,
    year: 2007,
  },
  {
    id: 14,
    name: "عدم استفاده از Async/Await",
    icon: "FaHourglassHalf",
    description:
      "غرق شدن در Callback Hell به جای استفاده از Promises یا Async/Await.",
    severity: 3,
    author: "قهرمان پرامیس",
    translator: "الکس صبور",
    price: 210000,
    year: 2017,
  },
  {
    id: 15,
    name: "استایل‌دهی مستقیم (Inline Styles)",
    icon: "FaCss3Alt",
    description:
      "استفاده بیش از حد از استایل‌های اینلاین در HTML/JSX به جای کلاس‌های CSS/Tailwind.",
    severity: 4,
    author: "آقای چسباننده",
    translator: "پیمان لحظه‌ای",
    price: 130000,
    year: 2001,
  },
  {
    id: 16,
    name: "لایت‌هاوس (Lighthouse) صفر",
    icon: "FaBolt",
    description:
      "نادیده گرفتن نتایج اسکن عملکرد (Performance) و دسترسی‌پذیری (Accessibility).",
    severity: 5,
    author: "مأمور کندی",
    translator: "خانم بهینه",
    price: 300000,
    year: 2018,
  },
  {
    id: 17,
    name: "برانچ 'master' یا 'main' مستقیم",
    icon: "FaCodeBranch",
    description:
      "کامیت کردن مستقیم تغییرات بزرگ روی شاخه اصلی بدون Pull Request و بررسی.",
    severity: 5,
    author: "فرمانده بدون مرسی",
    translator: "ژنرال شتابزده",
    price: 400000,
    year: 2011,
  },
  {
    id: 18,
    name: "نادیده گرفتن خطاهای Lint",
    icon: "FaWrench",
    description: "نادیده گرفتن اخطارهای ابزارهای Linting مانند ESLint.",
    severity: 3,
    author: "لینتر خاموش",
    translator: "حسین چشم‌پوش",
    price: 85000,
    year: 2015,
  },
  {
    id: 19,
    name: "کوئری‌های N+1",
    icon: "FaDatabase",
    description:
      "بارگذاری کند داده‌ها با ارسال تعداد زیادی کوئری دیتابیس درون یک حلقه.",
    severity: 5,
    author: "کمال کندرو",
    translator: "مترجم پرخور",
    price: 290000,
    year: 2000,
  },
  {
    id: 20,
    name: "فراموشی مدیریت حالت بارگذاری",
    icon: "FaSpinner",
    description: "عدم نمایش اسپینر یا پیغام مناسب هنگام دریافت داده‌ها از API.",
    severity: 3,
    author: "کاربر انتظار",
    translator: "مریم معلق",
    price: 75000,
    year: 2016,
  },
  {
    id: 21,
    name: "استفاده از 'var'",
    icon: "FaJs",
    description:
      "به کار بردن 'var' به جای 'let' یا 'const' که باعث مشکلات Scope می‌شود.",
    severity: 3,
    author: "قدیمیِ کلاسیک",
    translator: "کدنویس بازنشسته",
    price: 60000,
    year: 1997,
  },
  {
    id: 22,
    name: "تست دستی به جای تست خودکار",
    icon: "FaFlask",
    description:
      "اجرای دستی تمام سناریوها به جای نوشتن تست‌های واحد (Unit Tests).",
    severity: 4,
    author: "آزمایشگر خسته",
    translator: "جمیله تست‌نویس",
    price: 220000,
    year: 2009,
  },
  {
    id: 23,
    name: "عدم استفاده از محیط‌های مختلف",
    icon: "FaServer",
    description: "توسعه مستقیم روی محیط پروداکشن یا نداشتن محیط Stage.",
    severity: 5,
    author: "توسعه‌دهنده نابودگر",
    translator: "مانی بی‌پروا",
    price: 380000,
    year: 2006,
  },
  {
    id: 24,
    name: "نامگذاری‌های پیچیده/فارسی",
    icon: "FaLanguage",
    description: "استفاده از نام‌های طولانی یا فینگلیش برای متغیرها و توابع.",
    severity: 2,
    author: "نویسنده خودکفا",
    translator: "مترجم زبانی",
    price: 100000,
    year: 1995,
  },
  {
    id: 25,
    name: "چسباندن توکن در localStorage",
    icon: "FaLock",
    description:
      "ذخیره کردن توکن‌های احراز هویت در Local Storage (به جای HttpOnly Cookies).",
    severity: 5,
    author: "نگه‌بان لوکال",
    translator: "دزد سارق",
    price: 450000,
    year: 2018,
  },
  {
    id: 26,
    name: "عدم وجود fallback برای API",
    icon: "FaPlug",
    description:
      "عدم نمایش پیغام خطا یا راهکار جایگزین در صورت قطع شدن سرویس API.",
    severity: 4,
    author: "توسعه‌دهنده ناامید",
    translator: "فاطمه جایگزین",
    price: 170000,
    year: 2015,
  },
  {
    id: 27,
    name: "رها کردن Subscribe",
    icon: "FaTimesCircle",
    description:
      "عدم پاکسازی Event Listenerها یا Observableها پس از تخریب کامپوننت.",
    severity: 3,
    author: "مدیر بی‌خاطر",
    translator: "نسترن جمع‌کن",
    price: 90000,
    year: 2016,
  },
  {
    id: 28,
    name: "استفاده از جداول برای Layout",
    icon: "FaTable",
    description:
      "به کار بردن تگ‌های <table> برای طراحی چیدمان صفحه (به جای CSS Grid/Flexbox).",
    severity: 4,
    author: "طراحی سنتی",
    translator: "نوید عتیقه",
    price: 140000,
    year: 1999,
  },
  {
    id: 29,
    name: "نادیده گرفتن Accessibility",
    icon: "FaUniversalAccess",
    description: "عدم استفاده از تگ‌های سمنتیک (Semantic) و ویژگی‌های ARIA.",
    severity: 4,
    author: "ناشنوای بصری",
    translator: "نابینای فنی",
    price: 280000,
    year: 2017,
  },
  {
    id: 30,
    name: "کد بدون فرمت (Formatting)",
    icon: "FaCode",
    description:
      "عدم استفاده از ابزارهایی مانند Prettier برای استانداردسازی قالب کد.",
    severity: 2,
    author: "علی کج و کوله",
    translator: "مترجم بی‌نظم",
    price: 50000,
    year: 2014,
  },
];

import {
  FaBug,
  FaMagic,
  FaLayerGroup,
  FaExclamationTriangle,
  FaKey,
  FaGlobe,
  FaUserSecret,
  FaGit,
  FaBookOpen,
  FaSignature,
  FaCopy,
  FaNpm,
  FaCommentSlash,
  FaHourglassHalf,
  FaCss3Alt,
  FaBolt,
  FaCodeBranch,
  FaWrench,
  FaDatabase,
  FaSpinner,
  FaJs,
  FaFlask,
  FaServer,
  FaLanguage,
  FaLock,
  FaPlug,
  FaTimesCircle,
  FaTable,
  FaUniversalAccess,
  FaCode,
} from "react-icons/fa";

const iconMap = {
  FaBug,
  FaMagic,
  FaLayerGroup,
  FaExclamationTriangle,
  FaKey,
  FaGlobe,
  FaUserSecret,
  FaGit,
  FaBookOpen,
  FaSignature,
  FaCopy,
  FaNpm,
  FaCommentSlash,
  FaHourglassHalf,
  FaCss3Alt,
  FaBolt,
  FaCodeBranch,
  FaWrench,
  FaDatabase,
  FaSpinner,
  FaJs,
  FaFlask,
  FaServer,
  FaLanguage,
  FaLock,
  FaPlug,
  FaTimesCircle,
  FaTable,
  FaUniversalAccess,
  FaCode,
};

function Products() {
  console.log("Data loaded successfully:", devAntiPatterns.length);

  if (!Array.isArray(devAntiPatterns)) {
    return <div>در حال بارگذاری داده‌ها...</div>;
  }

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {devAntiPatterns.map((item) => {
        const IconComponent = iconMap[item.icon];

        return (
          <div
            key={item.id}
            className="bg-white p-5 rounded-lg shadow-xl border-t-4 border-red-500 hover:shadow-2xl transition-shadow"
          >
            <div className="text-red-500 mb-3">
              {IconComponent ? (
                <IconComponent size={32} />
              ) : (
                <span>[Image of No Icon]</span>
              )}
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <p className="font-bold text-lg text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">نویسنده: {item.author}</p>
              </div>

              <div className="flex justify-between items-center border-t pt-2 mt-2">
                <p className="text-green-600 font-extrabold text-xl">
                  {item.price.toLocaleString()} تومان
                </p>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full 
                                  ${
                                    item.severity >= 4
                                      ? "bg-red-100 text-red-700"
                                      : "bg-yellow-100 text-yellow-700"
                                  }`}
                >
                  شدت خطر: {item.severity}
                </span>
              </div>
            </div>
            <p className="text-sm mt-3 text-gray-600 italic">
              "{item.description}"
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
