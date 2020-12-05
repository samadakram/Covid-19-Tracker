import React from 'react';

// Import Countup for counting Animation
import Countup from 'react-countup';

// Import Material Ui components
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

// Import Style File
import styles from './Cards.module.css';
const Cards = ({ data: { confirmed, recoverd, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return <h1>Loading...</h1>
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" direction="column">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>ACTIVE CASES</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={confirmed.value} duration={1.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">DATE</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">DATE</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;