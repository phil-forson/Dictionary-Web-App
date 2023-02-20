import './App.css'
import { ThemeProvider } from 'styled-components'

import Landing from "./screens/Landing";
import {  useState } from 'react';
import GlobalStyles from './components/styled/Global';

const lightTheme = {
  primary: '#fff',
  color: '#2d2d2d'
}

const darkTheme = {
  primary: '#050505',
  color: '#fff'
}

const serifTheme = {
  bold: 'LoraBold',
  regular: 'LoraRegular',
  
}


const sansTheme = {
  bold: 'InterBold',
  regular: 'InterRegular'
}

const monoTheme = {
  bold: 'InconsolataBold',
  regular: 'InconsolataRegular'
}

function App() {
  const [designTheme, setDesignTheme] = useState('sans')
  const [colorTheme, setColorTheme ] = useState('light')
  const [search, setSearch] = useState('keyboard')

  function selectTheme(){
    if(designTheme === 'sans' && colorTheme === 'dark'){
      return {...sansTheme, ...darkTheme}
    }
    else if(designTheme === 'sans' && colorTheme === 'light'){
      return {...sansTheme, ...lightTheme}
    }
    else if(designTheme === 'serif' && colorTheme === 'dark'){
      return {...serifTheme, ...darkTheme}
    }
    else if(designTheme === 'serif' && colorTheme === 'light'){
      return {...serifTheme, ...lightTheme}
    }
    else if(designTheme === 'mono' && colorTheme === 'dark'){
      return {...monoTheme, ...darkTheme}
    }
    else if(designTheme === 'mono' && colorTheme === 'light'){
      return {...monoTheme, ...lightTheme}
    }
  }

  const customTheme = selectTheme()
  


  return (
    <ThemeProvider theme = {customTheme}>
      <GlobalStyles />
      <Landing setDesignTheme={setDesignTheme} setColorTheme={setColorTheme} search={search} setSearch={setSearch}/>
    </ThemeProvider>
  );
}

export default App;
