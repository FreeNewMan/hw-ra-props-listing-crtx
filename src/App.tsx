import React from 'react';
import './App.css'
import { Listing } from './components/Listing.tsx'
import datafile from './data/etsy.json'


function App() {

  const jsonData = JSON.parse(JSON.stringify(datafile)).filter(row => row.title).map((j) =>
    ({ listing_id: j.listing_id, url: j.url, MainImage: j.MainImage, title: j.title, currency_code: j.currency_code, price: j.price, quantity: j.quantity }));

  return (
    <>
      <Listing items={jsonData} />
    </>
  )
}

export default App
