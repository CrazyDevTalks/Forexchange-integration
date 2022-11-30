import Head from 'next/head';
import { useContext } from 'react';
import { DarkContext } from '@/context/dark-context';
import Footer from './footer/Footer';
import Header from './header/Header';
import Hero from './hero/Hero';

interface Props {
  title: string;
  keywords: string;
  description: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({
  title,
  children,
  description,
  keywords,
}) => {
  const { darkMode, handleToggleThemeClick } = useContext(DarkContext);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>4X | Forex Currency Exchange</title>
        <meta
          name="description"
          content="4X is a forex currency exchange platform that allows you to research foreign currencies."
        />
        <meta
          name="keywords"
          content="4X, Chris Doll, forex, currency exchange"
        />
      </Head>
      <div className="dark:bg-[#0E141B] min-w-[400px]">
        <header id="header">
          <Header
            darkMode={darkMode}
            handleToggleThemeClick={handleToggleThemeClick}
          />
        </header>
        <main className="min-h-screen">
          <div className="p-2 min-w-md sm:flex sm:justify-center">
            <div className="max-w-5xl">
              <Hero />
              {children}
            </div>
          </div>
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: '4X | Forex Currency Exchange',
  description:
    '4X is a forex currency exchange platform that allows you to research foreign currencies.',
  keywords: `Chris Doll, 4X, forex currency exchange`,
};
