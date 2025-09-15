import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Lock, UserCheck, Database, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container-modern">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-green rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-black" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Your privacy is our priority. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-white/50 mt-4">Last updated: December 15, 2024</p>
          </div>

          {/* Quick Overview */}
          <Card className="card-modern mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-gradient">
                <Eye className="w-6 h-6 mr-2" />
                Privacy at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Secure by Design</h3>
                  <p className="text-white/70 text-sm">End-to-end encryption for all your data</p>
                </div>
                <div className="text-center">
                  <UserCheck className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Your Control</h3>
                  <p className="text-white/70 text-sm">You decide what data to share</p>
                </div>
                <div className="text-center">
                  <Database className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-white mb-1">Minimal Collection</h3>
                  <p className="text-white/70 text-sm">We only collect what's necessary</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Personal Information</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Email address (for account creation and notifications)</li>
                    <li>Name (optional, for personalization)</li>
                    <li>Phone number (optional, for two-factor authentication)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Trading Data</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Portfolio information (encrypted and anonymized)</li>
                    <li>Trading preferences and settings</li>
                    <li>Market watchlists and alerts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Technical Information</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Device information and operating system</li>
                    <li>App usage analytics (anonymized)</li>
                    <li>Crash reports and performance data</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Core Services</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Provide AI-powered trading insights and recommendations</li>
                    <li>Deliver real-time market alerts and notifications</li>
                    <li>Maintain and improve app functionality</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Communication</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Send important account and security updates</li>
                    <li>Provide customer support and assistance</li>
                    <li>Share market insights and educational content (with consent)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Improvement</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Analyze usage patterns to enhance user experience</li>
                    <li>Develop new features and improve AI algorithms</li>
                    <li>Ensure app security and prevent fraud</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">3. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Encryption</h4>
                  <p className="text-white/70">
                    All sensitive data is encrypted using industry-standard AES-256 encryption both in transit and at
                    rest. Your trading data is anonymized and encrypted before being processed by our AI systems.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Access Controls</h4>
                  <p className="text-white/70">
                    We implement strict access controls and regularly audit our systems. Only authorized personnel with
                    legitimate business needs can access user data, and all access is logged and monitored.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Third-Party Security</h4>
                  <p className="text-white/70">
                    We work only with trusted third-party services that meet our strict security standards. All partners
                    undergo regular security assessments and comply with relevant data protection regulations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">4. Data Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">We Never Sell Your Data</h4>
                  <p className="text-white/70">
                    We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                    Your data is yours, and we respect that.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Limited Sharing</h4>
                  <p className="text-white/70 mb-2">We may share anonymized, aggregated data with:</p>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Market data providers (for improved insights)</li>
                    <li>Analytics services (for app improvement)</li>
                    <li>Security services (for fraud prevention)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Legal Requirements</h4>
                  <p className="text-white/70">
                    We may disclose information when required by law, court order, or to protect our rights and the
                    safety of our users. We will notify you of such requests unless prohibited by law.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">5. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Access and Control</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>View and download your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Data Portability</h4>
                  <p className="text-white/70">
                    You can export your data in a machine-readable format. Contact our support team to request a data
                    export or account deletion.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Complaints</h4>
                  <p className="text-white/70">
                    If you have concerns about our privacy practices, please contact us first. You also have the right
                    to file a complaint with your local data protection authority.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">6. International Transfers</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                <p className="mb-4">
                  Stocx AI operates globally, and your data may be processed in countries other than your own. We ensure
                  that all international transfers comply with applicable data protection laws and implement appropriate
                  safeguards.
                </p>
                <p>
                  For users in the European Union, we rely on adequacy decisions, standard contractual clauses, or other
                  approved transfer mechanisms to ensure your data receives adequate protection.
                </p>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">7. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                <p className="mb-4">
                  Stocx AI is not intended for use by children under 18 years of age. We do not knowingly collect
                  personal information from children under 18. If we become aware that we have collected personal
                  information from a child under 18, we will take steps to delete such information.
                </p>
                <p>
                  If you are a parent or guardian and believe your child has provided us with personal information,
                  please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">8. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                <p className="mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
                  laws. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside space-y-1 text-white/70 mb-4">
                  <li>Sending an email notification</li>
                  <li>Displaying a prominent notice in the app</li>
                  <li>Updating the "Last updated" date at the top of this policy</li>
                </ul>
                <p>Your continued use of Stocx AI after any changes indicates your acceptance of the updated policy.</p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">9. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                <p className="mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-white/70">privacy@stocx.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-white/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-white/80">
                    <strong>Data Protection Officer:</strong> For EU residents, you can contact our Data Protection
                    Officer at dpo@stocx.ai
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
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
              <Link href="/data-deletion">
                <Button variant="outline" className="btn-modern btn-secondary bg-transparent">
                  Data Deletion
                </Button>
              </Link>
            </div>
            <p className="text-white/50 text-sm">This privacy policy is effective as of December 15, 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}
