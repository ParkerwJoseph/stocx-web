"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Trash2, Mail, CheckCircle2, AlertTriangle, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DataDeletionPage() {
  const [formData, setFormData] = useState({
    email: "",
    reason: "",
    additionalInfo: "",
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

  const deletionMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Request",
      description: "Send us an email with your deletion request",
      method: "privacy@stocxai.com",
      timeframe: "Within 48 hours",
    },
    {
      icon: <Trash2 className="h-6 w-6" />,
      title: "Online Form",
      description: "Use the form below to submit your request",
      method: "Fill out the form on this page",
      timeframe: "Within 24 hours",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Support Ticket",
      description: "Contact our support team directly",
      method: "Visit our support page",
      timeframe: "Within 72 hours",
    },
  ]

  const dataTypes = [
    {
      type: "Email Address",
      description: "Your email address from newsletter subscriptions",
      source: "Website newsletter signup",
      retention: "Until deletion requested",
    },
    {
      type: "Contact Information",
      description: "Name and email from support requests",
      source: "Support form submissions",
      retention: "Until deletion requested or 2 years",
    },
    {
      type: "Communication History",
      description: "Previous support conversations and emails",
      source: "Support interactions",
      retention: "Until deletion requested or 2 years",
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-6">
            <Trash2 className="h-8 w-8 text-red-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-white">Data Deletion Request</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We respect your right to privacy. Request deletion of your personal data from our systems using any of the
            methods below.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Important Information</h3>
              <div className="space-y-2 text-gray-300">
                <p>
                  <strong>iOS App Users:</strong> We do not collect any personal data from our iOS app, so there is no
                  data to delete from the app itself.
                </p>
                <p>
                  <strong>Website Users:</strong> This process only applies to data collected through our website
                  (newsletter subscriptions, support requests, etc.).
                </p>
                <p>
                  <strong>Google Ads:</strong> For advertising data collected by Google Ads, please visit{" "}
                  <a
                    href="https://myaccount.google.com/data-and-privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 underline"
                  >
                    Google's Privacy Controls
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Methods and Information */}
          <div className="space-y-8">
            {/* Deletion Methods */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">How to Request Data Deletion</h2>
              <div className="space-y-4">
                {deletionMethods.map((method, index) => (
                  <Card key={index} className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center text-emerald-400">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                          <p className="text-gray-300 mb-3">{method.description}</p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-emerald-400">{method.method}</span>
                            <div className="flex items-center gap-1 text-gray-400">
                              <Clock className="h-4 w-4" />
                              {method.timeframe}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* What Data We Have */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">What Data We May Have</h2>
              <div className="space-y-4">
                {dataTypes.map((data, index) => (
                  <Card key={index} className="bg-gray-900/30 border-gray-800">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-white">{data.type}</h3>
                        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{data.retention}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{data.description}</p>
                      <p className="text-xs text-gray-500">Source: {data.source}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process Timeline */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Deletion Process</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Request Received</h3>
                    <p className="text-gray-300 text-sm">We acknowledge your deletion request within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Identity Verification</h3>
                    <p className="text-gray-300 text-sm">We may ask for verification to protect your privacy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Data Removal</h3>
                    <p className="text-gray-300 text-sm">We delete your data from all systems within 30 days maximum</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Confirmation</h3>
                    <p className="text-gray-300 text-sm">We send you confirmation once deletion is complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Deletion Form */}
          <div>
            <Card className="bg-gray-900/50 border-gray-800 sticky top-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Trash2 className="h-5 w-5" />
                  Data Deletion Request Form
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out this form to request deletion of your personal data from our systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="The email address you want deleted"
                        className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        This should be the email address associated with your account or subscriptions.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-300 mb-2">
                        Reason for Deletion (Optional)
                      </label>
                      <Input
                        id="reason"
                        name="reason"
                        type="text"
                        placeholder="e.g., No longer interested, Privacy concerns"
                        className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500"
                        value={formData.reason}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Information (Optional)
                      </label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        placeholder="Any additional details about your request..."
                        className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 min-h-[100px]"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">What will be deleted:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Email address from newsletter subscriptions</li>
                        <li>• Support request history and contact information</li>
                        <li>• Any other personal data associated with your email</li>
                      </ul>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
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
                          Processing Request...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Submit Deletion Request <Trash2 className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you confirm that you want to permanently delete your data from our
                      systems.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 mb-6">
                      <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Request Submitted Successfully!</h3>
                    <p className="text-gray-400 mb-6">
                      We've received your data deletion request. You'll receive a confirmation email within 24 hours,
                      and your data will be deleted within 30 days.
                    </p>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 bg-transparent"
                        onClick={() => {
                          setSubmitted(false)
                          setFormData({ email: "", reason: "", additionalInfo: "" })
                        }}
                      >
                        Submit Another Request
                      </Button>
                      <Link href="/support">
                        <Button variant="ghost" className="w-full text-gray-400 hover:text-white">
                          Contact Support
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-900/30 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Can I recover my data after deletion?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  No, data deletion is permanent and irreversible. Once we confirm deletion, your data cannot be
                  recovered.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">How long does the deletion process take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We typically complete data deletion within 7-14 business days, with a maximum of 30 days as required
                  by law.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">What about data from the iOS app?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We don't collect any personal data from our iOS app, so there's nothing to delete. Only Google Ads may
                  have advertising data.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Will I still receive emails after deletion?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  No, once your email is deleted from our systems, you will no longer receive any communications from
                  us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
