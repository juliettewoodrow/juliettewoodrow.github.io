const SOCIAL_HOSTS = new Set([
  "twitter.com",
  "x.com",
  "github.com",
  "linkedin.com",
  "www.linkedin.com",
  "bsky.app",
])

const isHttpUrl = (url) => url.protocol === "http:" || url.protocol === "https:"

const getInterestEvent = (url) => {
  const host = url.hostname.toLowerCase()
  const path = url.pathname.toLowerCase()

  if (path.startsWith("/pdfs/") || host === "arxiv.org") {
    return "research_interest"
  }

  if (
    host === "web.stanford.edu" ||
    host === "codeinplace.stanford.edu" ||
    path.includes("/class/")
  ) {
    return "teaching_interest"
  }

  if (host === "scholar.google.com") {
    return "scholar_click"
  }

  if (SOCIAL_HOSTS.has(host) || host.endsWith(".linkedin.com")) {
    return "profile_click"
  }

  if (host !== window.location.hostname.toLowerCase()) {
    return "external_resource_click"
  }

  return null
}

const trackLink = (event) => {
  if (typeof window.gtag !== "function") return

  const target = event.target
  const link = target instanceof Element ? target.closest("a") : null
  if (!(link instanceof HTMLAnchorElement)) return

  const url = new URL(link.href, window.location.href)
  if (!isHttpUrl(url)) return

  const eventName = getInterestEvent(url)
  if (!eventName) return

  window.gtag("event", eventName, {
    item_name: (link.textContent || link.getAttribute("aria-label") || "").trim().slice(0, 100),
    item_path: url.pathname,
  })
}

export const initializeAnalyticsTracking = () => {
  document.addEventListener("click", trackLink)
  return () => document.removeEventListener("click", trackLink)
}
