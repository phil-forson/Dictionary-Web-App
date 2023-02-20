import React from 'react'
import newWindow from '../assets/images/icon-new-window.svg'
import { SourceLink, SourceText } from './styled/Footer.styled'
import { StyledImg } from './styled/Header.styled'

const FooterSection = ({srcLinks}) => {
  return (
    <>
    <SourceText>Source</SourceText>
    {srcLinks.map((item, index) => (<SourceLink as='a' href={item} key={index} target="_blank">{item} <StyledImg src={newWindow} width={12} height={12}/></SourceLink>))}
    
    </>
  )
}

export default FooterSection