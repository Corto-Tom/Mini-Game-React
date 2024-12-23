import React from 'react';

export const AboveBarBox = ({ gamelogs }: { gamelogs: any }) => {
    const boxStyle: React.CSSProperties = {
        position: 'fixed',
        minWidth: '96%',
        bottom: '20%',
        left: '50.3%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        border: '3px solid #d4af37',
        borderRadius: '15px',
        color: '#d4af37',
        textAlign: 'center',
        boxShadow: '0 0 15px rgba(212, 175, 55, 0.8), 0 0 10px #008000',
        width: '80%',
        maxWidth: '600px',
        padding: '15px',
        fontFamily: "'Cinzel', serif",
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '1.8rem',
        margin: '0',
        textShadow: '2px 2px 8px #32cd32, 0 0 10px #d4af37',
    };

    return (
        <div style={boxStyle}>
            <h3 style={titleStyle}>{gamelogs.gamelogs}</h3>
            
        </div>
    );
};
