"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden group">
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-[100px] border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-all duration-500" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
        <div>
          <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight uppercase">
            Join the Clean Energy Revolution
          </h3>
          <p className="text-lg text-gray-400 max-w-md">
            Subscribe to receive our annual performance reports and the latest innovations in solar technology.
          </p>
        </div>

        <div>
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-black/40 border-white/10 h-16 px-6 rounded-2xl focus:border-yellow-500/50 transition-all text-lg placeholder:text-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="h-16 px-10 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg rounded-2xl transition-transform active:scale-95 flex gap-2">
                Subscribe <Send className="w-5 h-5" />
              </Button>
            </form>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-4 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-yellow-500 font-bold"
            >
              <CheckCircle className="w-8 h-8" />
              <div>
                <p className="text-xl">Successfully Subscribed!</p>
                <p className="text-sm font-medium opacity-70 italic whitespace-nowrap">Welcome to the future of energy, we'll talk soon.</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
