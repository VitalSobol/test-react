import React from 'react';
import SideBar from './SideBar'
import Header from './Header'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Profile from "./Profile";
import Help from "./Help";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex'
        },
        container: {
            display: 'flex',
            flexDirection: 'column'
        },
    }),
);

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.container}>
                <SideBar/>
                <div className={classes.container}>
                    <Header/>
                    <Switch>
                        <Route path="/profile">
                            <Profile/>
                        </Route>
                        <Route path="/help">
                            <Help/>
                        </Route>
                        <Route path="/">
                            <Profile/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
