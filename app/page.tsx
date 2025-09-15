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
  Phone,
  ExternalLink,
  QrCode,
} from "lucide-react"
import { subscribeToNewsletter } from "./actions/subscribe"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    setIsIOS(/iphone|ipad|ipod/.test(userAgent))
    setIsAndroid(/android/.test(userAgent))
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
      title: "AI-Powered Analysis",
      description:
        "Advanced machine learning algorithms analyze market patterns and predict trends with unprecedented accuracy.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-Time Insights",
      description:
        "Get instant market updates and trading signals delivered directly to your device as opportunities arise.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description:
        "Intelligent risk assessment tools help protect your investments with automated stop-loss recommendations.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Trading",
      description: "Execute trades with pinpoint accuracy using our advanced order management and execution system.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Portfolio Analytics",
      description: "Comprehensive portfolio tracking with detailed performance metrics and optimization suggestions.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Ultra-low latency execution ensures you never miss a trading opportunity in volatile markets.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Day Trader",
      content: "Stocx AI has completely transformed my trading strategy. The AI insights are incredibly accurate.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Michael Rodriguez",
      role: "Portfolio Manager",
      content: "The risk management features alone have saved me thousands. This app is a game-changer.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Crypto Investor",
      content: "Finally, an AI trading app that actually delivers on its promises. Highly recommended!",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "How does Stocx AI's machine learning work?",
      answer:
        "Our AI analyzes millions of data points including market trends, news sentiment, technical indicators, and historical patterns to generate trading insights and predictions.",
    },
    {
      question: "Is my financial data secure?",
      answer:
        "Yes, we use bank-level encryption and security measures. Your data is protected with 256-bit SSL encryption and we never store your trading passwords or sensitive financial information.",
    },
    {
      question: "Can I use Stocx AI for cryptocurrency trading?",
      answer:
        "Stocx AI supports major cryptocurrencies including Bitcoin, Ethereum, and many altcoins across multiple exchanges.",
    },
    {
      question: "What's the minimum investment required?",
      answer:
        "There's no minimum investment required to use Stocx AI. You can start with any amount and scale up as you become more comfortable with the platform.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, we provide 24/7 customer support through in-app chat, email, and phone. Our team of trading experts is always ready to help.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time through the app settings or by contacting our support team. No cancellation fees apply.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getAppStoreLink = () => {
    if (isIOS) {
      return "https://apps.apple.com/app/stocx-ai"
    } else if (isAndroid) {
      return "https://play.google.com/store/apps/details?id=com.stocx.ai"
    }
    return "#"
  }

  const getAppStoreName = () => {
    if (isIOS) return "App Store"
    if (isAndroid) return "Google Play"
    return "App Store"
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
              <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">
                Testimonials
              </a>
              <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                Contact
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
                    <p className="text-white/70 mb-6">Scan QR code or choose your platform</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button
                      className="btn-modern btn-primary flex items-center justify-center space-x-2"
                      onClick={() => window.open(getAppStoreLink(), "_blank")}
                    >
                      <Apple className="w-5 h-5" />
                      <span>App Store</span>
                    </Button>
                    <Button
                      className="btn-modern btn-secondary flex items-center justify-center space-x-2"
                      onClick={() =>
                        window.open("https://play.google.com/store/apps/details?id=com.stocx.ai", "_blank")
                      }
                    >
                      <Play className="w-5 h-5" />
                      <span>Google Play</span>
                    </Button>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-white/50">Available on iOS 14+ and Android 8+</p>
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
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              🚀 Now Available on iOS & Android
            </Badge>
            <h1 className="text-hero text-gradient mb-6 animate-fade-in">Trade Smarter with AI-Powered Insights</h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto animate-slide-up">
              Revolutionize your trading strategy with advanced machine learning algorithms that analyze market patterns
              and deliver real-time insights directly to your mobile device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="btn-modern btn-primary text-lg px-8 py-4">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Download for {getAppStoreName()}
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass border border-white/20">
                  <DialogHeader>
                    <DialogTitle className="text-gradient text-center">Download Stocx AI</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 p-6">
                    <div className="text-center">
                      <QrCode className="w-32 h-32 mx-auto mb-4 text-primary" />
                      <p className="text-white/70 mb-6">Scan QR code or choose your platform</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button
                        className="btn-modern btn-primary flex items-center justify-center space-x-2"
                        onClick={() => window.open("https://apps.apple.com/app/stocx-ai", "_blank")}
                      >
                        <Apple className="w-5 h-5" />
                        <span>App Store</span>
                      </Button>
                      <Button
                        className="btn-modern btn-secondary flex items-center justify-center space-x-2"
                        onClick={() =>
                          window.open("https://play.google.com/store/apps/details?id=com.stocx.ai", "_blank")
                        }
                      >
                        <Play className="w-5 h-5" />
                        <span>Google Play</span>
                      </Button>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-white/50">Available on iOS 14+ and Android 8+</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" className="btn-modern btn-secondary text-lg px-8 py-4 bg-transparent">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-4">Everything you need to trade smarter</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Powerful AI-driven features designed to give you the edge in today's fast-moving markets.
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

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container-modern">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-green mb-2">50K+</div>
              <div className="text-white/70">Active Traders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-green mb-2">$2.5B+</div>
              <div className="text-white/70">Volume Traded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-green mb-2">94%</div>
              <div className="text-white/70">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-green mb-2">24/7</div>
              <div className="text-white/70">Market Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-4">Trusted by traders worldwide</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              See what our community of successful traders has to say about Stocx AI.
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

      {/* FAQ Section */}
      <section id="faq" className="section-padding">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Get answers to common questions about Stocx AI and start trading with confidence.
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
      <section className="section-padding bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container-modern">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-section-title text-gradient mb-4">Stay ahead of the market</h2>
            <p className="text-xl text-white/70 mb-8">
              Get exclusive trading insights, market analysis, and early access to new features delivered to your inbox.
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
      <section id="contact" className="section-padding">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-4">Get in touch</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Have questions or need support? Our team is here to help you succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-modern text-center">
              <CardContent className="p-8">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Email Support</h3>
                <p className="text-white/70 text-sm mb-4">Get help via email</p>
                <Button variant="outline" size="sm" className="btn-modern btn-secondary bg-transparent">
                  support@stocx.ai
                </Button>
              </CardContent>
            </Card>
            <Card className="card-modern text-center">
              <CardContent className="p-8">
                <MessageSquare className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-white/70 text-sm mb-4">Chat with our team</p>
                <Button variant="outline" size="sm" className="btn-modern btn-secondary bg-transparent">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
            <Card className="card-modern text-center">
              <CardContent className="p-8">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-white/70 text-sm mb-4">Call us directly</p>
                <Button variant="outline" size="sm" className="btn-modern btn-secondary bg-transparent">
                  +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>
            <Card className="card-modern text-center">
              <CardContent className="p-8">
                <ExternalLink className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Help Center</h3>
                <p className="text-white/70 text-sm mb-4">Browse our guides</p>
                <Button variant="outline" size="sm" className="btn-modern btn-secondary bg-transparent">
                  Visit Help Center
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
              <p className="text-white/60 text-sm">
                Revolutionizing trading with AI-powered insights and real-time market analysis.
              </p>
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
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
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
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
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
