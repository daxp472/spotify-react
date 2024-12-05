import React from 'react';
import '../App.css';
import footerPlayIcon from '../assets/play.png';
import footerNextIcon from '../assets/ext.png';
import footerHeartIcon from '../assets/her.png';
import footerSongIcon from '../assets/image11.png';

function End() {
  return (
    <footer className="footer">
      <img src={footerSongIcon} alt="Song Icon" style={{ width: '30px', height: '30px' }} />
      <div>
        <div>Dreaming On</div>
        <div>NEFFEX</div>
      </div>
      <img src={footerHeartIcon} alt="Heart Icon" style={{ width: '30px', height: '30px' }} />
      <img src={footerPlayIcon} alt="Play Icon" style={{ width: '490px', height: '50px' , marginLeft: '50px' }} />
      <img src={footerNextIcon} alt="Next Icon" style={{ width: '380px', height: '45px' , marginLeft: '50px' }} />
    </footer>
  );
}

export default End;
