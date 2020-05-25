import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

    }),
);

export default function Help() {
    const classes = useStyles();

    return (
        <div>
            <h1>Help</h1>
        </div>
    );
}
