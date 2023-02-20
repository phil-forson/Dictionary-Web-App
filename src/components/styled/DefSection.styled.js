import styled from "styled-components";

export const DefSectionContainer = styled.section`
  height: auto;
  margin-top: 1rem;
  width: 737px;

  @media only screen and (max-width: 600px){
    width: 327px;
  }

  @media only screen and (min-width: 600px){
    width: 689px;
  }

  @media only screen and (min-width: 768px){
    width: 737px;
  }
`;
export const RelativeContainer = styled.div`
  
  padding: 0;
  margin: 0;
`;

export const POS = styled.p`
position: relative;
  margin: 0;
  display: block;
  font-size: 24px;
  text-transform: lowercase;
  font-family: ${({ theme }) =>
    theme.bold};
    overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    margin-right: -100%;
    margin-left: 10px;
    border-top: 1px solid #979797;
    height: 0.5em;
    top: 56%
  }
`;
export const SubTitle = styled.p`
  color: #757575;
  font-size: 17px;
  font-family: ${({ theme }) => theme.regular};
  margin-top: ${({ marginTop }) => marginTop || "1.2rem"};
  display: ${({ display }) => display || "block"};
`;

export const StyledUl = styled.ul`
  font-family: ${({ theme }) => theme.regular};
`;

export const StyledLi = styled.li``;

export const SynonymBlock = styled.div``;

export const Synonym = styled.span`
  font-family: ${({ theme }) => theme.bold};
  color: ${({ color }) => color || "#A445ED"};
`;

export const StyledExample = styled.p`
  color: #757575;
  font-size: 14px;
  font-family: ${({ theme }) => theme.regular};
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
  margin-left: 2rem;
  display: ${({ display }) => display || "block"};
`;
export const SynonymContainer = styled.div`
  margin-top: 1.2rem;
  max-width: 737px;
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(5, auto);

  width: 737px;

  @media only screen and (max-width: 600px){
    width: 327px;
    grid-row-gap: 1rem;
  grid-template-columns: repeat(3, auto);
  }


`;
