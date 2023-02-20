import React from "react";
import LogoImg from "../assets/images/logo.svg";
import SelectArrow from "../assets/images/icon-arrow-down.svg";
import Moon from "../assets/images/icon-moon.svg";

import { Flex } from "./styled/Flex.styled";
import {
  CustomSelectArrow,
  Header,
  Logo,
  NavItem,
  NavRight,
  SelectArrowDiv,
  StyledDropdown,
  StyledImg,
  StyledSwitch,
  StyledSwitchInput,
  StyledSwitchLabel,
} from "./styled/Header.styled";

const HeaderSection = ({ setDesignTheme, setColorTheme }) => {
  
  function changeColorTheme(e){
    if(e.target.checked === true){
      setColorTheme('dark')
    }
    else {
      setColorTheme('light')
    }
  }

  return (
    <>
      <Header>
        <Flex justifyContent="space-between">
          <Logo src={LogoImg}></Logo>
          <NavRight>
            <Flex>
              <NavItem>
                <StyledDropdown
                onChange={(e) => setDesignTheme(e.target.value)}
                >
                  <option value='sans'>Sans Serif</option>
                  <option value='serif'>Serif</option>
                  <option value='mono'>Mono</option>
                </StyledDropdown>
              </NavItem>
              <SelectArrowDiv>
                <CustomSelectArrow src={SelectArrow} />
              </SelectArrowDiv>
              <NavItem>
                <StyledSwitchLabel>
                  <StyledSwitchInput type="checkbox"  onChange={changeColorTheme}/>
                  <StyledSwitch></StyledSwitch>
                </StyledSwitchLabel>
              </NavItem>
              <NavItem>
                <StyledImg src={Moon} height={20} width={19.99} />{" "}
              </NavItem>
            </Flex>
          </NavRight>
        </Flex>
      </Header>
    </>
  );
};

export default HeaderSection;
