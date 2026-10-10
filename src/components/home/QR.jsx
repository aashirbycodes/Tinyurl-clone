import { useEffect, useState } from 'react'
import QRCode from 'qrcode'

export default function QR({ text, onError }) {
  const [image, setImage] = useState('')

  useEffect(() => {
    let active = true
    setImage('')
    QRCode.toDataURL(text, { errorCorrectionLevel: 'M', margin: 1, width: 192 })
      .then((dataUrl) => {
        if (active) setImage(dataUrl)
      })
      .catch(() => {
        if (active) onError('Could not generate the QR code. Please try again.')
      })
    return () => { active = false }
  }, [onError, text])

  if (!image) return <p className="h-40 w-40" role="status">Generating QR code…</p>
  return <img src={image} alt={`QR code for ${text}`} className="h-40 w-40" />
}
