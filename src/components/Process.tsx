export default function Process() {
  const steps = [
    { num: '01', title: 'Диагностика и согласование', desc: 'Осмотр автомобиля, подбор оптимального пакета услуг' },
    { num: '02', title: 'Предварительная мойка', desc: 'Двухфазная бесконтактная мойка' },
    { num: '03', title: 'Химчистка / полировка / нанесение', desc: 'Основной этап работ' },
    { num: '04', title: 'Финальная мойка и консервация', desc: 'Контроль качества, фотоотчёт' },
  ]

  return (
    <section id="process" style={{ background: '#111' }}>
      <div className="container">
        <h2 className="section-title">Как мы работаем</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
          {steps.map((step, i) => (
            <div key={i}>
              <div style={{
                fontSize: '3.6rem',
                fontWeight: 700,
                color: '#d4a01733',
                marginBottom: '-20px'
              }}>{step.num}</div>
              <h3 style={{ marginBottom: '12px' }}>{step.title}</h3>
              <p style={{ opacity: 0.8 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}