import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PersonalData } from '../data/personalData';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface ContactProps {
  data: PersonalData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldMap: { [key: string]: string } = {
      'user_name': 'name',
      'user_email': 'email',
      'subject': 'subject',
      'message': 'message'
    };
    
    setFormData(prev => ({
      ...prev,
      [fieldMap[name] || name]: value
    }));
  };
  
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      if (form.current) {
        const response = await emailjs.sendForm(
          'service_pq94cro', 
          'template_2nvgjbk', 
          form.current,
          'PGW4Eamxodp5iiWLl' 
        );

        if (response.status === 200) {
          setSubmitStatus('success');
          toast.success('Message sent! I will get back to you soon.');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };
  
  const contactInfo = [
    { 
      icon: <Mail className="w-6 h-6" />, 
      label: 'Email', 
      value: data.email, 
      href: `mailto:${data.email}`,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
    },
    { 
      icon: <Phone className="w-6 h-6" />, 
      label: 'Phone', 
      value: data.phone, 
      href: `tel:${data.phone}`,
      color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
    },
    { 
      icon: <MapPin className="w-6 h-6" />, 
      label: 'Location', 
      value: data.location,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative Overlays */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/20 dark:bg-primary-900/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary-100/20 dark:bg-secondary-900/10 blur-3xl rounded-full"></div>

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Cards */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center p-6 rounded-2xl glass border border-white/20 dark:border-gray-800/50 shadow-lg hover:scale-105 transition-all group"
              >
                <div className={`p-4 rounded-xl mr-6 ${info.color} group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-1">
                    {info.label}
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <div className="p-8 rounded-3xl bg-primary-600 text-white shadow-2xl shadow-primary-500/20 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Let's create something!</h3>
                <p className="opacity-90">Always open to new projects and innovative ideas.</p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl glass border border-white/20 dark:border-gray-800/50 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Name</label>
                  <input 
                    type="text" id="user_name" name="user_name"
                    value={formData.name} onChange={handleChange} required
                    className="form-input" placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email</label>
                  <input 
                    type="email" id="user_email" name="user_email"
                    value={formData.email} onChange={handleChange} required
                    className="form-input" placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6 space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                <input 
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange} required
                  className="form-input" placeholder="How can I help?"
                />
              </div>
              
              <div className="mb-8 space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                <textarea 
                  id="message" name="message"
                  value={formData.message} onChange={handleChange} required rows={5}
                  className="form-input resize-none" placeholder="Let's talk about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full !rounded-2xl h-14 text-lg shadow-2xl ${
                  submitStatus === 'success' ? '!bg-green-500' : 
                  submitStatus === 'error' ? '!bg-red-500' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : submitStatus === 'success' ? (
                  'Message Sent!'
                ) : submitStatus === 'error' ? (
                  'Error - Try Again'
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Contact;