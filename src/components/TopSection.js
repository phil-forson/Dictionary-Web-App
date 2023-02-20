import React, { useEffect, useState } from "react";
import PlayIcon from "../assets/images/icon-play.svg";

import { Flex } from "./styled/Flex.styled";
import {
  Ipa,
  Main,
  StyledPlayIcon,
  StyledTopSectionContainer,
} from "./styled/TopSection.styled";

const TopSection = ({ word, phonetic, audioLinks }) => {

  const [audioPresent, setAudioPresent] = useState(false)

  useEffect(() => {
    isAudioPresent()
  }, [])
  

  const isAudioPresent = () => {
    for (let i = 0; i < audioLinks.length; i++) {
      if (audioLinks[i].audio) {
        setAudioPresent(true)
        console.log('there is audio')
      }
    }
  }

  const playSound = (e) => {
    let sound;
    for (let i = 0; i < audioLinks.length; i++) {
      if (audioLinks[i].audio) {
        sound = audioLinks[i].audio;
        setAudioPresent(true)
        console.log('there is audio')
      }
    }
    var audio = document.createElement("audio");
    var src = document.createElement("source");
    audio.appendChild(src);
    src.src = sound;
    audio.play();
    e.preventDefault();
  };
  return (
    <>
      <StyledTopSectionContainer>
        <Flex justifyContent="space-between" alignItems="center">
          <main>
            <Main>{word}</Main>
            <Ipa>{phonetic}</Ipa>
          </main>
          <div>
            {audioPresent && (
              <StyledPlayIcon src={PlayIcon} onClick={playSound} />
            )}
          </div>
        </Flex>
      </StyledTopSectionContainer>
    </>
  );
};

export default TopSection;
