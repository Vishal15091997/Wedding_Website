import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-cormorant', 
  weight: ['300', '400', '600'] 
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat', 
  weight: ['300', '400'] 
});

export const metadata = {
  title: 'Aria & Ethan | Where Destiny Arranged Love',
  description: 'Join us in celebrating our wedding journey.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans bg-ivory text-zinc-800`}>
        {children}
      </body>
    </html>
  );
}
