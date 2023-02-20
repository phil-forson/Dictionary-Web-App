import styled from "styled-components";

export const StyledTopSectionContainer = styled.section`
margin-top: 2rem;
width: 737px;
height: auto;
overflow: hidden;

@media only screen and (max-width: 600px) {
    width: 327px;
  }
`

export const Main = styled.p`
font-size: 64px;
font-family: ${({ theme }) => theme.bold};
padding: 0;
margin: 0;

@media only screen and (max-width: 600px) {
    font-size: 32px;
  }
`
export const Ipa = styled.p`
color: #A445ED;
font-size: 20px;
margin-bottom: 0;
/* margin-top: 10px; */
font-family: 'InterRegular';
`
export const StyledPlayIcon = styled.img`
/* margin: 24.5px 0px; */
margin: auto;
cursor: pointer;
vertical-align: middle;
width: 60px;
height: 60px;

@media only screen and (max-width: 600px){
    width: 55px;
    height: 55px;
}
`
export const ErrorMsgContainer = styled.div`
margin-top: 2rem;
`

export const ErrorMsg = styled.p`
font-size: 40px;
font-family: ${({ theme }) => theme.bold};
color: red;
`