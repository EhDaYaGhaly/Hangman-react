const wordst = {
    fontSize : "3rem",
    fontWeight :"600",
    borderBottom: "5px solid black",
    margin: "7px",
    width: "50px",
    padding: "0px",
}





function Word(props){
    return(<div style = {{display: "flex"}}
       
    >{String(props.Word).split("").map((letter) =>(
        <span style = {wordst}>
           <span style  = {
            {
                visibility: (props.Letters.includes(letter) || props.lost)? "visible" : "hidden",
                color:(props.Letters.includes(letter)? "black" :"red")
            }
            }>{letter}</span> 
            </span>
    ))}</div>)
}
export default Word