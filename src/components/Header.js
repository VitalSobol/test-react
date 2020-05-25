import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'fixed',
            width: '100%',
            height: '100px',
            backgroundColor: 'red'
        },
    }),
);

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

        </div>
    );
}
