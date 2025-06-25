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
      description: "最新技術の習得と実践を通じて、学生同士で切磋琢磨し、技術で社会に貢献できる人材を目指しています。"
    },
    {
      icon: Users,
      title: "コミュニティ",
      description: "様々な学部・学年のメンバーが集まり、お互いの知識とスキルを共有し合う学習コミュニティです。"
    },
    {
      icon: Lightbulb,
      title: "革新",
      description: "創造的な思考と最新技術を組み合わせ、学生ならではの自由な発想でプロジェクトに取り組んでいます。"
    },
    {
      icon: Rocket,
      title: "成長",
      description: "個人の成長とサークル全体のスキル向上を重視し、先輩後輩が共に学べる環境を提供しています。"
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
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              私たちについて
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            私たちTech Circleは、技術への情熱を共有し、
            共に学び成長する学生サークルです。
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
            <p className="text-gray-300 text-lg mb-6">
              私たちは単なる学習グループではありません。実際のプロジェクトを通じて、
              メンバー一人一人が技術スキルを向上させ、同時に実社会に貢献できる
              ソリューションを開発しています。
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Web開発、AI・機械学習、モバイルアプリ開発、IoTなど、
              幅広い技術分野をカバーし、メンバーの興味と市場のニーズに
              合わせたプロジェクトを展開しています。
            </p>
            <div className="flex flex-wrap gap-4">
              {['React', 'Next.js', 'TypeScript', 'Python', 'AI/ML', 'ブロックチェーン'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 font-medium"
                >
                  {tech}
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
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300">アクティブメンバー</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                  <div className="text-gray-300">プロジェクト</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">5+</div>
                  <div className="text-gray-300">年間の活動</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-300">情熱</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 bg-slate-800/30 rounded-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
