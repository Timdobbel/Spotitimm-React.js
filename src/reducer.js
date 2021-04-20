export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    home_playlist: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_HOME_PLAYLIST':
            return {
                ...state,
                home_playlist: action.home_playlist
            }
        default:
            return state;
    }
}

export default reducer;