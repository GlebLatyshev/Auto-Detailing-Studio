// src/components/Services.tsx
import conceptualWash from '../assets/images/services/conceptual-wash.jpg';
import ceramicCoating from '../assets/images/services/ceramic-coating.jpg';
import polishing from '../assets/images/services/polishing.jpg';
import interiorCleaning from '../assets/images/services/interior-cleaning.jpg';
import antiRain from '../assets/images/services/anti-rain.jpg';
import ppfFilm from '../assets/images/services/ppf-film.jpg';

export default function Services() {
  const services = [
    {
      title: 'Концептуальная мойка',
      desc: 'Многоступенчатая бесконтактная + контактная мойка с использованием премиум химии',
      image: conceptualWash,
    },
    {
      title: 'Керамическое покрытие',
      desc: 'Защита ЛКП на 2–5 лет. Гидрофобный эффект, блеск, легкость мойки',
      image: ceramicCoating,
    },
    {
      title: 'Полировка кузова',
      desc: 'Удаление царапин, круговых рисок, восстановление глубины цвета',
      image: polishing,
    },
    {
      title: 'Химчистка салона',
      desc: 'Глубокая очистка всех поверхностей, озонирование, антибактериальная обработка',
      image: interiorCleaning,
    },
    {
      title: 'Антидождь / антигрязь',
      desc: 'Гидрофобные составы для стёкол и дисков',
      image: antiRain,
    },
    {
      title: 'Защита плёнкой',
      desc: 'Антигравийные и декоративные плёнки',
      image: ppfFilm,
    },
  ];

  return (
    <section id="services" style={{ background: '#0a0a0e' }}>
      <div className="container">
        <h2 className="section-title">Услуги</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                background: '#111',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #222',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              className="service-card hover-lift" // hover в global.scss
            >
              {/* Фото услуги сверху */}
              <div style={{ height: '180px', overflow: 'hidden' }}>
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s',
                  }}
                />
              </div>

              <div style={{ padding: '24px 20px' }}>
                <h3 style={{ color: '#d4a017', marginBottom: '12px', fontSize: '1.4rem' }}>
                  {s.title}
                </h3>
                <p style={{ opacity: 0.9, lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}