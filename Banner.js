import React, { useState, useEffect } from 'react';
import { bannerArray } from '../data/dashboardData';

const Banner = ({ id, text, button, btn_name, link }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerArray.length);
    }, 10000); //DURATION OF CHANGING 

    return () => clearInterval(interval);
  }, []);

  const banner = bannerArray[currentBannerIndex];

  return (
    <div className="banner" id={banner.id}>
      <p>{banner.text}</p>
      {button && (
        <a href={banner.link} className="button">
          {banner.btn_name}
        </a>
      )}
    </div>
  );
};

export default Banner;
