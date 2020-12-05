import React, { useState, useEffect } from 'react';

// Import Material Ui component
import { NativeSelect, FormControl } from '@material-ui/core';

// Import Styles CSS
import styles from './CountryPicker.module.css';

const CountryPicker = () => {
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;