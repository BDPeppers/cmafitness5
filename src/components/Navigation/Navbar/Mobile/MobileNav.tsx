import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Link from "next/link";

export interface IMobileNavProps {
  navLinks: Array<string>;
}

type Anchor = "right";

export default function MobileNav(props: IMobileNavProps) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {props.navLinks?.map((link) => (
          <ListItem button key={link}>
            <Link href={`/${link}`} passHref>
              <ListItemText primary={link} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="mobile-nav">
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="mobile-menu-btn blk-bg"
            aria-label="Menu Button"
            onClick={toggleDrawer(anchor, true)}
            style={{ fontSize: "2rem" }}
          >
            <MenuRoundedIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
