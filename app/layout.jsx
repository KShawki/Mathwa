import './globals.css';

export const metadata = {
  title: 'Mathwa',
  description: '',
  // icons: {
  //   icon: '/'
  // }
};

export default function RootLayout({ children }) {
  return (
    <html dir='rtl'>
      <body className='bg-gray-200 xl:min-h-screen xl:flex antialiased xl:flex-col xl:h-screen'>{children}</body>
    </html>
  );
}
