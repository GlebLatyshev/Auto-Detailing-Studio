export default function Footer() {
  return (
    <footer style={{
      background: '#050507',
      padding: '60px 0 30px',
      textAlign: 'center',
      borderTop: '1px solid #1a1a22'
    }}>
      <div className="container">
        <p style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '16px' }}>
          Premium Detailing Vladivostok
        </p>
        <p style={{ marginBottom: '24px' }}>
          Острякова 49 • +7 (950) 284-36-39 • Ежедневно 09:00–21:00
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '40px' }}>
          <a href="https://www.instagram.com/ml_detailing_vl?igsh=MXA4OTYwN292a2VheQ==" style={{color:'#d4a017'}}>Instagram</a>
          <a href="https://t.me/AVTO_DITEILING_SEM" style={{color:'#d4a017'}}>Telegram</a>
          <a href="https://vk.com/h5mran4ik" style={{color:'#d4a017'}}>ВКонтакте</a>
        </div>

        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
          © Premium Detailing Vladivostok 2026. Все права защищены.
        </p>
      </div>
    </footer>
  )
}