import React from "react";
import Content from "./content";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import SidebarControl from "./sidebarControl";
import SidebarOverlay from "./sidebarOverlay";
import IsLoading from "@/components/IsLoading";


export default function Index({ children }) {
 

  return (
    <div>
      <IsLoading />
      <Navbar />
      <Sidebar />
      <Content>{children}</Content>
      <Footer />
      <SidebarControl />
      <SidebarOverlay />
    </div>
  );
}
