import React from 'react';
import { Home, Compass, Settings, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  index: number;
}

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: Home,
      title: "Сборка на вашем участке",
    },
    {
      icon: Compass,
      title: "Свой архитектор",
    },
    {
      icon: Settings,
      title: "Гибкая комплектация",
    },
    {
      icon: ShieldCheck,
      title: "Гарантия 3 года",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glows - Animated pulsing */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[128px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[128px] pointer-events-none" 
      />

      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight"
        >
          Что делает нас{' '}
          <span className="font-['Marck_Script'] text-orange-300 drop-shadow-[0_0_15px_rgba(255,160,50,0.8)] relative inline-block">
            <motion.span
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 blur-md text-orange-500 select-none" 
              aria-hidden="true"
            >
              особенными
            </motion.span>
            <span className="relative z-10">особенными</span>
          </span>
        </motion.h2>
      </div>

      {/* Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10"
      >
        {features.map((feature, index) => (
          <GlassCard key={index} {...feature} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

// Individual Card Component
const GlassCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      className="group flex flex-col items-center"
    >
      {/* Main Card */}
      <div className="relative w-full aspect-[4/5] rounded-[2rem] p-[2px] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl transition-transform duration-500 hover:-translate-y-4 hover:shadow-orange-900/20">
        
        {/* Glass Effect Layers */}
        <div className="absolute inset-0 rounded-[2rem] bg-black/40 backdrop-blur-sm" />
        
        {/* Inner Content Container */}
        <div className="relative h-full w-full bg-[#0a0a0a] rounded-[1.8rem] flex flex-col items-center justify-center p-6 border border-white/5 overflow-hidden">
          
          {/* Subtle architectural background pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
          </div>

          {/* Icon Container with hover animation */}
          <motion.div 
            className="mb-6 relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Icon Glow */}
            <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full group-hover:bg-orange-500/40 transition-colors duration-500" />
            <Icon 
              size={64} 
              strokeWidth={1.5}
              className="text-orange-200 drop-shadow-[0_0_8px_rgba(255,140,0,0.9)] relative z-10 group-hover:text-white transition-colors duration-300" 
            />
          </motion.div>

          {/* Text */}
          <h3 className="text-xl text-center font-medium text-orange-50 drop-shadow-md leading-tight group-hover:text-white transition-colors duration-300">
            {formatTitle(title)}
          </h3>

          {/* Bottom sheen effect that lights up on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none group-hover:from-orange-500/10 transition-colors duration-500" />
        </div>

        {/* Shiny border highlight (top edge) */}
        <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

      {/* Reflection */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 + index * 0.2, duration: 1 }}
        className="w-[90%] h-32 mt-2 relative overflow-hidden pointer-events-none reflection-mask transform scale-y-[-1] origin-top"
      >
         <div className="w-full h-full rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0a0a0a] to-transparent flex flex-col items-center justify-end p-6 grayscale-[0.5]">
            <div className="mb-6 opacity-50">
                <Icon size={64} className="text-orange-400 blur-[2px]" />
            </div>
            <div className="h-4 w-3/4 bg-orange-100/20 blur-md rounded-full"></div>
         </div>
      </motion.div>
    </motion.div>
  );
};

const formatTitle = (title: string) => {
  return title.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i < title.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));
};

export default FeatureSection;