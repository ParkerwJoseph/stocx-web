"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"
import { Save, ArrowLeft, LogOut } from "lucide-react"
import Link from "next/link"

export default function AdminSettings() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [settings, setSettings] = useState({
    general: {
      siteTitle: "Stocx AI",
      siteDescription: "AI-powered trading platform",
      siteUrl: "https://stocx.ai",
      contactEmail: "support@stocx.ai",
    },
    features: {
      newsletter: true,
      blog: true,
      analytics: true,
      maintenanceMode: false,
    },
    social: {
      twitter: "@stocxai",
      linkedin: "company/stocx-ai",
      github: "stocx-ai",
    },
  })

  useEffect(() => {
    const auth = localStorage.getItem("admin_authenticated")
    if (!auth) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
      // Load settings from localStorage if they exist
      const savedSettings = localStorage.getItem("admin_settings")
      if (savedSettings) {
        try {
          setSettings(JSON.parse(savedSettings))
        } catch (e) {
          console.error("Error loading settings:", e)
        }
      }
    }
  }, [router])

  const handleSave = async () => {
    setIsSaving(true)

    // Save settings to localStorage
    localStorage.setItem("admin_settings", JSON.stringify(settings))

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Settings Saved",
      description: "Your settings have been successfully updated.",
    })

    setIsSaving(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated")
    router.push("/admin/login")
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto p-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link href="/admin/dashboard">
              <Button variant="ghost" className="text-gray-400 hover:text-white mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
            <p className="text-gray-400">Manage your site configuration and preferences</p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="bg-transparent border-red-500/20 text-red-400 hover:bg-red-500/10"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold hover:from-green-500 hover:to-green-600"
            >
              <Save className="w-4 h-4 mr-2" />
              {isSaving ? "Saving..." : "Save Settings"}
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          {/* General Settings */}
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-white">General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="siteTitle" className="text-white">
                    Site Title
                  </Label>
                  <Input
                    id="siteTitle"
                    value={settings.general.siteTitle}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, siteTitle: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siteUrl" className="text-white">
                    Site URL
                  </Label>
                  <Input
                    id="siteUrl"
                    value={settings.general.siteUrl}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: { ...settings.general, siteUrl: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription" className="text-white">
                  Site Description
                </Label>
                <Input
                  id="siteDescription"
                  value={settings.general.siteDescription}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      general: { ...settings.general, siteDescription: e.target.value },
                    })
                  }
                  className="glass border-white/20 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail" className="text-white">
                  Contact Email
                </Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={settings.general.contactEmail}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      general: { ...settings.general, contactEmail: e.target.value },
                    })
                  }
                  className="glass border-white/20 text-white"
                />
              </div>
            </CardContent>
          </Card>

          {/* Feature Toggles */}
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Feature Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-white">Newsletter Subscription</Label>
                  <p className="text-sm text-gray-400">Allow users to subscribe to newsletter</p>
                </div>
                <Switch
                  checked={settings.features.newsletter}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      features: { ...settings.features, newsletter: checked },
                    })
                  }
                />
              </div>
              <Separator className="bg-white/10" />
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-white">Blog System</Label>
                  <p className="text-sm text-gray-400">Enable blog functionality</p>
                </div>
                <Switch
                  checked={settings.features.blog}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      features: { ...settings.features, blog: checked },
                    })
                  }
                />
              </div>
              <Separator className="bg-white/10" />
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-white">Analytics Tracking</Label>
                  <p className="text-sm text-gray-400">Enable Google Analytics</p>
                </div>
                <Switch
                  checked={settings.features.analytics}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      features: { ...settings.features, analytics: checked },
                    })
                  }
                />
              </div>
              <Separator className="bg-white/10" />
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-white">Maintenance Mode</Label>
                  <p className="text-sm text-gray-400">Put site in maintenance mode</p>
                </div>
                <Switch
                  checked={settings.features.maintenanceMode}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      features: { ...settings.features, maintenanceMode: checked },
                    })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Social Media</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="twitter" className="text-white">
                    Twitter Handle
                  </Label>
                  <Input
                    id="twitter"
                    placeholder="@username"
                    value={settings.social.twitter}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        social: { ...settings.social, twitter: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-white">
                    LinkedIn Profile
                  </Label>
                  <Input
                    id="linkedin"
                    placeholder="company/name"
                    value={settings.social.linkedin}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        social: { ...settings.social, linkedin: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github" className="text-white">
                    GitHub Username
                  </Label>
                  <Input
                    id="github"
                    placeholder="username"
                    value={settings.social.github}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        social: { ...settings.social, github: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
