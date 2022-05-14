import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Wrapper from "./wrapper";
import { Phone, Mail, MapPin, GitHub, Instagram } from "react-feather";

const Footer = () => {
  return (
    <section
      className="pt-16 mobile-s:pt-6 bg-blue-400 lg:pt-16"
      style={{
        // backgroundImage: `linear-gradient(359.62deg, rgb(215, 240, 250) 2.36%, rgb(255, 255, 255) 99.68%)`,
        backgroundImage: `linear-gradient(359.62deg, rgb(41, 128, 185) 2.36%, rgb(41, 128, 185) 99.68%)`,
      }}
      id="contact"
    >
      <Wrapper>
        <div className="flex mobile-s:flex-col lg:flex-row pb-6 border-b border-gray-700  ">
          <div className="w-1/2 mobile-s:w-full lg:w-1/2 mobile-s:text-center lg:text-left ">
            <div>
              <h1 className="text-3xl mobile-s:text-lg md:text-2xl lg:text-3xl font-bold leading-tight tracking-wide text-center py-4 mobile-s:py-2 lg:py-4 lg:text-left text-white">
                Contact
              </h1>
            </div>
            <div>
              <div className="flex items-center text-white mobile-s:self-center lg:self-start mb-3">
                <MapPin className="mr-2" size={16} />
                <span className="text-sm mobile-s:text-xs md:text-base">
                  JL manjahlega No.5 RT RW 12 Kota Bandung
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center text-white mobile-s:self-center lg:self-start mb-3">
                <Mail className="mr-2" size={16} />
                <span className="text-sm mobile-s:text-xs md:text-base">
                  rifanhidayat0811@gmail.com
                </span>
              </div>
              <div className="flex items-center text-white mobile-s:self-center lg:self-start mb-3">
                <Phone className="mr-2" size={16} />
                <span className="text-sm mobile-s:text-xs md:text-base">
                  0895413781295
                </span>
              </div>
            </div>
          </div>

          <div className="w-1/2 mobile-s:w-full lg:w-1/2 mobile-s:text-center lg:text-right ">
            <div>
              <h1 className="text-3xl mobile-s:text-lg md:text-2xl lg:text-3xl font-bold leading-tight tracking-wide text-center py-4 mobile-s:py-2 lg:py-4 lg:text-left text-white">
                Social Media
              </h1>
            </div>
            <div>
              <div className="flex items-center text-white mobile-s:self-center lg:self-start mb-3">
                <Phone className="mr-2" size={16} />
                <span className="text-sm mobile-s:text-xs md:text-base">
                  0895413781295
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center text-white mobile-s:self-center lg:self-start mb-3">
                <GitHub className="mr-2" size={16} />
                <span className="text-sm mobile-s:text-xs md:text-base">
                  RifanHidayat
                </span>
              </div>
              <div className="flex items-center text-white mobile-s:self-center lg:self-start mb-3">
                <Instagram className="mr-2" size={16} />
                <span className="text-sm mobile-s:text-xs md:text-base">
                  ripain_tech
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="py-5 mobile-s:py-3 lg:py-5 flex mobile-s:flex-col lg:flex-row justify-center">
          <div>
            <div className="flex items-center text-gray-400 mobile-s:self-center lg:self-start">
              <Phone className="mr-2" size={16} />
              <span className="text-sm mobile-s:text-xs md:text-base">
                +628963058855
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center text-gray-400 mobile-s:self-center lg:self-start">
              <Phone className="mr-2" size={16} />
              <span className="text-sm mobile-s:text-xs md:text-base">
                +628963058855
              </span>
            </div>
          </div>
          <div className="flex items-center text-gray-400 ml-4 mobile-s:ml-0 lg:ml-4 mobile-s:self-center lg:self-start">
            <Mail className="mr-2" size={16} />
            <span className="text-sm  mobile-s:text-xs md:text-base">
              rezha.arenzha@gmail.com
            </span>
          </div>
        </div> */}
      </Wrapper>
    </section>
  );
};

export default Footer;
