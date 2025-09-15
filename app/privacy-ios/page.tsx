import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Apple, Shield, Eye, Lock, Smartphone } from "lucide-react"
import Link from "next/link"

export default function IOSPrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">iOS Privacy Policy</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Privacy information specific to our iOS application and Apple's ecosystem.
            </p>
            <p className="text-white/50 mt-4">Last updated: December 15, 2024</p>
          </div>

          {/* iOS-Specific Privacy Overview */}
          <Card className="card-modern mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient">
                <Smartphone className="w-6 h-6 mr-2" />
                iOS Privacy at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">App Tracking Transparency</h3>
                  <p className="text-white/70 text-sm">We respect your choice on cross-app tracking</p>
                </div>
                <div className="text-center">
                  <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Keychain Integration</h3>
                  <p className="text-white/70 text-sm">Secure credential storage using iOS Keychain</p>
                </div>
                <div className="text-center">
                  <Eye className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Privacy Labels</h3>
                  <p className="text-white/70 text-sm">Transparent data usage in App Store</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">App Tracking Transparency (iOS 14.5+)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <p>
                  In compliance with Apple's App Tracking Transparency framework, Stocx AI requests your permission
                  before tracking your activity across other companies' apps and websites for advertising or sharing
                  with data brokers.
                </p>
                <div>
                  <h4 className="font-semibold text-white mb-2">What This Means</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>We will ask for your permission before tracking you across apps and websites</li>
                    <li>You can change your tracking preference anytime in iOS Settings</li>
                    <li>Choosing "Ask App Not to Track" will not affect core app functionality</li>
                    <li>We respect your choice and do not attempt to circumvent your decision</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">How to Manage Tracking</h4>
                  <ol className="list-decimal list-inside space-y-1 text-white/70">
                    <li>Open Settings on your iOS device</li>
                    <li>Scroll down and tap "Privacy &amp; Security"</li>
                    <li>Tap "Tracking"</li>
                    <li>Find "Stocx AI" and toggle tracking on or off</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">iOS Permissions and Data Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Required Permissions</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <h5 className="font-medium text-white">Network Access</h5>
                      <p className="text-white/70 text-sm">Required for real-time market data and app functionality</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <h5 className="font-medium text-white">Keychain Access</h5>
                      <p className="text-white/70 text-sm">Securely store your login credentials and API keys</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Optional Permissions</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <h5 className="font-medium text-white">Notifications</h5>
                      <p className="text-white/70 text-sm">Send trading alerts and market updates</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <h5 className="font-medium text-white">Face ID / Touch ID</h5>
                      <p className="text-white/70 text-sm">Biometric authentication for secure app access</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <h5 className="font-medium text-white">Camera</h5>
                      <p className="text-white/70 text-sm">Scan QR codes for quick setup and sharing</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <h5 className="font-medium text-white">Contacts</h5>
                      <p className="text-white/70 text-sm">Share app with friends (referral program)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">Privacy Nutrition Labels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <p>
                  Our App Store listing includes Apple's privacy nutrition labels that provide a clear summary of our
                  privacy practices. Here's what we've disclosed:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Data Linked to You</h4>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>• Contact Info (email, name)</li>
                      <li>• Financial Info (portfolio data, encrypted)</li>
                      <li>• User Content (watchlists, preferences)</li>
                      <li>• Identifiers (account ID, device ID)</li>
                      <li>• Usage Data (app interactions)</li>
                      <li>• Diagnostics (crash reports)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">Data Not Linked to You</h4>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>• Analytics (aggregated usage patterns)</li>
                      <li>• Performance Data (app speed, crashes)</li>
                      <li>• Device Information (iOS version, model)</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Data Used for Tracking</h4>
                  <p className="text-white/70 text-sm mb-2">
                    Only if you grant permission through App Tracking Transparency:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-white/70 text-sm">
                    <li>Identifiers for advertising optimization</li>
                    <li>Usage data for personalized ads</li>
                    <li>Analytics for marketing attribution</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">iCloud and Data Sync</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">iCloud Keychain</h4>
                  <p className="text-white/70 mb-4">
                    If you have iCloud Keychain enabled, your Stocx AI login credentials may be synced across your Apple
                    devices. This is handled entirely by Apple and we do not have access to this data.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">App Data Sync</h4>
                  <p className="text-white/70 mb-4">
                    Your app preferences and settings are synced through our secure servers, not through iCloud. This
                    ensures your trading data remains encrypted and under our security controls.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Backup Considerations</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Sensitive financial data is excluded from iCloud backups</li>
                    <li>App preferences and non-sensitive settings may be backed up</li>
                    <li>You can disable app data backup in iOS Settings if preferred</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">iOS-Specific Security Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">App Transport Security (ATS)</h4>
                  <p className="text-white/70 mb-4">
                    Stocx AI enforces App Transport Security, ensuring all network communications use secure HTTPS
                    connections with strong encryption and certificate validation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Secure Enclave Integration</h4>
                  <p className="text-white/70 mb-4">
                    On supported devices, we utilize the Secure Enclave for biometric authentication, ensuring your Face
                    ID and Touch ID data never leaves your device.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Code Signing and Integrity</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>App is signed with Apple Developer certificates</li>
                    <li>Runtime protection against code injection</li>
                    <li>Regular security updates through App Store</li>
                    <li>Automatic app integrity verification</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">Children's Privacy (iOS)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <p>
                  Stocx AI is rated 17+ in the App Store due to the nature of financial trading content. The app is not
                  intended for users under 18 years of age.
                </p>
                <div>
                  <h4 className="font-semibold text-white mb-2">Age Verification</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>App Store age rating prevents download by minors</li>
                    <li>Additional age verification during account creation</li>
                    <li>Compliance with financial services age requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Family Sharing</h4>
                  <p className="text-white/70">
                    Due to the mature nature of financial trading, Stocx AI subscriptions cannot be shared through
                    Apple's Family Sharing feature.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">Your iOS Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">iOS Settings Controls</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Manage app permissions in iOS Settings &amp; Privacy &amp; Security</li>
                    <li>Control tracking preferences for advertising</li>
                    <li>Manage notification settings and types</li>
                    <li>Control app background refresh and data usage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Data Portability</h4>
                  <p className="text-white/70 mb-4">
                    You can export your data from within the app or by contacting our support team. Exported data will
                    be provided in standard formats compatible with other platforms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Account Deletion</h4>
                  <p className="text-white/70">
                    You can delete your account and all associated data through the app settings or by visiting our data
                    deletion page. This action is permanent and cannot be undone.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                <p className="mb-4">For iOS-specific privacy questions or concerns:</p>
                <div className="space-y-2 text-white/70">
                  <p>
                    <strong>Email:</strong> ios-privacy@stocx.ai
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
                    <strong>Apple Privacy:</strong> For questions about Apple's privacy practices, visit{" "}
                    <a
                      href="https://www.apple.com/privacy/"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      apple.com/privacy
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link href="/privacy">
                <Button variant="outline" className="btn-modern btn-secondary bg-transparent">
                  General Privacy Policy
                </Button>
              </Link>
              <Link href="/ios-legal">
                <Button variant="outline" className="btn-modern btn-secondary bg-transparent">
                  iOS Legal Information
                </Button>
              </Link>
              <Link href="/support">
                <Button variant="outline" className="btn-modern btn-secondary bg-transparent">
                  Support Center
                </Button>
              </Link>
            </div>
            <p className="text-white/50 text-sm">This privacy policy is specific to the iOS version of Stocx AI</p>
          </div>
        </div>
      </div>
    </div>
  )
}
