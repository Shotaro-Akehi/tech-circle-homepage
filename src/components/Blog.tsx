'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, User, ArrowRight, Heart, MessageCircle, Share2, BookOpen, Clock, Tag } from 'lucide-react';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全て', color: 'blue' },
    { id: 'tech', name: '技術', color: 'green' },
    { id: 'project', name: 'プロジェクト', color: 'purple' },
    { id: 'event', name: 'イベント', color: 'orange' },
    { id: 'member', name: 'メンバー', color: 'pink' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Next.js 15の新機能を使ったWebアプリ開発",
      excerpt: "最新のNext.js 15で追加された新機能を実際のプロジェクトで活用した体験記。App Routerの改善点や新しいAPIについて詳しく解説します。",
      author: "田中 太郎",
      date: "2025-01-15",
      category: "tech",
      readTime: "8分",
      tags: ["Next.js", "React", "TypeScript", "Web開発"],
      likes: 24,
      comments: 8,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "AI画像生成アプリを開発した話",
      excerpt: "機械学習を使った画像生成アプリの開発プロセスを紹介。技術選定から実装、デプロイまでの全工程を詳しく説明します。",
      author: "佐藤 花子",
      date: "2025-01-10",
      category: "project",
      readTime: "12分",
      tags: ["AI", "Python", "機械学習", "画像生成"],
      likes: 42,
      comments: 15,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "第1回Tech Circle Hackathon開催レポート",
      excerpt: "サークル初のハッカソンイベントを開催しました。参加者の作品紹介や運営の裏側、次回への改善点などをまとめています。",
      author: "山田 次郎",
      date: "2025-01-05",
      category: "event",
      readTime: "6分",
      tags: ["ハッカソン", "イベント", "チーム開発", "コミュニティ"],
      likes: 38,
      comments: 12,
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "初心者から始めるTypeScript入門",
      excerpt: "JavaScript経験者向けのTypeScript入門記事。基本文法から実践的な使い方まで、実際のコード例とともに解説します。",
      author: "鈴木 三郎",
      date: "2025-01-01",
      category: "tech",
      readTime: "10分",
      tags: ["TypeScript", "JavaScript", "初心者向け", "プログラミング"],
      likes: 56,
      comments: 23,
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "新メンバー紹介：私たちの成長ストーリー",
      excerpt: "今期新しく加入したメンバーの紹介と、サークル活動を通じての成長体験談。技術学習の軌跡や仲間との出会いについて語ります。",
      author: "新メンバー一同",
      date: "2024-12-28",
      category: "member",
      readTime: "7分",
      tags: ["メンバー紹介", "成長", "学習", "コミュニティ"],
      likes: 31,
      comments: 18,
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Dockerを使った開発環境構築のベストプラクティス",
      excerpt: "チーム開発で重要な開発環境の統一。Dockerを活用した効率的な開発環境構築方法と、実際のプロジェクトでの運用経験を共有します。",
      author: "高橋 美咲",
      date: "2024-12-20",
      category: "tech",
      readTime: "9分",
      tags: ["Docker", "開発環境", "DevOps", "チーム開発"],
      likes: 45,
      comments: 11,
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    switch (cat?.color) {
      case 'green': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'purple': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'orange': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'pink': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 via-purple-500 to-blue-500 rounded-full mb-6 shadow-lg">
            <BookOpen className="w-8 h-8 text-white drop-shadow-lg" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Blog
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            メンバーが技術学習や開発体験、サークル活動について
            <br />
            <span className="text-amber-300 font-semibold">リアルな体験談と知見</span>を共有しています
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                selectedCategory === category.id
                  ? getCategoryColor(category.id)
                  : 'bg-slate-800/50 text-gray-400 border-slate-600/50 hover:border-amber-500/40 hover:text-amber-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Post Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}>
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-white/80">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('ja-JP')}</span>
                  </div>
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                    <button className="hover:text-blue-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm group">
                    続きを読む
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
            もっと読む
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
