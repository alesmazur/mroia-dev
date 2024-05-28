import { Helmet } from "react-helmet-async";
import MainBanner from "@/components/Homepage/MainBanner";
import OurServices from "@/components/Homepage/OurServices";
import OurProjects from "@/components/Homepage/OurProjects";
import WorkStep from "@/components/Homepage/WorkStep";
import ContactUs from "@/components/Homepage/ContactUs";

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
      <OurServices />
      <OurProjects />
      <WorkStep />
      <ContactUs />
    </>
  );
}

export default Homepage;
