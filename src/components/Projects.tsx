'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Users, Zap, Calendar, Eye, Code2 } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      title: "AI チャットボット",
      description: "自然言語処理を活用した多言語対応のインテリジェントチャットボット。企業の顧客サポートを自動化し、24/7対応を実現。",
      image: "/api/placeholder/400/250",
      tags: ["Python", "OpenAI", "FastAPI", "React"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "完成",
      members: 4,
      period: "2024.09 - 2024.12",
      impact: "3つの企業で導入済み",
      category: "AI/ML"
    },
    {
      title: "スマートIoTダッシュボード",
      description: "IoTデバイスからのリアルタイムデータを可視化し、分析するダッシュボード。環境監視からエネルギー管理まで対応。",
      image: "/api/placeholder/400/250",
      tags: ["Next.js", "TypeScript", "AWS IoT", "D3.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "開発中",
      members: 6,
      period: "2024.10 - 進行中",
      impact: "大学内5箇所でテスト運用",
      category: "IoT"
    },
    {
      title: "ブロックチェーン投票システム",
      description: "透明性と改ざん防止を実現した次世代投票システム。スマートコントラクトによる自動集計機能付き。",
      image: "/api/placeholder/400/250",
      tags: ["Solidity", "Web3.js", "React", "Ethereum"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "企画中",
      members: 3,
      period: "2025.01 - 予定",
      impact: "学内選挙での実用化を目標",
      category: "Blockchain"
    },
    {
      title: "AR学習アプリ",
      description: "拡張現実技術を活用した教育アプリ。3Dモデルとインタラクティブな体験で学習効果を最大化。",
      image: "/api/placeholder/400/250",
      tags: ["Unity", "ARCore", "C#", "Firebase"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "完成",
      members: 5,
      period: "2024.06 - 2024.09",
      impact: "1000+ ダウンロード達成",
      category: "AR/VR"
    },
    {
      title: "音声認識翻訳システム",
      description: "リアルタイム音声認識と多言語翻訳を組み合わせた革新的なコミュニケーションツール。",
      image: "/api/placeholder/400/250",
      tags: ["Python", "TensorFlow", "WebRTC", "Vue.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "開発中",
      members: 4,
      period: "2024.11 - 進行中",
      impact: "国際交流イベントで活用",
      category: "AI/ML"
    },
    {
      title: "健康管理AIアシスタント",
      description: "機械学習を活用したパーソナル健康管理システム。生活習慣の分析と改善提案を自動化。",
      image: "/api/placeholder/400/250",
      tags: ["Python", "scikit-learn", "React Native", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      status: "企画中",
      members: 3,
      period: "2025.02 - 予定",
      impact: "ヘルスケア分野への貢献",
      category: "AI/ML"
    }
  ];

  const filters = [
    { id: 'all', name: '全て', count: projects.length },
    { id: 'AI/ML', name: 'AI・機械学習', count: projects.filter(p => p.category === 'AI/ML').length },
    { id: 'IoT', name: 'IoT', count: projects.filter(p => p.category === 'IoT').length },
    { id: 'Blockchain', name: 'ブロックチェーン', count: projects.filter(p => p.category === 'Blockchain').length },
    { id: 'AR/VR', name: 'AR・VR', count: projects.filter(p => p.category === 'AR/VR').length }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case '完成': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case '開発中': return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case '企画中': return 'bg-orange-500/20 text-orange-400 border-orange-500/40';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/40';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case '完成': return '✅';
      case '開発中': return '⚡';
      case '企画中': return '💡';
      default: return '❓';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full mb-6 shadow-lg">
            <Code2 className="w-8 h-8 text-white drop-shadow-lg" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              私たちのプロジェクト
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
            革新的なアイデアと最新技術を組み合わせた、実際に社会で使える
            <br />
            <span className="text-cyan-300 font-semibold">実用的なプロダクト</span>を開発しています
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border flex items-center gap-2 ${
                selectedFilter === filter.id
                  ? 'bg-emerald-500/25 text-emerald-300 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                  : 'bg-slate-800/50 text-gray-300 border-slate-600/50 hover:border-emerald-500/40 hover:text-emerald-300'
              }`}
            >
              {filter.name}
              <span className="bg-slate-700/50 px-2 py-1 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-slate-800/60 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/40 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/10"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-700/30 to-slate-800/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                    <span className="mr-1">{getStatusIcon(project.status)}</span>
                    {project.status}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-slate-900/90 backdrop-blur-sm rounded-full text-xs text-amber-300 border border-amber-500/40">
                    {project.category}
                  </div>
                </div>

                {/* Project Meta */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{project.members}人</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs">{project.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="mb-4 p-3 bg-slate-700/30 rounded-lg border border-amber-500/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium text-white">インパクト</span>
                  </div>
                  <p className="text-sm text-gray-300">{project.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 ${
                          tagIndex % 3 === 0 ? 'bg-blue-500/20 text-blue-300 border-blue-500/40 hover:border-blue-400/60' :
                          tagIndex % 3 === 1 ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:border-amber-400/60' :
                          'bg-purple-500/20 text-purple-300 border-purple-500/40 hover:border-purple-400/60'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-gray-200 rounded-lg hover:from-slate-600 hover:to-slate-500 hover:text-white transition-all duration-200 border border-slate-600/50 hover:border-slate-500/50 shadow-lg"
                  >
                    <Github className="w-4 h-4" />
                    <span className="font-medium">コード</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="font-medium">デモ</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 backdrop-blur-sm border border-slate-600/40 shadow-xl">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4 shadow-lg">
                <Zap className="w-6 h-6 text-white drop-shadow-sm" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              一緒にプロジェクトを作りませんか？
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
              Tech Circleでは常に新しいアイデアとメンバーを募集しています。
              あなたの技術と創造力で、社会に影響を与えるプロダクトを作りましょう。
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full text-white font-semibold hover:from-emerald-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
            >
              プロジェクトに参加する
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
