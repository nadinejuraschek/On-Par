// REACT
import { useState } from 'react';

// STYLES
import styles from './filer.module.css';

const Filer = ({ label }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelected = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = event => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <input type='file' onChange={handleFileSelected} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Filer;
