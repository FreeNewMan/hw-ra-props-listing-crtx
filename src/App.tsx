import React from 'react';
import './App.css'
import {Listing} from './Listing.tsx'
import datafile from './data/etsy.json'


function App() {
 
  return (
    <>
     <Listing items={datafile} />  
    </>
  )
}

export default App
