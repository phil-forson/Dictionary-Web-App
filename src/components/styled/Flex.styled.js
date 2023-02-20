import styled from "styled-components";

export const Flex = styled.div`
display: flex;
flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
justify-content: ${({ justifyContent }) => justifyContent || 'center'};
align-items: ${({ alignItems }) => alignItems || 'center'};
padding: ${({ padding }) => padding || 0 };
`