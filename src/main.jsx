import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

const colors ={
  main: {
    100: '#020202',
    200: '#E6B790',
    300: '#DFACAE',
    400: '#72B3B6',
    500: '#ECE2DA',
  },
}

const theme = extendTheme({ colors })
ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App  />
    </ChakraProvider >
  </React.StrictMode>
)
