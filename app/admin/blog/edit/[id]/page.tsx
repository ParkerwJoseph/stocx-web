"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { Save, ArrowLeft, Eye, Trash2 } from "lucide-react"
import Link from "next/link"

export default function EditBlogPost() {
  const router = useRouter()
  const params = useParams()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [post, setPost] = useState({
    title: "AI Trading Strategies for 2024",
    excerpt: "Discover the latest AI-powered trading strategies that are revolutionizing the financial markets...",
    content: `# AI Trading Strategies for 2024

The world of trading is rapidly evolving, and artificial intelligence is at the forefront of this transformation. In 2024, we're seeing unprecedented developments in AI-powered trading strategies that are changing how both institutional and retail investors approach the markets.

## Key AI Trading Strategies

### 1. Machine Learning Pattern Recognition
Advanced algorithms can now identify complex patterns in market data that human traders might miss. These systems analyze:
- Historical price movements
- Volume patterns
- Market sentiment indicators
- News and social media sentiment

### 2. Predictive Analytics
AI models use vast amounts of data to predict future market movements with increasing accuracy:
- Economic indicators
- Company fundamentals
- Technical analysis
- Global events impact

### 3. Risk Management Automation
AI-powered risk management systems can:
- Automatically adjust position sizes
- Set dynamic stop-losses
- Diversify portfolios in real-time
- Monitor correlation risks

## Getting Started with AI Trading

If you're interested in incorporating AI into your trading strategy, consider these steps:

1. **Education**: Learn about machine learning and its applications in finance
2. **Start Small**: Begin with paper trading or small positions
3. **Use Established Platforms**: Consider platforms like Stocx AI that offer proven AI trading tools
4. **Monitor Performance**: Track your AI-assisted trades vs. traditional methods

## Conclusion

AI trading strategies are not just the future—they're the present. As these technologies continue to evolve, traders who adapt and integrate AI into their strategies will have a significant advantage in the markets.

Remember, while AI can provide powerful insights, it's important to understand the technology and maintain proper risk management practices.`,
    status: "published",
    tags: "ai, trading, strategies, 2024",
    featuredImage: "/placeholder.jpg",
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
      title: "Post Updated",
      description: `Blog post has been ${status === "published" ? "published" : "saved as draft"}.`,
    })

    setIsSaving(false)
  }

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      // Simulate deletion
      await new Promise((resolve) => setTimeout(resolve, 500))

      toast({
        title: "Post Deleted",
        description: "The blog post has been permanently deleted.",
      })

      router.push("/admin/blog")
    }
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
              <h1 className="text-3xl font-bold text-white mb-2">Edit Post</h1>
              <p className="text-gray-400">Update your blog post content</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleDelete}
                variant="outline"
                className="bg-transparent border-red-500/20 text-red-400 hover:bg-red-500/10"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
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
                Update & Publish
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
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerpt" className="text-white">
                    Excerpt
                  </Label>
                  <Textarea
                    id="excerpt"
                    value={post.excerpt}
                    onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                    className="glass border-white/20 text-white"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content" className="text-white">
                    Content
                  </Label>
                  <Textarea
                    id="content"
                    value={post.content}
                    onChange={(e) => setPost({ ...post, content: e.target.value })}
                    className="glass border-white/20 text-white"
                    rows={20}
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
                    value={post.tags}
                    onChange={(e) => setPost({ ...post, tags: e.target.value })}
                    className="glass border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="featuredImage" className="text-white">
                    Featured Image URL
                  </Label>
                  <Input
                    id="featuredImage"
                    value={post.featuredImage}
                    onChange={(e) => setPost({ ...post, featuredImage: e.target.value })}
                    className="glass border-white/20 text-white"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Post Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Views:</span>
                  <span className="text-white">1,250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Published:</span>
                  <span className="text-white">Jan 15, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Modified:</span>
                  <span className="text-white">Jan 15, 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
