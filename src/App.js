import React from 'react';
import styles from './App.module.css';

//Material Ui Grid
import { Grid } from '@material-ui/core';

// Import Components
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

// Import Api
import { fetchData } from './api';


class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <CountryPicker />
        <Grid container>
          <Grid item xs={5} className={styles.cards}>
            <Cards data={data} />
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