'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Twitter, Linkedin, Users } from 'lucide-react';

const Members = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const members = [
    {
      name: "田中 智也",
      role: "Tech Lead",
      specialties: ["React", "Node.js", "AWS"],
      avatar: "👨‍💻",
      bio: "フルスタックエンジニアとして5年以上の経験を積み、チームのテクニカルリードを務める。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "佐藤 美咲",
      role: "AI/ML Engineer",
      specialties: ["Python", "TensorFlow", "Data Science"],
      avatar: "👩‍🔬",
      bio: "機械学習と深層学習のスペシャリスト。データサイエンスの研究と実用化に取り組む。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "山田 健太",
      role: "Mobile Developer",
      specialties: ["React Native", "Flutter"],
      avatar: "📱",
      bio: "モバイルアプリ開発のエキスパート。ユーザビリティを重視したアプリを制作。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "鈴木 花音",
      role: "UI/UX Designer",
      specialties: ["Figma", "Adobe XD", "Prototyping"],
      avatar: "🎨",
      bio: "ユーザー中心のデザインを重視し、美しく直感的なインターフェースを設計。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <section id="members" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            メンバー
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            多様なバックグラウンドを持つメンバーが集まり、技術の向上と知識の共有に取り組んでいます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors border border-slate-700/50"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{member.avatar}</div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-400 text-sm font-medium">{member.role}</p>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex-1 flex items-center justify-center p-2 bg-slate-700/50 text-gray-300 rounded hover:bg-slate-600/50 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex-1 flex items-center justify-center p-2 bg-blue-500/20 text-blue-300 rounded hover:bg-blue-500/30 hover:text-blue-200 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex-1 flex items-center justify-center p-2 bg-blue-600/20 text-blue-300 rounded hover:bg-blue-600/30 hover:text-blue-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
