import React from 'react';
import '../App.css';
import logo from '../assets/logo.png';
import homeIcon from '../assets/home.png';
import searchIcon from '../assets/ser.png';
import libraryIcon from '../assets/lib.png';
import createPlaylistIcon from '../assets/cr.png';
import likedSongsIcon from '../assets/like.png';
import episodesIcon from '../assets/hot.png';
import installIcon from '../assets/down.png';

const sidebarItems = [
    { icon: homeIcon, label: 'Home' },
    { icon: searchIcon, label: 'Search' },
    { icon: libraryIcon, label: 'Your Library' },
    { icon: createPlaylistIcon, label: 'Create Playlist' },
    { icon: likedSongsIcon, label: 'Liked Songs' },
    { icon: episodesIcon, label: 'Your Episodes' },
];

function Slider() {
    return (
        <div className="slidebar">
            <div className="logo">
                <img src={logo} alt="Logo" style={{ width: '160px' }} />
            </div>


            {sidebarItems.map((item, index) => (
                <div className={`item-${index}`} key={index}>
                    <img src={item.icon} alt={item.label} style={{ width: '30px' }} />
                    <div style={{ marginTop: '15px', marginLeft: '20px' }}>{item.label}</div>
                </div>
            ))}

            <div style={{ marginTop: '20px', marginLeft: '30px' }}>Abc</div>
            <div style={{ marginTop: '10px', marginLeft: '30px' }}>Fav</div>
            <div style={{ marginTop: '10px', marginLeft: '30px' }}>Love</div>
            <div style={{ marginTop: '10px', marginLeft: '30px' }}>Dfdb</div>
            <div style={{ marginTop: '10px', marginLeft: '30px' }}>Bdshrtf</div>

            <div className="down">
                <img src={installIcon} alt="Install App" style={{ width: '30px' }} />
                <div style={{ marginTop: '6px', marginLeft: '10px' }}>Install App</div>
            </div>
        </div>
    );
}

export default Slider;
