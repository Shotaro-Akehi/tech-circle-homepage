'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Mail, Heart, ExternalLink, Activity } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "サークル情報",
      links: [
        { name: "概要", href: "#about" },
        { name: "メンバー", href: "#members" },
        { name: "プロジェクト", href: "#projects" },
        { name: "ブログ", href: "#blog" }
      ]
    },
    {
      title: "参加について",
      links: [
        { name: "入会方法", href: "#join" },
        { name: "活動時間", href: "#schedule" },
        { name: "必要スキル", href: "#skills" },
        { name: "FAQ", href: "#faq" }
      ]
    },
    {
      title: "お問い合わせ",
      links: [
        { name: "連絡先", href: "#contact" },
        { name: "見学申込", href: "#visit" },
        { name: "質問", href: "#questions" },
        { name: "協力依頼", href: "#partnership" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/techcircle", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/techcircle", label: "Twitter" },
    { icon: Mail, href: "mailto:info@techcircle.dev", label: "Email" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50">
      {/* Status indicator */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-slate-900 px-6 py-2 rounded-full border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Activity className="w-4 h-4 text-emerald-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-sm text-emerald-400 font-medium">サービス稼働中</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Tech Circle
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                技術で繋がり、共に成長する学生サークル。
                最新技術を学び、実践し、未来を創造します。
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/30"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (sectionIndex + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * linkIndex }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-1 group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-slate-800/50"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Tech Circle. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>by Tech Circle members</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Built with Next.js • TypeScript • Tailwind CSS • Framer Motion
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
