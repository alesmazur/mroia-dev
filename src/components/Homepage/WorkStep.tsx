import Title from "@/components/Ui/Title";
import SubTitile from "@/components/Ui/SubTitile";
import StepItem from "@/components/Ui/WorkStep/StepItem";
import BgClipper from "@/utils/BgClipper";

import Banner from "@/assets/how-we-work-background-banner.webp";
import data from "@/data/homepage_work_step";

function WorkStep() {
  return (
    <section
      className="min-h-screen py-20 relative"
      data-element="how-we-work"
      id="how-we-work"
    >
      <BgClipper banner={Banner} bgColor="bg-black/70">
        <div className="box">
          <Title>How we work</Title>

          <SubTitile>
            Dive into the heart of our process, where collaboration meets
            brilliance. We weave together your vision and our expertise,
            crafting solutions that resonate with your audience and drive
            success.
          </SubTitile>

          <div className="grid gap-8">
            {data.map((item, index) => (
              <StepItem key={index} {...item} id={index} />
            ))}
          </div>
        </div>
      </BgClipper>
    </section>
  );
}

export default WorkStep;
