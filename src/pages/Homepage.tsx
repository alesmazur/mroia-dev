import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import MainBanner from "@/components/Homepage/MainBanner";

const OurServices = lazy(() => import("@/components/Homepage/OurServices"));
const OurProjects = lazy(() => import("@/components/Homepage/OurProjects"));
const WorkStep = lazy(() => import("@/components/Homepage/WorkStep"));
const ContactUs = lazy(() => import("@/components/Homepage/ContactUs"));

function Homepage() {
  return (
    <>
      <Helmet>
        <title>
          Mroia | Finest e-commerce software development company from Europe
        </title>
        <meta
          name="description"
          content="We are providing high-class digital services and software development for customers businesses all around the world. We specialized in  software development, web design  and digital marketing."
        />
        <link rel="canonical" href="https://dev-mroia.netlify.app/" />
      </Helmet>

      <MainBanner />
      <Suspense>
        <OurServices />
        <OurProjects />
        <WorkStep />
        <ContactUs />
      </Suspense>
    </>
  );
}

export default Homepage;
