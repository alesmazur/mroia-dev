import { useEffect } from "react";
import Title from "@/components/Ui/Title";
import BgClipper from "@/utils/BgClipper";

import Banner from "@/assets/privacy-banner.webp";

function Privacy() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section data-block="privacy">
      <div className="h-96 relative pt-20 pb-14 flex items-center mb-16">
        <BgClipper banner={Banner} bgColor="bg-black/50">
          <div className="box">
            <Title level="h1" className="!mb-0">
              Privacy Policy
            </Title>
          </div>
        </BgClipper>
      </div>

      <div className="box grid gap-10 mb-16 5xl:text-lg 5xl:leading-7">
        <p>
          In accordance with Regulation (EU) 2016/679 of the European Parliament
          and of the Council of 27 April 2016 on the protection of natural
          persons with regard to the processing of personal data and on the free
          movement of such data, and repealing Directive 95/46/EC (General Data
          Protection Regulation) – hereinafter referred to as GDPR, we inform
          you that:
        </p>

        <p>
          1. The controller of your personal data is Aliaksandr Znak-Mazurkevich
          <div className="grid mt-3 ml-5">
            <span className="flex gap-8">
              tel.{" "}
              <a
                href="tel:+48 791 508 474"
                className="underline underline-offset-2"
              >
                +48 791 508 474
              </a>
            </span>
            <span className="flex gap-2.5">
              e-mail:{" "}
              <a
                href="mailto:hello@mroia.com"
                className="underline underline-offset-2"
              >
                hello@mroia.com
              </a>
            </span>
          </div>
        </p>

        <p>
          2. The provided personal data are processed for the purpose of:
          <div className="mt-3 indent-4">
            - creating and working with digital technologies in web fulfilling
            the legally binding obligations of the Controller (Article 6(1)(c)
            of the GDPR):
          </div>
          <ul className="mt-4 ml-0.5 pl-4 list-[upper-alpha] [&_li]:pl-1.5">
            <li>handling and processing complaints regarding the service;</li>
            <li>
              fulfilling tax and accounting obligations; based on the legitimate
              interest of the Controller (Article 6(1)(f) of the GDPR),
              primarily:
            </li>
          </ul>
          <ul className="mt-4 ml-6 pl-4 list-[upper-alpha] [&_li]:pl-1.5">
            <li>conducting appropriate identity and authorization checks;</li>
            <li>pursuing claims related to the performance of the contract;</li>
            <li>
              conducting judicial, arbitration, and mediation proceedings;
            </li>
            <li>
              statistical and archival purposes; performing other types of
              services (e.g., sales) within the business activity conducted by
              Aliaksandr Znak-Mazurkevich;
            </li>
          </ul>
        </p>

        <div>
          3. Your personal data will be processed for the period necessary to
          achieve the purposes indicated in point 2, including for the duration
          of the contract, and after its expiry for the period necessary for:
          <div className="mt-3 indent-4">
            - after-sales customer service (e.g., complaint handling);
          </div>
          <div className="mt-1 indent-4">
            - securing or pursuing any claims due to the Controller;
          </div>
          <div className="mt-1 indent-4">
            - fulfilling a legal obligation incumbent on the Controller arising
            from legal provisions;
          </div>
        </div>

        <div>
          4. In connection with the processing of personal data by the
          Controller, you have the right to:
          <div className="mt-3 indent-4">- access your personal data;</div>
          <div className="mt-1 indent-4">- rectify your personal data;</div>
          <div className="mt-1 indent-4">
            - request the erasure or restriction of processing;
          </div>
          <div className="mt-1 indent-4">- object to processing;</div>
          <div className="mt-1 mb-4 indent-4">- data portability;</div>
          Furthermore, you have the right to lodge a complaint with the
          supervisory authority, which is the President of the Personal Data
          Protection Office.
        </div>

        <div>
          5. The Controller may transfer personal data to the following third
          parties:
          <div className="mt-3 indent-4">
            - entities with which the Controller has concluded a cooperation
            agreement for the purpose of implementing our agreement, fulfilling
            the Controller&#39;s obligations provided for by law, protecting the
            Controller&#39;s rights in accordance with legal provisions,
            fulfilling a legitimate interest within the meaning of personal data
            protection regulations, and supporting the Controller in business
            processes. In particular, the Controller may transfer your personal
            data to entities such as: insurance companies, banks, car workshops,
            entities providing accounting or IT services, companies providing
            postal and courier services.
          </div>
          <div className="mt-2 indent-4">
            - supervisory authorities, authorities, and other third parties,
            where necessary for fulfilling obligations imposed by law, including
            disclosing information about the Customer to the competent
            authorities in case of suspicion of committing an offense or crime
            in connection with the performance of the concluded contract;
          </div>
        </div>

        <div>
          6. The Controller does not intend to transfer data to a third country
          or international organization.
        </div>

        <div>
          7. Providing personal data is voluntary but necessary to perform the
          service. Failure to provide personal data will prevent the service
          from being provided.
        </div>

        <div>
          8. Detailed data protection rules are available at the
          administrator&#39;s headquarters.
        </div>
      </div>
    </section>
  );
}

export default Privacy;
