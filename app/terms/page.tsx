import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container-modern">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-green rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-black" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Terms of Service</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Please read these terms carefully before using Stocx AI services.
            </p>
            <p className="text-white/50 mt-4">Last updated: December 15, 2024</p>
          </div>

          {/* Important Notice */}
          <Card className="card-modern mb-12 border-yellow-500/20 bg-yellow-500/5">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-400">
                <AlertTriangle className="w-6 h-6 mr-2" />
                Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <p className="mb-4">
                <strong>Trading involves substantial risk of loss.</strong> Stocx AI provides educational tools and
                analysis but does not guarantee profits or prevent losses. Past performance does not indicate future
                results.
              </p>
              <p>
                By using our services, you acknowledge that you understand these risks and agree to trade responsibly.
              </p>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <p>
                  By accessing or using Stocx AI ("the Service"), you agree to be bound by these Terms of Service
                  ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                </p>
                <p>
                  These Terms apply to all visitors, users, and others who access or use the Service, including our
                  mobile applications, website, and related services.
                </p>
                <p>
                  We reserve the right to update these Terms at any time. Continued use of the Service after changes
                  constitutes acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">What We Provide</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>AI-powered market analysis and trading insights</li>
                    <li>Real-time market data and alerts</li>
                    <li>Portfolio tracking and analytics tools</li>
                    <li>Educational content and trading resources</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">What We Don't Provide</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Investment advice or financial planning services</li>
                    <li>Guaranteed returns or profit promises</li>
                    <li>Direct trading execution or brokerage services</li>
                    <li>Tax or legal advice</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">3. User Accounts and Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Account Creation</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>You must be at least 18 years old to create an account</li>
                    <li>Provide accurate and complete information during registration</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Prohibited Uses</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Using the Service for illegal activities</li>
                    <li>Attempting to reverse engineer or hack our systems</li>
                    <li>Sharing your account with others</li>
                    <li>Using automated systems to access our Service</li>
                    <li>Violating any applicable laws or regulations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">4. Financial Disclaimers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Not Financial Advice</h4>
                  <p className="text-white/70">
                    All information provided by Stocx AI is for educational and informational purposes only. Nothing on
                    our platform constitutes financial, investment, trading, or other advice. You should consult with
                    qualified professionals before making investment decisions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Risk Acknowledgment</h4>
                  <p className="text-white/70">
                    Trading and investing involve substantial risk of loss. You acknowledge that:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-white/70 mt-2">
                    <li>You may lose some or all of your invested capital</li>
                    <li>Past performance does not guarantee future results</li>
                    <li>Market conditions can change rapidly and unpredictably</li>
                    <li>AI predictions and analysis may be incorrect</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Your Responsibility</h4>
                  <p className="text-white/70">
                    You are solely responsible for your trading and investment decisions. We strongly recommend that you
                    only trade with money you can afford to lose and seek independent financial advice if you have any
                    doubts.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">5. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Our Rights</h4>
                  <p className="text-white/70">
                    The Service and its original content, features, and functionality are owned by Stocx AI and are
                    protected by international copyright, trademark, patent, trade secret, and other intellectual
                    property laws.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Your Rights</h4>
                  <p className="text-white/70">
                    We grant you a limited, non-exclusive, non-transferable license to use the Service for personal,
                    non-commercial purposes in accordance with these Terms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Restrictions</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>You may not copy, modify, or distribute our content</li>
                    <li>You may not reverse engineer our algorithms or software</li>
                    <li>You may not use our trademarks without permission</li>
                    <li>You may not create derivative works based on our Service</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">6. Privacy and Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                  information when you use our Service. By using our Service, you agree to the collection and use of
                  information in accordance with our Privacy Policy.
                </p>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm">
                    <strong>Key Points:</strong> We use bank-level encryption, never sell your data, and give you full
                    control over your information. Read our full
                    <Link href="/privacy" className="text-primary hover:underline ml-1">
                      Privacy Policy
                    </Link>
                    for details.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">7. Subscription and Payments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Subscription Plans</h4>
                  <p className="text-white/70">
                    Stocx AI offers various subscription plans with different features and pricing. Current pricing is
                    available in the app and on our website.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Billing</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Subscriptions are billed in advance on a recurring basis</li>
                    <li>Payments are processed through secure third-party providers</li>
                    <li>You authorize us to charge your payment method automatically</li>
                    <li>Failed payments may result in service suspension</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Cancellation and Refunds</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>You can cancel your subscription at any time</li>
                    <li>Cancellation takes effect at the end of the current billing period</li>
                    <li>No refunds for partial months or unused portions</li>
                    <li>Free trial cancellations must be made before the trial ends</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <p className="text-red-400 font-semibold mb-2">Important Legal Notice</p>
                  <p className="text-white/70 text-sm">
                    This section limits our liability. Please read carefully as it affects your legal rights.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Service Availability</h4>
                  <p className="text-white/70">
                    We strive to maintain high service availability but cannot guarantee uninterrupted access. The
                    Service is provided "as is" without warranties of any kind.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Limitation of Damages</h4>
                  <p className="text-white/70">
                    To the maximum extent permitted by law, Stocx AI shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages, including but not limited to trading losses, lost
                    profits, or data loss.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Maximum Liability</h4>
                  <p className="text-white/70">
                    Our total liability to you for all claims arising from your use of the Service shall not exceed the
                    amount you paid us in the 12 months preceding the claim.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">9. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Termination by You</h4>
                  <p className="text-white/70">
                    You may terminate your account at any time by contacting our support team or using the account
                    deletion feature in the app. Upon termination, your access to the Service will cease immediately.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Termination by Us</h4>
                  <p className="text-white/70">
                    We may terminate or suspend your account immediately, without prior notice, if you breach these
                    Terms or engage in activities that harm our Service or other users.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Effect of Termination</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    <li>Your right to use the Service will cease immediately</li>
                    <li>We may delete your account and data after a reasonable period</li>
                    <li>Provisions that should survive termination will remain in effect</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">10. Governing Law and Disputes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div>
                  <h4 className="font-semibold text-white mb-2">Governing Law</h4>
                  <p className="text-white/70">
                    These Terms shall be governed by and construed in accordance with the laws of Delaware, United
                    States, without regard to its conflict of law provisions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Dispute Resolution</h4>
                  <p className="text-white/70">
                    We encourage you to contact us first to resolve any disputes. If we cannot resolve a dispute through
                    direct communication, you agree to resolve disputes through binding arbitration rather than in
                    court.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Class Action Waiver</h4>
                  <p className="text-white/70">
                    You agree that any arbitration or legal proceeding shall be limited to the dispute between you and
                    Stocx AI individually. You waive any right to participate in class action lawsuits or class-wide
                    arbitrations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-gradient">11. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80">
                <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
                <div className="space-y-2 text-white/70">
                  <p>
                    <strong>Email:</strong> legal@stocx.ai
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Trading Street, Financial District, NY 10004
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
                  Privacy Policy
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
            <p className="text-white/50 text-sm">These terms are effective as of December 15, 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}
