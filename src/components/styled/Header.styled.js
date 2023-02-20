import styled from "styled-components";

export const Header = styled.header`
  height: 56.5px;
  padding-top: 2rem;
`;
export const Logo = styled.img`
  width: 32px;
  height: 36.5px;
`;

export const NavRight = styled.div``;

export const NavItem = styled.div`
  margin-left: 20px;
`;

export const StyledDropdown = styled.select`
  border-left: none;
  border-top: none;
  border-bottom: none;
  border-right: 1px solid #979797;
  /* padding-right: 1rem; */
  outline: none;
  background-color: ${({ theme}) => theme.primary};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 5px;
  width: 120px;
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.bold};
`;

export const SelectArrowDiv = styled.div`
  position: relative;
  display: block;
`;
export const CustomSelectArrow = styled.img`
  position: absolute;
  width: 12px;
  height: 6px;
  right: 25px;
  bottom: -3.1px;
  pointer-events: none;
`;
export const StyledSwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  
  input {
      opacity: 0;
    width: 0;
    height: 0;
}

input:focus + span {
    box-shadow: 0 0 1px #A445ED;
}
input:checked + span {
    background-color: #A445ED;
}

input:checked + span:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(20px);
}
`;
export const StyledSwitchInput = styled.input``;
export const StyledSwitch = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #979797;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  width: 40px;
  height: 20px;
  
  &:before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 2px;
      bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
}
`;

export const StyledImg = styled.img`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;