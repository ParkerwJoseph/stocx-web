"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { PlusCircle, Search, Edit, Trash2, Eye, ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import { getBlogPosts, deleteBlogPost, type BlogPost } from "@/lib/content-store"
import { toast } from "@/hooks/use-toast"

export default function BlogManager() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const auth = localStorage.getItem("admin_authenticated")
    if (!auth) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
      loadPosts()
    }

    // Listen for blog updates
    const handleBlogUpdate = (event: CustomEvent) => {
      setPosts(event.detail)
    }

    window.addEventListener("blogUpdated", handleBlogUpdate as EventListener)

    return () => {
      window.removeEventListener("blogUpdated", handleBlogUpdate as EventListener)
    }
  }, [router])

  const loadPosts = () => {
    const blogPosts = getBlogPosts()
    setPosts(blogPosts)
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      const success = deleteBlogPost(id)
      if (success) {
        toast({
          title: "Post Deleted",
          description: "The blog post has been successfully deleted.",
        })
        loadPosts()
      }
    }
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
              <h1 className="text-3xl font-bold text-white mb-2">Blog Manager</h1>
              <p className="text-gray-400">Create and manage your blog posts</p>
            </div>
            <Link href="/admin/blog/new">
              <Button className="bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold hover:from-green-500 hover:to-green-600">
                <PlusCircle className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </Link>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="glass border-white/20 mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 glass border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts List */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="glass border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                      <Badge
                        variant={post.status === "published" ? "default" : "secondary"}
                        className={post.status === "published" ? "bg-green-500" : "bg-yellow-500"}
                      >
                        {post.status}
                      </Badge>
                    </div>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views} views
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Link href={`/admin/blog/edit/${post.id}`}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-transparent border-white/20 text-white hover:bg-white/10"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-transparent border-red-500/20 text-red-400 hover:bg-red-500/10"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <Card className="glass border-white/20">
            <CardContent className="p-12 text-center">
              <p className="text-gray-400 mb-4">No posts found matching your search.</p>
              <Link href="/admin/blog/new">
                <Button className="bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold hover:from-green-500 hover:to-green-600">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create Your First Post
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
