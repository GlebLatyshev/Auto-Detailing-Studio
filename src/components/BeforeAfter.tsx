
import bmwBefore from '../assets/images/rezultati/YellowDo.jpg';
import bmwAfter from '../assets/images/rezultati/YellowPosle.jpg';
import porscheBefore from '../assets/images/rezultati/BlackDo.jpg';
import porscheAfter from '../assets/images/rezultati/BlackPosle.jpg';
import g63Before from '../assets/images/rezultati/BlackDverDo.jpg';
import g63After from '../assets/images/rezultati/BlackDverPosle.jpg';



export default function BeforeAfter() {
  const examples = [
    {
      car: 'BMW M5 F90',
      work: 'Полная полировка + керамика 3 слой',
      before: bmwBefore,
      after: bmwAfter,
    },
    {
      car: 'Porsche 911 Turbo S',
      work: 'Антигравий + PPF + керамика',
      before: porscheBefore,
      after: porscheAfter,
    },
    {
      car: 'Mercedes G63',
      work: 'Химчистка салона + керамика дисков',
      before: g63Before,
      after: g63After,
    },
  ];

  return (
    <section id="results" style={{ background: '#0a0a0e' }}>
      <div className="container">
        <h2 className="section-title">Результаты работ</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '40px',
          }}
        >
          {examples.map((ex, i) => (
            <div
              key={i}
              style={{
                background: '#111',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #222',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              {/* Блок с фотографиями До / После */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Фото ДО */}
                <div style={{ position: 'relative' }}>
                  <img
                    src={ex.before}
                    alt={`До — ${ex.car}`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '220px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'rgba(0,0,0,0.65)',
                      color: '#fff',
                      padding: '6px 14px',
                      borderRadius: 8,
                      fontSize: '0.95rem',
                      fontWeight: 600,
                    }}
                  >
                    ДО
                  </div>
                </div>

                {/* Фото ПОСЛЕ */}
                <div style={{ position: 'relative' }}>
                  <img
                    src={ex.after}
                    alt={`После — ${ex.car}`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '220px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'rgba(0,0,0,0.65)',
                      color: '#fff',
                      padding: '6px 14px',
                      borderRadius: 8,
                      fontSize: '0.95rem',
                      fontWeight: 600,
                    }}
                  >
                    ПОСЛЕ
                  </div>
                </div>
              </div>

              {/* Подпись */}
              <div style={{ padding: '20px' }}>
                <h3 style={{ margin: '0 0 8px 0' }}>{ex.car}</h3>
                <p style={{ margin: 0, opacity: 0.85, fontSize: '0.98rem' }}>
                  {ex.work}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}