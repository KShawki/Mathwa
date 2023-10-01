import './globals.css'


export const metadata = {
  title: 'Mathwa',
  description: '',
  icons: {
    icon: '/'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
