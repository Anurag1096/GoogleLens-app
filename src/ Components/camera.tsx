import { useState } from 'react';
import { Camera, CameraResultType } from '@capacitor/camera';

export default function CameraComponent() {
  const [image, setImage] = useState<string | null>(null);

  const takePhoto = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
      });

      if (photo.webPath) {
        setImage(photo.webPath);
      }
      
    } catch (error) {
      console.error('Camera error:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h2>Take a Photo</h2>
      <button onClick={takePhoto}>📷 Open Camera</button>
      {image && <img src={image} alt="Taken" style={{ marginTop: 20, width: 300 }} />}
    </div>
  );
}
