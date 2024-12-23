export const Status = ({player, setIsInStatus}: {player: any, setIsInStatus: (x: boolean) => void}) => {
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
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textShadow: '1px 1px 8px #32cd32, 0 0 10px #d4af37',
                transition: 'transform 0.3s ease, color 0.3s ease',
            };

        const handleItemClick = () => {
            setIsInStatus(false)
        }
        return (
            <div style={barStyle}>
                <h1>{player.name}</h1>
                <h1>{player.hp}/{player.hp_max} Hp</h1>
                <h1>{player.mp} Mp</h1>
                <h1>{player.str} Str</h1>
                <h1>{player.int} Int</h1>
                <h1>{player.def} Def</h1>
                <h1>{player.res} Res</h1>
                <h1>{player.spd} Spd</h1>
                <a
                href="#exit"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={handleItemClick}
            >
                exit
            </a>
            </div>
        )
}
