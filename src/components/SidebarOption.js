import React from 'react'
import './SidebarOption.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function SidebarOption({ title, Icon, playlistId }) {

    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ?
                <h4>{title}</h4>
                :
                <Link className="sidebarOption__link" to={`/playlist/${playlistId}`}>
                    {title}
                </Link>
            }
        </div>
    )
}

export default SidebarOption
