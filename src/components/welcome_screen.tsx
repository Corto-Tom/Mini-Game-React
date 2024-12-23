import React from 'react';
import mp3 from '../assets/audio/zelda1.mp3'


export const WelcomeScreen = ({ onStart }: { onStart: () => void }) => {
   
 
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        left:'400vh',
        minWidth: '138vh',
        maxWidth: '100%',
        width: '100%',
        height: '90vh',
        backgroundColor: 'rgba(0, 0, 0, 0.77)',
        border: '5px solid #d4af37',
        borderRadius: '15px',
        // margin: '20px',
        boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)',
    };

    const titleStyle: React.CSSProperties = {
        display: 'flex',
        fontSize: '3.5rem',
        marginBottom: '20px',
        textShadow: '2px 2px 10px #008000, 0 0 20px #d4af37',
        color: '#d4af37',
    };

    const textStyle: React.CSSProperties = {
        display: 'flex',
        fontSize: '1.5rem',
        marginBottom: '30px',
        maxWidth: '600px',
        lineHeight: '1.8',
        color: '#98fb98',
        textAlign: 'center',
    };

    const buttonStyle: React.CSSProperties = {
        display: 'flex',
        padding: '15px 30px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: '#98fb98',
        border: '2px solid #d4af37',
        borderRadius: '10px',
        cursor: 'pointer',
        boxShadow: '2px 2px 10px rgba(0, 128, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.8)',
        transition: 'all 0.3s ease',
    };

    const buttonHoverStyle: React.CSSProperties = {
        ...buttonStyle,
        backgroundColor: '#32cd32',
        transform: 'scale(1.1)',
        color: '#fff',
    };

    return (
        
        <div style={containerStyle}>
            <h1 style={titleStyle}>Bienvenue dans le Monde de Zelda</h1>
            <p style={textStyle}>
                Plongez dans une aventure épique où le courage et la sagesse sont vos meilleures
                armes. Préparez-vous à explorer, résoudre des énigmes, et combattre pour sauver
                Hyrule !
            </p>
            <button
                style={buttonStyle}
                onMouseOver={(e) =>
                    Object.assign((e.target as HTMLButtonElement).style, buttonHoverStyle)
                }
                onMouseOut={(e) =>
                    Object.assign((e.target as HTMLButtonElement).style, buttonStyle)
                }
                onClick={onStart}
            >
                Commencer l'Aventure
            </button>
            <audio src={mp3} controls autoPlay loop style={{ visibility: 'hidden' }} />
        </div>
    );
};