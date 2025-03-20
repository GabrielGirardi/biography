import React, { useState, useRef, FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { toast } from '../components/ui/use-toast';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: t('messageSent'),
        description: new Date().toLocaleTimeString(),
      });

      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      if (formRef.current) {
        formRef.current.reset();
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-kawasaki-green/10 px-3 py-1 rounded-full text-sm font-medium text-kawasaki-green mb-4 animate-on-scroll opacity-0">
            {t('contact')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll opacity-0">
            {t('contactTitle')}
          </h2>
          <p className="text-gray-600 animate-on-scroll opacity-0">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's talk
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-kawasaki-green/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-kawasaki-green" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:dev.ggirardi@gmail.com" className="text-gray-600 hover:text-kawasaki-green transition-colors cursor-hover">
                      dev.ggirardi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-kawasaki-green/10 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-kawasaki-green" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">
                      Santa Catarina, Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-kawasaki-green/10 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-kawasaki-green" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+5547997135921" className="text-gray-600 hover:text-kawasaki-green transition-colors cursor-hover">
                      +55 (47) 99713-5921
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Social</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Instagram:</span>
                     <a href="https://www.instagram.com/gabriell_girardii/" terget="_blank">
                       @gabriell_girardii
                     </a>
                  </li>
                  <li className="flex justify-between">
                    <span>Linkedin:</span>
                    <a href="https://www.linkedin.com/in/ggirardii/" terget="_blank">
                      in/ggirardii
                    </a>
                  </li>
                  <li className="flex justify-between">
                    <span>Github:</span>
                     <a href="https://github.com/gabrielgirardi/" terget="_blank">
                       GabrielGirardi
                     </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="order-1 lg:order-2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('nameLabel')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kawasaki-green/30 focus:border-kawasaki-green transition-colors cursor-text"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('emailLabel')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kawasaki-green/30 focus:border-kawasaki-green transition-colors cursor-text"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('messageLabel')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kawasaki-green/30 focus:border-kawasaki-green transition-colors cursor-text"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-kawasaki-green text-white font-medium transition-all hover:shadow-lg hover:shadow-kawasaki-green/20 hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed cursor-hover"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('loading')}
                  </>
                ) : (
                  <>
                    {t('sendMessage')}
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-bl from-kawasaki-green/10 to-transparent rounded-full opacity-50 translate-y-1/4 translate-x-1/4"></div>
    </section>
  );
};

export default ContactSection;