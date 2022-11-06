import * as React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import MobileNav from "../Mobile/MobileNav";

export interface DesktopNavProps {
  navLinks: Array<string>;
}

export default function NavigationBar({ navLinks }: DesktopNavProps) {
  return (
    <nav className="navbar wrapper">
      <div className="container">
        <div className="nav-header-box">
          <Link href={"/"} passHref>
            <h1 className="nav-header header-xLarge">
              <span className="cma">CMA</span> Fitness
            </h1>
          </Link>
        </div>
        <div className="desktop-nav-links">
          {navLinks?.map((link) => (
            <Link href={`/${link}`} passHref key={link}>
              <Button size="medium" className="blk-bg nav-link-btn nav-btn">
                {link}
              </Button>
            </Link>
          ))}
          <Link href="">
            <Button size="medium" className="yt-bg nav-membership-btn nav-btn">
              Sign up
            </Button>
          </Link>
          <Link href="https://secure.peakpayment.com/8821/prospect">
            <Button size="medium" className="yt-bg nav-membership-btn nav-btn">
              Try free
            </Button>
          </Link>
        </div>
        <div className="mobile-nav-links">
          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
}
