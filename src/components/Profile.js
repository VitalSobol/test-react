import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

    }),
);

export default function Profile() {
    const classes = useStyles();

    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
}
