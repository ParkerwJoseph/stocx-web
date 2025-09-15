"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, Eye, TrendingUp, Edit, PlusCircle, Settings, BarChart3, Sparkles, LogOut } from "lucide-react"
import Link from "next/link"
import { getBlogPosts } from "@/lib/content-store"

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [blogPosts, setBlogPosts] = useState<any[]>([])

  useEffect(() => {
    const auth = localStorage.getItem("admin_authenticated")
    if (!auth) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
      setBlogPosts(getBlogPosts())
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated")
    router.push("/admin/login")
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900" />
  }

  const stats = [
    {
      title: "Total Users",
      value: "12,543",
      change: "+12%",
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-400",
    },
    {
      title: "Blog Posts",
      value: blogPosts.length.toString(),
      change: "+3",
      icon: <FileText className="w-6 h-6" />,
      color: "text-green-400",
    },
    {
      title: "Page Views",
      value: "45,231",
      change: "+8%",
      icon: <Eye className="w-6 h-6" />,
      color: "text-purple-400",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.5%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-orange-400",
    },
  ]

  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-gray-400">Welcome back! Here's what's happening with your site.</p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="bg-transparent border-white/20 text-white hover:bg-white/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
                  </div>
                  <div className={`${stat.color}`}>{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/admin/content">
                <Button className="w-full justify-start bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Website Content
                </Button>
              </Link>
              <Link href="/admin/blog/new">
                <Button className="w-full justify-start bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create New Blog Post
                </Button>
              </Link>
              <Link href="/admin/blog">
                <Button className="w-full justify-start bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700">
                  <FileText className="w-4 h-4 mr-2" />
                  Manage Blog Posts
                </Button>
              </Link>
              <Link href="/admin/settings">
                <Button className="w-full justify-start bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700">
                  <Settings className="w-4 h-4 mr-2" />
                  Site Settings
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Analytics Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-gradient-to-br from-green-400/10 to-blue-500/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-green-400 mx-auto mb-2" />
                  <p className="text-white/70">Analytics chart would go here</p>
                  <p className="text-sm text-white/50">Connect your analytics service</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Blog Posts */}
        <Card className="glass border-white/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Recent Blog Posts</CardTitle>
            <Link href="/admin/blog">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{post.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{post.excerpt.slice(0, 100)}...</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{post.date}</span>
                      <Badge variant={post.status === "published" ? "default" : "secondary"}>{post.status}</Badge>
                      <span>{post.views} views</span>
                    </div>
                  </div>
                  <Link href={`/admin/blog/edit/${post.id}`}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-transparent border-white/20 text-white hover:bg-white/10"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
