import React from 'react'
import { useState, useEffect } from 'react'
import Select, { components } from 'react-select'

import Destination from './Destination'

import destinationData from '../destinationData'

const Destinations = () => {

  // Navbar 

  //Appends available countries list, excluding duplicates
  let countryList = []

  destinationData.map(item =>
    (!countryList.includes(item.country) && countryList.push(item.country))
  )

  //Sorts the list in alphabetical order
  let countryListSorted = countryList.sort((a, b) => a.localeCompare(b))

  //Create the countries data object
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

  //Fetching the selected country && placeholder
  const [countrySelected, setCountrySelected] = useState("Show all countries");

  const handleChange = (e) => {
    setCountrySelected(e.label);
  };

  //Creating the navbar component
  const Navbar = () => {
    return (
      <Select
        options={countryOptions}
        placeholder={countrySelected}
        onChange={(e) => handleChange(e)}
        className="filter-navbar"
      />
    )
  }

  /////////////////////////////////////////////////////

  // Destinations 

  //Filters displayed countries
  let filteredData = (countrySelected == "Show all countries") ? 
      destinationData : 
      destinationData.filter(item => item.country == countrySelected)

  //Creates each destination component
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

  return (
    <main>
      <Navbar />

      <section className="destinations">
        {destination}
      </section>
    </main>
  )
}

export default Destinations