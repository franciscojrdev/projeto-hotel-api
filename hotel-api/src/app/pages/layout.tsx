import { ReactNode } from 'react';
import '../styles/globals.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            {/* Adicione mais links de navegação conforme necessário */}
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2024 Hotel Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}
