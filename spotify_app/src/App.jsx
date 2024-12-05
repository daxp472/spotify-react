import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import homeIcon from './assets/home.png';
import searchIcon from './assets/ser.png';
import libraryIcon from './assets/lib.png';
import createPlaylistIcon from './assets/cr.png';
import likedSongsIcon from './assets/like.png';
import episodesIcon from './assets/hot.png';
import installIcon from './assets/down.png';
import img1 from './assets/img1.png';
import profileImg from './assets/img2.png';
import likedPlaylistImg from './assets/Liked.png';
import neffexPlaylistImg from './assets/image4.png';
import kdaImg from './assets/image3.png';
import danceElectronicImg from './assets/image1.png';
import product1Img from './assets/image9.png';
import product2Img from './assets/image8.png';
import product3Img from './assets/image7.png';
import product4Img from './assets/image6.png';
import product5Img from './assets/image5.png';
import product6Img from './assets/image10.png';
import footerPlayIcon from './assets/play.png';
import footerNextIcon from './assets/ext.png';
import footerHeartIcon from './assets/her.png';
import footerSongIcon from './assets/image11.png';

function App() {
  return (
    <div className="App">
      <div className="slidebar">
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: '160px' }} />
        </div>

        <div className="home">
          <img src={homeIcon} alt="Home" style={{ width: '30px' }} />
          <div style={{ marginTop: '15px', marginLeft: '20px' }}>Home</div>
        </div>
        <div className="search">
          <img src={searchIcon} alt="Search" style={{ width: '30px' }} />
          <div style={{ marginTop: '15px', marginLeft: '20px' }}>Search</div>
        </div>
        <div className="lib">
          <img src={libraryIcon} alt="Library" style={{ width: '30px' }} />
          <div style={{ marginTop: '15px', marginLeft: '20px' }}>Your Library</div>
        </div>
        <div className="cr">
          <img src={createPlaylistIcon} alt="Create Playlist" style={{ width: '30px' }} />
          <div style={{ marginTop: '15px', marginLeft: '20px' }}>Create Playlist</div>
        </div>
        <div className="like">
          <img src={likedSongsIcon} alt="Liked Songs" style={{ width: '30px' }} />
          <div style={{ marginTop: '15px', marginLeft: '20px' }}>Liked Songs</div>
        </div>
        <div className="hot">
          <img src={episodesIcon} alt="Your Episodes" style={{ width: '30px' }} />
          <div style={{ marginTop: '15px', marginLeft: '20px' }}>Your Episodes</div>
        </div>

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

      <div className="main-container">

        <div className="header">
          <div className="leftimg">
            <img src={img1} style={{ width: '130px' }} alt="Left" />
          </div>
          <div className="profile">
            <img src={profileImg} alt="User" />
          </div>
        </div>


        <div className="header-2">Good Morning</div>


        <div className="counter">
          <div className="counter-1">
            <div className="part-1">
              <img src={likedPlaylistImg} alt="Liked" />
              <div className="text">Liked Songs</div>
            </div>
            <div className="part-2">
              <img src={neffexPlaylistImg} alt="Neffex Playlist" />
              <div className="text">Neffex Playlist</div>
            </div>
            <div className="part-3">
              <img src={kdaImg} alt="K/DA" />
              <div className="text">K/DA</div>
            </div>
            <div className="part-4">
              <img src={danceElectronicImg} alt="Dance/Electronic Mix" />
              <div className="text">Dance / Electronic Mix</div>
            </div>
          </div>
        </div>


        <div className="shows-title">Shows You Might Like</div>
        <div className="content">
          <div className="box-1">
            <img src={product1Img} alt="Product 1" />
            <div>Product 1</div>
          </div>
          <div className="box-1">
            <img src={product2Img} alt="Product 2" />
            <div>Product 2</div>
          </div>
          <div className="box-1">
            <img src={product3Img} alt="Product 3" />
            <div>Product 3</div>
          </div>
          <div className="box-1">
            <img src={product4Img} alt="Product 4" />
            <div>Product 4</div>
          </div>
          <div className="box-1">
            <img src={product5Img} alt="Product 5" />
            <div>Product 5</div>
          </div>
          <div className="box-1">
            <img src={product6Img} alt="Product 6" />
            <div>Product 6</div>
          </div>
        </div>
      </div>


      <footer className="footer">
        <img src={footerSongIcon} alt="Song Icon" style={{ width: '30px', height: '30px' }} />
        <div>
          <div>Dreaming On</div>
          <div>NEFFEX</div>
        </div>
        <img src={footerHeartIcon} alt="Heart Icon" style={{ width: '30px', height: '30px' }} />
        <img src={footerPlayIcon} alt="Play Icon" style={{ width: '30px', height: '30px' }} />
        <img src={footerNextIcon} alt="Next Icon" style={{ width: '30px', height: '30px' }} />
      </footer>
    </div>
  );
}

export default App;
