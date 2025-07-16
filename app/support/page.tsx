"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Mail, MessageCircle, Phone, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const faqs = [
    {
      question: "When will Stocx Ai be available?",
      answer:
        "We're working hard to launch Stocx Ai in Q2 2024! Subscribe to our newsletter to be the first to know when we go live.",
    },
    {
      question: "What makes Stocx Ai different from other trading platforms?",
      answer:
        "Stocx Ai leverages advanced artificial intelligence to provide real-time market analysis, predictive insights, and personalized trading recommendations that adapt to your investment style.",
    },
    {
      question: "Will there be a free trial?",
      answer:
        "Yes! We offer a 3-day free trial period so you can experience the power of AI-driven stock analysis before committing to a subscription.",
    },
    {
      question: "What types of investments will Stocx Ai support?",
      answer:
        "Our platform will support stocks, ETFs, options, and other major securities. We're continuously expanding our coverage to include more asset classes.",
    },
    {
      question: "How do I unsubscribe from email updates?",
      answer:
        "You can unsubscribe at any time by clicking the unsubscribe link in any of our emails or by contacting our support team at support@stocxai.com.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="h-6 w-px bg-gray-700" />
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Stocx Ai
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Support Center</h1>
          <p className="text-gray-300 text-lg">
            We're here to help! Find answers to common questions or get in touch with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Get in Touch</CardTitle>
                <CardDescription className="text-gray-400">
                  Have a question or need assistance? Send us a message and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help..."
                        className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 min-h-[120px]"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 mb-4">
                      <Mail className="h-8 w-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 mb-4">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 bg-transparent"
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: "", email: "", subject: "", message: "" })
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 text-center">
                <Mail className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <h3 className="font-medium text-white mb-1">Email</h3>
                <p className="text-sm text-gray-400">support@stocxai.com</p>
              </div>
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 text-center">
                <MessageCircle className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                <h3 className="font-medium text-white mb-1">Live Chat</h3>
                <p className="text-sm text-gray-400">Coming with app launch</p>
              </div>
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 text-center">
                <Phone className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <h3 className="font-medium text-white mb-1">Phone</h3>
                <p className="text-sm text-gray-400">Available at launch</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-gray-900/30 border-gray-800">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-white">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Still have questions?</h3>
              <p className="text-gray-300 mb-4">
                Can't find what you're looking for? Our team is here to help you get the answers you need.
              </p>
              <Link href="mailto:support@stocxai.com">
                <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
