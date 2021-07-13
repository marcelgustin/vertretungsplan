import { ChakraProvider, Center, Box, CSSReset, Container, extendTheme, Grid, GridItem } from '@chakra-ui/react'
import PrettyForm from './components/PrettyForm'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './sites/Home'
import Login from './sites/Login'
import Allplans from './sites/Allplans'
import Stundenplan from './sites/Stundenplan'


const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark"
  }
})

function App() {
  return (
    <Router>
      <div className="App">
              <ChakraProvider theme={theme}>
                <CSSReset />
                <Grid minHeight="100vh" maxHeight='auto' templateRows="6rem 1fr 5rem"
                                templateColumns=".2fr 5fr .2fr"
                                gap={1}>
                  <GridItem colSpan={3}>
                    <Navbar></Navbar>
                  </GridItem>
                  <GridItem bg="gray.900" opacity='.6' borderRadius='25' colStart={2} colEnd={2} rowStart={2} rowEnd={2}>
                    
                    <Switch>
                      <Route exact path='/'> 
                        <Home />
                      </Route>
                      <Route path='/alle-kurse'> 
                        <Allplans />
                      </Route>
                      <Route path='/stundenplan'> 
                        <Stundenplan />
                      </Route>
                      <Route path='/login'> 
                        <Login />
                      </Route>
                    </Switch>
                    
                  </GridItem>
                  <GridItem rowStart={3} colStart={2} colEnd={2} bg="gray.900" opacity='.6' borderRadius='25'>
                    <Center bg="none" h="100%" w="100%">Footer</Center>
                  </GridItem>


                </Grid>
              </ChakraProvider>
      </div>
    </Router>

  );
}

export default App;
