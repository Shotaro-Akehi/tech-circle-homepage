'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Heart, Users, Rocket, Star } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const stats = [
    { number: "18", label: "メンバー", icon: Users },
    { number: "5", label: "進行中プロジェクト", icon: Rocket },
    { number: "15+", label: "勉強会開催", icon: Star }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with improved contrast and warmth */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-amber-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-amber-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Floating particles with varied colors */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-ping ${
              i % 3 === 0 ? 'bg-blue-400/40' : 
              i % 3 === 1 ? 'bg-amber-400/40' : 
              'bg-purple-400/40'
            }`}
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
            <div className="inline-flex items-center justify-center mb-6 relative">
              <Image
                src="/tech-circle-logo.png" 
                alt="Tech サークル" 
                width={200}
                height={80}
                className="drop-shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse blur-2xl rounded-lg"></div>
            </div>
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
            <div className="inline-flex items-center justify-center mb-6 relative">
              <Image
                src="/tech-circle-logo.png" 
                alt="Tech サークル" 
                width={200}
                height={80}
                className="drop-shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse blur-2xl rounded-lg"></div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
              Tech Circle
            </span>
          </motion.h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
              2025年4月に誕生した新しい技術コミュニティ
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-3">
              エンジニア同士が気軽に集まり、知識を共有し合える場所として、着実に成長中
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              <span className="text-cyan-300 font-semibold">学び合い</span>、{' '}
              <span className="text-purple-300 font-semibold">成長し合い</span>、{' '}
              <span className="text-pink-300 font-semibold">つながり合う</span> コミュニティを目指します
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
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
                  <stat.icon className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                  <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {stat.number}
                  </span>
                </div>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
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
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                サークルに参加
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-400 text-blue-300 rounded-full font-semibold hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
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
                gradient: "from-blue-500 to-blue-600",
                hoverGradient: "from-blue-600 to-blue-700",
                borderColor: "border-blue-500/30"
              },
              {
                icon: Heart,
                title: "温かいコミュニティ",
                description: "互いに学び合い、成長し合える家族のような環境",
                gradient: "from-purple-500 to-pink-500",
                hoverGradient: "from-purple-600 to-pink-600",
                borderColor: "border-purple-500/30"
              },
              {
                icon: Zap,
                title: "革新への挑戦",
                description: "革新的なアイデアを形にし、技術で社会に貢献",
                gradient: "from-amber-500 to-orange-500",
                hoverGradient: "from-amber-600 to-orange-600",
                borderColor: "border-amber-500/30"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group text-center p-8 bg-slate-800/40 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:${feature.borderColor} transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} group-hover:bg-gradient-to-br group-hover:${feature.hoverGradient} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
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
          <span className="text-sm text-gray-300 animate-pulse">スクロールして詳細を見る</span>
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
