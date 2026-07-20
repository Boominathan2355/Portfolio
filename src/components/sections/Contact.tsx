import { FC, useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Section from '../layout/Section';
import { PortfolioConfig } from '../../config/portfolio.config';

interface ContactProps {
  data: PortfolioConfig;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const EMAILJS_CONFIGURED = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

if (!EMAILJS_CONFIGURED) {
  console.warn(
    'Contact form is not configured: set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, ' +
    'and VITE_EMAILJS_PUBLIC_KEY in .env (see .env.example) to enable email delivery.'
  );
}

const Contact: FC<ContactProps> = ({ data }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error' | 'unconfigured'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!EMAILJS_CONFIGURED || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('unconfigured');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <Section id="contact" title="Contact" subtitle="Reach out for collaboration, opportunities, or just to say hello.">
      {/* Info row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { label: 'Email', value: data.email, href: `mailto:${data.email}` },
          { label: 'Phone', value: data.phone, href: `tel:${data.phone}` },
          { label: 'Location', value: data.location },
        ].map((item) => (
          <div key={item.label} className="card p-4">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">{item.label}</p>
            {item.href ? (
              <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all">
                {item.value}
              </a>
            ) : (
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            )}
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="card p-6 max-w-2xl">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="user_name" className="text-xs font-medium text-muted-foreground block mb-1.5">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="input"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="text-xs font-medium text-muted-foreground block mb-1.5">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className="input"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="text-xs font-medium text-muted-foreground block mb-1.5">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="input"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-medium text-muted-foreground block mb-1.5">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="input resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full sm:w-auto"
          >
            {status === 'sending' ? (
              <>Sending...</>
            ) : status === 'sent' ? (
              <><CheckCircle size={16} /> Sent successfully</>
            ) : status === 'error' ? (
              <><AlertCircle size={16} /> Failed to send</>
            ) : status === 'unconfigured' ? (
              <><AlertCircle size={16} /> Email not configured</>
            ) : (
              <><Send size={16} /> Send Message</>
            )}
          </button>
          {status === 'unconfigured' && (
            <p className="text-xs text-muted-foreground">
              This form isn't wired up yet — set the <code>VITE_EMAILJS_*</code> variables in <code>.env</code> (see <code>.env.example</code>).
            </p>
          )}
        </form>
      </div>
    </Section>
  );
};

export default Contact;
