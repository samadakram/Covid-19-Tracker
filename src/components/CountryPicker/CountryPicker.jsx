import React, { useState, useEffect } from 'react';

// Import Material Ui component
import { NativeSelect, FormControl } from '@material-ui/core';

// Import Styles CSS
import styles from './CountryPicker.module.css';

// Import Api for countries
import { fetchCountries } from '../../api';

const CountryPicker = () => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries);
        }

        fetchAPI();
    }, [setFetchedCountries]);


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {fetchedCountries.map((country, ind) => <option key={ind} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;