import Container from "./container";
import {SITE_NAME} from "../lib/constants";
import {useMemo} from "react";

const Footer = () => {
  const year = useMemo(() => {
    return (new Date()).getFullYear();
  }, []);

  return (
      <footer className="bg-neutral-50 border-t border-neutral-200">
        <Container>
          <div className="py-28 flex flex-col lg:flex-row items-center justify-between">
            <div
                className="mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 flex flex-col items-center lg:items-start">
              <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left">
                {SITE_NAME}
              </h3>
              <div className="text-sm text-gray-500">
                  Chanaka Rathnayaka
                </div>
              <div className="text-sm text-gray-500">
                  &copy; All rights Reserved {year}
                </div>
            </div>
            <div className="flex flex-col justify-center lg:pl-4 lg:w-1/4 text-gray-800">
              <div><a className="hover:underline" href="#" target="_blank">Portfolio</a></div>
              <div><a className="hover:underline" href="#" target="_blank">LinkedIn</a></div>
              <div><a className="hover:underline" href="#" target="_blank">Github</a></div>
              <div><a className="hover:underline" href="#" target="_blank">Contact me</a></div>
            </div>
          </div>
        </Container>
      </footer>
  );
};

export default Footer;
