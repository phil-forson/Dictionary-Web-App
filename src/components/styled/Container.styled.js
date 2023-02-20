import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.color};
  overflow: none;
`;

export const Container = styled.div`
  margin: auto;
  width: 737px;
  height: 200vh;

  @media only screen and (max-width: 600px) {
    width: 327px;
    margin: auto;
    height: 200vh;
  }

  /* overflow-x: hidden; */
`;
export const BodyContainer = styled.div`
  border-bottom: 1px solid #979797;
  padding-bottom: 2rem;
`;
