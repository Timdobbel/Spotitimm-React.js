import React from 'react'
import "./SongRow.css"

function SongRow({ song, index }) {
    return (
        <div className="songRow">
            <p className="songRow__index">{index + 1}</p>
            <img
                src={song.album.images[0].url}
                className="songRow__album"
                alt=""
            />
            <div className="songRow__info">
                <h1>{song.name}</h1>
                <p>
                    {song.artists.map((artists) => artists.name).join(", ")}
                    {song.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
