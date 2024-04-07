import { SiMarketo } from "react-icons/si";
import { GrAppsRounded } from "react-icons/gr";
import { MdOutlinePhonelink } from "react-icons/md";
import { BsPersonVideo3 } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { IconType } from "react-icons";

export interface IServices {
  icon: IconType;
  title: string;
  description: string;
}

const services: IServices[] = [
  {
    icon: SiMarketo,
    title: "e-Commerce",
    description:
      "Magento 2, Hyva and WordPress are the backbone of our eCommerce solutions. Our team of experts creates personalized online stores for success.",
  },
  {
    icon: GrAppsRounded,
    title: "Web Application",
    description:
      "Empower your business with our bespoke web applications. From concept to deployment, we ensure a flawless digital experience.",
  },
  {
    icon: MdOutlinePhonelink,
    title: "Mobile Application",
    description:
      "Transform your ideas into stunning mobile apps with our expertise. We specialize in creating user-friendly solutions for all platforms.",
  },
  {
    icon: BsPersonVideo3,
    title: "Branding",
    description:
      "Stand out in the market with our tailored branding strategies. We specialize in design, logo development, and engaging video marketing to boost your brand.",
  },
  {
    icon: GiProgression,
    title: "SEO & SMM",
    description:
      "Dominate the digital landscape with our SEO & SMM expertise. We optimize your content for search engines and amplify your brand through social media.",
  },
  {
    icon: BiSupport,
    title: "Support",
    description:
      "Experience peace of mind with our comprehensive support services. From technical assistance to troubleshooting, we've got you covered.",
  },
];

export default services;
