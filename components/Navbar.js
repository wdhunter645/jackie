export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <span style={styles.number}>42</span>
          <span style={styles.brandText}>Jackie Robinson Fan Club</span>
        </div>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <a href="#home" style={styles.navLink}>Home</a>
          </li>
          <li style={styles.navItem}>
            <a href="#about" style={styles.navLink}>About</a>
          </li>
          <li style={styles.navItem}>
            <a href="#vote" style={styles.navLink}>Vote</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '1rem 0',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  number: {
    backgroundColor: '#ffffff',
    color: '#667eea',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: '0.25rem 0.75rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
  brandText: {
    color: '#ffffff',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'opacity 0.2s',
    textShadow: '0 1px 2px rgba(0,0,0,0.2)',
  },
};
