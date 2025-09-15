"use client"

import { useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function BlogPost() {
  const params = useParams()

  // Mock blog post data - in a real app, this would be fetched based on the ID
  const post = {
    id: 1,
    title: "AI Trading Strategies for 2024",
    excerpt:
      "Discover the latest AI-powered trading strategies that are revolutionizing the financial markets and how you can implement them in your trading routine.",
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

## The Future of AI Trading

As we move through 2024, we expect to see:
- More sophisticated neural networks
- Better integration with real-time data
- Improved natural language processing for news analysis
- Enhanced risk management capabilities

## Conclusion

AI trading strategies are not just the future—they're the present. As these technologies continue to evolve, traders who adapt and integrate AI into their strategies will have a significant advantage in the markets.

Remember, while AI can provide powerful insights, it's important to understand the technology and maintain proper risk management practices.`,
    author: "Stocx AI Team",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["AI", "Trading", "Strategies"],
    image: "/placeholder.jpg",
  }

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
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="text-white/70 hover:text-white mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-green-400/10 text-green-400 border-green-400/20">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>

            <p className="text-xl text-white/70 mb-8">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg mb-12"></div>

          {/* Article Content */}
          <Card className="glass border-white/20">
            <CardContent className="p-8">
              <div className="prose prose-invert prose-green max-w-none">
                <div className="text-white/80 leading-relaxed space-y-6">
                  {post.content.split("\n\n").map((paragraph, index) => {
                    if (paragraph.startsWith("# ")) {
                      return (
                        <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
                          {paragraph.slice(2)}
                        </h1>
                      )
                    } else if (paragraph.startsWith("## ")) {
                      return (
                        <h2 key={index} className="text-2xl font-semibold text-white mt-6 mb-3">
                          {paragraph.slice(3)}
                        </h2>
                      )
                    } else if (paragraph.startsWith("### ")) {
                      return (
                        <h3 key={index} className="text-xl font-semibold text-green-400 mt-4 mb-2">
                          {paragraph.slice(4)}
                        </h3>
                      )
                    } else if (paragraph.startsWith("- ")) {
                      const listItems = paragraph.split("\n").filter((item) => item.startsWith("- "))
                      return (
                        <ul key={index} className="list-disc list-inside space-y-1 text-white/70">
                          {listItems.map((item, i) => (
                            <li key={i}>{item.slice(2)}</li>
                          ))}
                        </ul>
                      )
                    } else if (/^\d+\./.test(paragraph)) {
                      const listItems = paragraph.split("\n").filter((item) => /^\d+\./.test(item))
                      return (
                        <ol key={index} className="list-decimal list-inside space-y-1 text-white/70">
                          {listItems.map((item, i) => (
                            <li key={i}>{item.replace(/^\d+\.\s*/, "")}</li>
                          ))}
                        </ol>
                      )
                    } else {
                      return (
                        <p key={index} className="text-white/80">
                          {paragraph}
                        </p>
                      )
                    }
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="glass border-white/20 mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start AI Trading?</h3>
              <p className="text-white/70 mb-6">
                Join thousands of traders who are already using Stocx AI to make smarter investment decisions.
              </p>
              <Link href="/">
                <Button className="bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold hover:from-green-500 hover:to-green-600">
                  Download Stocx AI
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
