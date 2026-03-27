// Gym contact constants
export const GYM_PHONE = '09044405342'
export const GYM_PHONE_DISPLAY = '090444 05342'
export const GYM_WHATSAPP = '919044405342' // country code 91 + number without leading 0

/**
 * Build a wa.me URL with an optional pre-filled message.
 * @param {string} message - plain-text message (will be URI-encoded)
 */
export function whatsappUrl(message = '') {
  const base = `https://wa.me/${GYM_WHATSAPP}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
