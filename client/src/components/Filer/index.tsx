import { ChangeEvent, MouseEvent, useState } from "react";

import styles from "./filer.module.css";

export const Filer = (): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState( null );

  const handleFileSelected = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setSelectedFile( target.files[0] );
  };

  const handleUpload = (event: MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div className={ styles.container }>
      <input type="file" onChange={ handleFileSelected } />
      <button onClick={ handleUpload }>Upload</button>
    </div>
  );
};
