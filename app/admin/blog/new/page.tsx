"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { Save, ArrowLeft, Eye } from "lucide-react"
import Link from "next/link"

export default function NewBlogPost() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [post, setPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    status: "draft",
    tags: "",
    featuredImage: "",
  })

  useEffect(() => {
    const auth = localStorage.getItem("admin_authenticated")
    if (!auth) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleSave = async (status: string) => {
    if (!post.title || !post.content) {
      toast({
        title: "Error",
        description: "Please fill in the title and content fields.",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)

    // Simulate saving to database
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Post Saved",
      description: `Blog post has been ${status === "published" ? "published" : "saved as draft"}.`,
    })

    setIsSaving(false)
    router.push("/admin/blog")
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <Link href="/admin/blog">
            <Button variant="ghost" className="text-gray-400 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog Manager
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Create New Post</h1>
              <p className="text-gray-400">Write and publish a new blog post</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => handleSave("draft")}
                disabled={isSaving}
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button
                onClick={() => handleSave("published")}
                disabled={isSaving}
                className="bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold hover:from-green-500 hover:to-green-600"
              >
                <Eye className="w-4 h-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Post Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">
                    Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter post title..."
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    className="glass border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerpt" className="text-white">
                    Excerpt
                  </Label>
                  <Textarea
                    id="excerpt"
                    placeholder="Brief description of the post..."
                    value={post.excerpt}
                    onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                    className="glass border-white/20 text-white placeholder:text-gray-400"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content" className="text-white">
                    Content
                  </Label>
                  <Textarea
                    id="content"
                    placeholder="Write your blog post content here..."
                    value={post.content}
                    onChange={(e) => setPost({ ...post, content: e.target.value })}
                    className="glass border-white/20 text-white placeholder:text-gray-400"
                    rows={15}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Post Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="status" className="text-white">
                    Status
                  </Label>
                  <Select value={post.status} onValueChange={(value) => setPost({ ...post, status: value })}>
                    <SelectTrigger className="glass border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-white/20">
                      <SelectItem value="draft" className="text-white">
                        Draft
                      </SelectItem>
                      <SelectItem value="published" className="text-white">
                        Published
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags" className="text-white">
                    Tags
                  </Label>
                  <Input
                    id="tags"
                    placeholder="trading, ai, finance"
                    value={post.tags}
                    onChange={(e) => setPost({ ...post, tags: e.target.value })}
                    className="glass border-white/20 text-white placeholder:text-gray-400"
                  />
                  <p className="text-xs text-gray-400">Separate tags with commas</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="featuredImage" className="text-white">
                    Featured Image URL
                  </Label>
                  <Input
                    id="featuredImage"
                    placeholder="https://example.com/image.jpg"
                    value={post.featuredImage}
                    onChange={(e) => setPost({ ...post, featuredImage: e.target.value })}
                    className="glass border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-white">SEO Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-white">Meta Description</Label>
                  <Textarea
                    placeholder="SEO meta description..."
                    className="glass border-white/20 text-white placeholder:text-gray-400"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Focus Keyword</Label>
                  <Input
                    placeholder="ai trading"
                    className="glass border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
