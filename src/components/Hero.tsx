'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Heart, Users, Rocket, Star } from 'lucide-react';

const Hero = () => {
  const stats = [
    { number: "50+", label: "アクティブメンバー", icon: Users },
    { number: "25+", label: "完成プロジェクト", icon: Rocket },
    { number: "100+", label: "学習セッション", icon: Star }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with warm tones */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-500/8 to-yellow-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo with enhanced animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              type: "spring",
              damping: 10
            }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 rounded-full mb-6 shadow-lg shadow-blue-500/25 relative">
              <Code className="w-12 h-12 text-white" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 animate-pulse opacity-30"></div>
            </div>
          </motion.div>

          {/* Enhanced Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6 relative"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent inline-block animate-gradient bg-300% bg-left">
              Tech Circle
            </span>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-bounce"></div>
          </motion.h1>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              最新技術を学び、共に成長する技術系サークル
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              <span className="text-blue-400 font-semibold">革新</span> と{' '}
              <span className="text-cyan-400 font-semibold">協力</span> と{' '}
              <span className="text-purple-400 font-semibold">温かさ</span> で未来を創造します
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {stat.number}
                  </span>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                サークルに参加
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              詳しく見る
            </motion.button>
          </motion.div>

          {/* Enhanced Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: Code,
                title: "最新技術",
                description: "最新の技術スタックを学習し、実践的なプロジェクトを開発",
                gradient: "from-blue-500 to-cyan-500",
                hoverGradient: "from-blue-600 to-cyan-600"
              },
              {
                icon: Heart,
                title: "温かいコミュニティ",
                description: "互いに学び合い、成長し合える家族のような環境",
                gradient: "from-purple-500 to-pink-500",
                hoverGradient: "from-purple-600 to-pink-600"
              },
              {
                icon: Zap,
                title: "革新への挑戦",
                description: "革新的なアイデアを形にし、技術で社会に貢献",
                gradient: "from-orange-500 to-yellow-500",
                hoverGradient: "from-orange-600 to-yellow-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group text-center p-8 bg-slate-800/30 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} group-hover:bg-gradient-to-br group-hover:${feature.hoverGradient} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400 animate-pulse">スクロールして詳細を見る</span>
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
