// src/components/Contacts.tsx
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

// Схема валидации (остаётся без изменений)
const schema = yup.object({
  name: yup.string().required('Введите имя'),
  phone: yup.string().required('Введите телефон'),
  car: yup.string(),
  service: yup.string(),
  comment: yup.string(),
});

type FormData = yup.InferType<typeof schema>;

export default function Contacts() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('sending');

    // Получаем значения из .env (Vite автоматически подставит)
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: data.name,
          phone: data.phone,
          car: data.car || '-',
          service: data.service || '-',
          message: data.comment || '-',
        },
        publicKey
      );

      setStatus('success');
      reset(); // очищаем форму
    } catch (err) {
      console.error('Ошибка отправки:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contacts" style={{ background: '#0a0a0e', paddingBottom: '80px' }}>
      <div className="container">
        <h2 className="section-title">Связаться с нами</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          <div>
            <h3 style={{ marginBottom: '24px' }}>Оставьте заявку</h3>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input {...register('name')} placeholder="Ваше имя *" />
              {errors.name && <span style={{ color: '#ff6b6b' }}>{errors.name.message}</span>}

              <input {...register('phone')} placeholder="Телефон *" />
              {errors.phone && <span style={{ color: '#ff6b6b' }}>{errors.phone.message}</span>}

              <input {...register('car')} placeholder="Автомобиль (модель, год)" />

              <select {...register('service')}>
                <option value="">Выберите услугу</option>
                <option value="Керамика">Керамическое покрытие</option>
                <option value="Полировка">Полировка кузова</option>
                <option value="Химчистка">Химчистка салона</option>
                <option value="Комплекс">Комплексный уход</option>
              </select>

              <textarea {...register('comment')} placeholder="Комментарий / пожелания" rows={4} />

              <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Отправка...' : 'Отправить заявку'}
              </button>

              {status === 'success' && (
                <p style={{ color: '#90ee90' }}>Спасибо! Свяжемся с вами в течение 15 минут.</p>
              )}
              {status === 'error' && (
                <p style={{ color: '#ff6b6b' }}>Произошла ошибка. Попробуйте позже или позвоните.</p>
              )}
            </form>
          </div>

          <div>
            <h3 style={{ marginBottom: '24px' }}>Контакты</h3>
            <p style={{ marginBottom: '16px' }}>г. Владивосток, ул. Острякова, 49</p>
            <p style={{ marginBottom: '16px', fontSize: '1.4rem', fontWeight: 600 }}>
              <a href="tel:+79644444847" style={{ color: '#d4a017' }}>
                +7 (950) 284-36-39
              </a>
            </p>
            <p style={{ marginBottom: '32px' }}>Ежедневно с 09:00 до 21:00</p>

            {/* Responsive Google Maps — остаётся без изменений */}
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '75%',
                borderRadius: '12px',
                background: '#222',
              }}
            >
              <iframe
                title="Premium Detailing Vladivostok — Острякова 49"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.4348793665795!2d131.90054257756455!3d43.13739649089149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb392207cea5943%3A0x8f6b20112bde8218!2z0L_RgC4g0J7RgdGC0YDRj9C60L7QstCwLCA0OSwg0JLQu9Cw0LTQuNCy0L7RgdGC0L7Quiwg0J_RgNC40LzQvtGA0YHQutC40Lkg0LrRgNCw0LksIDY5MDAwMg!5e0!3m2!1sru!2sru!4v1771316306581!5m2!1sru!2sru"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}