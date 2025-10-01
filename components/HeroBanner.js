export default function HeroBanner() {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Jackie Robinson Fan Club
        </h1>
        <p style={styles.subtitle}>
          Celebrating the life and legacy of Jackie Robinson - the first African American 
          to play in Major League Baseball in the modern era.
        </p>
        <div style={styles.stats}>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>42</div>
            <div style={styles.statLabel}>Retired Number</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>1947</div>
            <div style={styles.statLabel}>MLB Debut</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statNumber}>1962</div>
            <div style={styles.statLabel}>Hall of Fame</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '5rem 0',
    borderBottom: 'none',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(10px)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#495057',
    maxWidth: '800px',
    margin: '0 auto 4rem',
    lineHeight: '1.8',
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    minWidth: '150px',
  },
  statNumber: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: '1',
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '1rem',
    color: '#6c757d',
    fontWeight: '500',
  },
};
