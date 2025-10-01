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
    padding: '4rem 0',
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#0051ba',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.125rem',
    color: '#495057',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  voteContainer: {
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    borderRadius: '8px',
    border: '2px solid #e9ecef',
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
    padding: '1rem',
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    cursor: 'pointer',
    border: '2px solid #dee2e6',
    transition: 'all 0.2s',
  },
  radio: {
    marginRight: '1rem',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
  optionText: {
    fontSize: '1rem',
    color: '#212529',
  },
  voteButton: {
    width: '100%',
    padding: '1rem',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#0051ba',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  voteButtonDisabled: {
    backgroundColor: '#6c757d',
    cursor: 'not-allowed',
  },
  thankYou: {
    textAlign: 'center',
    padding: '3rem 2rem',
  },
  checkmark: {
    fontSize: '4rem',
    color: '#28a745',
    marginBottom: '1rem',
  },
  thankYouText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#0051ba',
    marginBottom: '0.5rem',
  },
  thankYouMessage: {
    fontSize: '1.125rem',
    color: '#6c757d',
  },
};
