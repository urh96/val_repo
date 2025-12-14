
import React, { useState } from 'react';
import Button from './ui/Button.tsx';

interface ContactProps {
  initialMessage?: string;
}

const Contact: React.FC<ContactProps> = ({ initialMessage = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(initialMessage);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      if (name && email && message) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const inputStyles = "block w-full border-0 border-b border-gray-300 bg-transparent py-3 px-1 text-neutral-dark placeholder:text-gray-400 focus:ring-0 focus:border-brand-dark sm:text-sm sm:leading-6 transition-colors";

  return (
    <section id="contact" className="py-20 sm:py-32 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark">Pripravljeni na sodelovanje?</h2>
          <p className="mt-4 text-lg text-neutral-text">
            Pošljite nam povpraševanje in z veseljem vam pripravimo neobvezujočo ponudbo.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="sr-only">Ime in priimek</label>
              <input type="text" name="name" id="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Ime in priimek" className={inputStyles} />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Vaš email naslov" className={inputStyles} />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Sporočilo</label>
              <textarea name="message" id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Opišite vaše želje (npr. vrsta pohištva, dimenzije, materiali...)" className={inputStyles}></textarea>
            </div>
            <div className="pt-4 text-center">
              <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Pošiljanje...' : 'Pošlji povpraševanje'}
              </Button>
            </div>
            <div className="text-center text-sm text-gray-500 h-5">
              {status === 'success' && <p className="text-green-700">Hvala! Vaše sporočilo je bilo uspešno poslano.</p>}
              {status === 'error' && <p className="text-red-700">Napaka. Prosimo, izpolnite vsa polja.</p>}
              {status === 'idle' && <p>Odgovorimo v 24-48 urah.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
