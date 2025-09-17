"use server"

import { revalidatePath } from "next/cache"

export async function updateContent(formData: FormData) {
  // This is a server action that would typically update a database
  // For now, we'll just revalidate the path to trigger a refresh

  const heroTitle = formData.get("heroTitle") as string
  const heroSubtitle = formData.get("heroSubtitle") as string
  const heroCtaText = formData.get("heroCtaText") as string

  // In a real app, you would save this to a database
  // For demo purposes, we'll just revalidate

  revalidatePath("/")

  return {
    success: true,
    message: "Content updated successfully",
  }
}

export async function createBlogPost(formData: FormData) {
  const title = formData.get("title") as string
  const excerpt = formData.get("excerpt") as string
  const content = formData.get("content") as string
  const status = formData.get("status") as "draft" | "published"
  const tags = (formData.get("tags") as string).split(",").map((tag) => tag.trim())

  // In a real app, you would save this to a database

  revalidatePath("/blog")
  revalidatePath("/admin/blog")

  return {
    success: true,
    message: "Blog post created successfully",
  }
}

export async function updateBlogPost(id: number, formData: FormData) {
  const title = formData.get("title") as string
  const excerpt = formData.get("excerpt") as string
  const content = formData.get("content") as string
  const status = formData.get("status") as "draft" | "published"
  const tags = (formData.get("tags") as string).split(",").map((tag) => tag.trim())

  // In a real app, you would update this in a database

  revalidatePath("/blog")
  revalidatePath("/admin/blog")
  revalidatePath(`/blog/${id}`)

  return {
    success: true,
    message: "Blog post updated successfully",
  }
}

export async function deleteBlogPost(id: number) {
  // In a real app, you would delete this from a database

  revalidatePath("/blog")
  revalidatePath("/admin/blog")

  return {
    success: true,
    message: "Blog post deleted successfully",
  }
}
