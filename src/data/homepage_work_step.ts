import Banner1 from "@/assets/how-we-work-analysis-banner.webp";
import Banner2 from "@/assets/how-we-work-development-banner.webp";
import Banner3 from "@/assets/how-we-work-evolution-banner.webp";

export interface IWorkStep {
  title: string;
  text: IWorkStepText[];
  image: string;
}

interface IWorkStepText {
  [key: string]: string;
}

const howWeWork: IWorkStep[] = [
  {
    title: "Analysis and Prototyping",
    text: [
      {
        process:
          "A series of interviews with customer to understand the need and agree on the scope.",
      },
      {
        deliveries:
          "Product Brief with a clickable design prototype, Timeline and Cost for MVP development",
      },
      {
        value:
          "Evaluation and fine-tuning of your idea. Bringning of understanding of what is required to deliver a product to market as fast as possible. Visualisation of your idea as a dynamic design prototype to show to potential customers and investors",
      },
    ],
    image: Banner1,
  },
  {
    title: "MVP Development",
    text: [
      {
        process:
          "Development according to the agreed scope and timeline. weekly calls with progress reports, demos, feedback aggregation and implementation.",
      },
      {
        deliveries:
          "A Minimum Viable Product - a workable software solution developed and deployed.",
      },
      {
        value:
          "A working software solution for test Market fit which is instrumental in evaluating market traction and attracting investors",
      },
    ],
    image: Banner2,
  },
  {
    title: "Product evolution",
    text: [
      {
        process:
          "Consulting: providing consulting sessions to identify aims, challenges and risks, strategic planning, establish processes communication: conducting regular meetings for progress evaluation and planning, day-to-day direct contact with management and team members product development: performing end-to-end services including design, infrastructure setup & maintenance, development and QA of product components and new features",
      },
      {
        deliveries:
          "Audit of your Project, Product Roadmap , Product team allocation, Agile delivery process setup",
      },
      {
        value:
          "A Software Development Life Cycle implementation together with Predictable product evolution and delivery process.",
      },
    ],
    image: Banner3,
  },
];

export default howWeWork;
