// Content management system for storing and retrieving website content
export interface WebsiteContent {
  hero: {
    title: string
    subtitle: string
    ctaText: string
  }
  features: {
    title: string
    subtitle: string
  }
  about: {
    title: string
    description: string
  }
  contact: {
    email: string
    phone: string
    address: string
  }
  stats: {
    activeTraders: string
    volumeTraded: string
    accuracyRate: string
    marketCoverage: string
  }
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  status: "draft" | "published"
  author: string
  date: string
  readTime: string
  tags: string[]
  featuredImage: string
  views: number
}

// Default content updated for chart scanning app
const defaultContent: WebsiteContent = {
  hero: {
    title: "Scan Stock Charts. Learn Faster with AI.",
    subtitle:
      "Stocx AI is an iPhone app that helps you understand stock charts instantly. Just snap a screenshot and our AI explains trendlines, patterns, and key signals in simple terms.",
    ctaText: "Download on the App Store",
  },
  features: {
    title: "Everything you need to learn chart analysis",
    subtitle: "Powerful AI-driven features designed to make technical analysis simple and accessible for everyone.",
  },
  about: {
    title: "What Our Users Say",
    description: "See how Stocx AI is helping traders learn technical analysis faster and more effectively.",
  },
  contact: {
    email: "support@stocx.ai",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA",
  },
  stats: {
    activeTraders: "10K+",
    volumeTraded: "1M+",
    accuracyRate: "95%",
    marketCoverage: "iPhone",
  },
}

const defaultBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Chart Patterns: A Beginner's Guide",
    excerpt:
      "Learn the most common chart patterns that every trader should know, from triangles to head and shoulders formations.",
    content: `# Understanding Chart Patterns: A Beginner's Guide

Chart patterns are one of the fundamental tools in technical analysis. They help traders identify potential price movements and make informed decisions about when to buy or sell stocks.

## What Are Chart Patterns?

Chart patterns are formations created by the price movements of stocks over time. These patterns often repeat themselves and can provide insights into future price direction.

## Common Chart Patterns

### 1. Triangle Patterns
Triangle patterns form when the price creates a series of lower highs and higher lows, converging toward a point.

### 2. Head and Shoulders
This pattern consists of three peaks, with the middle peak being the highest (the head) and the two outer peaks (shoulders) being roughly equal in height.

### 3. Support and Resistance
Support levels are price points where a stock tends to find buying interest, while resistance levels are where selling pressure typically emerges.

## How Stocx AI Helps

With Stocx AI, you can simply take a screenshot of any chart and get instant explanations of these patterns. The app identifies formations and explains their significance in simple terms.

## Getting Started

1. Download Stocx AI from the App Store
2. Take a screenshot of a stock chart
3. Upload it to the app
4. Get instant AI-powered analysis

Learning chart patterns has never been easier!`,
    status: "published",
    author: "Stocx AI Team",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Chart Patterns", "Technical Analysis", "Beginner"],
    featuredImage: "/placeholder.jpg",
    views: 1250,
  },
  {
    id: 2,
    title: "Support and Resistance: The Foundation of Technical Analysis",
    excerpt:
      "Master the concepts of support and resistance levels and learn how to identify them using AI-powered chart analysis.",
    content: `# Support and Resistance: The Foundation of Technical Analysis

Support and resistance are arguably the most important concepts in technical analysis. Understanding these levels can significantly improve your trading decisions.

## What is Support?

Support is a price level where a stock tends to find buying interest. When the price approaches this level, buyers step in, preventing further decline.

## What is Resistance?

Resistance is the opposite of support - it's a price level where selling pressure typically emerges, preventing the price from rising further.

## Identifying Support and Resistance

Traditional methods require extensive chart study, but with Stocx AI, you can:
- Take a screenshot of any chart
- Get instant identification of key levels
- Understand the strength of each level
- Learn why these levels matter

## Types of Support and Resistance

### Horizontal Levels
These are the most common and easiest to identify.

### Trend Lines
Dynamic support and resistance that move with the trend.

### Moving Averages
These can act as dynamic support or resistance levels.

## Using Stocx AI for Better Analysis

The app makes it easy to spot these crucial levels and understand their significance for your trading strategy.`,
    status: "published",
    author: "Stocx AI Team",
    date: "2024-01-14",
    readTime: "7 min read",
    tags: ["Support", "Resistance", "Technical Analysis"],
    featuredImage: "/placeholder.jpg",
    views: 890,
  },
  {
    id: 3,
    title: "How AI is Revolutionizing Chart Analysis Learning",
    excerpt:
      "Discover how artificial intelligence is making technical analysis education more accessible and effective for traders of all levels.",
    content: `# How AI is Revolutionizing Chart Analysis Learning

The traditional way of learning technical analysis involved years of study, countless books, and extensive practice. AI is changing all of that.

## The Old Way vs. The New Way

### Traditional Learning
- Years of study required
- Complex textbooks and courses
- Trial and error approach
- Steep learning curve

### AI-Powered Learning
- Instant explanations
- Visual pattern recognition
- Personalized insights
- Learn by doing

## How Stocx AI Works

Our AI has been trained on millions of chart patterns and can instantly recognize:
- Trend lines and channels
- Chart formations
- Support and resistance levels
- Volume patterns
- Price action signals

## Benefits of AI-Powered Learning

### 1. Speed
Learn in minutes what used to take months.

### 2. Accuracy
AI doesn't miss patterns or make emotional decisions.

### 3. Accessibility
Available 24/7 on your iPhone.

### 4. Personalization
The more you use it, the better it gets at helping you learn.

## The Future of Trading Education

AI is democratizing access to professional-level chart analysis education. With tools like Stocx AI, anyone can learn to read charts like a pro.

## Getting Started

Ready to experience the future of chart analysis learning? Download Stocx AI today and start your journey toward better trading decisions.`,
    status: "published",
    author: "Stocx AI Team",
    date: "2024-01-13",
    readTime: "6 min read",
    tags: ["AI", "Learning", "Education", "Technology"],
    featuredImage: "/placeholder.jpg",
    views: 2100,
  },
]

// Content store functions
export const getWebsiteContent = (): WebsiteContent => {
  if (typeof window === "undefined") return defaultContent

  const stored = localStorage.getItem("website_content")
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch (e) {
      console.error("Error parsing stored content:", e)
    }
  }
  return defaultContent
}

export const updateWebsiteContent = (content: WebsiteContent): void => {
  if (typeof window === "undefined") return
  localStorage.setItem("website_content", JSON.stringify(content))

  // Trigger a custom event to notify other components
  window.dispatchEvent(new CustomEvent("contentUpdated", { detail: content }))
}

export const getBlogPosts = (): BlogPost[] => {
  if (typeof window === "undefined") return defaultBlogPosts

  const stored = localStorage.getItem("blog_posts")
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch (e) {
      console.error("Error parsing stored blog posts:", e)
    }
  }
  return defaultBlogPosts
}

export const updateBlogPosts = (posts: BlogPost[]): void => {
  if (typeof window === "undefined") return
  localStorage.setItem("blog_posts", JSON.stringify(posts))

  // Trigger a custom event to notify other components
  window.dispatchEvent(new CustomEvent("blogUpdated", { detail: posts }))
}

export const getBlogPost = (id: number): BlogPost | undefined => {
  const posts = getBlogPosts()
  return posts.find((post) => post.id === id)
}

export const createBlogPost = (post: Omit<BlogPost, "id" | "views">): BlogPost => {
  const posts = getBlogPosts()
  const newPost: BlogPost = {
    ...post,
    id: Math.max(...posts.map((p) => p.id), 0) + 1,
    views: 0,
  }

  const updatedPosts = [newPost, ...posts]
  updateBlogPosts(updatedPosts)
  return newPost
}

export const updateBlogPost = (id: number, updates: Partial<BlogPost>): BlogPost | null => {
  const posts = getBlogPosts()
  const index = posts.findIndex((post) => post.id === id)

  if (index === -1) return null

  const updatedPost = { ...posts[index], ...updates }
  const updatedPosts = [...posts]
  updatedPosts[index] = updatedPost

  updateBlogPosts(updatedPosts)
  return updatedPost
}

export const deleteBlogPost = (id: number): boolean => {
  const posts = getBlogPosts()
  const filteredPosts = posts.filter((post) => post.id !== id)

  if (filteredPosts.length === posts.length) return false

  updateBlogPosts(filteredPosts)
  return true
}
