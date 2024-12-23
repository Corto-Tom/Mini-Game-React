import { useState } from "react";
import { Item } from "../tsLib/structureLib";


export const Bag = ({  inventory, setIsInInventory, handleItem}: {inventory: Item[]; setIsInInventory: (x: boolean) => void; handleItem: (element: Item) => void}) => {
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);

  const barStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "1%",
    left: 20,
    width: "98%",
    height: "14vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    border: "5px solid #d4af37",
    borderRadius: "15px",
    color: "#d4af37",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0",
    boxShadow: "0 0 20px rgba(212, 175, 55, 0.8), 0 0 15px #32cd32",
    fontFamily: "'Cinzel', serif",
  };

  const linkStyle: React.CSSProperties = {
    color: "#98fb98",
    textDecoration: "none",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textShadow: "1px 1px 8px #32cd32, 0 0 10px #d4af37",
    transition: "transform 0.3s ease, color 0.3s ease",
  };

  const descriptionStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "6vh", // Place la description au-dessus de la barre
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "#d4af37",
    padding: "10px",
    border: "2px solid #d4af37",
    borderRadius: "10px",
    boxShadow: "0 0 10px #d4af37",
    fontSize: "1.2rem",
    fontFamily: "'Cinzel', serif",
    whiteSpace: "nowrap",
    zIndex: 100,
  };

  const boxStyle: React.CSSProperties = {
    position: 'fixed',
    minWidth: '96%',
    bottom: '12%',
    left: '50.3%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: '15px',
    color: '#d4af37',
    textAlign: 'center',
    width: '80%',
    maxWidth: '600px',
    padding: '15px',
    fontSize: '1.6rem',
    fontFamily: "'Cinzel', serif",
};

  const handleExitClick = () => {
    setIsInInventory(false);
  };

  const itemdesc = document.getElementById("ItemDesc");
  
  return (
    <div style={barStyle}>
        <div id="ItemDesc" style={boxStyle}>
        </div>
        {inventory.map((element, index) => (
            <div
                key={index}
                onMouseEnter={() => {
                    setHoveredItem(element);
                    if (itemdesc) {
                        itemdesc.textContent = element.desc; // Change le contenu texte
                    }
                }}
                onMouseLeave={() => {
                    setHoveredItem(null);
                    if (itemdesc) {
                        itemdesc.textContent = ""; // Réinitialise le texte
                    }
                }}
                style={{ position: "relative", display: "inline-block" }}
            >
                <h1 style={linkStyle}  >
                    <div style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}  onClick={(e) => {e.preventDefault(); e.stopPropagation(); handleItem(element);}}>{element.name}</div>
                </h1>
            </div>
        ))}
      <a
        href="#exit"
        style={linkStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onClick={handleExitClick}
      >
        exit
      </a>
    </div>
  );
};
