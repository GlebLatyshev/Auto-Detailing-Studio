import car1 from '../assets/images/reviews/car1.jpg'
import car2 from '../assets/images/reviews/car2.jpg'
import men1 from '../assets/images/reviews/men1.jpg'
import men2 from '../assets/images/reviews/men2.jpg'

export default function Reviews() {
  const reviews = [
    {
      name: 'Алексей Р.',
      text: 'Отличная работа! Машина выглядит как новая. Керамика держится уже полгода — мою гораздо реже.',
      car: 'Audi RS6',
      avatar: men1,
      carImage: car1,
    },
    {
      name: 'Дмитрий К.',
      text: 'Делали полный комплекс + шумку. Очень аккуратно, всё объяснили. Рекомендую.',
      car: 'Mercedes GLE 53',
      avatar: men2,
      carImage: car2,
    },
  ];

  return (
    <section style={{ background: '#111' }}>
      <div className="container">
        <h2 className="section-title">Отзывы клиентов</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: '#1a1a1f',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid #2a2a2f',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Аватарка + имя + машина */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img
                  src={r.avatar}
                  alt={r.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #d4a017',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{r.name}</div>
                  <div style={{ opacity: 0.7, fontSize: '0.95rem' }}>{r.car}</div>
                </div>
              </div>

              {/* Текст отзыва */}
              <p style={{ fontStyle: 'italic', margin: '16px 0', lineHeight: 1.6 }}>
                «{r.text}»
              </p>

              {/* Фото автомобиля */}
              <img
                src={r.carImage}
                alt={`${r.car} после детейлинга`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  marginTop: 'auto',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}