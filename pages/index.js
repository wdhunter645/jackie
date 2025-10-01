import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import VotePanel from '../components/VotePanel';

export default function Home() {
  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <main style={styles.main}>
        <HeroBanner />
        <VotePanel />
      </main>
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © 2024 Jackie Robinson Fan Club. Honoring #42 Forever.
        </p>
      </footer>
    </div>
  );
}

const styles = {
  pageContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  main: {
    flex: 1,
  },
  footer: {
    backgroundColor: 'rgba(33, 37, 41, 0.95)',
    padding: '2rem 0',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
  },
  footerText: {
    color: '#ffffff',
    margin: 0,
    fontSize: '0.875rem',
  },
};