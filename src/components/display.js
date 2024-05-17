import "../assets/css/display.css";


function Display({triggerPreview}) {
    // const handleScrollToTop=()=>{
    //     window.scrollTo({top:0,left:0,behavior:"smooth"})
    // }
    return ( <>
    <div className="display-section wrapper">
        <h2 className="title">Nexigo</h2>
        <span className="description mt-2">2X faster and brighter</span>
        <button className="button" onClick={triggerPreview}>Try me!</button>
        {/* <button className="back-button" onClick={handleScrollToTop}>Top</button> */}
    </div>
    
    
    
    </> );
}

export default Display;