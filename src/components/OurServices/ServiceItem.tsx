import { clsx } from "clsx";

import { IconType } from "react-icons";
import { IServices } from "@/data/homepage_servises";

interface ServiceItemProps extends IServices {
  icon: IconType;
}

function ServiceItem({ icon: Icon, title, description }: ServiceItemProps) {
  return (
    <div
      className={clsx(
        "flex items-center flex-col py-6 px-3 h-full 3xl:px-6 3xl:py-8",
        "bg-white/25 rounded-xl border-2 border-white text-center",
        "transition-colors duration-300 hover:bg-mr-main-active/20 hover:border-mr-main-active/80",
      )}
    >
      <Icon className="mb-6 w-12 h-12" />
      <h3 className="font-heading text-xl mb-3 tracking-wide lg:text-3xl">
        {title}
      </h3>
      <p className="text-sm lg:text-base">{description}</p>
    </div>
  );
}

export default ServiceItem;
