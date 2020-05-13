import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const getTime = () => {
  const hour = new Date().getHours();
  if (hour >= 4 && hour <= 11) return 'morning';
  if (hour >= 12 && hour <= 16) return 'afternoon';
  if (hour >= 17) return 'evening';
};

const Button = styled.button`
  background: transparent;
  font-size: inherit;
  font-family: 'Inter', sans-serif;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  color: white;
  outline-color: wheat;
`;

const Greeting = React.memo(() => {
  return <p>Good {getTime()}.</p>;
});

const getScale = (height: number): number => -(height / 1000) + 1;
const getMaximum = (a: number, b: number) => (a > b ? b : a);

const StyledIntro = styled.div<{ position: number }>`
  min-height: 100%;
  box-sizing: border-box;
  flex: 1;
  padding: 30px;
  display: flex; 
  flex-direction: column;
  background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,1)) , url('//source.unsplash.com/ciO5L8pin8A/${window.innerWidth}x${window.innerHeight}') no-repeat center center;
  top: 0;
  position: sticky;
  transition: all 1s;
  
  background-size: cover;
  overflow: hidden;

  .top, .bottom {
    display: flex;

    .fill {
      flex: 1;
    }
  } 
   
  .center {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    h1 {
      font-size: 450%;
      letter-spacing: 3px;
      color: black;
      text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
    }
  }
`;

const Hero = () => {
  const [height, setHeight] = useState(window.scrollY);

  useEffect(() => {
    const listener = () => {
      setHeight(window.scrollY);
    };

    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  });

  return (
    <StyledIntro
      position={height}
      style={{
        transform: `scale(${getScale(height)})`,
        borderRadius: height > 5 ? '20px' : '0',
        padding: getMaximum(height * 2 + 30, window.innerWidth > 800 ? 150 : 30) + 'px',
      }}
    >
      <div className="top">
        <div className="fill">
          <Greeting />
        </div>
        <p>TypeScript + React + Node.js</p>
      </div>
      <div className="center">
        <h1>Alistair Smith</h1>
        <h3>Full-stack TypeScript engineer from the UK 🇬🇧</h3>
      </div>
      <div className="bottom">
        <div className="fill">
          Currently working at <a href={'https://edge.gg'}>Edge</a>
        </div>
        <Button
          onClick={() => {
            window.scrollBy({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          }}
        >
          Get in touch
        </Button>
      </div>
    </StyledIntro>
  );
};

export default Hero;
