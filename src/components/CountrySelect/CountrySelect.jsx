import React, {useEffect, useState} from 'react';
import Select from 'react-select';

import './CountrySelect.scss'


const CountrySelect = () => {

    const [options, setOptions] = useState([]);
   
    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            const countryOptions = data.map(country => ({
              value: country.cca2.toLowerCase(),
              label: country.name.common,
            }));
            setOptions(countryOptions);
          } catch (error) {
            console.error('Error fetching country data:', error);
          }
        };
       
        fetchCountries();
      }, []);
      
 options.sort((a, b)=>a.label.localeCompare(b.label));

  return (
  
      <Select classNamePrefix="custom-select-prefix"
        options={options}
        placeholder="Select a country..."
        isClearable
      />
    
  )
}

export default CountrySelect;
