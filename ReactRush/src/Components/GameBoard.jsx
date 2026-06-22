import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Coin from './Coin';
import Enemy from './Enemy';
import '../App.css';

const GameBoard = () => {
  const [heroPos, setHeroPos] = useState({ x: 100, y: 100 });
  const [coinPos, setCoinPos] = useState({ x: 300, y: 300 });
  const [enemyPos, setEnemyPos] = useState({ x: 500, y: 500 });
  const [score, setScore] = useState(0);

  // 1. Movement Logic (Keyboard Listener)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Browser scroll rokne ke liye
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }

      setHeroPos((prev) => {
        let { x, y } = prev;
        if (e.key === 'd' || e.key === 'ArrowRight') x += 40;
        else if (e.key === 'a' || e.key === 'ArrowLeft') x -= 40;
        else if (e.key === 'w' || e.key === 'ArrowUp') y -= 40;
        else if (e.key === 's' || e.key === 'ArrowDown') y += 40;
        return { x, y };
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 2. Game Loop (Enemy AI + Collision)
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroPos((currentHero) => {
        setEnemyPos((prevEnemy) => {
          let { x, y } = prevEnemy;
          
          // Enemy follows hero
          if (x < currentHero.x) x += 5; else if (x > currentHero.x) x -= 5;
          if (y < currentHero.y) y += 5; else if (y > currentHero.y) y -= 5;

          // Check Collision with Enemy (Game Over)
          const distHeroEnemy = Math.hypot(currentHero.x - x, currentHero.y - y);
          if (distHeroEnemy < 40) {
            alert(`GAME OVER! Score: ${score}`);
            setScore(0);
            setHeroPos({ x: 100, y: 100 });
            return { x: 500, y: 500 }; // Reset Enemy
          }

          // Check Collision with Coin
          const distHeroCoin = Math.hypot(currentHero.x - coinPos.x, currentHero.y - coinPos.y);
          if (distHeroCoin < 40) {
            setScore((s) => s + 1);
            setCoinPos({ 
              x: Math.random() * (window.innerWidth - 100), 
              y: Math.random() * (window.innerHeight - 100) 
            });
          }

          return { x, y };
        });
        return currentHero;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [coinPos, score]); // Sirf tabhi update hoga jab coin ya score badle

  return (
    <div className="game-container">
      <h1 className="title">Emoji Escape</h1>
      <div className="score-board">Score: {score}</div>
      <Hero pos={heroPos} />
      <Coin pos={coinPos} />
      <Enemy pos={enemyPos} />
    </div>
  );
};

export default GameBoard;