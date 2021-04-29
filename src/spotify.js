//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
import SpotifyWebApi from "spotify-web-api-js";
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "8484a3a118d64021ba84b085810b4876";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substr(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURI(parts[1]);

            return initial;
        }, {});
}

export const setUpSpotifyApi = () => {
    return new SpotifyWebApi();
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;