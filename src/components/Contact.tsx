'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "メール",
      details: "info@techcircle.dev",
      link: "mailto:info@techcircle.dev"
    },
    {
      icon: MapPin,
      title: "所在地",
      details: "東京都渋谷区",
      link: null
    },
    {
      icon: Phone,
      title: "電話番号",
      details: "+81 (0) 3-XXXX-XXXX",
      link: "tel:+81-3-XXXX-XXXX"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/techcircle",
      color: "hover:text-gray-400"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/techcircle",
      color: "hover:text-blue-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/techcircle",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/techcircle",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating creative text elements */}
      <div className="absolute top-16 left-12 transform -rotate-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 1.5, type: "spring", bounce: 0.6 }}
          className="text-cyan-300 text-lg font-bold bg-slate-800/80 px-4 py-2 rounded-full border border-cyan-400/40 backdrop-blur-sm"
        >
          CONTACT US 📬
        </motion.div>
      </div>

      <div className="absolute top-1/3 right-12 transform rotate-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 2.0, type: "spring" }}
          className="text-purple-300 text-sm font-mono bg-slate-800/80 px-3 py-2 rounded-lg border border-purple-400/40 backdrop-blur-sm"
        >
          お気軽に 💌
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 left-20 transform -rotate-3">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 2.5, type: "spring" }}
          className="text-amber-300 text-xl font-bold flex items-center gap-2"
        >
          LET'S CONNECT <span className="text-2xl animate-bounce">🤝</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-amber-500 rounded-full mb-6 shadow-2xl relative"
          >
            <Mail className="w-10 h-10 text-white drop-shadow-lg" />
            {/* Floating decorative elements */}
            <div className="absolute -top-2 -right-2 text-yellow-300 text-lg animate-pulse">✨</div>
            <div className="absolute -bottom-2 -left-2 text-blue-300 text-sm animate-bounce">📧</div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="text-4xl md:text-5xl font-bold mb-6 relative"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              お問い合わせ 📞
            </span>
            {/* Floating decorations */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-8 text-yellow-300 text-2xl"
            >
              💌
            </motion.div>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            発足から2ヶ月、着実に成長するTech サークルへの参加をお考えの方 🎯、
            <br />
            技術について情報交換したい方 💡、
            <br />
            <span className="text-cyan-300 font-semibold">お気軽にお声がけください</span> ✨。
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">メッセージを送る</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                    placeholder="田中太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                    placeholder="tanaka@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  件名 *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                  placeholder="プロジェクト参加について"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  メッセージ *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 resize-none"
                  placeholder="お気軽にメッセージをお送りください..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
              >
                <Send className="w-5 h-5" />
                メッセージを送信
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">連絡先情報</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">フォローする</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className={`w-12 h-12 bg-slate-800/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 border border-blue-500/20 hover:border-blue-500/40`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="h-64 bg-slate-800/30 rounded-lg backdrop-blur-sm border border-blue-500/20 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-400">インタラクティブマップ</p>
                <p className="text-sm text-gray-500 mt-2">東京都渋谷区周辺</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-20 pt-8 border-t border-blue-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2025 Tech Circle. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
