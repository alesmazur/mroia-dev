import Title from "@/components/Ui/Title";
import SubTitile from "@/components/Ui/SubTitile";
import BgClipper from "@/utils/BgClipper";
import ContactUsForm from "@/components/ContactUs/Form";

import data from "@/data/contact.us.info.json";
import Banner from "@/assets/contact-us-banner.webp";

function ContactUs() {
  return (
    <section
      id="contact-us"
      data-element="contact-us"
      className="py-20 relative"
    >
      <BgClipper banner={Banner} bgColor="bg-black/50">
        <div className="box grid gap-10 3xl:gap-20 3xl:grid-cols-2">
          <div>
            <Title className="3xl:!text-left">Let&#39;s talk</Title>
            <SubTitile className="!text-base !mb-3 3xl:!text-left 3xl:!text-lg 3xl:!mb-16">
              Drop us a line in our contact form and let&#39;s jump in our
              journey together. Our team is prepared to guide you through the
              process with professionalism and expertise.
            </SubTitile>

            <span className="hidden 3xl:inline-block w-full max-w-80 border-t border-mr-main-active" />

            <div className="hidden mt-16 3xl:grid gap-5">
              {data.map((item, index) => (
                <div key={index} className="grid gap-0.5">
                  <b className="text-lg font-medium">{item.label}</b>

                  <span className="opacity-80">
                    {item.link ? (
                      <a href={item.link}>{item.value}</a>
                    ) : (
                      item.value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <ContactUsForm />
        </div>
      </BgClipper>
    </section>
  );
}

export default ContactUs;
