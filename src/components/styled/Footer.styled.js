import styled from "styled-components";

export const SourceText = styled.span`
color: #757575;
text-decoration: underline;
font-size: 14px;
font-family: ${({ theme }) => theme.regular};
`

export const SourceLink = styled.span`
color: ${({theme}) => theme.primary === "#fff" ? '#2d2d2d' : '#fff'} ;
font-size: 14px;
padding-left: 1.5rem;
text-decoration: underline;
font-family: ${({ theme }) => theme.regular};
`