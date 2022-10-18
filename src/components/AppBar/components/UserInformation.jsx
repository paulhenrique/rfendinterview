import { Avatar, Box, Collapse, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { userInformationStyle } from "./userInformationStyle";

export const UserInformation = () => {
  const { name = "" } = useSelector((state) => state.user);

  return (
    <Collapse in={Boolean(name)}>
      <Box sx={userInformationStyle.box}>
        <Avatar
          src={`https://robohash.org/${name}`}
          sx={userInformationStyle.avatar}
        />
        <Box>
          <Typography variant="h6" component="p">
            {name}
          </Typography>
          <Typography variant="caption" component="p">
            Pontuação: <b>- - </b>
          </Typography>
        </Box>
      </Box>
    </Collapse>
  );
};
