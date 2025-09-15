"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  HelpCircle,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  Search,
  BookOpen,
  Video,
  Shield,
  CreditCard,
  Smartphone,
  TrendingUp,
  Settings,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Topics", icon: <HelpCircle className="w-4 h-4" /> },
    { id: "getting-started", name: "Getting Started", icon: <BookOpen className="w-4 h-4" /> },
    { id: "trading", name: "Trading & AI", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "account", name: "Account & Billing", icon: <CreditCard className="w-4 h-4" /> },
    { id: "technical", name: "Technical Issues", icon: <Settings className="w-4 h-4" /> },
    { id: "security", name: "Security & Privacy", icon: <Shield className="w-4 h-4" /> },
  ]

  const faqs = [
    {
      category: "getting-started",
      question: "How do I get started with Stocx AI?",
      answer:
        "Download the app from the App Store or Google Play, create your account, and complete the onboarding process. You can start with our free tier to explore basic features before upgrading to a premium plan.",
    },
    {
      category: "getting-started",
      question: "What devices are supported?",
      answer:
        "Stocx AI is available on iOS 14+ and Android 8+. We also offer a web dashboard for premium subscribers. The app is optimized for both phones and tablets.",
    },
    {
      category: "trading",
      question: "How accurate are the AI predictions?",
      answer:
        "Our AI models achieve approximately 94% accuracy in trend prediction based on historical data. However, past performance does not guarantee future results, and all trading involves risk.",
    },
    {
      category: "trading",
      question: "What markets does Stocx AI cover?",
      answer:
        "We cover major stock markets (NYSE, NASDAQ, LSE), cryptocurrencies (Bitcoin, Ethereum, 100+ altcoins), forex pairs, commodities, and indices. Coverage varies by subscription tier.",
    },
    {
      category: "trading",
      question: "Can I connect my brokerage account?",
      answer:
        "Yes, we support integration with major brokers including TD Ameritrade, E*TRADE, Interactive Brokers, and more. Your credentials are encrypted and never stored on our servers.",
    },
    {
      category: "account",
      question: "How do I upgrade my subscription?",
      answer:
        "Go to Settings > Subscription in the app, or visit your account dashboard on our website. You can upgrade, downgrade, or cancel at any time. Changes take effect at the next billing cycle.",
    },
    {
      category: "account",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. Payments are processed securely through Stripe and are PCI DSS compliant.",
    },
    {
      category: "account",
      question: "Can I get a refund?",
      answer:
        "We offer a 7-day money-back guarantee for new subscribers. After that, subscriptions are non-refundable, but you can cancel anytime to avoid future charges.",
    },
    {
      category: "technical",
      question: "The app is running slowly. What should I do?",
      answer:
        "Try closing and reopening the app, ensure you have a stable internet connection, and check for app updates. If issues persist, restart your device or contact support.",
    },
    {
      category: "technical",
      question: "I'm not receiving notifications. How do I fix this?",
      answer:
        "Check your device notification settings, ensure Stocx AI has permission to send notifications, and verify your notification preferences in the app settings.",
    },
    {
      category: "technical",
      question: "How do I sync data across devices?",
      answer:
        "Data automatically syncs when you're logged into the same account. Ensure you're connected to the internet and logged in with the same credentials on all devices.",
    },
    {
      category: "security",
      question: "How is my data protected?",
      answer:
        "We use bank-level AES-256 encryption, two-factor authentication, and never store your trading passwords. All data is encrypted in transit and at rest. Read our Privacy Policy for full details.",
    },
    {
      category: "security",
      question: "How do I enable two-factor authentication?",
      answer:
        "Go to Settings > Security > Two-Factor Authentication. You can use SMS, email, or authenticator apps like Google Authenticator or Authy for added security.",
    },
    {
      category: "security",
      question: "What should I do if my account is compromised?",
      answer:
        "Immediately change your password, enable 2FA if not already active, and contact our support team. We'll help secure your account and investigate any unauthorized activity.",
    },
  ]

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const resources = [
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      icon: <Video className="w-6 h-6" />,
      link: "#",
      badge: "Popular",
    },
    {
      title: "Trading Guide",
      description: "Complete guide to AI-powered trading",
      icon: <BookOpen className="w-6 h-6" />,
      link: "#",
      badge: "New",
    },
    {
      title: "API Documentation",
      description: "For developers integrating with Stocx AI",
      icon: <ExternalLink className="w-6 h-6" />,
      link: "#",
      badge: null,
    },
    {
      title: "Mobile App Guide",
      description: "Getting the most out of our mobile apps",
      icon: <Smartphone className="w-6 h-6" />,
      link: "#",
      badge: null,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container-modern">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-green rounded-lg flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-gradient">Stocx AI</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="btn-modern btn-secondary bg-transparent">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="container-modern">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Support Center</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Get help with Stocx AI. Find answers, contact support, and access helpful resources.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="card-modern text-center">
              <CardContent className="p-8">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-white/70 mb-4">Get instant help from our support team</p>
                <div className="flex items-center justify-center text-sm text-green-400 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  Available 24/7
                </div>
                <Button className="btn-modern btn-primary w-full">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="card-modern text-center">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
                <p className="text-white/70 mb-4">Send us a detailed message</p>
                <div className="flex items-center justify-center text-sm text-yellow-400 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  Response within 2 hours
                </div>
                <Button variant="outline" className="btn-modern btn-secondary w-full bg-transparent">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="card-modern text-center">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-white/70 mb-4">Speak directly with our team</p>
                <div className="flex items-center justify-center text-sm text-blue-400 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  Mon-Fri 9AM-6PM EST
                </div>
                <Button variant="outline" className="btn-modern btn-secondary w-full bg-transparent">
                  +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Search and Categories */}
          <Card className="card-modern mb-12">
            <CardHeader>
              <CardTitle className="text-gradient text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-md mx-auto mb-8">
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

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`btn-modern ${selectedCategory === category.id ? "btn-primary" : "btn-secondary"}`}
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </Button>
                ))}
              </div>

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
                  <p className="text-white/60">No FAQs found matching your search and category.</p>
                  <Button
                    variant="outline"
                    className="btn-modern btn-secondary mt-4 bg-transparent"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("all")
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gradient text-center mb-8">Helpful Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="card-modern group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {resource.icon}
                      </div>
                      {resource.badge && (
                        <Badge variant={resource.badge === "New" ? "default" : "secondary"} className="text-xs">
                          {resource.badge}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-white/70 text-sm">{resource.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-modern max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-gradient text-center">Still Need Help?</CardTitle>
              <p className="text-white/70 text-center">
                Send us a message and we'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Name</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="glass border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="glass border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Subject</label>
                  <Input
                    type="text"
                    placeholder="How can we help?"
                    className="glass border-white/20 text-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <Textarea
                    placeholder="Describe your issue or question in detail..."
                    rows={5}
                    className="glass border-white/20 text-white placeholder:text-white/40"
                  />
                </div>
                <Button type="submit" className="btn-modern btn-primary w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Footer Links */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/privacy">
                <Button variant="outline" className="btn-modern btn-secondary bg-transparent">
                  Privacy Policy
                </Button>
              </Link>
              <Link href="/terms">
                <Button variant="outline" className="btn-modern btn-secondary bg-transparent">
                  Terms of Service
                </Button>
              </Link>
              <Link href="/data-deletion">
                <Button variant="outline" className="btn-modern btn-secondary bg-transparent">
                  Data Deletion
                </Button>
              </Link>
            </div>
            <p className="text-white/50 text-sm">Our support team is here to help you succeed with Stocx AI</p>
          </div>
        </div>
      </div>
    </div>
  )
}
