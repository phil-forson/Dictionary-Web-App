import React from "react";
import {
  DefSectionContainer,
  POS,
  RelativeContainer,
  StyledExample,
  StyledLi,
  StyledUl,
  SubTitle,
  Synonym,
  SynonymContainer,
} from "./styled/DefSection.styled";

const DefSection = ({ pos, definitions, synonyms }) => {

  

  return (
    <DefSectionContainer>
      <RelativeContainer>
        <POS>{pos}</POS>
      </RelativeContainer>
      <SubTitle>Meaning</SubTitle>
      <StyledUl>
        {/* {definitions} */}
        {definitions.map((def, index) => (
          <StyledLi key={index}>
            {def.definition}
            {pos === "verb" && def.example && <StyledExample>{`“${def.example}”`}</StyledExample>}
          </StyledLi>
        ))}
      </StyledUl>

      {pos === "noun" && (
        <SynonymContainer>
          <SubTitle display="inline-block" marginTop="0">Synonyms</SubTitle>
          {synonyms ? (
            synonyms.map((syn, index) => <Synonym key={index}>{syn}</Synonym>)
          ) : (
            <Synonym color="red">No synonym for this one</Synonym>
          )}
        </SynonymContainer>
      )}
    </DefSectionContainer>
  );
};

export default DefSection;
