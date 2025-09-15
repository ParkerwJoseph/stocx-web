"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"
import { Save, ArrowLeft, LogOut } from "lucide-react"
import Link from "next/link"

export default function AdminSettings() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [settings, setSettings] = useState({
    site: {
      title: "Stocx AI",
      description: "Trade Smarter with AI-Powered Insights",
      url: "https://stocx-ai.vercel.app",
      email: "support@stocx.ai",
    },
    features: {
      newsletter: true,
      blog: true,
      analytics: true,
      maintenance: false,
    },
    social: {
      twitter: "@stocxai",
      linkedin: "stocx-ai",
      github: "stocx-ai",
    },
  })

  useEffect(() => {
    const auth = localStorage.getItem("admin_authenticated")
    if (!auth) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleSave = async () => {
    setIsSaving(true)

    // Simulate saving to database
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Settings Saved",
      description: "Website settings have been successfully updated.",
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
        <div className="mb-8">
          <Link href="/admin/dashboard">
            <Button variant="ghost" className="text-gray-400 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
              <p className="text-gray-400">Configure your website settings</p>
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
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/10">
            <TabsTrigger
              value="general"
              className="text-white data-[state=active]:bg-green-500 data-[state=active]:text-black"
            >
              General
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="text-white data-[state=active]:bg-green-500 data-[state=active]:text-black"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="social"
              className="text-white data-[state=active]:bg-green-500 data-[state=active]:text-black"
            >
              Social
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-white">General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="site-title" className="text-white">
                    Site Title
                  </Label>
                  <Input
                    id="site-title"
                    value={settings.site.title}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        site: { ...settings.site, title: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-description" className="text-white">
                    Site Description
                  </Label>
                  <Input
                    id="site-description"
                    value={settings.site.description}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        site: { ...settings.site, description: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-url" className="text-white">
                    Site URL
                  </Label>
                  <Input
                    id="site-url"
                    value={settings.site.url}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        site: { ...settings.site, url: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-email" className="text-white">
                    Contact Email
                  </Label>
                  <Input
                    id="site-email"
                    type="email"
                    value={settings.site.email}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        site: { ...settings.site, email: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Feature Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Newsletter Subscription</Label>
                    <p className="text-gray-400 text-sm">Allow users to subscribe to newsletter</p>
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
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Blog System</Label>
                    <p className="text-gray-400 text-sm">Enable blog functionality</p>
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
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Analytics Tracking</Label>
                    <p className="text-gray-400 text-sm">Enable Google Analytics</p>
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
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Maintenance Mode</Label>
                    <p className="text-gray-400 text-sm">Put site in maintenance mode</p>
                  </div>
                  <Switch
                    checked={settings.features.maintenance}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        features: { ...settings.features, maintenance: checked },
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Social Media Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
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
                    placeholder="company-name"
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
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
