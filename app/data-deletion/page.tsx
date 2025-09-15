"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Trash2, Shield, AlertTriangle, CheckCircle, Mail, Download, Database, Key } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DataDeletionPage() {
  const [email, setEmail] = useState("")
  const [reason, setReason] = useState("")
  const [confirmDeletion, setConfirmDeletion] = useState(false)
  const [exportData, setExportData] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    // Simulate API call
    setTimeout(() => {
      setSubmitMessage(
        "Your data deletion request has been submitted successfully. You will receive a confirmation email within 24 hours.",
      )
      setIsSubmitting(false)
      // Reset form
      setEmail("")
      setReason("")
      setConfirmDeletion(false)
      setExportData(false)
    }, 2000)
  }

  const deletionSteps = [
    {
      step: 1,
      title: "Request Submission",
      description: "Submit your deletion request with verification",
      icon: <Mail className="w-5 h-5" />,
      timeframe: "Immediate",
    },
    {
      step: 2,
      title: "Identity Verification",
      description: "We verify your identity for security purposes",
      icon: <Key className="w-5 h-5" />,
      timeframe: "24 hours",
    },
    {
      step: 3,
      title: "Data Export (Optional)",
      description: "Download your data before deletion if requested",
      icon: <Download className="w-5 h-5" />,
      timeframe: "48 hours",
    },
    {
      step: 4,
      title: "Account Deletion",
      description: "Complete removal of your account and data",
      icon: <Trash2 className="w-5 h-5" />,
      timeframe: "7 days",
    },
  ]

  const dataTypes = [
    {
      category: "Personal Information",
      items: ["Email address", "Name", "Phone number", "Profile settings"],
    },
    {
      category: "Trading Data",
      items: ["Portfolio information", "Trading history", "Watchlists", "Alerts and notifications"],
    },
    {
      category: "App Usage Data",
      items: ["Login history", "Feature usage", "Preferences", "Support conversations"],
    },
    {
      category: "Financial Data",
      items: ["Subscription history", "Payment information", "Billing records"],
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
                <Trash2 className="w-5 h-5 text-black" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Data Deletion Request</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Request complete deletion of your Stocx AI account and associated data.
            </p>
          </div>

          {/* Important Notice */}
          <Alert className="mb-12 border-red-500/20 bg-red-500/5">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <AlertDescription className="text-white/80">
              <strong>Important:</strong> Data deletion is permanent and cannot be undone. Once your account is deleted,
              you will lose access to all your trading data, preferences, and subscription benefits. Please consider
              exporting your data before proceeding.
            </AlertDescription>
          </Alert>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Deletion Process */}
            <div>
              <h2 className="text-2xl font-bold text-gradient mb-8">Deletion Process</h2>

              <div className="space-y-6 mb-12">
                {deletionSteps.map((step, index) => (
                  <Card key={index} className="card-modern">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-white">
                              Step {step.step}: {step.title}
                            </h3>
                            <span className="text-sm text-primary">{step.timeframe}</span>
                          </div>
                          <p className="text-white/70 text-sm">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* What Gets Deleted */}
              <h3 className="text-xl font-semibold text-gradient mb-6">What Data Will Be Deleted</h3>
              <div className="space-y-4">
                {dataTypes.map((dataType, index) => (
                  <Card key={index} className="card-modern">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <Database className="w-4 h-4 mr-2 text-primary" />
                        {dataType.category}
                      </h4>
                      <ul className="space-y-1">
                        {dataType.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-white/70 text-sm flex items-center">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Deletion Form */}
            <div>
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="text-gradient flex items-center">
                    <Trash2 className="w-5 h-5 mr-2" />
                    Request Account Deletion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your account email"
                        required
                        className="glass border-white/20 text-white placeholder:text-white/40"
                      />
                      <p className="text-xs text-white/50 mt-1">
                        Must match the email address associated with your account
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Reason for Deletion (Optional)
                      </label>
                      <Textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="Help us improve by sharing why you're leaving..."
                        rows={4}
                        className="glass border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="export-data"
                          checked={exportData}
                          onCheckedChange={setExportData}
                          className="mt-1"
                        />
                        <div>
                          <label htmlFor="export-data" className="text-sm font-medium text-white cursor-pointer">
                            Export my data before deletion
                          </label>
                          <p className="text-xs text-white/60">
                            We'll send you a download link for your data before proceeding with deletion
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="confirm-deletion"
                          checked={confirmDeletion}
                          onCheckedChange={setConfirmDeletion}
                          className="mt-1"
                        />
                        <div>
                          <label htmlFor="confirm-deletion" className="text-sm font-medium text-white cursor-pointer">
                            I understand this action is permanent *
                          </label>
                          <p className="text-xs text-white/60">
                            I acknowledge that my account and all associated data will be permanently deleted
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={!email || !confirmDeletion || isSubmitting}
                      className="btn-modern btn-primary w-full"
                    >
                      {isSubmitting ? "Submitting Request..." : "Submit Deletion Request"}
                    </Button>

                    {submitMessage && (
                      <Alert className="border-green-500/20 bg-green-500/5">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <AlertDescription className="text-white/80">{submitMessage}</AlertDescription>
                      </Alert>
                    )}
                  </form>
                </CardContent>
              </Card>

              {/* Alternative Options */}
              <Card className="card-modern mt-8">
                <CardHeader>
                  <CardTitle className="text-gradient">Before You Go...</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/70 text-sm">Consider these alternatives to permanent deletion:</p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-4 h-4 text-primary mt-1" />
                      <div>
                        <p className="text-white font-medium text-sm">Deactivate Account</p>
                        <p className="text-white/60 text-xs">
                          Temporarily disable your account while keeping your data
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Download className="w-4 h-4 text-primary mt-1" />
                      <div>
                        <p className="text-white font-medium text-sm">Export Data Only</p>
                        <p className="text-white/60 text-xs">Download your data without deleting your account</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 pt-4">
                    <Button variant="outline" size="sm" className="btn-modern btn-secondary flex-1 bg-transparent">
                      Contact Support
                    </Button>
                    <Button variant="outline" size="sm" className="btn-modern btn-secondary flex-1 bg-transparent">
                      Export Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

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
              <Link href="/support">
                <Button variant="outline" className="btn-modern btn-secondary bg-transparent">
                  Support Center
                </Button>
              </Link>
            </div>
            <p className="text-white/50 text-sm">
              Questions about data deletion? Contact our support team for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
