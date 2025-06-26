'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "ミッション",
      description: "2025年4月に発足した私たちは、エンジニア同士の情報交換と学習を通じて、技術で社会に貢献できる人材を育成します。"
    },
    {
      icon: Users,
      title: "コミュニティ",
      description: "初心者から経験者まで、様々なバックグラウンドを持つエンジニアが気軽に集まり、知識とスキルを共有し合える場を提供します。"
    },
    {
      icon: Lightbulb,
      title: "学習",
      description: "新しい技術のインプットから実践的なプロジェクトまで、メンバーが継続的に成長できる学習環境を整えています。"
    },
    {
      icon: Rocket,
      title: "成長",
      description: "個人のスキルアップとコミュニティ全体の発展を両立し、メンバー全員が成長し続けられる環境を提供しています。"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              私たちについて
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-medium mb-4">
            Tech サークルは、2025年4月に新しく発足した技術系コミュニティです。
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            エンジニア同士が気軽に集まり、情報交換や新しい知識のインプットができる場を目指しています。
            発足から2ヶ月が経過し、初心者から経験者まで、多様なメンバーが集まって学び合い、成長し合える温かいコミュニティとして歩み始めています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              技術で未来を創造する
            </h3>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              私たちは単なる学習グループではありません。実際のプロジェクトを通じて、
              メンバー一人一人が技術スキルを向上させ、同時に実社会に貢献できる
              ソリューションを開発しています。
            </p>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              Web開発、AI・機械学習、モバイルアプリ開発、IoTなど、
              幅広い技術分野をカバーし、メンバーの興味と市場のニーズに
              合わせたプロジェクトを展開しています。
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'React', color: 'from-blue-500/30 to-blue-600/30 border-blue-400/40 text-blue-300' },
                { name: 'Next.js', color: 'from-slate-500/30 to-slate-600/30 border-slate-400/40 text-slate-300' },
                { name: 'TypeScript', color: 'from-blue-500/30 to-indigo-600/30 border-blue-400/40 text-blue-300' },
                { name: 'Python', color: 'from-yellow-500/30 to-amber-600/30 border-amber-400/40 text-amber-300' },
                { name: 'AI/ML', color: 'from-purple-500/30 to-purple-600/30 border-purple-400/40 text-purple-300' },
                { name: 'ブロックチェーン', color: 'from-emerald-500/30 to-emerald-600/30 border-emerald-400/40 text-emerald-300' }
              ].map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className={`px-4 py-2 bg-gradient-to-r ${tech.color} border rounded-full font-medium hover:scale-105 transition-transform duration-200`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 backdrop-blur-sm border border-slate-600/30 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">50+</div>
                  <div className="text-gray-200">アクティブメンバー</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
                  <div className="text-gray-200">プロジェクト</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-gray-200">年間の活動</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                  <div className="text-gray-200">情熱</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const colors = [
              'from-blue-500 to-blue-600',
              'from-purple-500 to-purple-600', 
              'from-amber-500 to-amber-600',
              'from-emerald-500 to-emerald-600'
            ];
            const borderColors = [
              'border-slate-600/30 hover:border-blue-500/40',
              'border-slate-600/30 hover:border-purple-500/40',
              'border-slate-600/30 hover:border-amber-500/40',
              'border-slate-600/30 hover:border-emerald-500/40'
            ];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className={`text-center p-6 bg-slate-800/40 rounded-xl backdrop-blur-sm border ${borderColors[index]} transition-all duration-300 group hover:shadow-lg`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white drop-shadow-sm" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
