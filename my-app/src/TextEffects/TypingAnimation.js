import { ReactTyped } from "react-typed";


const TypingAnimation = () => {
  return (
    <ReactTyped
      strings={[
        'Welcome to my website!',
        'Check out some of my projects!',
        '{ Creating solutions one line of code at a time }',
        'Building cool things that I find interesting :)'
      ]}
      typeSpeed={45}
      backSpeed={30}
      backDelay={2500}
      loop
    />
  );
};

export default TypingAnimation;
