import { ArrowLeft, FileText, Shield, Smartphone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "iOS App Legal - Stocx Ai",
  description: "Terms of Service and Privacy Policy for Stocx Ai iOS application.",
}

export default function IOSLegalPage() {
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

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 mb-6">
            <Smartphone className="h-8 w-8 text-emerald-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-white">iOS App Legal Information</h1>
          <p className="text-gray-300 text-lg">
            Access our Terms of Service and Privacy Policy for the Stocx Ai iOS application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/30 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-emerald-400" />
                </div>
                <CardTitle className="text-white">Terms of Service</CardTitle>
              </div>
              <CardDescription className="text-gray-400">
                Complete terms and conditions for using the Stocx Ai iOS app, including subscription terms and user
                responsibilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Auto-renewable subscriptions</span>
                  <span className="text-emerald-400">✓ Covered</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Apple compliance</span>
                  <span className="text-emerald-400">✓ Covered</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Investment disclaimers</span>
                  <span className="text-emerald-400">✓ Covered</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Liability limitations</span>
                  <span className="text-emerald-400">✓ Covered</span>
                </div>
              </div>
              <Link href="/terms">
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                  View Terms of Service
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/30 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Privacy Policy</CardTitle>
              </div>
              <CardDescription className="text-gray-400">
                Detailed privacy policy explaining our minimal data collection practices and third-party integrations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">No personal data collected</span>
                  <span className="text-emerald-400">✓ Confirmed</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Apple subscription data</span>
                  <span className="text-cyan-400">✓ Explained</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Google Ads integration</span>
                  <span className="text-cyan-400">✓ Explained</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">App Store compliance</span>
                  <span className="text-emerald-400">✓ Covered</span>
                </div>
              </div>
              <Link href="/privacy-ios">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600">
                  View Privacy Policy
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Summary */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Summary</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-emerald-400 mb-2">Privacy Highlights</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• No personal data collected by our app</li>
                <li>• Apple handles all subscription data</li>
                <li>• Google Ads may collect advertising data</li>
                <li>• Full transparency in our practices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-cyan-400 mb-2">Subscription Terms</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Auto-renewable subscriptions available</li>
                <li>• Cancel anytime through Apple ID settings</li>
                <li>• Free trials may be offered</li>
                <li>• Refunds handled by Apple</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
