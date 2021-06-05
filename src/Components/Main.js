import React from 'react';
import { makeStyles, Grid, Paper } from '@material-ui/core';
import { useGlobalState } from '../GlobalContext';
import Countries from './Countries';


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

                </div>
            </Grid>
            <Countries />
        </React.Fragment>
    )
}
