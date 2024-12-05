import React from 'react';
import '../App.css';
import img1 from '../assets/img1.png';
import profileImg from '../assets/img2.png';
import likedPlaylistImg from '../assets/Liked.png';
import neffexPlaylistImg from '../assets/image4.png';
import kdaImg from '../assets/image3.png';
import danceElectronicImg from '../assets/image1.png';
import productImages from '../assets/products'; 

const playlists = [
  { img: likedPlaylistImg, text: 'Liked Songs' },
  { img: neffexPlaylistImg, text: 'Neffex Playlist' },
  { img: kdaImg, text: 'K/DA' },
  { img: danceElectronicImg, text: 'Dance / Electronic Mix' },
];

const products = [
  { img: productImages.product1Img, name: 'Product 1' },
  { img: productImages.product2Img, name: 'Product 2' },
  { img: productImages.product3Img, name: 'Product 3' },
  { img: productImages.product4Img, name: 'Product 4' },
  { img: productImages.product5Img, name: 'Product 5' },
  { img: productImages.product6Img, name: 'Product 6' },
];

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
          {playlists.map((playlist, index) => (
            <div className={`part-${index + 1}`} key={index}>
              <img src={playlist.img} alt={playlist.text} />
              <div className="text">{playlist.text}</div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="shows-title">Shows You Might Like</div>
      <div className="content">
        {products.map((product, index) => (
          <div className="box-1" key={index}>
            <img src={product.img} alt={product.name} />
            <div>{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
