import { Data as DataType } from "../types";
import { langs as languages } from "../langs";
const Data: DataType[] = [
  {
    logo: "/public/logo192.png",
    image:
      "https://www.researchgate.net/publication/312316454/figure/fig3/AS:614360300916768@1523486318839/Linear-Programming-optimization-framework-is-commonly-used-in-Constraint-based.png",
    langs: [
      {
        lang: languages.en.short,
        title: "Introduction to React Hooks",
        description:
          "Learn how to use React Hooks for state management and side effects.",
        data: (
          <p>React Hooks revolutionized the way we write React components...</p>
        ),
      },
      {
        lang: languages.fa.short,
        title: "معرفی هوک‌های React",
        description:
          "یاد بگیرید که چگونه از هوک‌های React برای مدیریت وضعیت و اثرات جانبی استفاده کنید.",
        data: (
          <p>هوک‌های React شیوه‌ی نوشتن ما را به طور کامل تغییر دادند...</p>
        ),
      },
    ],
    slug: "introduction-to-react-hooks",
    related_posts: ["react-context-api", "react-performance-optimization"],
    tags: ["React", "Hooks", "Frontend Development"],
    category: ["Web Development", "Frontend"],
    created_at: "2023-09-15",
    updated_at: "2023-10-02",
  }
];

export default Data;
