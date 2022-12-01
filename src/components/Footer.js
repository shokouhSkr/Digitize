import React, { useState } from "react";
import { Link } from "react-router-dom";

import { links } from "../data";
import logo from "../assets/images/logo/logo-footer.png";
import line from "../assets/images/icons/Line 8.svg";
import map from "../assets/images/map.jpg";

const Footer = () => {
  const [active, setActive] = useState(links[0]);

  const linkHandler = (id) => {
    const selectedLink = links.find((link) => link.id === id);
    setActive(selectedLink);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0">
      <section className="flex w-full items-center justify-between rounded-tr-lg rounded-tl-lg bg-slate-50 px-[10%] py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
        {links.map((link) => {
          const { id, url, title, icon } = link;
          return (
            <Link to={url} key={id} onClick={() => linkHandler(id)}>
              <div className="flex items-center">
                <img
                  src={icon}
                  alt={title}
                  className={`h-7 w-7 ${active.id === id && "fill-slate-800"}`}
                />
                <p
                  className={`mr-2 text-sm font-bold text-slate-800 ${
                    active.id === id ? "block" : "hidden"
                  }`}
                >
                  {title}
                </p>
              </div>
            </Link>
          );
        })}
      </section>

      {/* <section className="hidden px-[5%] py-12 md:block">
        <div className="flex gap-2">
          <img src={logo} alt="Digitize" className="w-28" />
          <img src={line} alt="line" className="w-10" />
        </div>

        <div>
          <img src={map} alt="map" className="h-40 w-40" />
        </div>
      </section> */}
    </footer>
  );
};

export default Footer;
