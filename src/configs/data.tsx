import {
  PiTelegramLogoThin,
  PiInstagramLogoThin,
  PiLinkedinLogoThin,
  PiGithubLogoThin,
} from "react-icons/pi";
import { langs as languages } from "./langs";

export const profile = {
  image: "https://media.licdn.com/dms/image/D4E03AQElmMq5tmsjpQ/profile-displayphoto-shrink_800_800/0/1705061908514?e=1720051200&v=beta&t=Jgv3tgJOL1c56B9nkwOLwi-j9tErrOCXzPR21cdcklM",
  email: "mobina.afshari@aut.ac.ir",
  phone: "+98 938 295 6661",
  langs: [
    {
      lang: languages.en.short,
      title: "Software Engineer",
      name: "Mobina Afshari",
      about:
        "a Software Engineer with a passion for innovation and problem-solving. Dedicated to crafting high-quality software solutions that exceed expectations. Proficient in a range of technologies including C/C++, rust, Qt, python, data mining and Ai. Committed to continuous learning and staying updated with the latest industry trends. Excited to collaborate on challenging projects and contribute to the success of dynamic teams.",
      location: "Tehran, IR",
      favorites: [
        "C/C++",
        "rust",
        "Qt",
        "python",
        "data mining",
        "AI",

      ],
    },
    {
      lang: languages.fa.short,
      title: "مهندس نرم افزار",
      name: "مبینا افشاری",
      about:
        "مهندس نرم‌افزار با علاقه‌ی فراوان به نوآوری و حل مسائل. متعهد به ایجاد راه‌حل‌های نرم‌افزاری با کیفیت بالا که انتظارات را برآورده می‌کنند. ماهر در زمینه‌ی تکنولوژی‌های گوناگون از جمله زبان های برنامه نویسی سی و سی پلاس پلاس، راست، فریم ورک کیو تی، زبان برنامه نویسی پایتون، داده کاوی و هوش مصنوعی. متعهد به یادگیری مداوم و دنبال کردن آخرین روندهای صنعت. مشتاق به همکاری در پروژه‌های چالش‌برانگیز و سهیم شدن در موفقیت تیم‌های پویا.",
      location: "تهران، ایران",
      favorites: [
        "C/C++",
        "rust",
        "Qt",
        "python",
        "data mining",
        "AI",
      ],
    },
  ],
  socials: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/mobina-afshari-29046324b/",
      icon: PiLinkedinLogoThin,
      value: "mobina-afshari",
    },
    {
      name: "github",
      url: "https://github.com/MobinaAfsharii",
      icon: PiGithubLogoThin,
      value: "MobinaAfsharii",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/_im0bina_",
      icon: PiInstagramLogoThin,
      value: "_im0bina_",
    },
    {
      name: "telegram",
      url: "https://t.me/ma3281",
      icon: PiTelegramLogoThin,
      value: "ma3281",
    },
  ],
};
