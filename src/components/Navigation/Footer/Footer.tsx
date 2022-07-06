import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Link from "next/link";
import CmaMap from "../CmaMap";

const Footer = () => {
  return (
    <>
      <CmaMap />
      <footer className="cma-footer blk-bg">
        <div className="cma-footer-wrapper">
          <div className="footer-tagline-box">
            <h1 className="header-xLarge">
              <span className="cma">CMA</span> FITNESS
            </h1>
            <h2 className="footer-tagline para-large">
              We provide a new experience in fitness! Fall in love with the
              lifestyle and have fun in the process.
            </h2>
            <br />
          </div>
          <div className="cma-staff-hours footer-box">
            <h1 className="header-med">Staff Hours</h1>
            <h2 className="para-med">Mon - Thur:</h2>
            <h2 className="para-med">9:00AM - 1:00PM</h2>
            <h2 className="para-med">4:00PM - 8:00PM</h2>
            <h2 className="para-med">Fri - Sat:</h2>
            <h2 className="para-med">9:00AM - 1:00PM</h2>
            <h2 className="para-med">Sun:</h2>
            <h2 className="para-med">Closed</h2>
          </div>
          <div className="cma-staff-hours footer-box">
            <h1 className="header-med">
              <span className="cma">CMA</span> Fitness Kidz Care
            </h1>
            <h2 className="para-med">Mon - Thur:</h2>
            <h2 className="para-med">9:00AM - 1:00PM</h2>
            <h2 className="para-med">4:00PM - 8:00PM</h2>
            <h2 className="para-med">Fri - Sat:</h2>
            <h2 className="para-med">9:00AM - 1:00PM</h2>
            <h2 className="para-med">Sun:</h2>
            <h2 className="para-med">Closed</h2>
          </div>
          <div className="cma-contact footer-box">
            <h1 className="header-med">Contact</h1>
            <h2 className="para-med">Phone:</h2>
            <h2 className="para-med">478-333-1376</h2>
            <h2 className="para-med">Email:</h2>
            <h2 className="para-med">info@cmafitness.fit</h2>
          </div>
          <div className="footer-box location">
            <h1 className="header-med">
              <span className="cma">CMA</span> Fitness
            </h1>
            <h2 className="para-med">198 S Houston Lake Rd Suite D</h2>
            <h1 className="header-small">The Dungeon</h1>
            <h2 className="para-med">198 S Houston Lake Rd Suite E</h2>
          </div>
          <div className="footer-social">
            <div className="social-box">
              <YouTubeIcon className="social-icon" />
              <h2>
                <Link href="https://www.youtube.com/channel/UC-_H7sCOzwr_gHzMok8lgJw/videos">
                  CMA Fitness
                </Link>
              </h2>
            </div>
            <div className="social-box">
              <FacebookIcon className="social-icon" />
              <h2>
                <Link href="https://www.facebook.com/fitwithchan/">
                  @fitwithchan
                </Link>
              </h2>
            </div>
            <div className="social-box">
              <InstagramIcon className="social-icon" />
              <h2>
                <Link href="https://www.instagram.com/cmafitness/">
                  @cmafitness
                </Link>
              </h2>
            </div>
            <div className="social-box">
              <InstagramIcon className="social-icon" />
              <h2>
                <Link href="https://www.instagram.com/cma_the_dungeon/">
                  @cma_the_dungeon
                </Link>
              </h2>
            </div>
            <div className="social-box">
              <InstagramIcon className="social-icon" />
              <h2>
                <Link href="https://www.instagram.com/scorpiondoll77/">
                  Meet the owner!
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
