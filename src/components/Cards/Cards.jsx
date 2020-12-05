import React from 'react';

// Import Countup for counting Animation
import Countup from 'react-countup';

// Import Material Ui components
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

// Import Style File
import styles from './Cards.module.css';

// Import Classnames for giving multiple classes to component
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return <h1>Loading...</h1>
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" direction="column">
                <Grid item component={Card} className={cx(styles.card, styles.active)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>ACTIVE CASES</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={confirmed.value} duration={1.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={recovered.value} duration={1.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={deaths.value} duration={1.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;