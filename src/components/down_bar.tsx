import React, { useRef } from 'react';
import { sleep } from '../tsLib/functionLib';
import { gameState, resetLogs } from '../gameLoop';
import touchSound from '../assets/audio/touch.mp3'
interface DownBarProps {
    onAttack: () => void;
    onHeal: () => void;
    setIsInInventory: (x: boolean) => void;
    onRun: () => void;
    setShowFight: (x: boolean) => void;
    setIsInStatus: (x: boolean) => void;
}

export const DownBar: React.FC<DownBarProps> = ({ onAttack, onHeal, setIsInInventory, onRun, setShowFight, setIsInStatus }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    
    
    const barStyle: React.CSSProperties = {
        position: 'fixed',
        bottom: '1%',
        left: 20,
        width: '98%',
        height: '14vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        border: '5px solid #d4af37',
        borderRadius: '15px',
        color: '#d4af37',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 0',
        boxShadow: '0 0 20px rgba(212, 175, 55, 0.8), 0 0 15px #32cd32',
        fontFamily: "'Cinzel', serif",
    };

    const linkStyle: React.CSSProperties = {
        color: '#98fb98',
        textDecoration: 'none',
        fontSize: '2rem',
        fontWeight: 'bold',
        textShadow: '1px 1px 8px #32cd32, 0 0 10px #d4af37',
        transition: 'transform 0.3s ease, color 0.3s ease',
    };

    const handleRunClick = async () => {
        onRun(); // Affiche le message
        if (audioRef.current) {
            audioRef.current.play(); // Joue le son
        }
        await sleep(1000); // Attend 2 secondes
        setShowFight(false); // Retourne à la page d'accueil
    };
    const handleAttackClick = async () => {
        console.log(gameState.value.inventory)
        onAttack();
        if (audioRef.current) {
            audioRef.current.play(); // Joue le son
        }
        gameState.next({
            ...gameState.value,
            gameLogs: `You Attacked ! you dealt ${gameState.value.player.str}`
        })
        await sleep(900);
        resetLogs();
        if (gameState.value.player.hp <= 0) {
            gameState.next({
                ...gameState.value,
                gameLogs: 'Game Over.........'
            })
            await sleep(2000);
            setShowFight(false);
        }
    }
    const handleItemClick = () => {
        setIsInInventory(true)
    }
    const handleStatusClick = () => {
        setIsInStatus(true)
    }

    
    return (
        <div style={barStyle}>
            <audio ref={audioRef} src={touchSound} preload='auto'/>
            <a
                href="#attack"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={handleAttackClick}
            >
                Attaque
            </a>
            <a
                href="#heal"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={async () => {onHeal(); await sleep(900); resetLogs()}}
            >
                Heal
            </a>
            <a
                href="#item"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={handleItemClick}
            >
                Item
            </a>
            <a
                href="#status"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={handleStatusClick}
            >
                Status
            </a>
            <a
                href="#run"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={handleRunClick}
            >
                Run
            </a>
        </div>
    );
};