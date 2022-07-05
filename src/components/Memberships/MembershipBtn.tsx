import { Button } from "@mui/material";
import Link from "next/link";

interface MembershipBtnProps {
  text: string;
}

const MembershipBtn = ({ text }: MembershipBtnProps) => {
  return (
    <Link href="https://secure.peakpayment.com/8821/prospect">
      <Button size="large" className="yt-bg membership-btn para-large">
        {text}
      </Button>
    </Link>
  );
};
export default MembershipBtn;
