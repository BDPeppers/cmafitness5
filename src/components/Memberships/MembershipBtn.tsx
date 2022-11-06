import { Button } from "@mui/material";
import Link from "next/link";

interface MembershipBtnProps {
  text: string;
  link: string;
}

const MembershipBtn = ({ text, link }: MembershipBtnProps) => {
  return (
    <Link href={`${link}`}>
      <Button size="large" className="yt-bg membership-btn para-large">
        {text}
      </Button>
    </Link>
  );
};
export default MembershipBtn;
