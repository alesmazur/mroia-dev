import Title from "@/components/Ui/Title";
import BgClipper from "@/utils/BgClipper";

import Banner from "@/assets/terms-banner.webp";
import data from "@/data/terms.content.json";

function Terms() {
  return (
    <section data-block="terms">
      <div className="h-96 relative pt-20 pb-14 flex items-center mb-16">
        <BgClipper banner={Banner} bgColor="bg-black/50">
          <div className="box">
            <Title level="h1" className="!mb-0">
              Privacy Policy and Terms of Service
            </Title>
          </div>
        </BgClipper>
      </div>

      <div className="box grid gap-8 mb-16">
        {data.map((item, index) => (
          <div key={index}>
            <h2 className="font-heading text-xl mb-1.5 3xl:text-2xl">
              {index + 1}. {item.title}
            </h2>
            <p className="opacity-85 italic pl-7 3xl:text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Terms;
