"use client";
import { ChangeEvent, FormEvent, useState } from 'react';

const UploadPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultText, setResultText] = useState('');

  const texts: string[] = [
    "Potato__Late_blight",
    "Potato__Early_blight",
  ];

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!selectedImage) {
      alert('Please select an image first.');
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      setResultText(randomText);
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Image Upload Page</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Start Test</button>
      </form>
      {isProcessing && <p style={styles.processingText}>Processing...</p>}
      {!isProcessing && resultText && <p style={styles.resultText}>{resultText}</p>}
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
  form: {
    display: 'inline-block',
    textAlign: 'left' as const,
  },
  input: {
    display: 'block',
    marginBottom: '10px',
  },
  button: {
    display: 'block',
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  processingText: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#888',
  },
  resultText: {
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold' as const,
  },
};

export default UploadPage;
