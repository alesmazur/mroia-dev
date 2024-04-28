import imgProject1 from "@/assets/our-project-1.webp";
import imgProject2 from "@/assets/our-project-2.webp";
import imgProject3 from "@/assets/our-project-3.webp";
import imgProject4 from "@/assets/our-project-4.webp";
import imgProject5 from "@/assets/our-project-5.webp";

interface IProjects {
  image: string;
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

const projects: IProjects[] = [
  {
    image: imgProject1,
    name: "Meissner Sewing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    technologies: [
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
    ],
    link: "https://meissnersewing.com/",
  },
  {
    image: imgProject2,
    name: "Platypus shoes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    technologies: [
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
    ],
    link: "https://www.platypusshoes.com.au/",
  },
  {
    image: imgProject3,
    name: "Neverfail",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    technologies: [
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
    ],
    link: "https://www.neverfail.com.au/",
  },
  {
    image: imgProject4,
    name: "Actionsales",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    technologies: [
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
    ],
    link: "https://www.actionsales.com/en/",
  },
  {
    image: imgProject5,
    name: "Clothing store Anna Hariri",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    technologies: [
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
      "Magento 2",
    ],
    link: "https://www.annahariri.com/",
  },
];

export default projects;
