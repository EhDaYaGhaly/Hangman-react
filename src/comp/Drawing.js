const Base ={
    height: "8px",
    width: "200px",
    background: "black"
}
const Stem = {
    height: "400px",
    width: "8px",
    background: "black",
    alignSelf: "center"
}
const Vline = {
    height: "60px",
    width: "8px",
    background: "black",
    position:"absolute",
    left:"250px"

}
const Hzline = {
        height: "8px",
        width: "150px",
        background: "black",
        position:"absolute",
        left:"100px"
}
//////////////////////////////////////////
const Head = ({
    height: "50px",
    aspectRatio :"1",
    position:"absolute",
    borderRadius: "100%",
    border: "10px solid black",
    top: "60px",
    left:"220px"
})
const Body = {
    height: "100px",
    width: "8px",
    background: "black",
    position:"absolute",
    top: "120px",
    left:"250px"
}
const Rightarm = {
    height: "70px",
    width: "8px",
    background: "black",
    position:"absolute",
    top: "125px",
    left:"275px",
    rotate:"-45deg",
    transfromOrigin:"right top"

}
const LeftArm = {
    height: "70px",
    width: "8px",
    background: "black",
    position:"absolute",
    top: "125px",
    left:"225px",
    rotate:"45deg",
    transfromOrigin:"left bottom"

}
const Rightleg = {
    height: "70px",
    width: "8px",
    background: "black",
    position:"absolute",
    top: "205px",
    left:"275px",
    rotate:"-45deg",
    transfromOrigin:"right top"

}
const Leftleg = {
    height: "70px",
    width: "8px",
    background: "black",
    position:"absolute",
    top: "205px",
    left:"225px",
    rotate:"45deg",
    transfromOrigin:"left bottom"

}
const Parts = [Head , Body, Rightarm , LeftArm ,Rightleg ,Leftleg]

function Drawing(prop){
    return (
        <div style = {
            {   position: "relative",
                display:"flex",
                flexDirection:"column"
        }}
        >

            <div style = {Vline}/>
            <div style = {Hzline}/>
            <div style = {Stem}/>
            <div style = {Base}/>
           { Parts.slice(0,prop.Guesses).map((i)=>(<div style = {i}></div>))}
            {/* <div style = {Head}/>
            <div style = {Body}/>
            <div style = {Rightarm}/>
            <div style = {LeftArm}/>
            <div style = {Leftleg}/>
            <div style = {Rightleg}/> */}




        </div>
    )

}
export default Drawing