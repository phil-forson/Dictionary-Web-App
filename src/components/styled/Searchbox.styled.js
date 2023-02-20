import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  margin-top: 2rem;
  padding: 0;
  width: 737px;
  height: 50px;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 327px;
    margin-top: 2rem;
  }
`;

export const SearchBoxInput = styled.input`
  border: ${({ border }) => border};
  outline: none;
  background-color: ${({theme}) => theme.primary === "#fff" ? '#f4f4f4' : '#1F1F1F'};
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding-left: 20px;
  padding-right: 37px;
  font-size: 15px;
  font-family: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.color};

  &:focus {
    border: 1px solid #A445ED;
  }
`;

export const SearchBoxIcon = styled.img`
  position: absolute;
  width: 15.55px;
  height: 15.55px;
  top: 0;
  right: 20px;
  transform: translateY(100%);
  cursor: pointer;
`;

export const SearchErrorText = styled.p`
color: #FF5252;
font-family: 'InterRegular';
font-size:12px;
margin-bottom: 1rem;
`
