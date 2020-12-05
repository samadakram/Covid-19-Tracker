import React from 'react';
import styles from './App.module.css';

//Material Ui Grid
import { Grid } from '@material-ui/core';

// Import Components
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';


class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <CountryPicker />
        <Grid container>
          <Grid item xs={5} className={styles.cards}>
            <Cards />
          </Grid>
          <Grid item xs={7} className={styles.chart}>
            <Chart />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;