import React from 'react'
import Select, { components } from 'react-select'

const Navbar = (props) => {
    return (
        <Select
          options={props.countryOptions}
          placeholder={props.countrySelected}
          onChange={(e) => props.handleChange(e)}
          className="filter-navbar"
        />
      )
}

export default Navbar