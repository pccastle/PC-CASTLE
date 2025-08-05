import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'
import pcCastleLogo from './assets/pc_castle_logo.png'
import enhancedBackground from './assets/enhanced_background.png'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${enhancedBackground})` }}
      />
      
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Dynamic Mouse Follower with Enhanced Effects */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      >
        <div className="w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-300/20 rounded-full blur-2xl"></div>
      </motion.div>
      
      {/* Enhanced Matrix Rain Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 text-sm font-mono opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 8 + 8}px`
            }}
            animate={{
              y: ['-100vh', '100vh'],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {['01', '10', '11', '00', 'PC', 'ゲーム', 'コード', 'データ'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>

      {/* Floating Green Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated Green Circuit Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-green-400/20"
            style={{
              width: '2px',
              height: '100vh',
              left: `${(i + 1) * 12.5}%`,
              borderLeft: '1px solid rgba(34, 197, 94, 0.2)'
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              boxShadow: [
                '0 0 5px rgba(34, 197, 94, 0.2)',
                '0 0 15px rgba(34, 197, 94, 0.4)',
                '0 0 5px rgba(34, 197, 94, 0.2)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute border-green-400/20"
            style={{
              height: '2px',
              width: '100vw',
              top: `${(i + 1) * 16.6}%`,
              borderTop: '1px solid rgba(34, 197, 94, 0.2)'
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              boxShadow: [
                '0 0 5px rgba(34, 197, 94, 0.2)',
                '0 0 15px rgba(34, 197, 94, 0.4)',
                '0 0 5px rgba(34, 197, 94, 0.2)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Pulsing Green Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-radial from-green-400/20 to-transparent"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center pt-8 pb-4"
        >
          <motion.div
            className="inline-block px-6 py-2 bg-green-900/30 backdrop-blur-sm rounded-full border border-green-400/30"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
          >
            <span className="text-green-300 text-sm font-semibold tracking-wider">
              🎮 GAMING COMMUNITY 🎮
            </span>
          </motion.div>
        </motion.header>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          
          {/* Logo with Advanced Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotateY: 180 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0, 
              scale: isLoaded ? 1 : 0.3,
              rotateY: isLoaded ? 0 : 180
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.1, 
              rotateY: 10,
              transition: { duration: 0.3 }
            }}
            className="mb-8 cursor-pointer relative"
          >
            {/* Glow Ring Around Logo */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 50px rgba(34, 197, 94, 0.3)",
                  "0 0 100px rgba(34, 197, 94, 0.6)",
                  "0 0 50px rgba(34, 197, 94, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <motion.img 
              src={pcCastleLogo} 
              alt="PC CASTLE Logo" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10"
              animate={{
                filter: [
                  "drop-shadow(0 0 30px rgba(34, 197, 94, 0.5)) brightness(1.1)",
                  "drop-shadow(0 0 60px rgba(34, 197, 94, 0.8)) brightness(1.3)",
                  "drop-shadow(0 0 30px rgba(34, 197, 94, 0.5)) brightness(1.1)"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Title with Cyberpunk Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="relative mb-6"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500 relative"
              whileHover={{
                textShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.8)",
                  "0 0 40px rgba(34, 197, 94, 1)",
                  "0 0 60px rgba(34, 197, 94, 0.8)"
                ],
                transition: { duration: 0.3 }
              }}
            >
              PC CASTLE
              
              {/* Glitch Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-0"
                animate={{ 
                  opacity: [0, 0.4, 0], 
                  x: [-200, 600],
                  skewX: [0, 5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              />
            </motion.h1>
            
            {/* Subtitle with Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-green-300 text-lg md:text-xl font-semibold mt-2"
            >
              قلعة البيسي | PC Gaming Castle
            </motion.div>
          </motion.div>

          {/* Description with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto mb-12"
          >
            <motion.div 
              className="bg-green-900/20 backdrop-blur-sm rounded-2xl p-10 border border-green-400/30 relative overflow-hidden"
              whileHover={{ 
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                borderColor: "rgba(34, 197, 94, 0.5)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: [
                    "linear-gradient(0deg, transparent, rgba(34, 197, 94, 0.3), transparent)",
                    "linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.3), transparent)",
                    "linear-gradient(180deg, transparent, rgba(34, 197, 94, 0.3), transparent)",
                    "linear-gradient(270deg, transparent, rgba(34, 197, 94, 0.3), transparent)",
                    "linear-gradient(360deg, transparent, rgba(34, 197, 94, 0.3), transparent)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10 text-center">
                <motion.h2 
                  className="text-3xl md:text-4xl text-green-100 font-bold mb-6"
                  whileInView={{ 
                    opacity: [0.8, 1, 0.8],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                >
                  مرحباً بك في مجتمع PC CASTLE
                </motion.h2>
                
                <motion.p 
                  className="text-xl md:text-2xl text-green-200 leading-relaxed mb-6 font-medium"
                  whileInView={{ 
                    opacity: [0.8, 1, 0.8],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                >
                  تجمع خاص ومتميز مخصص حصرياً لعشاق ألعاب الكمبيوتر والتكنولوجيا المتقدمة
                </motion.p>
                
                <motion.p 
                  className="text-lg md:text-xl text-green-300 leading-relaxed mb-4"
                  whileInView={{ 
                    opacity: [0.8, 1, 0.8],
                    transition: { duration: 3, repeat: Infinity, delay: 0.5 }
                  }}
                >
                  نحن نفخر بنظام التفعيل المزدوج الفريد من نوعه - الكتابي والإلكتروني - الذي يضمن جودة عالية للمجتمع ويجعلنا متميزين عن باقي السيرفرات
                </motion.p>
                
                <motion.p 
                  className="text-base md:text-lg text-green-400 leading-relaxed"
                  whileInView={{ 
                    opacity: [0.8, 1, 0.8],
                    transition: { duration: 3, repeat: Infinity, delay: 1 }
                  }}
                >
                  انضم إلى مجتمعنا المتطور واستمتع بتجربة لعب استثنائية مع لاعبين محترفين ومتحمسين مثلك تماماً
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Join Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.5 }}
            transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
            className="mb-16"
          >
            <Button
              asChild
              className="relative bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-6 px-12 text-xl rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 overflow-hidden group"
            >
              <motion.a 
                href="https://discord.gg/KkJ8yYTHrs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 opacity-0 group-hover:opacity-30"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-0"
                  animate={{ 
                    opacity: [0, 0.1, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
                
                <motion.svg 
                  className="w-8 h-8" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
                </motion.svg>
                
                <span className="text-2xl font-bold">انضم إلينا</span>
                
                {/* Arrow Icon */}
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </motion.a>
            </Button>
          </motion.div>

          {/* Features Grid with Advanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12"
          >
            {[
              { 
                title: "مجتمع متطور ومتقدم", 
                desc: "نظام تفعيل متقدم ومزدوج يضمن جودة المجتمع ويحافظ على مستوى عالٍ من الاحترافية والتفاعل الإيجابي بين الأعضاء",
                icon: "🚀"
              },
              { 
                title: "لاعبين البيسي المحترفين", 
                desc: "مخصص حصرياً لمحبي ألعاب الكمبيوتر والتكنولوجيا المتقدمة، حيث نجمع أفضل اللاعبين والمتحمسين في مكان واحد",
                icon: "🎮"
              },
              { 
                title: "نظام التفعيل المزدوج", 
                desc: "نظام فريد يجمع بين التفعيل الكتابي والإلكتروني لضمان أعلى مستوى من الأمان والجودة في المجتمع",
                icon: "⚡"
              },
              { 
                title: "دعم فني متميز", 
                desc: "فريق دعم متخصص ومتاح على مدار الساعة لمساعدة الأعضاء وحل أي مشاكل تقنية أو استفسارات بسرعة وكفاءة",
                icon: "🛠️"
              },
              { 
                title: "فعاليات وبطولات", 
                desc: "تنظيم فعاليات وبطولات دورية في مختلف الألعاب مع جوائز قيمة وتجارب لعب استثنائية للأعضاء المشاركين",
                icon: "🏆"
              },
              { 
                title: "مجتمع آمن ومحترم", 
                desc: "بيئة آمنة وخالية من السلوكيات السلبية، مع قوانين واضحة وفريق إدارة متفهم يضمن تجربة ممتعة للجميع",
                icon: "🛡️"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative bg-green-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 overflow-hidden group cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(34, 197, 94, 0.15)",
                  borderColor: "rgba(34, 197, 94, 0.6)",
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.15 }}
              >
                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    backgroundImage: [
                      "radial-gradient(circle at 0% 0%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 100%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 0%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-5xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-green-100 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-green-200 text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Owner and Developer Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
            transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
          >
            {/* Owner Box */}
            <motion.div
              className="relative bg-gradient-to-br from-green-900/30 to-green-800/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/40 overflow-hidden group"
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                borderColor: "rgba(34, 197, 94, 0.7)",
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.7 }}
            >
              {/* Crown Animation */}
              <motion.div
                className="absolute top-4 right-4 text-4xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                👑
              </motion.div>
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 rounded-2xl"
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10 text-center">
                <motion.h3 
                  className="text-3xl font-bold text-yellow-300 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  المالك
                </motion.h3>
                
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  👨‍💼
                </motion.div>
                
                <motion.p 
                  className="text-2xl font-bold text-green-100 mb-2"
                  whileHover={{ color: "#fbbf24" }}
                >
                  ABU IVA
                </motion.p>
                
                <p className="text-green-300 text-lg">
                  مؤسس ومالك سيرفر PC CASTLE
                </p>
              </div>
            </motion.div>

            {/* Developer Box */}
            <motion.div
              className="relative bg-gradient-to-br from-blue-900/30 to-green-800/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/40 overflow-hidden group"
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                borderColor: "rgba(34, 197, 94, 0.7)",
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.9 }}
            >
              {/* Code Animation */}
              <motion.div
                className="absolute top-4 right-4 text-4xl"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                💻
              </motion.div>
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 rounded-2xl"
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10 text-center">
                <motion.h3 
                  className="text-3xl font-bold text-cyan-300 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  المطور
                </motion.h3>
                
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  👨‍💻
                </motion.div>
                
                <motion.p 
                  className="text-2xl font-bold text-green-100 mb-2"
                  whileHover={{ color: "#06b6d4" }}
                >
                  3reaf
                </motion.p>
                
                <p className="text-green-300 text-lg">
                  مطور ومصمم الموقع والسيرفر
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          className="relative z-10 py-8 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-900/30 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30 relative overflow-hidden">
              {/* Animated Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    "inset 0 0 20px rgba(34, 197, 94, 0.2)",
                    "inset 0 0 40px rgba(34, 197, 94, 0.4)",
                    "inset 0 0 20px rgba(34, 197, 94, 0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10 text-center space-y-4">
                <motion.p 
                  className="text-green-200 text-lg font-semibold"
                  whileHover={{ scale: 1.05, color: "#22c55e" }}
                >
                  All Rights Reserved by PC CASTLE
                </motion.p>
                
                <div className="border-t border-green-400/20 pt-4">
                  <motion.p 
                    className="text-green-300 text-base mb-2 font-medium"
                    whileHover={{ scale: 1.05, color: "#4ade80" }}
                  >
                    Made by: 3reaf
                  </motion.p>
                  
                  <div className="flex justify-center items-center gap-6 text-green-400 text-sm">
                    <motion.span 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.1, color: "#22c55e" }}
                    >
                      <span className="text-lg">👑</span>
                      Owner: ABU IVA
                    </motion.span>
                    
                    <span className="text-green-600">•</span>
                    
                    <motion.span 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.1, color: "#22c55e" }}
                    >
                      <span className="text-lg">💻</span>
                      Developer: 3reaf
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>

      {/* Additional Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-300/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-2xl"></div>
    </div>
  )
}

export default App

