import { motion } from "framer-motion";
import { MessageCircle, Users, Zap, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
const Logo = ({ className = "" }) => (
  <svg
    width="289"
    height="291"
    viewBox="0 0 289 291"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M115 288.149L0 290.649L37 212.649C57.3333 194.982 107.4 172.749 145 225.149L115 288.149Z"
      fill="url(#paint0_linear_116_13)"
    />
    <path
      d="M289 290.5L144 0C132.333 9.16667 110.7 51.4 109.5 147C146.7 233 167.667 278.5 174.5 290.5H289Z"
      fill="url(#paint1_linear_116_13)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_116_13"
        x1="144.5"
        y1="0"
        x2="144.5"
        y2="290.649"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stop-color="#2D2C2C" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_116_13"
        x1="144.5"
        y1="0"
        x2="144.5"
        y2="290.649"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stop-color="#2D2C2C" />
      </linearGradient>
    </defs>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-white/2 to-gray-500/2 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Header */}
      <motion.header
        className="relative z-10 p-6 flex justify-between items-center border-b border-white/10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <Logo className="w-12 h-12" />
          </motion.div>
          <span className="text-2xl font-light tracking-wider">ALMOG.TEAM</span>
        </motion.div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-[10rem] font-black mb-8 relative"
            style={{
              background:
                "linear-gradient(45deg, #ffffff 0%, #666666 50%, #ffffff 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            ALMOG.TEAM
            <motion.div
              className="absolute inset-0"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                transform: "skewX(-20deg)",
              }}
            />
          </motion.h1>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Badge
              variant="outline"
              className="text-xl px-8 py-3 border-white/30 text-gray-300 bg-white/5 backdrop-blur-sm font-light tracking-widest"
            >
              for no good reason
            </Badge>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-2xl md:text-3xl text-gray-400 mb-16 max-w-3xl font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          A collective of creators, builders, and dreamers pushing boundaries
          with elegant simplicity.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="text-5xl font-medium tracking-wide transition-all duration-300 rounded-none border-0 cursor-pointer"
              onClick={() =>
                (window.location.href = "https://discord.gg/yy4WArnZqx")
              }
            >
              <MessageCircle className="mr-3 h-16 w-16" />
              Join Discord
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {[
            {
              icon: Users,
              title: "Community",
              desc: "Join our vibrant collective",
            },
            {
              icon: Zap,
              title: "Innovation",
              desc: "Pushing creative boundaries",
            },
            {
              icon: Star,
              title: "Excellence",
              desc: "Perfection in simplicity",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 rounded-none">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="h-12 w-12 mx-auto mb-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-light mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-light">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="relative z-10 p-8 text-center border-t border-white/10 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.p
          className="text-gray-500 font-light tracking-wide"
          whileHover={{ color: "#ffffff" }}
          transition={{ duration: 0.3 }}
        >
          © 2025 ALMOG.TEAM - Building amazing things for no good reason
        </motion.p>
      </motion.footer>
    </div>
  );
}
