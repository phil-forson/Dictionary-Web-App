import React from 'react'
import SearchIcon from "../assets/images/icon-search.svg"

import { SearchBoxContainer, SearchBoxIcon, SearchBoxInput, SearchErrorText } from './styled/Searchbox.styled'

const SearchBox = ({search, setSearch, handleSearch, searchError}) => {
  

  const handleKeyUp = (e) => {
    if(e.key === 'Enter'){
      handleSearch()
    }
    else {
    }
  }
  return (
    <SearchBoxContainer>
        <SearchBoxInput border={searchError ? '1px solid #FF5252 !important' : 'none'} value={search} onChange = {(e) => setSearch(e.target.value)} onKeyUp={handleKeyUp}/>
        <SearchBoxIcon src={SearchIcon} onClick={handleSearch}/>
        {searchError && <SearchErrorText>Whoops can't be empty...</SearchErrorText>}
      </SearchBoxContainer>
  )
}

export default SearchBox