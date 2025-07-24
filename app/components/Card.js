import React, { useState, useRef, useEffect } from 'react';
import styles from './Card.module.css'; // CSS Module

const Card = ({ dataImage, header, content }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const mouseLeaveTimeoutRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      setDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      });
    }
  }, []);

  const mousePX = dimensions.width ? mousePos.x / dimensions.width : 0;
  const mousePY = dimensions.height ? mousePos.y / dimensions.height : 0;

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - dimensions.width / 2;
      const y = e.clientY - rect.top - dimensions.height / 2;
      setMousePos({ x, y });
    }
  };

  const handleMouseEnter = () => {
    if (mouseLeaveTimeoutRef.current) {
      clearTimeout(mouseLeaveTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    mouseLeaveTimeoutRef.current = setTimeout(() => {
      setMousePos({ x: 0, y: 0 });
    }, 1000);
  };

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
  };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`,


  };

  return (
    <div
      className={styles.cardWrap}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles.card} relative`} style={cardStyle}>
      <video
  className={`${styles.cardBg} absolute inset-0 object-cover w-full h-full`}
  style={cardBgTransform}
  src={dataImage}
  autoPlay
  loop
  muted
  playsInline
></video>

        <div className={styles.cardInfo}>
          <h1 className={styles.header}>{header}</h1>
          <p className={`${styles.para} mt-[10] leading-normal`}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
