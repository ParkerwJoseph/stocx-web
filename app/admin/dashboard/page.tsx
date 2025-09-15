"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, FileText, Users, Settings, PlusCircle, Edit, Eye, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem("admin_authenticated")
    if (!auth) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  if (!isAuthenticated) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900" />
  }

  const stats = [
    { title: "Total Users", value: "50,234", change: "+12%", icon: Users },
    { title: "Blog Posts", value: "24", change: "+3", icon: FileText },
    { title: "Page Views", value: "125K", change: "+8%", icon: Eye },
    { title: "Conversion Rate", value: "3.2%", change: "+0.5%", icon: TrendingUp },
  ]

  const recentPosts = [
    { title: "AI Trading Strategies for 2024", status: "Published", date: "2024-01-15" },
    { title: "Market Analysis: Tech Stocks", status: "Draft", date: "2024-01-14" },
    { title: "Risk Management Tips", status: "Published", date: "2024-01-13" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your Stocx AI website and content</p>
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
                    <p className="text-green-400 text-sm">{stat.change}</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
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
                <Button className="w-full justify-start bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700">
                  <Settings className="w-4 h-4 mr-2" />
                  Website Settings
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Recent Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <p className="text-white font-medium">{post.title}</p>
                      <p className="text-gray-400 text-sm">{post.date}</p>
                    </div>
                    <Badge
                      variant={post.status === "Published" ? "default" : "secondary"}
                      className={post.status === "Published" ? "bg-green-500" : "bg-yellow-500"}
                    >
                      {post.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Chart Placeholder */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Website Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Analytics chart will be displayed here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
