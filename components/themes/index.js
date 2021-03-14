import React from "react";
import Content from "./content";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import SidebarControl from "./sidebarControl";
import SidebarOverlay from "./sidebarOverlay";
import Spinner from "react-spinner-material";
import { useSelector, useDispatch } from "react-redux";

export default function Index({ children }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.theme.isLoading);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Content>{children}</Content>
      <Footer />
      <SidebarControl />
      <SidebarOverlay />
    </div>
  );
}
