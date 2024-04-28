import MainBanner from "@/components/Homepage/MainBanner";
import OurServices from "@/components/Homepage/OurServices";
import OurProjects from "@/components/Homepage/OurProjects";
import WorkStep from "@/components/Homepage/WorkStep";
import ContactUs from "@/components/Homepage/ContactUs";

function Homepage() {
  return (
    <>
      <MainBanner />
      <OurServices />
      <OurProjects />
      <WorkStep />
      <ContactUs />
    </>
  );
}

export default Homepage;
