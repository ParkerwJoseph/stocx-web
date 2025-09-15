"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"
import { Save, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getWebsiteContent, updateWebsiteContent, type WebsiteContent } from "@/lib/content-store"

export default function ContentEditor() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [content, setContent] = useState<WebsiteContent | null>(null)

  useEffect(() => {
    const auth = localStorage.getItem("admin_authenticated")
    if (!auth) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
      const websiteContent = getWebsiteContent()
      setContent(websiteContent)
    }
  }, [router])

  const handleSave = async () => {
    if (!content) return

    setIsSaving(true)

    // Update the content store
    updateWebsiteContent(content)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Content Updated",
      description: "Website content has been successfully updated and is now live!",
    })

    setIsSaving(false)
  }

  if (!isAuthenticated || !content) {
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
            <h1 className="text-3xl font-bold text-white mb-2">Content Editor</h1>
            <p className="text-gray-400">Edit your website content and sections</p>
          </div>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold hover:from-green-500 hover:to-green-600"
          >
            <Save className="w-4 h-4 mr-2" />
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/10">
            <TabsTrigger
              value="hero"
              className="text-white data-[state=active]:bg-green-500 data-[state=active]:text-black"
            >
              Hero Section
            </TabsTrigger>
            <TabsTrigger
              value="features"
              className="text-white data-[state=active]:bg-green-500 data-[state=active]:text-black"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="text-white data-[state=active]:bg-green-500 data-[state=active]:text-black"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="text-white data-[state=active]:bg-green-500 data-[state=active]:text-black"
            >
              Contact
            </TabsTrigger>
            <TabsTrigger
              value="stats"
              className="text-white data-[state=active]:bg-green-500 data-[state=active]:text-black"
            >
              Stats
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Hero Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="hero-title" className="text-white">
                    Main Title
                  </Label>
                  <Input
                    id="hero-title"
                    value={content.hero.title}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, title: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-subtitle" className="text-white">
                    Subtitle
                  </Label>
                  <Textarea
                    id="hero-subtitle"
                    value={content.hero.subtitle}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, subtitle: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-cta" className="text-white">
                    CTA Button Text
                  </Label>
                  <Input
                    id="hero-cta"
                    value={content.hero.ctaText}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        hero: { ...content.hero, ctaText: e.target.value },
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
                <CardTitle className="text-white">Features Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="features-title" className="text-white">
                    Section Title
                  </Label>
                  <Input
                    id="features-title"
                    value={content.features.title}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        features: { ...content.features, title: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="features-subtitle" className="text-white">
                    Section Subtitle
                  </Label>
                  <Textarea
                    id="features-subtitle"
                    value={content.features.subtitle}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        features: { ...content.features, subtitle: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-white">About Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="about-title" className="text-white">
                    Section Title
                  </Label>
                  <Input
                    id="about-title"
                    value={content.about.title}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        about: { ...content.about, title: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="about-description" className="text-white">
                    Description
                  </Label>
                  <Textarea
                    id="about-description"
                    value={content.about.description}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        about: { ...content.about, description: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                    rows={5}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="contact-email"
                    value={content.contact.email}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        contact: { ...content.contact, email: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone" className="text-white">
                    Phone
                  </Label>
                  <Input
                    id="contact-phone"
                    value={content.contact.phone}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        contact: { ...content.contact, phone: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-address" className="text-white">
                    Address
                  </Label>
                  <Input
                    id="contact-address"
                    value={content.contact.address}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        contact: { ...content.contact, address: e.target.value },
                      })
                    }
                    className="glass border-white/20 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Statistics Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="stats-traders" className="text-white">
                      Active Traders
                    </Label>
                    <Input
                      id="stats-traders"
                      value={content.stats.activeTraders}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          stats: { ...content.stats, activeTraders: e.target.value },
                        })
                      }
                      className="glass border-white/20 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stats-volume" className="text-white">
                      Volume Traded
                    </Label>
                    <Input
                      id="stats-volume"
                      value={content.stats.volumeTraded}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          stats: { ...content.stats, volumeTraded: e.target.value },
                        })
                      }
                      className="glass border-white/20 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stats-accuracy" className="text-white">
                      Accuracy Rate
                    </Label>
                    <Input
                      id="stats-accuracy"
                      value={content.stats.accuracyRate}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          stats: { ...content.stats, accuracyRate: e.target.value },
                        })
                      }
                      className="glass border-white/20 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stats-coverage" className="text-white">
                      Market Coverage
                    </Label>
                    <Input
                      id="stats-coverage"
                      value={content.stats.marketCoverage}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          stats: { ...content.stats, marketCoverage: e.target.value },
                        })
                      }
                      className="glass border-white/20 text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
