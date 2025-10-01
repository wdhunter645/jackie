import { useState } from 'react';

export default function VotePanel() {
  const [selectedOption, setSelectedOption] = useState('');
  const [hasVoted, setHasVoted] = useState(false);

  const voteOptions = [
    { id: 'greatest', label: 'Greatest Baseball Player of All Time' },
    { id: 'pioneer', label: 'Most Important Civil Rights Pioneer in Sports' },
    { id: 'courage', label: 'Most Courageous Athlete in History' },
    { id: 'inspiration', label: 'Most Inspiring Sports Figure' },
  ];

  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true);
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Fan Poll</h2>
        <p style={styles.description}>
          What does Jackie Robinson mean to you?
        </p>
        
        {!hasVoted ? (
          <div style={styles.voteContainer}>
            <div style={styles.optionsContainer}>
              {voteOptions.map((option) => (
                <label key={option.id} style={styles.optionLabel}>
                  <input
                    type="radio"
                    name="vote"
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    style={styles.radio}
                  />
                  <span style={styles.optionText}>{option.label}</span>
                </label>
              ))}
            </div>
            <button
              onClick={handleVote}
              disabled={!selectedOption}
              style={{
                ...styles.voteButton,
                ...(selectedOption ? {} : styles.voteButtonDisabled),
              }}
            >
              Submit Vote
            </button>
          </div>
        ) : (
          <div style={styles.thankYou}>
            <div style={styles.checkmark}>✓</div>
            <h3 style={styles.thankYouText}>Thank you for voting!</h3>
            <p style={styles.thankYouMessage}>
              Your voice helps keep Jackie Robinson's legacy alive.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '5rem 0',
    backgroundColor: 'transparent',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '1rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  description: {
    fontSize: '1.125rem',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: '2.5rem',
    textShadow: '0 1px 2px rgba(0,0,0,0.2)',
  },
  voteContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '2.5rem',
    borderRadius: '16px',
    border: 'none',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    backdropFilter: 'blur(10px)',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
  },
  optionLabel: {
    display: 'flex',
    alignItems: 'center',
    padding: '1.25rem',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    cursor: 'pointer',
    border: '2px solid #e9ecef',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  radio: {
    marginRight: '1rem',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    accentColor: '#667eea',
  },
  optionText: {
    fontSize: '1rem',
    color: '#212529',
    fontWeight: '500',
  },
  voteButton: {
    width: '100%',
    padding: '1.25rem',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
  },
  voteButtonDisabled: {
    background: 'linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%)',
    cursor: 'not-allowed',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  thankYou: {
    textAlign: 'center',
    padding: '3rem 2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    backdropFilter: 'blur(10px)',
  },
  checkmark: {
    fontSize: '4rem',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  thankYouText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem',
  },
  thankYouMessage: {
    fontSize: '1.125rem',
    color: '#6c757d',
  },
};
