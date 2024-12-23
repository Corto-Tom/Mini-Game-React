import React from 'react';

export const StageBar = ({ stage }: { stage: any }) => {
    const barStyle: React.CSSProperties = {
        position: 'fixed',
        top: '1%',
        left: 20,
        width: '97.5%',
        height: '9vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#d4af37', // Doré
        display: 'absolute',
        borderRadius: '15px',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 0',
        boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)',
        border: '5px solid #d4af37',
        textAlign: 'center',
        fontFamily: "'Cinzel', serif",
        margin: '0 auto',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '2.5rem',
        margin: '0',
        textShadow: '2px 2px 10px #008000, 0 0 20px #d4af37', // Ombres verte et dorée
    };

    const descStyle: React.CSSProperties = {
        fontSize: '1.2rem',
        color: '#98fb98', // Vert pastel
        textShadow: '1px 1px 5px #32cd32, 0 0 10px #d4af37',
    };

    return (
        <div style={barStyle}>
            <h1 style={titleStyle}>{stage.name}</h1>
            <h2 style={descStyle}>{stage.desc}</h2>
        </div>
    );
};