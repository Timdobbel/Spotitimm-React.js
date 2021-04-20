import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  // <-- Data layer interaction template -->
  const [all, dispatch] = useDataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    console.log('_token', _token);

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token
      });

      spotify.getMe().then(user => {
        setUser(user);
        dispatch({
          type: "SET_USER",
          user: user
        });
      })



      spotify.getUserPlaylists().then(pl => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: pl,
        });
        console.log(pl);

        spotify.getPlaylist(pl.items[0].id).then(pll => {
          dispatch({
            type: "SET_HOME_PLAYLIST",
            home_playlist: pll,
          });

          setPlaylists(pll);

        });
      });
    }
  }, [])


  return (
    <div className="App">
      {
        playlists ? (
          <Player spotify={spotify} playlist={playlists}></Player>
        ) : (
          <Login></Login>
        )
      }
    </div>
  );
}


export default App;
