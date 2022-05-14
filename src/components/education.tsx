import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Wrapper from "./wrapper";

const Education = () => {
  return (
    <section
      className="py-24 mobile-s:py-5 lg:py-24"
      style={
        {
          // backgroundImage: `linear-gradient(359.62deg, rgb(215, 240, 250) 2.36%, rgb(255, 255, 255) 99.68%)`,
        }
      }
      id="education"
    >
      <Wrapper>
        <h1 className="text-3xl mobile-s:text-lg md:text-2xl lg:text-3xl font-bold leading-tight tracking-wide text-center py-4 mobile-s:py-2 lg:py-4 lg:text-left">
          Education
        </h1>
        <div className="flex mobile-s:flex-col md:flex-row items-center">
          <div className="w-2/3 mobile-s:w-full lg:w-2/3 pl-5 mobile-s:pl-0 lg:pl-5 pt-12 mobile-s:pt-6 lg:pt-12 ">
            <div className="w-1/3 mobile-s:w-full lg:w-2/3"></div>
            <div className="mobile-s:text-center lg:text-left">
              <ul>
                <li>
                  <div className="flex mobile-s:flex-col md:flex-row space-x-7">
                    <div className="">
                      <div className="bg-blue-600 rounded-full w-5 h-5"></div>
                      <div className="bg-blue-600 w-1 h-40 content-center ml-2"></div>
                    </div>
                    <div>
                      <h1 className="text-3xl mobile-s:text-lg md:text-2xl lg:text-3xl font-light leading-tight  text-center lg:text-left">
                        Engenering Informatics
                      </h1>
                      <span className="text-3xl mobile-s:text-lg md:text-2xl lg:text-3xl  leading-tight tracking-wide text-center py-4 mobile-s:py-2 lg:py-4 lg:text-left font-medium">
                        Universitas Komputer Indonesia
                      </span>
                      <br />
                      <span className="font-thin text-gray-300">GPA :3.0</span>
                      <br />
                      <span className="font-thin text-gray-300">2016-2020</span>
                      <br />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/3 mobile-s:w-full lg:w-1/3">
            <div className="px-0 py-0">
              <div>
                <StaticImage
                  src="../images/education.png"
                  height={1000}
                  quality={95}
                  width={1000}
                  formats={["auto", "webp", "avif"]}
                  alt="Education"
                  style={{ textAlign: `center` }}
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Education;
