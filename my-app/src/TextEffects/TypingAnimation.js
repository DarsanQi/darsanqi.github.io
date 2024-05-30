import { ReactTyped } from "react-typed";


const TypingAnimation = () => {
  return (
    <ReactTyped
      strings={[
        'This is a typing animation.',
        'It will type and delete text.',
        'You can customize it as you like.'
      ]}
      typeSpeed={50}
      backSpeed={50}
      loop
    />
  );
};

export default TypingAnimation;
