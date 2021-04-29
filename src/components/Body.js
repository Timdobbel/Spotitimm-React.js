import React, { useState, useEffect, browserHistory } from 'react'
import './Body.css'
import { useDataLayerValue } from "../DataLayer";
import Header from './Header';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import SongRow from './SongRow';

import { useHistory } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

export default function Body({ spotify, isHomePlaylist, match }) {

    const [playList, setPlayList] = useState()
    const [params, setParams] = useState(null)
    const [{ home_playlist }, dispatch] = useDataLayerValue();

    const history = useHistory()
    let { playlistId } = useParams();

    console.log('playlistId: ', playlistId);

    useEffect(() => {
        console.log('playlistId: ', playlistId);
        setParams(playlistId);
        if (isHomePlaylist || playlistId === "undefined") {
            setPlayList(home_playlist);
            setParams(home_playlist.id);
        } else {
            history.listen((location) => {
                let url = location.pathname.split("/")[2];
                if (url !== params) {
                    spotify.getPlaylist(url).then(pll => {
                        setPlayList(pll);
                        setParams(url);
                    });
                } else {
                    if (url === home_playlist.id) {
                        setPlayList(home_playlist);
                        setParams(home_playlist.id);
                    }
                }
            });
        }
    }, [isHomePlaylist]);

    return (
        <div className="body">
            <Header spotify={spotify} />
            {playList &&
                <div>
                    <div className="body__info">
                        <img
                            src={playList?.images[0].url}
                            alt=""
                        />
                        <div className="body__infoText">
                            <strong>PLAYLIST</strong>
                            <h2>{playList?.name}</h2>
                            <p>{playList?.description}</p>
                        </div>
                    </div>

                    <div className="body__songs">
                        <div className="body__icons">
                            <PlayCircleFilledWhiteIcon className="body__shuffle" />
                            <FavoriteIcon fontSize="large" />
                            <MoreHorizIcon />
                        </div>
                        {playList?.tracks?.items?.map((song, index) => (
                            <SongRow index={index} song={song.track} />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}
