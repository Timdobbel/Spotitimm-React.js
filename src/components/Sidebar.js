import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from "../DataLayer";

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists?.items[0].id);
    return (
        <div className="sidebar">

            <img className="sidebar__logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            />
            <Link to="/" style={{ textDecoration: 'none' }}>
                <SidebarOption title="Home" Icon={HomeIcon} />
            </Link>
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

            <br />
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />
            {playlists?.items?.map((playlist, key) => (
                <SidebarOption key={key} playlistId={playlist?.id} title={`${playlist.name}`}></SidebarOption>
            ))}
        </div>
    )
}

export default Sidebar

