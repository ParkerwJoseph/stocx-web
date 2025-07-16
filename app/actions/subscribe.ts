"use server"

import mailchimp from "@mailchimp/mailchimp_marketing"

// Define response type
type SubscribeResponse = {
  success: boolean
  message: string
}

// Initialize Mailchimp client
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX || process.env.MAILCHIMP_API_KEY?.split("-").pop() || "",
})

export async function subscribeToMailchimp(formData: FormData): Promise<SubscribeResponse> {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please provide a valid email address",
    }
  }

  try {
    // Add member to list
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID as string, {
      email_address: email,
      status: "subscribed",
    })

    return {
      success: true,
      message: "Thank you for subscribing!",
    }
  } catch (error: any) {
    console.error("Mailchimp subscription error:", error)

    // Handle already subscribed members
    if (error.response && error.response.body && error.response.body.title === "Member Exists") {
      return {
        success: true,
        message: "You're already subscribed! We'll keep you updated.",
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
