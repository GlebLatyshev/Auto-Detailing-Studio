export default function About() {
  return (
    <section className="about" style={{ background: '#111' }}>
      <div className="container">
        <h2 className="section-title">Почему выбирают нас</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
          <div>
            <h3>Премиум-материалы</h3>
            <p>Только проверенная профессиональная химия и покрытия от мировых лидеров</p>
          </div>
          <div>
            <h3>Гарантия результата</h3>
            <p>До 5 лет на керамические покрытия при соблюдении рекомендаций</p>
          </div>
          <div>
            <h3>Индивидуальный подход</h3>
            <p>Работаем с редкими и коллекционными автомобилями</p>
          </div>
          <div>
            <h3>Прозрачность</h3>
            <p>Фото- и видеоотчёт каждого этапа работ</p>
          </div>
        </div>
      </div>
    </section>
  )
}