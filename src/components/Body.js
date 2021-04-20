import React from 'react'
import './Body.css'
import { useDataLayerValue } from "../DataLayer";
import Header from './Header';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import SongRow from './SongRow';

export default function Body({ spotify }) {
    const [{ home_playlist }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            {/* {user ? <h3>Hi {user.display_name}</h3> : <h1>Welcome!</h1>} */}
            <Header spotify={spotify} />

            <div className="body__info">
                <img
                    src={home_playlist?.images[0].url}
                    alt=""

                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{home_playlist?.name}</h2>
                    <p>{home_playlist?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledWhiteIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {home_playlist?.tracks?.items?.map((song, index) => (
                    <SongRow index={index} song={song.track} />
                ))}
            </div>
        </div>
    )
}
