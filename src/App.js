import React from 'react'
import { useState } from 'react'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Destinations from './components/Destinations'
import Destination from './components/Destination'

import destinationData from './destinationData'

function App() {

  // NAVBAR

  // Appends available countries list, excluding duplicates
  let countryList = []

  destinationData.map(item =>
    (!countryList.includes(item.country) && countryList.push(item.country))
  )

  // Sorts the list in alphabetical order
  let countryListSorted = countryList.sort((a, b) => a.localeCompare(b))

  // Creating the countryOptions object
  let countryOptions = [
    {
      value: 'displayAll', label: "Show all countries"
    },
  ]

  countryListSorted.map(item => {
    let currentCountry = {
      value: item, label: item
    }
    countryOptions.push(currentCountry)
  })
  
  // handleChange event && countrySelected State
  // Fetching the selected country && placeholder
  const [countrySelected, setCountrySelected] = useState("Show all countries");

  const handleChange = (e) => {
    setCountrySelected(e.label);
  };

  // DESTINATIONS

  // Filters displayed countries
  let filteredData = (countrySelected == "Show all countries") ?
    destinationData :
    destinationData.filter(item => item.country == countrySelected)

  // Creates each destination component
  let destination = filteredData.map(item => {
    return (
      <Destination
        key={item.id}
        img={item.img}
        country={item.country}
        link={item.link}
        title={item.title}
        paragraph={item.paragraph}
      />
    )
  })

/////////////////////////////////////////////////////////////

  return (
    <>
      <Header />

      <Navbar
        handleChange={handleChange}
        countryOptions={countryOptions}
        countrySelected={countrySelected}        
      />

      <Destinations
        destination={destination}
      />
    </>
  );
}

export default App;