export const normalizeWebUrl = (value) => {
  const input = value.trim()
  const candidate = /^[a-z][a-z\d+.-]*:\/\//i.test(input) ? input : `https://${input}`

  try {
    const url = new URL(candidate)
    if (!['http:', 'https:'].includes(url.protocol) || !url.hostname.includes('.')) return null
    return url.href
  } catch {
    return null
  }
}

export const valid = (value) => Boolean(normalizeWebUrl(value))
