import Logo from '../common/Logo'

const footCols = {
  Features: ['Link Editor', 'Link Management', 'Branded Links', 'Short URL Tracking', 'QR Code Generator', 'Short URL API'],
  Resources: ['Blog', 'For Developers', 'Our Proven Process', 'About Us'],
  'Contact Us': ['Help Desk', 'Contact Sales', 'Contact Support', 'Report Abuse'],
  Legal: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Accessibility Statement', 'Privacy Manager'],
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-tu-teal to-tu-navy text-white">
      <div className="mx-auto grid max-w-[1380px] gap-10 px-6 py-14 lg:grid-cols-[auto_auto_auto_auto_1fr] lg:gap-14">
        {Object.entries(footCols).map(([t, l]) => (
          <div key={t}>
            <h4 className="font-heading text-xl font-bold">{t}</h4>
            <ul className="mt-6 space-y-3">{l.map((i) => <li key={i}><a href="#" onClick={(e) => e.preventDefault()}>{i}</a></li>)}</ul>
          </div>
        ))}
        <div className="flex flex-col items-start justify-end lg:items-end">
          <div className="flex gap-5 font-bold"><span>f</span><span>◎</span><span>in</span><span>𝕏</span></div>
          <Logo className="mt-8 text-3xl" />
          <p className="mt-3 text-sm lg:text-right">© 2026 TinyURL Clone<br />Homework project</p>
        </div>
      </div>
    </footer>
  )
}
