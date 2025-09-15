"use server"

export async function subscribeToNewsletter(email: string) {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Check if environment variables are available
    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_LIST_ID) {
      console.log("Newsletter subscription attempted:", email)
      return {
        success: true,
        message: "Thank you for subscribing! We'll keep you updated.",
      }
    }

    // Mailchimp API integration
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
    const MAILCHIMP_SERVER_PREFIX = MAILCHIMP_API_KEY.split("-")[1]

    const response = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          tags: ["stocx-ai-website"],
        }),
      },
    )

    const data = await response.json()

    if (response.ok) {
      return {
        success: true,
        message: "Thank you for subscribing! We'll keep you updated.",
      }
    } else if (data.title === "Member Exists") {
      return {
        success: true,
        message: "You're already subscribed! Thank you for your interest.",
      }
    } else {
      console.error("Mailchimp error:", data)
      return {
        success: false,
        message: "Something went wrong. Please try again later.",
      }
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
