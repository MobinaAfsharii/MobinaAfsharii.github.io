import { langs as languages } from "./langs";

export const routes = {
  home: {
    path: "/",
    langs: [
      {
        lang: languages.en.short,
        title: "Home",
        description: "Mobina Afshari's personal website",
      },
      {
        lang: languages.fa.short,
        title: "صفحه‌ی اصلی",
        description: "وبسایت شخصی مبینا افشاری",
      },
    ],
  },
  experience: {
    path: "/experience",
    langs: [
      {
        lang: languages.en.short,
        title: "Experience",
        description: "Mobina Afshari's work experience",
      },
      {
        lang: languages.fa.short,
        title: "تجارب کاری",
        description: "تجارب کاری مبینا افشاری",
      },
    ],
  },
  education: {
    path: "/education",
    langs: [
      {
        lang: languages.en.short,
        title: "Education",
        description: "Mobina Afshari's education",
      },
      {
        lang: languages.fa.short,
        title: "تحصیلات",
        description: "تحصیلات مبینا افشاری",
      },
    ],
  },
  resume: {
    path: "/resume",
    langs: [
      {
        lang: languages.en.short,
        title: "Resume",
        description: "Mobina Afshari's resume",
      },
      {
        lang: languages.fa.short,
        title: "رزومه",
        description: "رزومه مبینا افشاری",
      },
    ],
  },
  
  about: {
    path: "/about",
    langs: [
      {
        lang: languages.en.short,
        title: "About",
        description: "About Mobina Afshari",
      },
      {
        lang: languages.fa.short,
        title: "درباره",
        description: "درباره مبینا افشاری",
      },
    ],
  },
  contact: {
    path: "/contact",
    langs: [
      {
        lang: languages.en.short,
        title: "Contact",
        description: "Contact Mobina Afshari",
      },
      {
        lang: languages.fa.short,
        title: "تماس",
        description: "تماس با مبینا افشاری",
      },
    ],
  },
  faq: {
    path: "/faq",
    langs: [
      {
        lang: languages.en.short,
        title: "FAQ",
        description: "Frequently Asked Questions",
      },
      {
        lang: languages.fa.short,
        title: "سوالات متداول",
        description: "سوالات متداول",
      },
    ],
  },
  faqDetails: {
    path: "/faq/:faqid",
    langs: [
      {
        lang: languages.en.short,
        title: "FAQ Details",
        description: "Frequently Asked Questions",
      },
      {
        lang: languages.fa.short,
        title: "جزئیات سوالات متداول",
        description: "جزئیات سوالات متداول",
      },
    ],
  },
  projectDetails: {
    path: "/project/:projectid",
    langs: [
      {
        lang: languages.en.short,
        title: "Project Details",
        description: "Project Details",
      },
      {
        lang: languages.fa.short,
        title: "جزئیات پروژه",
        description: "جزئیات پروژه",
      },
    ],
  },
  
  educationDetails: {
    path: "/education/:educationid",
    langs: [
      {
        lang: languages.en.short,
        title: "Education",
        description: "Mobina Afshari's education",
      },
      {
        lang: languages.fa.short,
        title: "تحصیلات",
        description: "تحصیلات مبینا افشاری",
      },
    ],
  },
  search: {
    path: "/search",
    langs: [
      {
        lang: languages.en.short,
        title: "Search",
        description: "Search",
      },
      {
        lang: languages.fa.short,
        title: "جستجو",
        description: "جستجو",
      },
    ],
  },
  experienceDetails: {
    path: "/experience/:experienceid",
    langs: [
      {
        lang: languages.en.short,
        title: "Experience Details",
        description: "Experience Details",
      },
      {
        lang: languages.fa.short,
        title: "جزئیات تجربه",
        description: "جزئیات تجربه",
      },
    ],
  },
  searchDetails: {
    path: "/search/:searchid",
    langs: [
      {
        lang: languages.en.short,
        title: "Search Details",
        description: "Search Details",
      },
      {
        lang: languages.fa.short,
        title: "جزئیات جستجو",
        description: "جزئیات جستجو",
      },
    ],
  },
  category: {
    path: "/category",
    langs: [
      {
        lang: languages.en.short,
        title: "Category",
        description: "Category",
      },
      {
        lang: languages.fa.short,
        title: "دسته‌بندی",
        description: "دسته‌بندی",
      },
    ],
  },
  categoryDetails: {
    path: "/category/:categoryid",
    langs: [
      {
        lang: languages.en.short,
        title: "Category Details",
        description: "Category Details",
      },
      {
        lang: languages.fa.short,
        title: "جزئیات دسته‌بندی",
        description: "جزئیات دسته‌بندی",
      },
    ],
  },
  tag: {
    path: "/tag",
    langs: [
      {
        lang: languages.en.short,
        title: "Tag",
        description: "Tag",
      },
      {
        lang: languages.fa.short,
        title: "برچسب",
        description: "برچسب",
      },
    ],
  },
  tagDetails: {
    path: "/tag/:tagid",
    langs: [
      {
        lang: languages.en.short,
        title: "Tag Details",
        description: "Tag Details",
      },
      {
        lang: languages.fa.short,
        title: "جزئیات برچسب",
        description: "جزئیات برچسب",
      },
    ],
  },
  courses: {
    path: "/courses",
    langs: [
      {
        lang: languages.en.short,
        title: "Courses",
        description: "Courses",
      },
      {
        lang: languages.fa.short,
        title: "دوره‌ها",
        description: "دوره‌ها",
      },
    ],
  },
  coursesDetails: {
    path: "/courses/:courseid",
    langs: [
      {
        lang: languages.en.short,
        title: "Courses Details",
        description: "Courses Details",
      },
      {
        lang: languages.fa.short,
        title: "جزئیات دوره",
        description: "جزئیات دوره",
      },
    ],
  },
  publications: {
    path: "/publications",
    langs: [
      {
        lang: languages.en.short,
        title: "Publications",
        description: "Publications",
      },
      {
        lang: languages.fa.short,
        title: "منابع",
        description: "منابع",
      },
    ],
  },
  publicationDetails: {
    path: "/publications/:publicationid",
    langs: [
      {
        lang: languages.en.short,
        title: "Publication Details",
        description: "Publication Details",
      },
      {
        lang: languages.fa.short,
        title: "جزئیات منبع",
        description: "جزئیات منبع",
      },
    ],
  },
  github_api: {
    path: "/github_api",
    langs: [
      {
        lang: languages.en.short,
        title: "Github API",
        description: "Github API",
      },
      {
        lang: languages.fa.short,
        title: "API گیت‌هاب",
        description: "API گیت‌هاب",
      },
    ],
  },
};
