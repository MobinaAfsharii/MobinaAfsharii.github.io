// If you want to change the codes in an advanced way, please refer directly to the file address.

import { IconType } from "react-icons";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineVoicemail } from "react-icons/md";
import { MdOutlinePlace } from "react-icons/md";
import { PiTelegramLogoThin } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
// import { RiTwitterXLine } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";

const Data = {
  image: "https://media.licdn.com/dms/image/D4E03AQElmMq5tmsjpQ/profile-displayphoto-shrink_800_800/0/1705061908514?e=1720051200&v=beta&t=Jgv3tgJOL1c56B9nkwOLwi-j9tErrOCXzPR21cdcklM",
  en: {
    title: "Mobina Afshari",
    content: (
      <p>
        i will write my exprience here.,
      </p>
    ),
    imageText: "Image Text",
    contact_ways: {
      title: "Contact Ways",
      content: (
        <p>If you want to contact us, you can use the following ways.</p>
      ),
      ways: [
        {
          title: "Email",
          content: "mobina.afshari@aut.ac.ir",
          icon: MdOutlineAlternateEmail,
          url: "mailto:mobina.afshari@aut.ac.ir",
        },
        {
          title: "Phone",
          content: "+98 938 295 6661",
          icon: MdOutlineVoicemail,
          url: "tel:+989382956661",
        },
        {
          title: "Address",
          content: "تهران، ایران",
          icon: MdOutlinePlace,
          url: "https://www.google.com/maps/d/viewer?mid=132fq12ig_YfdeN0cxzAkc6Ik4lo&hl=en&ll=35.71061825680851%2C51.4071210981902&z=17",
        },
        {
          title: "Telegram",
          content: "@ma3281",
          icon: PiTelegramLogoThin,
          url: "https://t.me/ma3281",
        },
        {
          title: "Instagram",
          content: "@_im0bina_",
          icon: PiInstagramLogoThin,
          url: "https://www.instagram.com/_im0bina_",
        },
        {
          title: "Linkedin",
          content: "@Mobina-Afshari",
          icon: PiLinkedinLogoThin,
          url: "https://www.linkedin.com/in/mobina-afshari-29046324b/",
        },
        {
          title: "Github",
          content: "@MobinaAfsharii",
          icon: VscGithubAlt,
          url: "https://github.com/MobinaAfsharii",
        },
      ],
    },
  },
  fa: {
    title: "مبینا افشاری",
    content: (
      <p>
        خواهم نوشت
      </p>
    ),
    imageText: "متن تصویر",
    contact_ways: {
      title: "روش‌های تماس",
      content: (
        <p>
          اگر می‌خواهید با ما تماس بگیرید، می‌توانید از روش‌های زیر استفاده
          کنید.
        </p>
      ),
      ways: [
        {
          title: "ایمیل",
          content: "mobina.afshari@aut.ac.ir",
          icon: MdOutlineAlternateEmail,
          url: "mailto:mobina.afshari@aut.ac.ir",
        },
        {
          title: "تلفن",
          content: "+98 938 295 6661",
          icon: MdOutlineVoicemail,
          url: "tel:+989382956661",
        },
        {
          title: "آدرس",
          content: "تهران، ایران",
          icon: MdOutlinePlace,
          url: "https://www.google.com/maps/d/viewer?mid=132fq12ig_YfdeN0cxzAkc6Ik4lo&hl=en&ll=35.71061825680851%2C51.4071210981902&z=17",
        },
        {
          title: "تلگرام",
          content: "@ma3281",
          icon: PiTelegramLogoThin,
          url: "https://t.me/ma3281",
        },
        {
          title: "اینستاگرام",
          content: "@_im0bina_",
          icon: PiInstagramLogoThin,
          url: "https://www.instagram.com/_im0bina_",
        },
        {
          title: "لینکدین",
          content: "@Mobina-Afshari",
          icon: PiLinkedinLogoThin,
          url: "https://www.linkedin.com/in/mobina-afshari-29046324b/",
        },
        {
          title: "گیت‌هاب",
          content: "@MobinaAfsharii",
          icon: VscGithubAlt,
          url: "https://github.com/MobinaAfsharii",
        },
      ],
    },
  },
};

export default Data;

export type aboutType = typeof Data;

export type contact_type = {
  title: string;
  content: string;
  icon: IconType;
  url: string;
};
