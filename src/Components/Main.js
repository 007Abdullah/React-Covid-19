import React from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';
import { useGlobalState } from '../GlobalContext';
import Select from './Select';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

export default function Main() {
    const classes = useStyles();
    const getdata = useGlobalState();
    console.log("Ya Sameer Bhai ", getdata);
    return (
        <React.Fragment>
            <h1 style={{ textAlign: 'center' }}>Covid 19 APP</h1>
            <br />

            <Grid container spacing={3}>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <h2>TotalDeaths</h2>
                        {getdata.TotalDeaths}
                    </Paper>
                    <Paper className={classes.paper}>
                        <h2>TotalConfirmed</h2>
                        {getdata.TotalConfirmed}
                    </Paper>
                    <Paper className={classes.paper}>
                        <h2>TotalRecovered</h2>
                        {getdata.TotalRecovered}
                    </Paper>
                </div>
            </Grid>
            <br />
            <h2>Country Data</h2>
            <Select />
        </React.Fragment>
    )
}
