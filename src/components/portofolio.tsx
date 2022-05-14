import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Wrapper from "./wrapper";
import { Tab } from "@headlessui/react";
import { Inbox } from "react-feather";

const mobile = [
  {
    src: "../images/magenta-hrd-mobile.jpg",
    alt: "product",
    quality: 95,
    formats: ["auto", "webp", "avif"],
  },
  {
    src: "../images/magenta-hrd-mobile.jpg",
    alt: "product",
    quality: 95,
    formats: ["auto", "webp", "avif"],
  },
  {
    src: "../images/magenta-hrd-mobile.jpg",
    alt: "product",
    quality: 95,
    formats: ["auto", "webp", "avif"],
  },
];

const Portfolio = () => {
  const [tabs] = React.useState(["Mobile", "Website", "UI/UX Design"]);
  return (
    <section className="pt-20 pb-20 mobile-s:pb-5" id="portfolio">
      <Wrapper>
        <h1 className="text-3xl mobile-s:text-lg md:text-2xl lg:text-3xl font-bold leading-tight tracking-wide text-center py-4 mobile-s:py-2 lg:py-4">
          Portofolio
        </h1>
        <p className="text-justify text-gray-600 mobile-s:text-sm md:text-base lg:max-w-2xl lg:mx-auto"></p>
        <div className="mt-10">
          <Tab.Group>
            <Tab.List className="flex justify-center">
              {tabs.map((tab, index) => (
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "text-white mobile-s:text-xs md:text-base mx-1 bg-blue-600 rounded px-4 py-1"
                      : "text-blue-600  mobile-s:text-xs md:text-base mx-1 rounded px-4 py-1 hover:bg-gray-100"
                  }
                  key={tab}
                >
                  {tab}
                </Tab>
              ))}
              {/* <Tab className="text-white mx-1 bg-blue-600 rounded px-4 py-1">
                All
              </Tab>
              
              <Tab className="text-blue-600 mx-1 rounded px-4 py-1">Mobile</Tab>
              <Tab className="text-blue-600 mx-1 rounded px-4 py-1">
                Lainnya
              </Tab> */}
            </Tab.List>
            <Tab.Panels>
              {/* <Tab.Panel>
                <div className="mt-10 mobile-s:mt-5 grid grid-cols-3 mobile-s:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mobile-s:gap-3 lg:gap-4">
                  <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <div>
                      <StaticImage
                        src="../images/magenta-hrd-mobile.jpg"
                        // width={64}
                        // height="100%"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div>
                  <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <div>
                      <StaticImage
                        src="../images/magenta-hrd-mobile.jpg"
                        // width={64}
                        // height="100%"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div>
                  <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <div>
                      <StaticImage
                        src="../images/magenta-hrd-mobile.jpg"
                        // width={64}
                        // height="100%"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div>
                  <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <div>
                      <StaticImage
                        src="../images/magenta-hrd-mobile.jpg"
                        // width={64}
                        // height="100%"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div>
                </div>
              </Tab.Panel> */}
              <Tab.Panel>
                <div className="mt-10 mobile-s:mt-5 grid grid-cols-2 mobile-s:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mobile-s:gap-3 lg:gap-4">
                  {/* mobile */}
                  <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <div>
                      <StaticImage
                        src="../images/portofolio/attendit.png"
                        // width={64}
                        // height="100%"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div>
                  <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <div>
                      <StaticImage
                        src="../images/portofolio/aerplus.png"
                        // width={64}
                        // height="100%"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div>
                  <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <div>
                      <StaticImage
                        src="../images/portofolio/hrd-arzaya-mobile.png"
                        // width={64}
                        // height="100%"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="mt-10 mobile-s:mt-5 grid grid-cols-2 mobile-s:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mobile-s:gap-3 lg:gap-4">
                  {/* <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <div>
                      <StaticImage
                        src="../images/metaprint.jpeg"
                        // width={64}
                        // height="100%"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div> */}
                  <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <StaticImage
                      src="../images/portofolio/eo.png"
                      // width={100}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="product"
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                  </div>

                  {/* <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <div>
                      <StaticImage
                        src="../images/magenta-hrd.jpeg"
                        // width={64}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div> */}
                  {/* <div className="transition bg-white hover:shadow-2xl transform hover:-translate-y-2 cursor-pointer">
                    <div>
                      <StaticImage
                        src="../images/magenta-eo.jpeg"
                        // width={64}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="product"
                      />
                    </div>
                  </div> */}
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className="py-24">
                  <div className="flex justify-center">
                    <Inbox className="text-center text-gray-300" size={96} />
                  </div>
                  <p className="text-gray-300 text-center">No Content</p>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* <div className="text-center mt-10">
          <Link
            to="#"
            className="px-4 py-3 border border-blue-600 text-blue-600 rounded-sm text-sm"
          >
            Semua Portofolio
          </Link>
        </div> */}
      </Wrapper>
    </section>
  );
};

export default Portfolio;
