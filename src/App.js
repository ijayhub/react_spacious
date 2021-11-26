import React, { useState, useEffect } from 'react';
import { Container, Row} from 'react-bootstrap';
import { Route, Routes} from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Tabs from './components/Tabs';
import Planets from './components/Planets';
import Characters from './components/Characters';
import Loader from './strapi-assets/assets/planet-loader.svg';

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsAppLoading(false)
    }, 1500);
},[])


  return (
    <>
    {isAppLoading && 
    <>
    <Container className="p-5">
    <NavigationBar />
    <div className="img-loader-div w-100 d-flex justify-content-center align-items-center">
      <img src={Loader} alt="loader-pic" />
    </div>
    </Container>
    </>}

    {!isAppLoading && <Container className="p-5">
      <Row className="justify-content-center">
      <NavigationBar />
      <Tabs />
      </Row>
        <div className="box position-relative">
        <Routes>
          <Route path="/Spacious/" element={<Planets />} />
          <Route path="/Spacious/characters" element={<Characters />} />
        </Routes>
      </div>
    </Container>}
    </>
  );
}

export default App;
