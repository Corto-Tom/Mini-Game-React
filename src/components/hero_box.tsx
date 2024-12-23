export const HeroBox= ({player}: {player: any}) => {
    const boxStyle: React.CSSProperties = {
        position: 'fixed',
        minWidth: '46.5%',
        bottom: '32%', // Hauteur au-dessus de la downside bar
        left: '25.5%',
        height: '48%',
        transform: 'translateX(-50%)',
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        width: '80%', // Ajustez la largeur comme vous le souhaitez
        maxWidth: '600px',
    };
    const sprit: React.CSSProperties = {
        width: '90%',
        height: '90%'
    }
    const hpStyle: React.CSSProperties = {
        fontSize: '1.4rem',
        color: '#98fb98',
        textShadow: '1px 1px 5px rgb(201, 41, 41), 0 0 8px rgb(55, 88, 17)',
    };
    return (
        <div style={boxStyle}>
            <img src={player.sprite} alt="HeroSprite" style={sprit}></img>
            <p style={hpStyle}>  {player.name} {player.hp} HP</p>
        </div>
    );
};
