export const Y = '✓', N = '✕'

export const paid = [
  { name: 'Pro', mo: 9, yr: 108, desc: 'Get full access to advanced link analytics, editing and management.', steps: [125, 500, 1000, 2000, 4000], extra: '+$1.50 per 10 additional links*', clicks: 'Unlimited Tracked Clicks', domains: '3 Branded Domains' },
  { name: 'Bulk 50K', mo: 69, yr: 828, desc: 'Generate, edit and manage your links in bulk.', steps: [50000, 100000, 250000, 500000, 1000000, 2000000, 3000000, 5000000], extra: '+$2.00 per 1000 additional links*', bulk: true, domains: '3 Branded Domains' },
]

export const sections = [
  ['Monthly Volumes', [
    ['Links', ['30', ['125', '+$1.50 per 10 additional links*'], ['50,000', '+$2.00 per 1000 additional links*'], 'Custom']],
    ['Tracked Clicks', [N, 'Unlimited', ['50,000', '+$0.60 per 1000 additional clicks*'], 'Custom']],
  ]],
  ['Link Management', [
    ['Customize URL Aliases', [Y, Y, Y, Y]], ['Tag Links', [N, Y, Y, Y]], ['Rename Link Aliases', [Y, Y, Y, Y]],
    ['Edit Link Destinations', [N, Y, Y, Y]], ['Delete Links', [N, Y, Y, Y]],
    ['Default Link Expiration', ['Never Expires', 'Never Expires', '90 Days', 'Custom']], ['Set Link Expiration Dates', [N, Y, Y, Y]],
  ]],
  ['Link Branding & Customization', [
    ['Branded Domains', ['1', '3', '3', 'Custom']], ['Shorten Links with Custom Domains', [Y, Y, Y, Y]],
    ['1 Free Year on Selected Domains', [N, Y, Y, Y]], ['Bring Your Domains to TinyURL', [N, Y, Y, Y]], ['Bring Your Subdomains to TinyURL', [N, Y, Y, Y]],
  ]],
  ['Monitoring & Analytics', [
    ['Analytics Dashboard', [N, Y, Y, Y]], ['Link Analytics History', [N, '2 Years', '2 Years', '2 Years']],
    ...['Total Clicks', 'Clicks over Time', 'Clicks by Referrer', 'Clicks by Geography', 'Clicks by Device Language', 'Clicks by Popular Days & Times', 'Clicks by Device Type', 'Clicks by OS', 'Clicks by Browser'].map((l) => [l, [N, Y, Y, Y]]),
  ]],
  ['Customer Support', [
    ['Customer Support Tickets', [Y, Y, Y, Y]], ['Dedicated Account Manager', [N, N, N, Y]],
    ['Emergency Phone Support', [N, N, N, Y]], ['SLA Uptime Guarantee', [N, N, N, '99.9%']],
  ]],
]

export const plansFaq = [
  ['What payment methods do you support?', 'Major credit and debit cards are supported. The options are shown at checkout.'],
  ['How will TinyURL bill me for my subscription?', 'Subscriptions are billed monthly or annually, depending on the option you pick.'],
  ['How do I view my invoices?', 'Your invoices are available in the billing section of your account.'],
  ['How do I switch to a different plan?', 'Open your account billing settings and choose the plan you want.'],
  ['How do I update my payment details?', 'You can update your card from the billing section of your account.'],
  ['Can I change my subscription from annual to monthly payments?', 'Yes, you can change the billing period from your account settings.'],
]
