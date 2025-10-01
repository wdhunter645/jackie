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
    backgroundColor: '#0051ba',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
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
    color: '#0051ba',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: '0.25rem 0.75rem',
    borderRadius: '4px',
  },
  brandText: {
    color: '#ffffff',
    fontSize: '1.25rem',
    fontWeight: 'bold',
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
  },
};
