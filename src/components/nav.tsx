import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Menu } from "react-feather";

const Nav = () => {
  const menus = [
    {
      name: "Home",
      link: "#home",
    },
    // {
    //   name: "About",
    //   link: "#about",
    // },
    {
      name: "Education",
      link: "#education",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Teccnology & Skill",
      link: "#technology",
    },
    {
      name: "portofolio",
      link: "#portofolio",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [mobileNav, setMobileNav] = React.useState(false);

  const toggleMobileNav = () => {
    console.log("clicked");
    setMobileNav(!mobileNav);
  };

  return (
    <div className="w-full flex justify-between items-right">
      {/* <div>
        <StaticImage
          src="../images/arenzha-logo.jpg"
          height={40}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Logo Arenzha"
          //   style={{ marginBottom: `1.45rem` }}
        />
      </div> */}
      <nav className="mobile-s:hidden lg:block">
        <ul className="flex m-0">
          {menus.map((menu, index) => (
            <li className="m-0 ml-10 font-inter font-bold" key={index}>
              <Link to={menu.link}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden mobile-s:block cursor-pointer lg:hidden">
        <Menu size={32} onClick={() => toggleMobileNav()} />
      </div>
      <div
        className={
          "mobile-nav w-full fixed top-16 left-0 z-10 transition-opacity " +
          (mobileNav ? "" : "hidden")
        }
      >
        <nav>
          <ul className="flex flex-col bg-white m-0">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu.link}
                  className="block w-full m-0 p-3 font-inter font-bold hover:bg-gray-100 text-sm"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
