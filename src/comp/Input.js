import styles from "./Input.module.css";


const container = {
    maxWidth: "100vw",
    display: "flex",
    justifyContent: "center",
    gap: "5px",
    flexWrap: "wrap"
}

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function Input(props) {
    
    return (<div style={container
    }>
        {alphabet.map((letter) => (
            <button 
            onClick={() =>{props.add(letter)}}
            className={styles.btn} key={letter} 
            disabled = {props.Letters.includes(letter)? true : false}
            
            >{letter}
            </button>
        ))}
        
    </div>)
}
export default Input