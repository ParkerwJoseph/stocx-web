"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Smartphone,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Brain,
  Target,
  Sparkles,
  Apple,
  Play,
  Search,
  Star,
  Mail,
  MessageSquare,
  ExternalLink,
  QrCode,
} from "lucide-react"
import { subscribeToNewsletter } from "./actions/subscribe"
import { getWebsiteContent, type WebsiteContent } from "@/lib/content-store"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)
  const [content, setContent] = useState<WebsiteContent | null>(null)

  useEffect(() => {
    // Load content from store
    const loadContent = () => {
      const websiteContent = getWebsiteContent()
      setContent(websiteContent)
    }

    loadContent()

    // Listen for content updates
    const handleContentUpdate = (event: CustomEvent) => {
      setContent(event.detail)
    }

    window.addEventListener("contentUpdated", handleContentUpdate as EventListener)

    const userAgent = navigator.userAgent.toLowerCase()
    setIsIOS(/iphone|ipad|ipod/.test(userAgent))
    setIsAndroid(/android/.test(userAgent))

    return () => {
      window.removeEventListener("contentUpdated", handleContentUpdate as EventListener)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const result = await subscribeToNewsletter(email)
      if (result.success) {
        setSubmitMessage("Thank you for subscribing! We'll keep you updated.")
        setEmail("")
      } else {
        setSubmitMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Chart Scanning",
      description:
        "Take a screenshot of any stock chart and let AI break it down for you. Get instant explanations of patterns, trends, and key signals.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Pattern Recognition",
      description:
        "Identify formations like flags, triangles, and support/resistance levels in seconds. Learn to spot opportunities faster.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Beginner-Friendly Explanations",
      description:
        "No jargon — just clear, simple language that makes learning technical analysis easy and accessible for everyone.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Learning Over Time",
      description:
        "The more you use Stocx AI, the smarter your insights get. Build your chart reading skills progressively.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "On-the-Go Learning",
      description:
        "All you need is your iPhone — no complicated platforms required. Learn technical analysis anywhere, anytime.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Visual Learning",
      description:
        "Understand technical analysis through visual explanations, not textbooks. See patterns highlighted and explained instantly.",
    },
  ]

  const testimonials = [
    {
      name: "Alex M.",
      role: "New Trader",
      content:
        "Finally, an app that makes technical analysis simple. I just snap a chart and get the explanation right away.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Priya K.",
      role: "Learning Investor",
      content: "I never understood trendlines until I used Stocx AI. It's like having a tutor in your pocket.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Marcus R.",
      role: "Day Trader",
      content:
        "Perfect for beginners but useful for experts too. The AI explanations help me spot patterns I might miss.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What devices does Stocx AI work on?",
      answer:
        "Stocx AI is currently available for iPhone on the App Store. We're working on expanding to other platforms in the future.",
    },
    {
      question: "Can it predict stock prices?",
      answer:
        "No, Stocx AI is for education, not financial advice. It helps you learn chart analysis and understand technical patterns, but doesn't make price predictions.",
    },
    {
      question: "Do I need trading experience to use the app?",
      answer:
        "Not at all! The app is designed for complete beginners as well as experienced traders wanting to sharpen their technical analysis skills.",
    },
    {
      question: "How does the AI chart scanning work?",
      answer:
        "Simply take a screenshot of any stock chart or upload an image to the app. Our AI will analyze the chart and explain key patterns, trends, and technical indicators in simple terms.",
    },
    {
      question: "Is there a free version available?",
      answer:
        "Yes! You can start with our free Starter plan that includes basic chart scanning and insights. Upgrade to Pro for advanced patterns and unlimited scans.",
    },
    {
      question: "What types of charts can I scan?",
      answer:
        "Stocx AI works with most stock chart formats including candlestick charts, line charts, and bar charts from popular trading platforms and financial websites.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getAppStoreLink = () => {
    return "https://apps.apple.com/app/stocx-ai"
  }

  const getAppStoreName = () => {
    return "App Store"
  }

  // Show loading state while content is loading
  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container-modern">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-green rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-gradient">Stocx AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/70 hover:text-white transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">
                Reviews
              </a>
              <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-modern btn-primary">Download App</Button>
              </DialogTrigger>
              <DialogContent className="glass border border-white/20">
                <DialogHeader>
                  <DialogTitle className="text-gradient text-center">Download Stocx AI</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 p-6">
                  <div className="text-center">
                    <QrCode className="w-32 h-32 mx-auto mb-4 text-primary" />
                    <p className="text-white/70 mb-6">Scan QR code to download on iPhone</p>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      className="btn-modern btn-primary flex items-center justify-center space-x-2"
                      onClick={() => window.open(getAppStoreLink(), "_blank")}
                    >
                      <Apple className="w-5 h-5" />
                      <span>Download on App Store</span>
                    </Button>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-white/50">Available on iPhone (iOS 14+)</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container-modern">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">📱 Now Available on iPhone</Badge>
            <h1 className="text-hero text-gradient mb-6 animate-fade-in">Scan Stock Charts. Learn Faster with AI.</h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto animate-slide-up">
              Stocx AI is an iPhone app that helps you understand stock charts instantly. Just snap a screenshot and our
              AI explains trendlines, patterns, and key signals in simple terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="btn-modern btn-primary text-lg px-8 py-4">
                    <Apple className="w-5 h-5 mr-2" />
                    Download on the App Store
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass border border-white/20">
                  <DialogHeader>
                    <DialogTitle className="text-gradient text-center">Download Stocx AI</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 p-6">
                    <div className="text-center">
                      <QrCode className="w-32 h-32 mx-auto mb-4 text-primary" />
                      <p className="text-white/70 mb-6">Scan QR code to download on iPhone</p>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        className="btn-modern btn-primary flex items-center justify-center space-x-2"
                        onClick={() => window.open("https://apps.apple.com/app/stocx-ai", "_blank")}
                      >
                        <Apple className="w-5 h-5" />
                        <span>Download on App Store</span>
                      </Button>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-white/50">Available on iPhone (iOS 14+)</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" className="btn-modern btn-secondary text-lg px-8 py-4 bg-transparent">
                <Play className="w-5 h-5 mr-2" />
                See How It Works
              </Button>
            </div>
            <p className="text-sm text-white/50 mt-6">Trusted by thousands of new and experienced traders worldwide</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-4">Everything you need to learn chart analysis</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Powerful AI-driven features designed to make technical analysis simple and accessible for everyone.
            </p>
          </div>
          <div className="grid-cards">
            {features.map((feature, index) => (
              <Card key={index} className="card-modern group">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-4">How It Works</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Learning technical analysis has never been easier. Just follow these simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Open the App</h3>
              <p className="text-white/70 text-sm">Launch Stocx AI on your iPhone</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Upload Chart</h3>
              <p className="text-white/70 text-sm">Screenshot or upload any stock chart</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">AI Analysis</h3>
              <p className="text-white/70 text-sm">AI scans and explains key patterns</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Learn & Apply</h3>
              <p className="text-white/70 text-sm">Understand insights and apply to trading</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">5</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Keep Practicing</h3>
              <p className="text-white/70 text-sm">Build your chart reading skills over time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-4">Why Choose Stocx AI?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Transform how you learn technical analysis with these key benefits.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-white mb-2">No Years of Study Required</h3>
              <p className="text-white/70 text-sm">
                Understand technical analysis without spending years learning from textbooks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-white mb-2">Visual Learning</h3>
              <p className="text-white/70 text-sm">Learn through visual explanations, not complicated theory</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-white mb-2">Save Time</h3>
              <p className="text-white/70 text-sm">
                Get instant chart analysis instead of spending hours researching patterns
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-white mb-2">Perfect for Beginners</h3>
              <p className="text-white/70 text-sm">Designed for newcomers but useful for experienced traders too</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-white mb-2">Build Confidence</h3>
              <p className="text-white/70 text-sm">
                Make more informed trading decisions with better chart understanding
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-semibold text-white mb-2">Learn Anywhere</h3>
              <p className="text-white/70 text-sm">Practice chart analysis on-the-go with just your iPhone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-4">What Our Users Say</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              See how Stocx AI is helping traders learn technical analysis faster and more effectively.
            </p>
          </div>
          <div className="grid-cards">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-modern">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-4">Simple Pricing</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Start learning for free, upgrade when you're ready for advanced features.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-modern">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-gradient-green mb-2">Free</div>
                  <p className="text-white/70">Perfect for getting started</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Scan charts with basic insights
                  </li>
                  <li className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>5 scans per day
                  </li>
                  <li className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Basic pattern recognition
                  </li>
                </ul>
                <Button className="w-full btn-modern btn-secondary bg-transparent">Get Started Free</Button>
              </CardContent>
            </Card>
            <Card className="card-modern border-primary/50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">Most Popular</Badge>
                  <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-gradient-green mb-2">
                    $9.99<span className="text-lg text-white/60">/mo</span>
                  </div>
                  <p className="text-white/70">For serious learners</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Unlimited chart scans
                  </li>
                  <li className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Advanced pattern recognition
                  </li>
                  <li className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Learning modules & tutorials
                  </li>
                  <li className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Priority support
                  </li>
                </ul>
                <Button className="w-full btn-modern btn-primary">Start Pro Trial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Get answers to common questions about Stocx AI and start learning chart analysis today.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 glass border-white/20 text-white placeholder:text-white/40"
                />
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass border border-white/10 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:text-primary text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/60">No FAQs found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <div className="container-modern">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-section-title text-gradient mb-4">Stay Updated</h2>
            <p className="text-xl text-white/70 mb-8">
              Get the latest tips on technical analysis, app updates, and exclusive learning content delivered to your
              inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 glass border-white/20 text-white placeholder:text-white/40"
              />
              <Button type="submit" disabled={isSubmitting} className="btn-modern btn-primary">
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            {submitMessage && (
              <p className={`mt-4 text-sm ${submitMessage.includes("Thank you") ? "text-primary" : "text-red-400"}`}>
                {submitMessage}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-4">Need Help?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Have questions about learning technical analysis or need app support? We're here to help.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-modern text-center">
              <CardContent className="p-8">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Email Support</h3>
                <p className="text-white/70 text-sm mb-4">Get help with the app</p>
                <Button variant="outline" size="sm" className="btn-modern btn-secondary bg-transparent">
                  support@stocx.ai
                </Button>
              </CardContent>
            </Card>
            <Card className="card-modern text-center">
              <CardContent className="p-8">
                <MessageSquare className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">In-App Support</h3>
                <p className="text-white/70 text-sm mb-4">Chat directly in the app</p>
                <Button variant="outline" size="sm" className="btn-modern btn-secondary bg-transparent">
                  Open App
                </Button>
              </CardContent>
            </Card>
            <Card className="card-modern text-center">
              <CardContent className="p-8">
                <ExternalLink className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Learning Center</h3>
                <p className="text-white/70 text-sm mb-4">Tutorials and guides</p>
                <Button variant="outline" size="sm" className="btn-modern btn-secondary bg-transparent">
                  Visit Center
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container-modern">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-green rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-bold text-gradient">Stocx AI</span>
              </div>
              <p className="text-white/60 text-sm mb-4">Learn stock analysis anywhere. Download Stocx AI today.</p>
              <Button className="btn-modern btn-primary">
                <Apple className="w-4 h-4 mr-2" />
                App Store
              </Button>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/data-deletion" className="hover:text-white transition-colors">
                    Data Deletion
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 Stocx AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
