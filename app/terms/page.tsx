import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Terms of Service - Stocx Ai",
  description: "Terms of Service for Stocx Ai iOS application including subscription terms and user responsibilities.",
}

export default function TermsOfServicePage() {
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

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
          <p className="text-gray-300 text-lg mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By downloading, installing, or using the Stocx Ai mobile application ("App"), you agree to be bound by
                these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Stocx Ai is an iOS application that provides AI-powered stock market analysis, predictions, and trading
                insights. The App offers both free and premium features through auto-renewable subscriptions.
              </p>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">Important Disclaimer</h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Investment Risk Warning:</strong> The information provided by Stocx Ai is for educational and
                  informational purposes only and should not be considered as financial advice. All investments carry
                  risk, and past performance does not guarantee future results. You should consult with a qualified
                  financial advisor before making any investment decisions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Auto-Renewable Subscriptions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">3.1 Subscription Plans</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Stocx Ai offers the following auto-renewable subscription plans:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <strong>Monthly Premium:</strong> $9.99/month - Full access to AI analysis and predictions
                    </li>
                    <li>
                      <strong>Annual Premium:</strong> $34.99/year - Best value (equivalent to $2.92/month)
                    </li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Prices may vary by location and are subject to change. Current pricing will be displayed in the App
                    Store before purchase.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">3.2 Automatic Renewal</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your subscription will automatically renew at the end of each subscription period unless you cancel
                    at least 24 hours before the end of the current period. Your Apple ID account will be charged for
                    renewal within 24 hours prior to the end of the current period.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">3.3 Managing Subscriptions</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You can manage and cancel your subscriptions through your Apple ID account settings:
                  </p>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2">
                    <li>Open the Settings app on your iOS device</li>
                    <li>Tap your name at the top</li>
                    <li>Tap "Subscriptions"</li>
                    <li>Select Stocx Ai</li>
                    <li>Choose "Cancel Subscription" if desired</li>
                  </ol>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Alternatively, you can manage subscriptions through the App Store app or iTunes on your computer.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">3.4 Free Trial</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We offer a 3-day free trial for new subscribers. If you do not cancel during the free trial period,
                    you will be automatically charged for the subscription. Free trials are limited to one per user and
                    may not be combined with other offers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">3.5 Refunds</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All purchases are processed through Apple's App Store. Refund requests must be made directly to
                    Apple through their standard refund process. We do not process refunds directly. Apple's refund
                    policy applies to all purchases.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. User Responsibilities</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">You agree to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Use the App only for lawful purposes and in accordance with these Terms</li>
                  <li>Not attempt to reverse engineer, decompile, or disassemble the App</li>
                  <li>Not use the App to make investment decisions without proper due diligence</li>
                  <li>Not share your subscription access with others</li>
                  <li>Not attempt to circumvent any security measures or access restrictions</li>
                  <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                  <li>Understand that AI predictions are not guarantees of future performance</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                The App and all its content, features, and functionality are owned by Stocx Ai and are protected by
                international copyright, trademark, patent, trade secret, and other intellectual property laws. You are
                granted a limited, non-exclusive, non-transferable license to use the App for personal use only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Disclaimers and Limitations of Liability</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">6.1 No Financial Advice</h3>
                  <p className="text-gray-300 leading-relaxed">
                    THE APP PROVIDES INFORMATION AND ANALYSIS TOOLS ONLY. WE DO NOT PROVIDE FINANCIAL, INVESTMENT, OR
                    TRADING ADVICE. ALL INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">6.2 Limitation of Liability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, STOCX AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                    SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR
                    OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE APP.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">6.3 Investment Risks</h3>
                  <p className="text-gray-300 leading-relaxed">
                    YOU ACKNOWLEDGE THAT INVESTING IN STOCKS AND OTHER SECURITIES INVOLVES RISK OF LOSS AND THAT WE ARE
                    NOT RESPONSIBLE FOR ANY INVESTMENT LOSSES YOU MAY INCUR.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Privacy and Data</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms by
                reference, explains how we collect, use, and protect your information. By using the App, you consent to
                the collection and use of information as described in our{" "}
                <Link href="/privacy-ios" className="text-emerald-400 hover:text-emerald-300">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your access to the App immediately, without prior notice, if you breach
                these Terms. Upon termination, your right to use the App will cease immediately. Subscription fees are
                non-refundable except as required by applicable law or Apple's refund policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Updates and Changes</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes
                through the App or other reasonable means. Your continued use of the App after changes constitutes
                acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Apple-Specific Terms</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  The following terms apply specifically to your use of the App on iOS devices:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>These Terms are between you and Stocx Ai only, not with Apple Inc. ("Apple")</li>
                  <li>Apple is not responsible for the App or its content and has no obligation to provide support</li>
                  <li>
                    In case of any failure to conform to warranty, you may notify Apple, and Apple may refund the
                    purchase price
                  </li>
                  <li>Apple is not responsible for addressing any claims relating to the App or your use of it</li>
                  <li>You must comply with applicable third-party terms when using the App</li>
                  <li>Apple and its subsidiaries are third-party beneficiaries of these Terms</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States and the
                State of Delaware, without regard to its conflict of law provisions. Any disputes arising from these
                Terms or your use of the App shall be resolved through binding arbitration in accordance with the rules
                of the American Arbitration Association.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> legal@stocxai.com
                </p>
                <p className="text-gray-300">
                  <strong>Support:</strong>{" "}
                  <Link href="/support" className="text-emerald-400 hover:text-emerald-300">
                    Visit our Support Page
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
