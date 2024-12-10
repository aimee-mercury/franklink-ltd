import './globals.css';
import { ReactNode } from 'react';
export const metadata = {
  title: 'FrankLink Limited',
  description: 'A sample project with Next.js, TypeScript, and Tailwind CSS',
};

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body>
      <div>
        {children}
      </div>
      
    </body>
  </html>
);

export default RootLayout;
