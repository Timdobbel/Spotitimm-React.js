import React from 'react';
import Footer from './Footer';
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TestComp from './TestComp';

function Player({ spotify }) {


    return (
        <Router>
            <div className="player">
                <div className="player__body">
                    <Sidebar />
                    <Switch>

                        <Route exact path="/">
                            <Body spotify={spotify} isHomePlaylist={true} />
                        </Route>

                        <Route path="/playlist/:playlistId">
                            <Body spotify={spotify} isHomePlaylist={false} />
                        </Route>

                    </Switch>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </Router>

    )
}

export default Player
