import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Please Disease Detection</h1>
      <Link href="/upload" style={styles.link}>
        Detect
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center' as const,
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    marginBottom: '20px',
  },
  link: {
    fontSize: '18px',
    color: '#0070f3',
    textDecoration: 'none',
  },
};

export default Home;
