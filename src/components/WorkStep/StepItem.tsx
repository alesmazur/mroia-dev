import { IWorkStep } from "@/data/homepage_work_step";

interface IStepItem extends IWorkStep {
  id: number;
}

function StepItem({ id, title, text, image }: IStepItem) {
  return (
    <div
      className="overflow-hidden grid rounded-2xl border-2 border-white/50 bg-mr-main/80 h-full
                 transition-colors duration-300 hover:bg-mr-main/90 hover:border-mr-main-active/80
                 3xl:grid-cols-[2fr_1fr]"
    >
      <div className="p-6">
        <div className="relative">
          <span className="text-mr-main-active text-lg">Step {id + 1}:</span>
          <h2 className="font-heading text-2xl 3xl:text-4xl mb-10 tracking-widest">
            {title}
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {text.map((item, index) => (
            <div className="flex flex-col gap-1" key={index}>
              <b className="tracking-wider font-medium text-mr-main-active capitalize">
                {Object.keys(item)}:
              </b>
              <p className="opacity-65 text-sm leading-6 3xl:text-base 3xl:leading-7">
                {Object.values(item)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="-order-1 max-h-80 3xl:order-1 3xl:max-h-none">
        <img
          src={image}
          alt={title}
          width={500}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover 
                   3xl:[clip-path:polygon(40%_0%,100%_0%,100%_100%,0%_100%)] "
        />
      </div>
    </div>
  );
}

export default StepItem;
