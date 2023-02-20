import React from "react";
import { SubTitle } from "./styled/DefSection.styled";
import {
  NotfoundContainer,
  StyledEmoji,
  StyledNotFoundHeader,
} from "./styled/Notfound.styed";

const Notfound = () => {
  return (
    <NotfoundContainer>
      <StyledEmoji>😕</StyledEmoji>
      <StyledNotFoundHeader>No Definitions Found</StyledNotFoundHeader>
      <SubTitle>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </SubTitle>
    </NotfoundContainer>
  );
};

export default Notfound;
