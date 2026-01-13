
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareText } from 'lucide-react';

interface FloatingAgentButtonProps {
  onClick: () => void;
}

const FloatingAgentButton: React.FC<FloatingAgentButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-[70] w-16 h-16 bg-[#007BFF] text-white rounded-full shadow-[0_10px_30px_rgba(0,123,255,0.4)] flex items-center justify-center border-4 border-white group"
    >
      <MessageSquareText size={28} className="group-hover:rotate-12 transition-transform" />
      <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Falar com Consultor
      </span>
    </motion.button>
  );
};

export default FloatingAgentButton;
