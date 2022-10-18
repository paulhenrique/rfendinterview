import { Box, Button, Collapse, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserName } from "../../../../store/features/user";
import ManualUserNameEnter from "./components/ManualUserNameEnter";

const MarvelHeroesNameList = [
  "Steve Rogers",
  "Tony Stark",
  "Natasha Romanova",
  "Jennifer Walters",
];

const Welcome = () => {
  const [isOtherNameClicked, setIsOtherNameClicked] = useState(false);
  const dispatch = useDispatch();

  const handleSelectedUsername = (username) =>
    dispatch(updateUserName(username));

  return (
    <>
      <Typography variant="h5">Primeiro, escolha seu nome</Typography>
      <Collapse in={!isOtherNameClicked}>
        <Box display="flex" flexDirection="column" gap="12px" mt="12px">
          {MarvelHeroesNameList.map((name) => (
            <Button
              variant="contained"
              key={name}
              onClick={() => handleSelectedUsername(name)}
            >
              {name}
            </Button>
          ))}
          <Button onClick={() => setIsOtherNameClicked(true)}>
            Outro nome
          </Button>
        </Box>
      </Collapse>
      <Collapse in={isOtherNameClicked}>
        <ManualUserNameEnter onComplete={handleSelectedUsername} />
        <Button fullWidth onClick={() => setIsOtherNameClicked(false)}>
          Voltar às opções
        </Button>
      </Collapse>
    </>
  );
};

export default Welcome;
