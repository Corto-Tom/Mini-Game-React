export const EnemyBox = ({enemy}: {enemy: any}) => {
    const boxStyle: React.CSSProperties = {
        position: 'fixed',
        minWidth: '46.5%',
        bottom: '32%', // Hauteur au-dessus de la downside bar
        left: '74.8%',
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
    const hpStyle: React.CSSProperties = {
            fontSize: '1.4rem',
            color: '#FF0000',
            textShadow: '1px 1px 5px rgb(135, 151, 41), 0 0 8px rgb(155, 19, 37)',
        };
    const sprit: React.CSSProperties = {
        width: '90%',
        height: '90%'
    }
    return (
        <div style={boxStyle}>
            <img src={enemy.sprite} alt="HeroSprite" style={sprit}></img>
            <p style={hpStyle}>  {enemy.name} {enemy.hp} HP</p>
        </div>
    );
};