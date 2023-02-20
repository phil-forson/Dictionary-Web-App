import React, { useEffect, useState } from "react";

import {
  BodyContainer,
  Container,
  MainContainer,
} from "../components/styled/Container.styled";
import HeaderSection from "../components/HeaderSection";
import TopSection from "../components/TopSection";
import SearchBox from "../components/SearchBox";
import DefSection from "../components/DefSection";
import FooterSection from "../components/FooterSection";
import axios from "axios";
import {
  ErrorMsg,
  ErrorMsgContainer,
} from "../components/styled/TopSection.styled";
import Notfound from "../components/Notfound";

const Landing = ({ setDesignTheme, setColorTheme, search, setSearch }) => {
  const [searchError, setSearchError] = useState(false);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [resArr, setResArr] = useState([]);

  function lookupWord(word) {
    setIsLoading(true)
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        setIsLoading(false)
        console.log('setting loading to false')
        console.log(res);
        if (res.status === 200) {
          setError('')
          setNotFound(false)
          setResArr(res.data);
          console.log(res);
        }
      })
      .catch((err) => {
        console.log("Lol error");
        console.log("error message")
        console.log(err);
        if(err.response.status === 404){
          setNotFound(true)
          console.log('not found')
        }
        setResArr({})
        setError(err.response.data.message);
        setIsLoading(false)
      });
  }

  function handleSearch() {
    if (search === "") {
      setSearchError(true);
    } else {
      setSearchError(false);
      lookupWord(search);
    }
  }
  useEffect(() => {
    lookupWord("keyboard");
  }, []);



  return (
    <MainContainer>
      <Container>
        
        <HeaderSection
          setDesignTheme={setDesignTheme}
          setColorTheme={setColorTheme}
        />
        <SearchBox
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          searchError={searchError}
        />
        {(!isLoading && !error ) && (
          <>
            <TopSection
              word={resArr[0].word}
              phonetic={resArr[0].phonetic}
              audioLinks={resArr[0].phonetics}
            />
            <BodyContainer>
              {resArr.map((data) =>
                data.meanings.map((item, index) => (
                  <DefSection
                    pos={item.partOfSpeech}
                    definitions={item.definitions}
                    synonyms={item.synonyms}
                    key={index}
                  />
                ))
              )}
              {/* <DefSection /> */}
            </BodyContainer>
            <FooterSection srcLinks={resArr[0].sourceUrls} />
          </>
        )}
        {(error && !isLoading && !notFound )&& (
          <ErrorMsgContainer>
            <ErrorMsg>{error}</ErrorMsg>
          </ErrorMsgContainer>
        )}
        {isLoading && <p>loading...</p>}
        {notFound && <Notfound />}
      </Container>
    </MainContainer>
  );
};

export default Landing;
