import { Button } from "@mui/material";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="home-banner container">
      <h1 className="header-med">Try us for free!</h1>
      <br />
      <p className="banner-tagline para-small">
        &quot;Accept the Challenge, Stay Motivated, Achieve, Set Goals and
        more…a healthier life overall.&quot;
      </p>
      <br />
      <p className="banner-tagline para-small">-Chanda Akles</p>
      <br />
      <br />
      <br />
      <Link href="/Memberships">
        <Button size="medium" className="yt-bg  para-small">
          Try now
        </Button>
      </Link>
    </div>
  );
};
export default Banner;
