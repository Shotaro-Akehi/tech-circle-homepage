'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star, Users } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AI チャットボット",
      description: "自然言語処理を活用した多言語対応のインテリジェントチャットボット。企業の顧客サポートを自動化し、24/7対応を実現。",
      image: "/api/placeholder/400/250",
      tags: ["Python", "OpenAI", "FastAPI", "React"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "完成",
      members: 4
    },
    {
      title: "スマートIoTダッシュボード",
      description: "IoTデバイスからのリアルタイムデータを可視化し、分析するダッシュボード。環境監視からエネルギー管理まで対応。",
      image: "/api/placeholder/400/250",
      tags: ["Next.js", "TypeScript", "AWS IoT", "D3.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "開発中",
      members: 6
    },
    {
      title: "ブロックチェーン投票システム",
      description: "透明性と改ざん防止を実現した次世代投票システム。スマートコントラクトによる自動集計機能付き。",
      image: "/api/placeholder/400/250",
      tags: ["Solidity", "Web3.js", "React", "Ethereum"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "企画中",
      members: 3
    },
    {
      title: "AR学習アプリ",
      description: "拡張現実技術を活用した教育アプリ。3Dモデルとインタラクティブな体験で学習効果を最大化。",
      image: "/api/placeholder/400/250",
      tags: ["Unity", "ARCore", "C#", "Firebase"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "完成",
      members: 5
    },
    {
      title: "音声認識翻訳システム",
      description: "リアルタイム音声認識と多言語翻訳を組み合わせた革新的なコミュニケーションツール。",
      image: "/api/placeholder/400/250",
      tags: ["Python", "TensorFlow", "WebRTC", "Vue.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "開発中",
      members: 4
    },
    {
      title: "健康管理AIアシスタント",
      description: "機械学習を活用したパーソナル健康管理システム。生活習慣の分析と改善提案を自動化。",
      image: "/api/placeholder/400/250",
      tags: ["Python", "scikit-learn", "React Native", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "企画中",
      members: 3
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '完成': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case '開発中': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case '企画中': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            革新的なアイデアと最新技術を組み合わせた、実際に社会で使える
            プロダクトを開発しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                    <Star className="w-8 h-8 text-white/70" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {project.members} メンバー
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-all duration-200 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-300 hover:text-purple-200 border border-purple-500/30 hover:border-purple-500/50 rounded-lg transition-all duration-200 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              プロジェクトに参加しませんか？
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              私たちと一緒に革新的なプロジェクトを開発し、
              技術スキルを向上させながら実社会に貢献しましょう。
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Join Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
