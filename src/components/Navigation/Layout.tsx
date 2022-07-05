import * as React from "react";
import Footer from "./Footer/Footer";
import NavigationBar from "./Navbar/Desktop/DesktopNav";

export interface ILayoutProps {
  children?: JSX.Element | JSX.Element[];
}

var links: Array<string> = ["Home", "About", "Classes", "Memberships"];
export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <NavigationBar navLinks={links} />
      {children}
      <Footer />
    </>
  );
}
