import { ArticleDetailItem } from "../services/newsService";
import { User, Clock, Calendar, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ArticleDetail({ article }: { article: ArticleDetailItem }) {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/news" className="inline-flex items-center gap-2 text-gray-500 hover:text-yellow-500 mb-12 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to News
        </Link>

        {/* Header */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded-full uppercase tracking-widest border border-yellow-500/20">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 py-6 border-y border-white/5 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readingTime}</span>
            </div>
            <button className="ml-auto flex items-center gap-2 hover:text-yellow-500 transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>

        {/* Banner Mockup */}
        <div className="aspect-video w-full rounded-[2rem] bg-white/5 border border-white/10 mb-16 flex items-center justify-center overflow-hidden">
          <span className="text-gray-800 font-black text-6xl uppercase opacity-20">Article Hero Image</span>
        </div>

        {/* Main Content */}
        <article className="prose prose-invert prose-yellow max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed font-medium mb-10">
            {article.excerpt}
          </p>
          <div className="text-gray-400 text-lg leading-loose space-y-6">
            {article.content.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>

        <div className="mt-20 pt-12 border-t border-white/5">
          <h4 className="text-xl font-bold mb-8">Related Articles</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Simple Related Article Placeholders */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <p className="text-yellow-500 text-[10px] font-bold uppercase mb-2">Previous</p>
              <h5 className="font-bold">Innovations in Clean Energy Storage</h5>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <p className="text-yellow-500 text-[10px] font-bold uppercase mb-2">Next</p>
              <h5 className="font-bold">Expanding Our Global Footprint: TTT Solar in South East Asia</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
