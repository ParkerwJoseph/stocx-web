import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "iOS App Privacy Policy - Stocx Ai",
  description: "Privacy Policy for Stocx Ai iOS application including subscription data handling and Apple compliance.",
}

export default function IOSPrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-white">iOS App Privacy Policy</h1>
          <p className="text-gray-300 text-lg mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">Privacy Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong>We do not collect, store, or process any personal information from users of our iOS app.</strong>
              This policy explains our minimal data practices and how third-party services (Apple and Google Ads) may
              handle data.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Do NOT Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Stocx Ai is designed with privacy in mind. We do not collect any of the following information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Personal identifiers (name, email, phone number)</li>
                <li>Device identifiers (UDID, advertising ID)</li>
                <li>Location data (precise or coarse)</li>
                <li>Usage analytics or app behavior data</li>
                <li>Financial information or trading data</li>
                <li>Contacts or photos</li>
                <li>Health or fitness data</li>
                <li>User-generated content</li>
                <li>Search history or browsing data</li>
                <li>Crash logs or diagnostic data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Apple App Store and Subscription Data</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">2.1 Subscription Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All subscription purchases and management are handled exclusively by Apple through the App Store.
                    Apple processes and stores subscription-related information including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
                    <li>Purchase receipts and transaction history</li>
                    <li>Subscription status and renewal dates</li>
                    <li>Payment method information</li>
                    <li>Apple ID associated with purchases</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    <strong>We do not have access to your payment information, Apple ID, or personal details.</strong>
                    Apple's privacy policy governs how this information is handled.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">2.2 Subscription Verification</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To verify your subscription status and provide premium features, our app communicates with Apple's
                    servers using anonymous receipt validation. This process:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
                    <li>Does not transmit any personal information to our servers</li>
                    <li>Only confirms whether you have an active subscription</li>
                    <li>Is processed entirely through Apple's secure systems</li>
                    <li>Cannot be used to identify you personally</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Third-Party Advertising (Google Ads)</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">3.1 Google AdMob Integration</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our app displays advertisements through Google AdMob. Google may collect and process certain
                    information for advertising purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 mt-2">
                    <li>Advertising identifier (IDFA) - if you have not opted out</li>
                    <li>IP address and general location</li>
                    <li>Device information and operating system</li>
                    <li>Ad interaction data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">3.2 Controlling Ad Personalization</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You can control ad personalization through your iOS device settings:
                  </p>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2">
                    <li>Open Settings on your iOS device</li>
                    <li>Go to Privacy & Security</li>
                    <li>Tap "Apple Advertising"</li>
                    <li>Turn off "Personalized Ads"</li>
                  </ol>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    You can also visit Google's{" "}
                    <a
                      href="https://adssettings.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 underline"
                    >
                      Ads Settings
                    </a>{" "}
                    to manage your advertising preferences.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. App Store Privacy Labels</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In accordance with Apple's App Store privacy requirements, our app's privacy label indicates:
              </p>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Data Not Collected</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Contact Info</li>
                      <li>• Health & Fitness</li>
                      <li>• Financial Info</li>
                      <li>• Location</li>
                      <li>• Sensitive Info</li>
                      <li>• Contacts</li>
                      <li>• User Content</li>
                      <li>• Search History</li>
                      <li>• Identifiers</li>
                      <li>• Usage Data</li>
                      <li>• Diagnostics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Third-Party Data</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Apple: Subscription data</li>
                      <li>• Google Ads: Advertising data</li>
                      <li>• No data linked to you</li>
                      <li>• No data used to track you</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                Since we do not collect any personal data, there is no personal information to secure on our end.
                However, we implement security best practices in our app development, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>Secure communication with Apple's servers for subscription verification</li>
                <li>No local storage of personal information</li>
                <li>Regular security updates and patches</li>
                <li>Compliance with Apple's security guidelines</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Children's Privacy (COPPA Compliance)</h2>
              <p className="text-gray-300 leading-relaxed">
                Our app does not collect any personal information from anyone, including children under 13. Since no
                data is collected, there are no special procedures needed for children's privacy protection. However,
                our app is intended for users 17+ due to financial content and is rated accordingly in the App Store.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Since we do not collect any personal data, there are no international data transfers of personal
                information. Any data processed by Apple or Google is subject to their respective privacy policies and
                data transfer practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Your Privacy Rights</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">8.1 No Personal Data Rights Needed</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Since we do not collect any personal information, there is no personal data to access, correct,
                    delete, or port. You have complete privacy by design.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">8.2 Third-Party Data Rights</h3>
                  <p className="text-gray-300 leading-relaxed">For data collected by third parties:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                    <li>
                      <strong>Apple:</strong> Manage your subscription and data through your Apple ID settings
                    </li>
                    <li>
                      <strong>Google:</strong> Visit{" "}
                      <a
                        href="https://myaccount.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 underline"
                      >
                        Google Privacy Controls
                      </a>{" "}
                      to manage advertising data
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new Privacy Policy in the app and updating the "Last updated" date. Your continued use of
                the app after changes constitutes acceptance of the new Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> privacy@stocxai.com
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Support:</strong>{" "}
                  <Link href="/support" className="text-emerald-400 hover:text-emerald-300">
                    Visit our Support Page
                  </Link>
                </p>
                <p className="text-gray-300">
                  <strong>Data Deletion:</strong>{" "}
                  <Link href="/data-deletion" className="text-emerald-400 hover:text-emerald-300">
                    Request Data Deletion
                  </Link>{" "}
                  (Website only)
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
