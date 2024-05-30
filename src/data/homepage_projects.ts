import imgProject1 from "@/assets/our-project-1.webp";
import imgProject2 from "@/assets/our-project-2.webp";
import imgProject3 from "@/assets/our-project-3.webp";
import imgProject4 from "@/assets/our-project-4.webp";
import imgProject5 from "@/assets/our-project-5.webp";

interface IProjects {
  image: string;
  bgColor: string;
  name: string;
  description: string;
  technologies: string[];
  link: string;
  seoText: string;
}

const projects: IProjects[] = [
  {
    image: imgProject5,
    bgColor: "bg-amber-300",
    name: "Clothing store Anna Hariri",
    description:
      "At our software company specializing in Magento 2 and e-commerce solutions, we successfully revamped the online presence of Annah Hariri, a renowned modest fashion brand. We implemented a seamless Magento 2 platform to enhance user experience, streamline the shopping process, and improve site performance. Our tailored solutions included advanced search functionalities, secure payment gateways, and optimized mobile responsiveness. As a result, Annah Hariri saw a significant boost in customer engagement and online sales.",
    technologies: [
      "Magento 2",
      "PHP",
      "XML",
      "MySQL",
      "Apache",
      "Nginx",
      "Elasticsearch",
      "Redis",
      "HTML",
      "LESS",
      "Javascript",
      "JQuery",
      "Knockout.js",
      "Require.js",
    ],
    link: "https://www.annahariri.com/",
    seoText: "Clothing store Anna Hariri",
  },
  {
    image: imgProject4,
    bgColor: "bg-red-300",
    name: "Actionsales",
    description:
      "Mroia leveraged its expertise in Magento, a leading e-commerce platform, to craft a user-friendly online store for Action Sales. This custom-built solution empowers Action Sales to showcase their extensive inventory of restaurant equipment and supplies, facilitating a seamless purchasing experience for their customers.",
    technologies: [
      "Magento 2",
      "PHP",
      "XML",
      "MySQL",
      "Apache",
      "Nginx",
      "Elasticsearch",
      "Redis",
      "HTML",
      "LESS",
      "Javascript",
      "JQuery",
      "Knockout.js",
      "Require.js",
    ],
    link: "https://www.actionsales.com/en/",
    seoText: "Food service equipment and supplies",
  },

  {
    image: imgProject3,
    bgColor: "bg-indigo-200",
    name: "Neverfail",
    description:
      "MROIA redesigned and developed the Neverfail e-commerce platform using Magento 2, creating a robust and scalable online presence for their water delivery service. The redesign included modernizing the user interface, enhancing subscription management, and streamlining the delivery options. Essential technologies such as PHP, MySQL, and Elasticsearch were integrated to improve performance, while Redis was used for efficient caching. The result is a dynamic and user-friendly website that effectively meets the needs of Neverfail's customers across Australia.",
    technologies: [
      "Magento 2",
      "PHP",
      "XML",
      "MySQL",
      "Apache",
      "Nginx",
      "Elasticsearch",
      "Redis",
      "HTML",
      "LESS",
      "Javascript",
      "JQuery",
      "Knockout.js",
      "Require.js",
    ],
    link: "https://www.neverfail.com.au/",
    seoText: "Clean water store in Australia",
  },
  {
    image: imgProject2,
    bgColor: "bg-teal-300",
    name: "Platypus shoes",
    description:
      "MROIA built Platypus Shoes' e-commerce platform on Magento 2, ensuring robustness and scalability online. Customizations supported a wide range of footwear products and brands, integrating advanced search, personalized recommendations, and streamlined checkout processes. Essential technologies like PHP, MySQL, and Elasticsearch were utilized to enhance performance and user experience. The outcome is a dynamic, user-friendly website meeting diverse customer needs.",
    technologies: [
      "Magento 2",
      "PHP",
      "XML",
      "MySQL",
      "Apache",
      "Nginx",
      "Elasticsearch",
      "Redis",
      "HTML",
      "LESS",
      "Javascript",
      "JQuery",
      "Knockout.js",
      "Require.js",
    ],
    link: "https://www.platypusshoes.com.au/",
    seoText: "Store selling quality branded shoes",
  },
  {
    image: imgProject1,
    bgColor: "bg-blue-100",
    name: "Meissner Sewing",
    description:
      "MROIA developed Meissner Sewing's e-commerce platform on Magento 2, ensuring robustness and scalability online. Customizations supported various sewing and quilting products, integrating features like live shopping and virtual lessons, alongside an extensive product catalog. Advanced functions such as wish lists, detailed product categories, and smooth checkout processes were added to enhance user experience and boost sales. The outcome is a dynamic, user-friendly website serving both sewing enthusiasts and professionals.",
    technologies: [
      "Magento 2",
      "PHP",
      "XML",
      "MySQL",
      "Apache",
      "Nginx",
      "Elasticsearch",
      "Redis",
      "HTML",
      "LESS",
      "Javascript",
      "JQuery",
      "Knockout.js",
      "Require.js",
    ],
    link: "https://meissnersewing.com/",
    seoText: "Store selling sewing accessories",
  },
];

export default projects;
