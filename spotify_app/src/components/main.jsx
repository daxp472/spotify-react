import React from 'react';
import '../App.css';
import img1 from '../assets/img1.png';
import profileImg from '../assets/img2.png';
import likedPlaylistImg from '../assets/Liked.png';
import neffexPlaylistImg from '../assets/image4.png';
import kdaImg from '../assets/image3.png';
import danceElectronicImg from '../assets/image1.png';
import product1Img from '../assets/image9.png';
import product2Img from '../assets/image8.png';
import product3Img from '../assets/image7.png';
import product4Img from '../assets/image6.png';
import product5Img from '../assets/image5.png';
import product6Img from '../assets/image10.png';

function App() {

    return (
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
    )

}

export default App;