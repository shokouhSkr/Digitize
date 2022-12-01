import React from "react";
import SidebarCategories from "./SidebarCategories";
import SidebarFilter from "./SidebarFilter";

const Sidebar = () => {
  return (
    <aside className="col-span-full row-span-full hidden overflow-hidden bg-green-400 xs:col-end-4 md:block xl:col-end-3">
      <section className="rounded-lg bg-white p-6">
        <SidebarCategories />
        <SidebarFilter />
      </section>
    </aside>
  );
};

export default Sidebar;
