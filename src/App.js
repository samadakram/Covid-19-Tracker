import React from 'react';
import styles from './App.module.css';

//Material Ui Grid
import { Grid } from '@material-ui/core';

// Import Components
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

// Import Image
import headerImage from './image/covid.png'

// Import Api
import { fetchData } from './api';


class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={headerImage} alt="Covid" className={styles.image} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>
        <Grid container>
          <Grid item xs={12} md={3} className={styles.cards}>
            <Cards data={data} />
          </Grid>
          <Grid item xs={12} md={9} className={styles.chart}>
            <Chart data={data} country={country} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;