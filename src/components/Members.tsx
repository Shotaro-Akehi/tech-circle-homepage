'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Twitter, Linkedin, Award, Code, Database, Palette } from 'lucide-react';

const Members = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const members = [
    {
      name: "田中 智也",
      role: "Tech Lead / Full-stack Developer",
      specialties: ["React", "Node.js", "AWS", "TypeScript"],
      avatar: "🧑‍💻",
      bio: "5年以上のWeb開発経験を持つフルスタックエンジニア。クリーンなコードと効率的な設計を重視。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "佐藤 美咲",
      role: "AI/ML Engineer",
      specialties: ["Python", "TensorFlow", "PyTorch", "Data Science"],
      avatar: "👩‍🔬",
      bio: "機械学習と深層学習のスペシャリスト。データから価値あるインサイトを抽出することが得意。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "山田 健太",
      role: "Mobile Developer",
      specialties: ["React Native", "Flutter", "iOS", "Android"],
      avatar: "📱",
      bio: "モバイルアプリ開発のエキスパート。ユーザビリティと性能の両立を追求。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "鈴木 花音",
      role: "UI/UX Designer",
      specialties: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      avatar: "🎨",
      bio: "ユーザー中心のデザインを重視。美しく直感的なインターフェースを設計。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "高橋 涼介",
      role: "DevOps Engineer",
      specialties: ["Docker", "Kubernetes", "AWS", "CI/CD"],
      avatar: "⚙️",
      bio: "インフラストラクチャとデプロイメントの自動化を専門とする。安定性とスケーラビリティを重視。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "伊藤 千尋",
      role: "Blockchain Developer",
      specialties: ["Solidity", "Web3", "DeFi", "NFT"],
      avatar: "🔗",
      bio: "ブロックチェーン技術の最前線で活動。分散型アプリケーションの開発を主導。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    }
  ];

  const getRoleIcon = (role: string) => {
    if (role.includes('Developer') || role.includes('Engineer')) return Code;
    if (role.includes('Designer')) return Palette;
    if (role.includes('Data') || role.includes('AI')) return Database;
    return Award;
  };

  return (
    <section id="members" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              私たちのチーム
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            多様な専門分野を持つ情熱的なメンバーが、
            革新的なプロジェクトを推進しています。
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Code className="w-8 h-8 text-white" />
          </div>
          <div className="text-2xl font-bold text-blue-400 mb-1">15+</div>
          <div className="text-gray-400 text-sm">開発者</div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Palette className="w-8 h-8 text-white" />
          </div>
          <div className="text-2xl font-bold text-indigo-400 mb-1">8+</div>
          <div className="text-gray-400 text-sm">デザイナー</div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Database className="w-8 h-8 text-white" />
          </div>
          <div className="text-2xl font-bold text-cyan-400 mb-1">12+</div>
          <div className="text-gray-400 text-sm">データサイエンティスト</div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          <div className="text-2xl font-bold text-green-400 mb-1">25+</div>
          <div className="text-gray-400 text-sm">総メンバー数</div>
        </div>
        </motion.div>

        {/* Featured Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {members.map((member, index) => {
            const RoleIcon = getRoleIcon(member.role);
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <div className="flex items-center justify-center gap-2 text-blue-400 mb-2">
                    <RoleIcon className="w-4 h-4" />
                    <span className="text-sm">{member.role}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm mb-4 text-center leading-relaxed">
                  {member.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md border border-blue-500/30"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              私たちと一緒に働きませんか？
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Tech Circleは常に新しいメンバーを募集しています。
              あなたのスキルと情熱を私たちのプロジェクトに活かしてください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                チームに参加する
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                募集要項を見る
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Members;
