'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Twitter, Linkedin, Award, Code, Database, Palette, Users, Heart, Star, Coffee, Zap, Calendar, Briefcase } from 'lucide-react';

const Members = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedRole, setSelectedRole] = useState('all');

  const roles = [
    { id: 'all', name: '全メンバー', icon: Users, color: 'blue' },
    { id: 'tech-lead', name: 'テックリード', icon: Code, color: 'green' },
    { id: 'ai-ml', name: 'AI・ML', icon: Database, color: 'purple' },
    { id: 'mobile', name: 'モバイル', icon: Zap, color: 'orange' },
    { id: 'design', name: 'デザイン', icon: Palette, color: 'pink' },
    { id: 'backend', name: 'バックエンド', icon: Award, color: 'cyan' }
  ];

  const members = [
    {
      name: "田中 智也",
      role: "Tech Lead / Full-stack Developer",
      specialties: ["React", "Node.js", "AWS", "TypeScript"],
      avatar: "🧑‍💻",
      bio: "5年以上のWeb開発経験を持つフルスタックエンジニア。クリーンなコードと効率的な設計を重視し、チームの技術的成長をサポート。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      joinDate: "2023年4月",
      projects: 8,
      category: "tech-lead",
      achievements: ["ハッカソン優勝", "OSS貢献者", "メンター"],
      hobbies: ["コーヒー", "読書", "ゲーム"],
      favoriteQuote: "コードは詩のように美しく"
    },
    {
      name: "佐藤 美咲",
      role: "AI/ML Engineer",
      specialties: ["Python", "TensorFlow", "PyTorch", "Data Science"],
      avatar: "👩‍🔬",
      bio: "機械学習と深層学習のスペシャリスト。データから価値あるインサイトを抽出することが得意で、学術研究と実用化の橋渡しを担当。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      joinDate: "2023年6月",
      projects: 6,
      category: "ai-ml",
      achievements: ["論文発表", "Kaggle Expert", "AI競技会入賞"],
      hobbies: ["数学", "料理", "ヨガ"],
      favoriteQuote: "データに真実が隠されている"
    },
    {
      name: "山田 健太",
      role: "Mobile Developer",
      specialties: ["React Native", "Flutter", "iOS", "Android"],
      avatar: "📱",
      bio: "モバイルアプリ開発のエキスパート。ユーザビリティと性能の両立を追求し、ユーザーに愛されるアプリを作ることに情熱を注ぐ。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      joinDate: "2023年8月",
      projects: 5,
      category: "mobile",
      achievements: ["アプリストア掲載", "UIコンテスト受賞", "ユーザビリティ賞"],
      hobbies: ["写真", "旅行", "音楽"],
      favoriteQuote: "良いUXは見えないもの"
    },
    {
      name: "鈴木 花音",
      role: "UI/UX Designer",
      specialties: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      avatar: "🎨",
      bio: "ユーザー中心のデザインを重視。美しく直感的なインターフェースを設計し、技術とデザインの架け橋となる役割を担う。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      joinDate: "2023年9月",
      projects: 7,
      category: "design",
      achievements: ["デザイン賞受賞", "デザインシステム構築", "アクセシビリティ推進"],
      hobbies: ["アート", "カフェ巡り", "ガーデニング"],
      favoriteQuote: "デザインは問題解決の手段"
    },
    {
      name: "高橋 勇樹",
      role: "Backend Engineer",
      specialties: ["Go", "Docker", "Kubernetes", "PostgreSQL"],
      avatar: "⚙️",
      bio: "スケーラブルなバックエンドシステムの設計・構築が専門。パフォーマンス最適化とセキュリティを重視した開発を行う。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      joinDate: "2023年5月",
      projects: 9,
      category: "backend",
      achievements: ["システム最適化", "セキュリティ強化", "DevOps推進"],
      hobbies: ["映画", "釣り", "料理"],
      favoriteQuote: "最高のコードは見えないコード"
    },
    {
      name: "伊藤 あかり",
      role: "Frontend Engineer",
      specialties: ["Vue.js", "Nuxt.js", "SCSS", "Animation"],
      avatar: "💫",
      bio: "美しく使いやすいフロントエンドの実装が得意。アニメーションと優れたユーザー体験の創造に情熱を注ぐ新進気鋭のエンジニア。",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      joinDate: "2023年10月",
      projects: 4,
      category: "frontend",
      achievements: ["アニメーション賞", "新人賞", "UI革新賞"],
      hobbies: ["ダンス", "イラスト", "カフェ"],
      favoriteQuote: "美しさは機能に宿る"
    }
  ];

  const teamStats = [
    { number: "50+", label: "アクティブメンバー", icon: Users, color: "blue" },
    { number: "25+", label: "完成プロジェクト", icon: Star, color: "yellow" },
    { number: "3年", label: "サークル歴", icon: Calendar, color: "green" },
    { number: "100%", label: "成長意欲", icon: Heart, color: "red" }
  ];

  const filteredMembers = selectedRole === 'all' 
    ? members 
    : members.filter(member => member.category === selectedRole);

  const getRoleColor = (roleId: string) => {
    const role = roles.find(r => r.id === roleId);
    switch (role?.color) {
      case 'green': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'purple': return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
      case 'orange': return 'bg-orange-500/20 text-orange-400 border-orange-500/40';
      case 'pink': return 'bg-pink-500/20 text-pink-400 border-pink-500/40';
      case 'cyan': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
    }
  };

  return (
    <section id="members" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              私たちのチーム
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            多様なバックグラウンドと情熱を持つメンバーが集まり、
            <br />
            <span className="text-blue-400 font-semibold">技術への愛</span>と
            <span className="text-cyan-400 font-semibold">温かい絆</span>で結ばれたファミリーです
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {teamStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 bg-slate-800/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center bg-gradient-to-br ${
                stat.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                stat.color === 'yellow' ? 'from-yellow-500 to-orange-500' :
                stat.color === 'green' ? 'from-emerald-500 to-green-500' :
                'from-red-500 to-pink-500'
              } group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Role Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border flex items-center gap-2 ${
                selectedRole === role.id
                  ? getRoleColor(role.id)
                  : 'bg-slate-800/50 text-gray-400 border-slate-600/50 hover:border-blue-500/30 hover:text-blue-400'
              }`}
            >
              <role.icon className="w-4 h-4" />
              {role.name}
            </button>
          ))}
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Member Header */}
              <div className="relative p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs text-blue-400 border border-blue-500/30">
                    {member.joinDate}加入
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-float">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-300 font-medium mb-4">{member.role}</p>
                  
                  {/* Quick Stats */}
                  <div className="flex justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{member.projects}件</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{member.achievements.length}受賞</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Member Content */}
              <div className="p-6">
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Quote */}
                <div className="mb-6 p-4 bg-slate-700/30 rounded-lg border-l-4 border-blue-500/50">
                  <p className="text-blue-300 italic text-sm">
                    &ldquo;{member.favoriteQuote}&rdquo;
                  </p>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-400" />
                    専門技術
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hobbies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-cyan-400" />
                    趣味・興味
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.hobbies.map((hobby) => (
                      <span
                        key={hobby}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-400" />
                    実績・受賞
                  </h4>
                  <div className="space-y-2">
                    {member.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <Star className="w-3 h-3 text-yellow-400" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-slate-600/50 hover:text-white transition-all duration-200 border border-slate-600/50 hover:border-slate-500/50"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 hover:text-blue-200 transition-all duration-200 border border-blue-500/30 hover:border-blue-500/50"
                  >
                    <Twitter className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600/20 text-blue-300 rounded-lg hover:bg-blue-600/30 hover:text-blue-200 transition-all duration-200 border border-blue-600/30 hover:border-blue-600/50"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20">
            <div className="mb-6">
              <Heart className="w-12 h-12 text-cyan-400 mx-auto mb-4 animate-heartbeat" />
              <h3 className="text-2xl font-bold text-white mb-4">
                私たちの仲間になりませんか？
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Tech Circleは技術だけでなく、温かい人間関係を大切にするコミュニティです。
                あなたの個性と情熱を活かして、一緒に素晴らしいものを作りましょう。
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              メンバーになる
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Members;