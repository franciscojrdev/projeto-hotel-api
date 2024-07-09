
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Sobre</a></li>
            <li><a href="/about">hotels</a></li>
            <li><a href="/about">Minhas reservas</a></li>

          </ul>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <p>&copy; 2024 Hotel Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}