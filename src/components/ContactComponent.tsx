import './ContactComponent.css'
import CopyTextButton from "./CopyTextButton";

const ContactComponent: React.FC = () => {
  return (
    <div className="container center">
      <div className="contact">
        <h2>Mon addresse e-mail:</h2>
        <CopyTextButton textToCopy="arthur2klein@proton.me" clickable={false} />
        <h2>Mon profil Linkedin:</h2>
        <CopyTextButton prefix="https://www.linkedin.com/in/" textToCopy="arthur-klein-b1b928223" />
        <h2>Mon profil Github:</h2>
        <CopyTextButton prefix="https://github.com/" textToCopy="arthur2klein" />
      </div>
    </div>
  );
};

export default ContactComponent;
