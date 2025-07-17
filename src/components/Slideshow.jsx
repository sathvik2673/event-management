import React from 'react';
import '../styles.css';
import img1 from '../assets/event1.jpg';
import img2 from '../assets/event2.jpg';
import img3 from '../assets/event3.jpg';

const Slideshow = () => {
  const images = [img1, img2, img3];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow">
      <img src={images[index]} alt="event" />
    </div>
  );
};

export default Slideshow;
