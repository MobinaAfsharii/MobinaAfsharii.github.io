import { Data as DataType } from "../types";
import { langs as languages } from "../langs";
const Data: DataType[] = [
  {
    logo: "https://img1.pnghut.com/t/10/1/22/ukRzv9c1RL/text-area-university-of-tehran-student-diplom-ishi.jpg",
    image: "https://aut.ac.ir/files/site1/rezaee_f15ec/images/IMG_4635.jpg",
    langs: [
      {
        lang: languages.en.short,
        title: "Amirkabir University of Technolgy",
        description: "Bachelor's degree in Computer Science.",
        data: (
          <div>
            <p className="text-lg text-gray-800 leading-relaxed">
              In 2021, the doors of opportunity swung wide open as I stepped
              into the hallowed halls of{" "}
              <a href="https://aut.ac.ir/en" target="_blank" rel="noreferrer">
                Amirkabir University of Technology
              </a>
              . Little did I know, this pivotal moment would become the
              cornerstone of my journey towards academic and personal growth.
              Surrounded by luminaries in the field like the venerable Professor
              rahmati and the insightful Professor Mohadeth, I found myself
              immersed in a world of knowledge and inspiration.
            </p>
          </div>
        ),
      },
      {
        lang: languages.fa.short,
        title: "دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران)",
        description: "دوره کارشناسی در رشته علوم کامپیوتر.",
        data: (
          <div>
            <p className="text-lg text-gray-800 leading-relaxed">
              در سال هزار و چهارصد شمسی، درب فرصت‌ها به‌گشاد و من وارد اتاق‌های مقدس دانشگاه
              صنعتی امیرکبیر شدم. کمتر کسی می‌دانست که این لحظه حیاتی، چگونه سنگ
              بنای سفر من به سمت رشد تحصیلی و شخصی خواهد شد. احاطه شده از اساتید
              برجسته این حوزه مانند استاد رحمتی و استاد محدث، خود را در دنیای
              دانش و الهام فراگرفته دیدم.
            </p>
          </div>
        ),
      },
    ],
    slug: "amirkabir-university-of-technology",
    related_posts: [],
    tags: ["AmirKabir", "AUT", "University", "Computer Science", "Bachelor"],
    category: ["Education", "Computer Science", "Bachelor"],
    created_at: "2021-07-15",
    updated_at: "2025-08-01",
  },
  {
    logo: "https://bayanbox.ir/view/2799153823275747773/logo-sampad.png",
    image:
      "https://sedayemoshaveran.com/blog/wp-content/uploads/2017/12/hichschool.jpg",
    langs: [
      {
        lang: languages.en.short,
        title: "Talented Students Organization",
        description:
          "High school experience in Talented Students Organization.",
        data: (
          <div>
            <p className="text-lg text-gray-800 leading-relaxed">
              In 2014, my journey through the realm of academic excellence began
              as I joined the prestigious{" "}
              <a
                href="https://en.wikipedia.org/wiki/National_Organization_for_Development_of_Exceptional_Talents"
                target="_blank"
                rel="noreferrer"
              >
                Talented Students Organization
              </a>
              . Little did I know, this pivotal moment would ignite my passion
              for learning and personal development. Surrounded by exceptional
              mentors and peers, I embarked on a transformative journey that
              shaped my trajectory towards success.
            </p>
          </div>
        ),
      },
      {
        lang: languages.fa.short,
        title: "سازمان استعدادهای درخشان",
        description: "تجربه دبیرستانی در سازمان استعدادهای درخشان.",
        data: (
          <div>
            <p className="text-lg text-gray-800 leading-relaxed">
              در سال ۱۳۹۲، سفر من در زمینهٔ تلاش برای عالی‌ترین مرحله تحصیلی من
              با پیوستن به{" "}
              <a
                href="https://en.wikipedia.org/wiki/National_Organization_for_Development_of_Exceptional_Talents"
                target="_blank"
                rel="noreferrer"
              >
                سازمان استعدادهای درخشان
              </a>
              آغاز شد. کمتر کسی می‌دانست که این لحظه حیاتی، شعله‌ای از
              علاقه‌مندی من به یادگیری و توسعهٔ شخصی را روشن خواهد کرد. احاطه
              شده از منتورهای استثنایی و همکاران، من بر سفری تغییردهنده برای
              شکل‌دهی به پیشرفت خودم و راهبردم به سوی موفقیت شروع کردم.
            </p>
          </div>
        ),
      },
    ],
    slug: "talented-students-organization",
    related_posts: [],
    tags: ["Talented Students", "High School", "Education"],
    category: ["Education", "High School"],
    created_at: "2015-09-01",
    updated_at: "2021-06-30",
  },
];

export default Data;
