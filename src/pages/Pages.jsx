import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Homepage from './Homepage';
import Cuisine from './Cuisine';
import Searched from "./Searched";

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />}/>
      </Routes>
  );
}

export default Pages;
