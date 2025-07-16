import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Privacy Policy - Stocx Ai",
  description: "Privacy Policy for Stocx Ai - Learn how we protect and handle your personal information.",
}

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
          <p className="text-gray-300 text-lg mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to Stocx Ai ("we," "our," or "us"). We are committed to protecting your personal information and
                your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">Website Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    On our website, we collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                    <li>Subscribe to our email newsletter</li>
                    <li>Contact us for support</li>
                    <li>Register for early access to our platform</li>
                    <li>Participate in surveys or feedback forms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">iOS App Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>We do not collect any personal information from users of our iOS app.</strong> Our iOS app
                    operates without collecting, storing, or processing any user data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">Third-Party Advertising</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our iOS app displays advertisements through Google Ads. Google may collect certain information for
                    advertising purposes as described in their privacy policy. We do not have access to or control over
                    this information collection.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">Website Analytics</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device and
                    usage patterns, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">Website Information</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use the information collected from our website for various purposes, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>To provide and maintain our services</li>
                    <li>To notify you about changes to our services</li>
                    <li>To send you marketing communications (with your consent)</li>
                    <li>To provide customer support</li>
                    <li>To analyze usage patterns and improve our services</li>
                    <li>To detect, prevent, and address technical issues</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">iOS App</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Since we do not collect any information from our iOS app users, we do not use any personal data from
                    the app. The app functions independently without data collection or processing.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Information Sharing and Disclosure</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">Website Data</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information collected from our website to
                    third parties except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <strong>Service Providers:</strong> We may share information with trusted third-party service
                      providers who assist us in operating our website and services (e.g., Mailchimp for email
                      marketing)
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose information if required by law or in response
                      to valid legal requests
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets,
                      your information may be transferred
                    </li>
                    <li>
                      <strong>Consent:</strong> We may share information with your explicit consent
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">iOS App Data</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Since we do not collect any information from our iOS app, there is no user data to share or
                    disclose. However, Google Ads may collect information for advertising purposes as outlined in
                    Google's privacy policy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Google Ads</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our iOS app displays advertisements through Google Ads. Google may use cookies and other technologies to
                serve ads based on your prior visits to our app or other websites.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit
                to our app and/or other sites on the Internet. You may opt out of personalized advertising by visiting
                Google's Ads Settings or by visiting the Network Advertising Initiative opt-out page.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For more information about Google's privacy practices, please review Google's Privacy Policy at
                https://policies.google.com/privacy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Your Privacy Rights</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">Website Users</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal information
                    collected through our website:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <strong>Access:</strong> Request access to your personal information
                    </li>
                    <li>
                      <strong>Correction:</strong> Request correction of inaccurate information
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your personal information
                    </li>
                    <li>
                      <strong>Portability:</strong> Request transfer of your information to another service
                    </li>
                    <li>
                      <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 text-emerald-400">iOS App Users</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Since we do not collect any personal information from our iOS app users, there is no personal data
                    to access, correct, or delete. For advertising preferences, you can manage your Google Ads settings
                    directly through Google's platform.
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed mt-4">
                  To exercise any rights regarding website data, please contact us using the information provided in the
                  "Contact Us" section below, or visit our{" "}
                  <Link href="/data-deletion" className="text-emerald-400 hover:text-emerald-300">
                    Data Deletion Request page
                  </Link>{" "}
                  to request permanent deletion of your information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site
                traffic, and understand where our visitors are coming from. You can control cookie settings through your
                browser preferences, though disabling cookies may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the
                privacy practices of these external sites. We encourage you to review the privacy policies of any
                third-party services you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this
                Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> privacy@stocxai.com
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
