import React, {useState} from 'react';
import { IonButton, IonIcon, IonLabel, IonToast } from '@ionic/react';
import './CopyTextButton.css';
import {copyOutline} from 'ionicons/icons';

interface CopyTextButtonProps {
  prefix?: string;
  textToCopy: string;
  clickable?: boolean;
}

const CopyTextButton: React.FC<CopyTextButtonProps> = ({ textToCopy, prefix = "" , clickable = true}) => {
  const [showToast, setShowToast] = useState(false);
  const text = prefix + textToCopy;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
  };

  return (
    <div className='copy-button'>
      <IonLabel>{
        clickable ? (
        <a href={text} target="_blank" rel="noopener noreferrer">{textToCopy}</a>
        ) : (
          <>{textToCopy}</>
        )
      }</IonLabel>
      <IonButton id="copy" onClick={() => copyToClipboard(text)} color="primary">
        <IonIcon icon={copyOutline}></IonIcon>
      </IonButton>
      <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={`Copié: ${text}`} duration={3000}></IonToast>
  </div>
  );
};

export default CopyTextButton;

