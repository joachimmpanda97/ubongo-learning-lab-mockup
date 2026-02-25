/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen,
  Calculator,
  Home as HomeIcon,
  User,
  BarChart2,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Clock,
  Globe,
  ArrowLeft,
  BarChart3,
  Award
} from 'lucide-react';

// --- Types ---
type View = 'home' | 'lessons' | 'dashboard' | 'alphabet';

interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  image: string;
  url?: string;
}

// --- Mock Data ---
const LITERACY_LESSONS: Lesson[] = [
  {
    id: 1,
    title: "1. Creating images",
    description: "Nuzo & Namia travel to ESWATINI where they meet Bubelang, make new friends, create images and learn all about believing in themselves.",
    duration: "15-18 minutes",
    image: "/thumbnails/NN101.jpg"
  },
  {
    id: 2,
    title: "2. Skimming",
    description: "Nuzo & Namia travel to RWANDA where they meet with Bubelang, make new friends, skim and learn all about diversity.",
    duration: "15-18 minutes",
    image: "/thumbnails/NN102.jpg",
    url: "https://aistudio.google.com/apps/drive/1ERMixFCMSeGoj2rJNZPyCLBXPWWwDFXn?showAssistant=true&showPreview=true&resourceKey=&fullscreenApplet=true"
  },
  {
    id: 3,
    title: "3. Questioning",
    description: "Nuzo & Namia travel to KENYA where they make new friends and learn all about questioning and being responsible.",
    duration: "15-18 minutes",
    image: "/thumbnails/NN103.jpg"
  },
  {
    id: 4,
    title: "4. Making connections",
    description: "Nuzo & Namia travel to GHANA where they meet new friends, make connections and learn all about kindness and community.",
    duration: "15-18 minutes",
    image: "/thumbnails/NN104.jpg"
  },
  {
    id: 5,
    title: "5. Predicting",
    description: "Nuzo & Namia travel to TANZANIA where they make predictions, meet new friends and learn all about courage and curiosity.",
    duration: "15-18 minutes",
    image: "/thumbnails/NN105.jpg"
  },
  {
    id: 6,
    title: "6. Summarising",
    description: "Nuzo & Namia travel to NIGERIA where they practise summarising, make new friends and learn all about teamwork.",
    duration: "15-18 minutes",
    image: "/thumbnails/NN106.jpg"
  },
  {
    id: 7,
    title: "7. Inferring",
    description: "Nuzo & Namia travel to UGANDA where they practise inferring meaning, meet new friends and learn all about perseverance.",
    duration: "15-18 minutes",
    image: "/thumbnails/NN107.jpg"
  },
  {
    id: 8,
    title: "8. Identifying main idea",
    description: "Nuzo & Namia travel to ETHIOPIA where they identify main ideas, make new friends and learn all about creativity.",
    duration: "15-18 minutes",
    image: "/thumbnails/NN108.jpg"
  },
  {
    id: 9,
    title: "9. Context clues",
    description: "Nuzo & Namia travel to SENEGAL where they use context clues, meet new friends and learn all about empathy.",
    duration: "15-18 minutes",
    image: "/thumbnails/NN109.jpg"
  },
  {
    id: 10,
    title: "10. Comparing & contrasting",
    description: "Nuzo & Namia travel to ZIMBABWE where they compare and contrast, make new friends and learn all about respect.",
    duration: "15-18 minutes",
    image: "/thumbnails/NN110.jpg"
  },
  {
    id: 11,
    title: "11. Drawing conclusions",
    description: "Nuzo & Namia travel to MOZAMBIQUE where they draw conclusions, meet new friends and learn all about gratitude.",
    duration: "15-18 minutes",
    image: "/thumbnails/NN111.jpg"
  },
  {
    id: 12,
    title: "12. Monitoring comprehension",
    description: "Nuzo & Namia travel to ZAMBIA where they monitor their comprehension, meet new friends and learn all about leadership.",
    duration: "15-18 minutes",
    image: "/thumbnails/NN112.jpg"
  }
];

// --- Components ---

const Header = ({ onProfileClick, onHomeClick, onBack }: { onProfileClick: () => void, onHomeClick: () => void, onBack?: () => void }) => (
  <header className="grid grid-cols-3 items-center px-6 py-4 bg-white border-b-4 border-u-blue/10 sticky top-0 z-50">
    <div>
      {onBack && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-u-yellow/20 rounded-full border-2 border-u-yellow text-u-orange font-display font-bold bouncy-hover"
        >
          <ChevronLeft size={18} />
          <span>Back</span>
        </motion.button>
      )}
    </div>
    <div className="flex justify-center cursor-pointer group" onClick={onHomeClick}>
      <div className="text-u-blue font-display font-black text-7xl tracking-tighter flex flex-col leading-none items-center group-hover:scale-105 transition-transform">
        <span>ubongo</span>
        <span className="text-xl font-sans font-normal tracking-normal -mt-1 opacity-70">Learning lab</span>
      </div>
    </div>
    <div className="flex items-center gap-4 justify-end">
      <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-u-yellow/20 rounded-full border-2 border-u-yellow text-u-orange font-display font-bold">
        <Globe size={18} />
        <span>English</span>
      </div>
      <button
        onClick={onProfileClick}
        className="w-12 h-12 rounded-2xl bg-u-pink flex items-center justify-center border-b-4 border-u-pink/50 text-white bouncy-hover shadow-lg"
      >
        <BarChart2 size={24} />
      </button>
    </div>
  </header>
);

const SubjectCard = ({ title, subtitle, icon: Icon, color, onClick }: { 
  title: string, 
  subtitle: string, 
  icon: any, 
  color: string,
  onClick: () => void 
}) => (
  <motion.button
    whileHover={{ scale: 1.05, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-8 rounded-[3rem] bg-white border-4 border-gray-100 shadow-xl hover:border-u-blue/30 transition-all text-center group relative overflow-hidden fun-card-shadow`}
  >
    <div className={`w-24 h-24 rounded-[2rem] ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl`}>
      <Icon size={48} className="text-white" />
    </div>
    <h3 className="text-2xl font-display font-bold text-gray-800 leading-tight">{title}</h3>
    <p className="text-base font-sans text-gray-500 mt-2">{subtitle}</p>
  </motion.button>
);

const BackgroundShapes = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-u-yellow/10 blob-shape animate-float" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-u-blue/5 blob-shape animate-float" style={{ animationDelay: '-2s' }} />
    <div className="absolute top-[40%] right-[-5%] w-[20%] h-[20%] bg-u-pink/5 blob-shape animate-float" style={{ animationDelay: '-4s' }} />
    <div className="absolute bottom-[20%] left-[5%] w-[15%] h-[15%] bg-go-green/5 blob-shape animate-float" style={{ animationDelay: '-1s' }} />
  </div>
);

export default function App() {
  const [view, setView] = useState<View>('home');
  const [navHistory, setNavHistory] = useState<View[]>([]);

  const navigate = (next: View) => {
    if (next === view) return;
    setNavHistory(prev => [...prev, view]);
    setView(next);
  };

  const goBack = () => {
    setNavHistory(prev => {
      const previous = prev[prev.length - 1];
      setView(previous);
      return prev.slice(0, -1);
    });
  };

  const goHome = () => {
    setNavHistory([]);
    setView('home');
  };

  const renderHome = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto p-6"
    >
      <section className="mb-16">
        <h2 className="text-4xl font-display font-bold text-u-blue mb-8 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-u-blue flex items-center justify-center text-white shadow-lg">
            <BookOpen size={28} />
          </div>
          Foundational Literacy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <SubjectCard 
            title="Alphabet" 
            subtitle="with Akili" 
            icon={BookOpen} 
            color="bg-u-orange"
            onClick={() => navigate('alphabet')}
          />
          <SubjectCard 
            title="Reading Comprehension" 
            subtitle="with Nuzo & Namia" 
            icon={BookOpen} 
            color="bg-u-pink"
            onClick={() => navigate('lessons')}
          />
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-display font-bold text-go-green mb-8 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-go-green flex items-center justify-center text-white shadow-lg">
            <Calculator size={28} />
          </div>
          Foundational Numeracy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <SubjectCard 
            title="Numbers" 
            subtitle="with Akili" 
            icon={Calculator} 
            color="bg-u-yellow"
            onClick={() => {}}
          />
          <SubjectCard 
            title="Real-life Maths" 
            subtitle="with Ubongo Kids" 
            icon={Calculator} 
            color="bg-u-purple"
            onClick={() => {}}
          />
        </div>
      </section>
    </motion.div>
  );

  const renderLessons = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-5xl mx-auto p-6"
    >
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-5xl font-display font-bold text-u-blue">Reading with Nuzo and Namia</h1>
        </div>
        <button className="px-6 py-3 bg-white rounded-2xl border-2 border-u-blue/20 text-u-blue font-display font-bold bouncy-hover shadow-sm">
          Teacher guide
        </button>
      </div>

      <div className="space-y-10">
        {LITERACY_LESSONS.map((lesson) => (
          <motion.div 
            key={lesson.id}
            whileHover={{ x: 10, scale: 1.01 }}
            onClick={() => {
              if (lesson.url) {
                window.open(lesson.url, '_blank');
              }
            }}
            className={`flex flex-col md:flex-row gap-8 bg-white p-6 rounded-[2.5rem] border-4 border-gray-50 shadow-xl group cursor-pointer transition-all ${lesson.url ? 'hover:border-u-blue/40' : 'hover:border-u-pink/40'}`}
          >
            <div className="w-full md:w-80 h-48 rounded-3xl overflow-hidden flex-shrink-0 shadow-lg">
              <img 
                src={lesson.image} 
                alt={lesson.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-display font-bold text-gray-800 mb-3">{lesson.title}</h3>
              <p className="text-gray-600 text-lg font-sans leading-relaxed mb-6">
                {lesson.description}
              </p>
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 text-sm font-bold text-u-grey bg-u-light-grey px-4 py-2 rounded-full">
                  <Clock size={16} />
                  {lesson.duration}
                </span>
                <span className={`flex items-center gap-2 text-base font-display font-bold px-6 py-2 rounded-full shadow-md transition-all ${lesson.url ? 'bg-u-blue text-white' : 'bg-u-pink text-white'}`}>
                  <CheckCircle2 size={20} />
                  Start Lesson
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderDashboard = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="max-w-5xl mx-auto p-6"
    >
      <div className="flex items-center gap-6 mb-10">
        <div className="w-24 h-24 rounded-[2rem] bg-u-blue flex items-center justify-center border-4 border-white shadow-2xl rotate-3">
          <User size={48} className="text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-display font-bold text-gray-800">Loveness (grade 1)</h1>
          <p className="text-xl text-u-grey font-sans">You're doing amazing! 🌟</p>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-10 mb-10 border-4 border-u-blue/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-u-yellow/10 blob-shape -mr-16 -mt-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-u-blue flex items-center gap-3">
              <BarChart3 size={24} />
              My Progress
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-base font-bold">
                  <span className="text-u-pink">Reading</span>
                  <span className="text-u-pink">66%</span>
                </div>
                <div className="w-full bg-u-pink/10 h-4 rounded-full overflow-hidden border-2 border-u-pink/20">
                  <div className="bg-u-pink h-full w-[66%] rounded-full shadow-lg" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-base font-bold">
                  <span className="text-go-green">Maths</span>
                  <span className="text-go-green">66%</span>
                </div>
                <div className="w-full bg-go-green/10 h-4 rounded-full overflow-hidden border-2 border-go-green/20">
                  <div className="bg-go-green h-full w-[66%] rounded-full shadow-lg" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            <div className="bg-u-orange/10 p-6 rounded-[2rem] border-4 border-u-orange/20 flex flex-col justify-center items-center text-center bouncy-hover">
              <p className="text-sm text-u-orange font-display font-bold uppercase tracking-wider mb-2">Skills Attempted</p>
              <p className="text-5xl font-display font-black text-u-orange">3</p>
            </div>
            <div className="bg-u-purple/10 p-6 rounded-[2rem] border-4 border-u-purple/20 flex flex-col justify-center items-center text-center bouncy-hover">
              <p className="text-sm text-u-purple font-display font-bold uppercase tracking-wider mb-2">Skills Mastered</p>
              <p className="text-5xl font-display font-black text-u-purple">2</p>
            </div>
            <div className="bg-u-yellow/10 p-6 rounded-[2rem] border-4 border-u-yellow/20 flex flex-col justify-center items-center text-center bouncy-hover">
              <p className="text-sm text-u-yellow font-display font-bold uppercase tracking-wider mb-2">Avg attempts</p>
              <p className="text-5xl font-display font-black text-u-yellow">5</p>
            </div>
            <div className="bg-go-green/10 p-6 rounded-[2rem] border-4 border-go-green/20 flex items-center justify-center bouncy-hover">
              <Award size={64} className="text-u-yellow drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-display font-bold text-gray-800">Literacy / Reading Comprehension</h2>
          <span className="px-6 py-2 bg-u-yellow text-u-orange text-sm font-display font-bold rounded-full border-b-4 border-u-orange/30 shadow-md">
            Approaching expectation
          </span>
        </div>

        <div className="bg-white rounded-[2.5rem] border-4 border-gray-50 shadow-xl overflow-hidden">
          <div className="p-6 bg-u-light-grey border-b-4 border-gray-100 flex justify-between text-sm font-display font-bold text-u-grey uppercase tracking-widest">
            <span>Skimming Skills</span>
            <div className="flex gap-12">
              <span className="w-20 text-center">Attempts</span>
              <span className="w-20 text-center">Accuracy</span>
            </div>
          </div>
          <div className="divide-y-2 divide-gray-50">
            {[
              { id: 1, label: "Can mention 2 or more ways to skim a page", attempts: 6, accuracy: "80%", color: 'text-u-blue' },
              { id: 2, label: "Can identify which skimming approach was used", attempts: 4, accuracy: "50%", color: 'text-u-pink' },
              { id: 3, label: "Can use 2 or more skimming techniques", attempts: 0, accuracy: "-", color: 'text-u-grey' },
            ].map((skill) => (
              <div key={skill.id} className="p-6 flex items-center justify-between hover:bg-u-light-grey transition-colors group">
                <span className="text-lg text-gray-700 font-display font-bold group-hover:translate-x-2 transition-transform">{skill.id}. {skill.label}</span>
                <div className="flex gap-12 text-xl font-display font-black">
                  <span className="w-20 text-center text-gray-400">{skill.attempts}</span>
                  <span className={`w-20 text-center ${skill.color}`}>{skill.accuracy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderAlphabet = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-5xl mx-auto p-6"
    >
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-5xl font-display font-bold text-u-blue">Learn the Alphabet with Akili:</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { letter: 'A', url: 'https://aistudio.google.com/apps/drive/1AqtjWsoFdV04GH-BVryaqi6jTKqyuIhm?showAssistant=true&showPreview=true&resourceKey=&fullscreenApplet=true', color: 'bg-u-orange' },
          { letter: 'B', color: 'bg-u-pink' },
          { letter: 'C', color: 'bg-u-purple' },
        ].map((item) => (
          <motion.button
            key={item.letter}
            whileHover={item.url ? { scale: 1.05, rotate: 2 } : {}}
            whileTap={item.url ? { scale: 0.95 } : {}}
            onClick={() => {
              if (item.url) {
                window.open(item.url, '_blank');
              }
            }}
            className={`flex flex-col items-center justify-center p-10 rounded-[3rem] bg-white border-4 border-gray-100 shadow-xl transition-all text-center group relative overflow-hidden fun-card-shadow ${!item.url ? 'opacity-50 cursor-not-allowed' : 'hover:border-u-blue/30'}`}
          >
            <div className={`w-24 h-24 rounded-full ${item.color} flex items-center justify-center mb-4 text-white text-5xl font-display font-black shadow-lg`}>
              {item.letter}
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-800">Letter {item.letter}</h3>
            {item.url ? (
              <div className="mt-4 px-6 py-2 bg-u-blue text-white rounded-full text-sm font-display font-bold shadow-md group-hover:bg-u-blue/90 transition-colors">
                Play Now!
              </div>
            ) : (
              <div className="mt-4 px-6 py-2 bg-gray-200 text-gray-400 rounded-full text-sm font-display font-bold">
                Coming Soon
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-u-light-grey font-sans text-gray-900 relative">
      <BackgroundShapes />
      <Header
        onProfileClick={() => navigate('dashboard')}
        onHomeClick={goHome}
        onBack={navHistory.length > 0 ? goBack : undefined}
      />
      
      <main className="py-12">
        <AnimatePresence mode="wait">
          {view === 'home' && renderHome()}
          {view === 'lessons' && renderLessons()}
          {view === 'dashboard' && renderDashboard()}
          {view === 'alphabet' && renderAlphabet()}
        </AnimatePresence>
      </main>

      {/* Footer Navigation for Mobile */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl border-4 border-u-blue/10 shadow-2xl rounded-[2rem] px-8 py-4 flex items-center gap-12 z-50 sm:hidden">
        <button onClick={goHome} className={`p-3 rounded-2xl transition-all bouncy-hover ${view === 'home' ? 'bg-u-blue text-white shadow-lg' : 'text-u-grey'}`}>
          <HomeIcon size={28} />
        </button>
        <button onClick={() => navigate('dashboard')} className={`p-3 rounded-2xl transition-all bouncy-hover ${view === 'dashboard' ? 'bg-u-blue text-white shadow-lg' : 'text-u-grey'}`}>
          <User size={28} />
        </button>
      </nav>
    </div>
  );
}
