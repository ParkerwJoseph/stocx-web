"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, ChevronRight, LineChart, TrendingUp, Zap, AlertCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToMailchimp } from "./actions/subscribe"
import { useFormState } from "react-dom"

// Initial state for form
const initialState = {
  success: false,
  message: "",
}

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [state, formAction] = useFormState(async (prevState: any, formData: FormData) => {
    setLoading(true)
    try {
      const result = await subscribeToMailchimp(formData)
      setLoading(false)
      return result
    } catch (error) {
      setLoading(false)
      return {
        success: false,
        message: "An unexpected error occurred. Please try again.",
      }
    }
  }, initialState)

  const features = [
    { icon: <TrendingUp className="h-5 w-5" />, text: "AI-Powered Analysis" },
    { icon: <LineChart className="h-5 w-5" />, text: "Real-Time Predictions" },
    { icon: <Zap className="h-5 w-5" />, text: "Instant Insights" },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,170,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,200,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,rgba(0,0,0,0.8))]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 25,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Content */}
        <motion.div
          className="flex-1 max-w-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <motion.div
              className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="mr-2">Coming Soon</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </motion.div>
          </div>

          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-cyan-200 mb-6"
          >
            Stocx Ai
          </motion.h1>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Intelligent
            </span>{" "}
            Stock Trading
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Harness the power of advanced AI to analyze market trends, predict stock movements, and optimize your
            trading strategy with unprecedented accuracy.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <span className="text-gray-200">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Form */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,200,150,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {!state.success ? (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">Be the first to know</h3>
                  <p className="text-gray-400">Get early access when we launch and receive exclusive insights.</p>
                </div>

                <form action={formAction} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-300 font-medium">
                      Email address
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="bg-black/50 border-gray-700/50 text-white placeholder:text-gray-500 h-12 pr-12"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {state.message && !state.success && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg">
                      <AlertCircle className="h-4 w-4" />
                      <span>{state.message}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(0,200,150,0.3)]"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Notify Me <ArrowRight className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By signing up, you agree to our{" "}
                    <Link href="/privacy-ios" className="text-emerald-400 hover:text-emerald-300">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="text-emerald-400 hover:text-emerald-300">
                      Terms of Service
                    </Link>
                    .
                  </p>
                </form>
              </>
            ) : (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Thank you for subscribing!</h3>
                <p className="text-gray-400 mb-6">
                  {state.message || "You're on the list! We'll notify you as soon as Stocx Ai launches."}
                </p>
                <Button
                  variant="outline"
                  className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 bg-transparent"
                  onClick={() => {
                    // Reset form
                    setEmail("")
                    formAction(null, new FormData())
                  }}
                >
                  Back to form
                </Button>
              </motion.div>
            )}
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Twitter
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              LinkedIn
            </motion.a>
            <Link href="/support">
              <motion.a
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                Support
              </motion.a>
            </Link>
            <Link href="/ios-legal">
              <motion.a
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                iOS Legal
              </motion.a>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 w-full text-center text-gray-500 text-sm z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <p>© {new Date().getFullYear()} Stocx Ai. All rights reserved.</p>
      </motion.div>
    </div>
  )
}
