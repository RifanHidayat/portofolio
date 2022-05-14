import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Wrapper from "./wrapper";

const Home = () => {
  return (
    <section
      className="py-24 mobile-s:py-5 lg:py-24"
      style={{
        backgroundImage: `linear-gradient(359.62deg, rgb(215, 240, 250) 2.36%, rgb(255, 255, 255) 99.68%)`,
      }}
      id="home"
    >
      <Wrapper>
        <div className="flex mobile-s:flex-col md:flex-row items-center">
          <div className="w-1/3 mobile-s:w-full lg:w-1/3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div>
                  <StaticImage
                    src="../images/me.jpg"
                    // height={350}
                    quality={95}
                    // width={250}
                    formats={["auto", "webp", "avif"]}
                    alt="Logo Arenzha"
                    style={{ textAlign: `center` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/3 mobile-s:w-full lg:w-2/3 pl-20 mobile-s:pl-0 lg:pl-20 pt-12 mobile-s:pt-6 lg:pt-12">
            <div className="w-1/3 mobile-s:w-full lg:w-2/3">
              <h1 className="text-3xl mobile-s:text-lg md:text-2xl lg:text-3xl font-bold leading-tight tracking-wide text-center py-4 mobile-s:py-2 lg:py-4 lg:text-left">
                HI, Saya Rifan Hidayat
              </h1>
              <p className="text-justify text-gray-600 mobile-s:text-sm md:text-base lg:text-justify">
                Saya berpengalaman dalam pengembangan aplikasi mobile dan
                website,saya mempunyai beberapa portofolio dalam pengembangan
                aplikasi mobile dan website
              </p>
            </div>
            <div className="mobile-s:text-center lg:text-left">
              <Link
                to="#contact"
                className="px-4 mobile-s:px-3 py-3 mobile-s:py-2 bg-blue-600 text-white inline-block mobile-s:text-center mt-8 mobile-s:mt-5 rounded-sm mobile-s:text-sm"
              >
                Hire Me
              </Link>
              &nbsp;
              <Link
                to="https://drive.google.com/file/d/1ry0zMPpE75oa9sjBSLTBwsv0YuZoMw8b/view?usp=sharing"
                target="_blank"
                className="px-4 mobile-s:px-3 py-3 mobile-s:py-2 bg-blue-600 text-white inline-block mobile-s:text-center mt-8 mobile-s:mt-5 rounded-sm mobile-s:text-sm"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Home;
