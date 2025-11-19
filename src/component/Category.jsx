import { FaAtom, FaFeatherAlt, FaPaintBrush, FaBrain } from "react-icons/fa";

const iconMap = {
  FaAtom: FaAtom,
  FaFeatherAlt: FaFeatherAlt,
  FaPaintBrush: FaPaintBrush,
  FaBrain: FaBrain,
};

const bookCategories = [
  {
    id: 1,
    name: "علمی و مهندسی",
    icon: "FaAtom",
    description:
      "شامل کتاب‌های فیزیک، شیمی، ریاضی، و مهندسی کامپیوتر و الکترونیک.",
    bookCount: 420,
  },
  {
    id: 2,
    name: "ادبیات و رمان",
    icon: "FaFeatherAlt",
    description: "شامل رمان‌های کلاسیک، معاصر، شعر و داستان‌های کوتاه.",
    bookCount: 680,
  },
  {
    id: 3,
    name: "هنر و طراحی",
    icon: "FaPaintBrush",
    description: "شامل تاریخ هنر، عکاسی، نقاشی، گرافیک و معماری.",
    bookCount: 290,
  },
  {
    id: 4,
    name: "فلسفه و روانشناسی",
    icon: "FaBrain",
    description: "شامل کتب فلسفی، منطق، اخلاق و شاخه‌های مختلف روانشناسی.",
    bookCount: 350,
  },
];

// ... بقیه کد مربوط به کامپوننت Category در اینجا قرار می‌گیرد.

function Category() {
  return (
    // کانتینر اصلی: پس‌زمینه سفید (bg-white) و متن تیره (text-gray-800)
    <div className="p-8 bg-white min-h-screen text-gray-800">
      {/* چیدمان چهار ستونی (Grid) برای باکس‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {bookCategories.map((item) => {
          const IconComponent = iconMap[item.icon];

          return (
            // باکس‌های مجزا با پس‌زمینه سفید و سایه برای برجسته شدن
            <div
              key={item.id}
              className="p-6 rounded-xl shadow-xl border border-gray-100 bg-white 
                         transition-shadow duration-300 hover:shadow-2xl hover:border-blue-300"
            >
              {/* آیکون: رنگ آبی (text-blue-600) */}
              <div className="mb-4">
                {IconComponent && (
                  <IconComponent size={40} className="text-blue-600" />
                )}
              </div>

              {/* نام دسته‌بندی */}
              <p className="text-xl font-bold mb-1 border-b border-blue-100 pb-2 text-blue-800">
                {item.name}
              </p>

              {/* تعداد کتاب */}
              <span className="text-sm font-light text-gray-500">
                {item.bookCount} کتاب موجود
              </span>

              {/* توضیحات */}
              <p className="text-xs mt-3 text-gray-600 italic line-clamp-2">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
