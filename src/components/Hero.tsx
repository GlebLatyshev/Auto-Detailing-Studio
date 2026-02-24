
import { Link } from 'react-scroll';
import heroVideo from '../assets/video/hero-car-wash.mp4'; 

import { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; 
    }
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src={heroVideo} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

        {/* Оверлей для читаемости текста */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(15, 15, 20, 0.55)',
            zIndex: -1,
          }}
        />
      </div>

      <div className="hero-content">
        <h1>Профессиональный детейлинг<br/>во Владивостоке</h1>
        <h2>Для тех, кто ценит свой автомобиль</h2>
        <div className="buttons">
          <Link to="contacts" smooth className="btn-primary">
            Записаться на детейлинг
          </Link>
          <Link to="services" smooth className="btn-outline">
            Посмотреть услуги
          </Link>
        </div>
      </div>
    </section>
  );
}