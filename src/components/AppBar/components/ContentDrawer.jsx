import { Box } from "@mui/material";
import { UserInformation } from "./UserInformation";
import { Menu } from "./Menu";

const baseStyle = {
  width: 550,
  p: 0,
};

export const ContentDrawer = () => {
  return (
    <>
      <Box xs={baseStyle} role="presentation">
        <UserInformation />
        <Menu />
      </Box>
    </>
  );
};

export default ContentDrawer;
