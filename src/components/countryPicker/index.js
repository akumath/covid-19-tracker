import React, {useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../service';

import styles from './countryPicker.module.css';

const CountryPicker = ( props ) => {
    const { handleCountryChange } = props;
    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setCountries(await fetchCountries());
        }
        console.log(countries)
        fetchData();
    }, [setCountries])
    

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, i) => (
                    <option key={i} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;