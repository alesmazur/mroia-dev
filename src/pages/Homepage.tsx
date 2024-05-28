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
        <title>Main page title, need min 65 symbols</title>
        <meta
          name="description"
          content="Main page description, need 70-155 symbols"
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
