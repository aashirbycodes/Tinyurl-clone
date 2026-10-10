export const short = (n) => (n >= 1e6 ? n / 1e6 + 'M' : n >= 1000 ? n / 1000 + 'K' : n)
