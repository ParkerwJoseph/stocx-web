import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Apple, ExternalLink, FileText, Shield } from "lucide-react"
import Link from "next/link"

export default function IOSLegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container-modern">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-green rounded-lg flex items-center justify-center">
                <Apple className="w-5 h-5 text-black" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">iOS App Legal Information</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Legal documents and policies specific to our iOS application.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link href="/privacy-ios">
              <Card className="card-modern cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-white mb-2">iOS Privacy Policy</h3>
                  <p className="text-white/70 text-sm">iOS-specific privacy information</p>
                </CardContent>
              </Card>
            </Link>

            <Card className="card-modern cursor-pointer group">
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-2">App Store Terms</h3>
                <p className="text-white/70 text-sm">Apple App Store specific terms</p>
              </CardContent>
            </Card>

            <Card className="card-modern cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Apple className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-2">iOS Guidelines</h3>
                <p className="text-white/70 text-sm">Compliance with Apple guidelines</p>
              </CardContent>
            </Card>

            <Card className="card-modern cursor-pointer group">
              <CardContent className="p-6 text-center">
                <ExternalLink className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-2">Third-Party</h3>
                <p className="text-white/70 text-sm">Third-party licenses and notices</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">App Store Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <p>
                  The Stocx AI iOS application complies with all Apple App Store Review Guidelines and policies. This
                  includes adherence to content policies, user privacy requirements, and technical standards.
                </p>
                <div>
                  <h4 className="font-semibold text-white mb-2">Key Compliance Areas</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>User privacy and data protection (iOS 14.5+ App Tracking Transparency)</li>
                    <li>In-app purchase guidelines and subscription management</li>
                    <li>Content and conduct policies for financial applications</li>
                    <li>Accessibility standards (VoiceOver, Dynamic Type support)</li>
                    <li>Security requirements for financial data handling</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">iOS-Specific Privacy Practices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">App Tracking Transparency</h4>
                  <p className="text-white/70 mb-4">
                    In compliance with iOS 14.5+ requirements, Stocx AI requests permission before tracking your
                    activity across other companies' apps and websites. You can manage this permission in your device
                    settings at any time.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Privacy Nutrition Labels</h4>
                  <p className="text-white/70 mb-2">
                    Our App Store listing includes Apple's privacy nutrition labels that detail:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Data types collected and their purposes</li>
                    <li>Whether data is linked to your identity</li>
                    <li>Whether data is used for tracking</li>
                    <li>Data sharing practices with third parties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">iOS Permissions</h4>
                  <p className="text-white/70 mb-2">Stocx AI requests the following iOS permissions:</p>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>
                      <strong>Notifications:</strong> For trading alerts and market updates
                    </li>
                    <li>
                      <strong>Face ID/Touch ID:</strong> For secure app access (optional)
                    </li>
                    <li>
                      <strong>Camera:</strong> For QR code scanning (optional)
                    </li>
                    <li>
                      <strong>Contacts:</strong> For referral features (optional)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">Subscription Terms (iOS)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Auto-Renewable Subscriptions</h4>
                  <p className="text-white/70 mb-4">
                    Stocx AI offers auto-renewable subscriptions through the App Store. These subscriptions
                    automatically renew unless cancelled at least 24 hours before the end of the current period.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Payment will be charged to your iTunes Account at confirmation of purchase</li>
                    <li>
                      Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end
                      of the current period
                    </li>
                    <li>Account will be charged for renewal within 24-hours prior to the end of the current period</li>
                    <li>
                      Subscriptions may be managed by the user and auto-renewal may be turned off by going to the user's
                      Account Settings after purchase
                    </li>
                    <li>
                      Any unused portion of a free trial period will be forfeited when the user purchases a subscription
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Managing Your Subscription</h4>
                  <p className="text-white/70 mb-2">To manage or cancel your subscription:</p>
                  <ol className="list-decimal list-inside space-y-1 text-white/70">
                    <li>Open the Settings app on your iOS device</li>
                    <li>Tap your name at the top of the screen</li>
                    <li>Tap "Subscriptions"</li>
                    <li>Find and tap "Stocx AI"</li>
                    <li>Choose your preferred subscription option or tap "Cancel Subscription"</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">Third-Party Services and SDKs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <p>
                  The iOS version of Stocx AI integrates with the following third-party services and SDKs, each with
                  their own privacy policies and terms of service:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Analytics & Performance</h4>
                    <ul className="list-disc list-inside space-y-1 text-white/70 text-sm">
                      <li>Firebase Analytics (Google)</li>
                      <li>Crashlytics (Google)</li>
                      <li>App Store Connect Analytics (Apple)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Financial Data</h4>
                    <ul className="list-disc list-inside space-y-1 text-white/70 text-sm">
                      <li>Alpha Vantage API</li>
                      <li>IEX Cloud</li>
                      <li>CoinGecko API</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Authentication & Security</h4>
                    <ul className="list-disc list-inside space-y-1 text-white/70 text-sm">
                      <li>Auth0</li>
                      <li>Keychain Services (Apple)</li>
                      <li>Touch ID/Face ID (Apple)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Communication</h4>
                    <ul className="list-disc list-inside space-y-1 text-white/70 text-sm">
                      <li>Apple Push Notification Service</li>
                      <li>SendGrid (Email)</li>
                      <li>Twilio (SMS)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">Accessibility Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <p>
                  Stocx AI is committed to making our iOS app accessible to all users, including those with
                  disabilities. We follow Apple's accessibility guidelines and continuously work to improve our app's
                  accessibility features.
                </p>
                <div>
                  <h4 className="font-semibold text-white mb-2">Supported Accessibility Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>VoiceOver screen reader support</li>
                    <li>Dynamic Type for adjustable text sizes</li>
                    <li>High contrast mode compatibility</li>
                    <li>Voice Control support</li>
                    <li>Switch Control compatibility</li>
                    <li>Reduce Motion support for animations</li>
                  </ul>
                </div>
                <p className="text-white/70">
                  If you encounter any accessibility issues or have suggestions for improvement, please contact our
                  support team at accessibility@stocx.ai.
                </p>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                <p className="mb-4">For iOS-specific legal questions or concerns, please contact us:</p>
                <div className="space-y-2 text-white/70">
                  <p>
                    <strong>Email:</strong> ios-legal@stocx.ai
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Trading Street, Financial District, NY 10004
                  </p>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-white/80">
                    <strong>App Store Support:</strong> For issues related to App Store purchases, subscriptions, or
                    downloads, please contact Apple Support directly through the App Store app or at support.apple.com.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/privacy-ios">
                <Button variant="outline" className="btn-modern btn-secondary bg-transparent">
                  iOS Privacy Policy
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
            <p className="text-white/50 text-sm">This information is specific to the iOS version of Stocx AI</p>
          </div>
        </div>
      </div>
    </div>
  )
}
