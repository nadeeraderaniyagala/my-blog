import {SITE_NAME} from "../lib/constants";

const Intro = () => {
  return (
      <section
          className="flex-col md:flex-row flex items-center md:justify-start mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {SITE_NAME}
      </h1>
    </section>
  );
};

export default Intro;
