"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import { Sparkles } from "lucide-react"
import { getBlogPosts, type BlogPost } from "@/lib/content-store"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const loadPosts = () => {
      const posts = getBlogPosts().filter((post) => post.status === "published")
      setBlogPosts(posts)
    }

    loadPosts()

    // Listen for blog updates
    const handleBlogUpdate = (event: CustomEvent) => {
      const posts = event.detail.filter((post: BlogPost) => post.status === "published")
      setBlogPosts(posts)
    }

    window.addEventListener("blogUpdated", handleBlogUpdate as EventListener)

    return () => {
      window.removeEventListener("blogUpdated", handleBlogUpdate as EventListener)
    }
  }, [])

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-gradient">Stocx AI</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-white hover:text-green-400 transition-colors">
                Blog
              </Link>
              <Link href="/#features" className="text-white/70 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/#contact" className="text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Stocx AI Blog</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Stay updated with the latest insights on AI trading, market analysis, and investment strategies.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass border-white/20 text-white placeholder:text-white/40"
              />
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="glass border-white/20 group hover:border-green-400/30 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    {post.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-green-400/10 text-green-400 border-green-400/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-white group-hover:text-green-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-6 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-white/50 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <Button className="w-full bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold hover:from-green-500 hover:to-green-600 group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/60 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
