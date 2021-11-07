import React from 'react'

const Home = () => {
    return (
      <div style ={{ background:"#E1F2F1", height: "100vh"}}>
        <div class="main-container" style ={{ display: "flex", flexDirection: "row", margin:  "10px"}}>
            <div class="left-container" style={{flex: "0 1 50%"}}>
              <div style ={{marginTop: "20%", marginLeft: "10%"}}>
                <h1 style={{fontFamily:"'Quicksand', sans-serif", fontSize:  "60px"}}><b>Find your essay</b></h1>
                <p style={{fontFamily:"'Quicksand', sans-serif", fontSize:  "30px"}}>Easy access to all of your essays, in addition to hundreds of professional pieces</p>
                <button style = {{background: "#FFF", padding: "10px 22px", color: "#000", outline: "none", border: "none", borderRadius: "20px"}}>Sign up!</button>
              </div>
            </div>
            <div class="right-container" style={{flex: "0 1 50%"}} >Right Container</div>
        </div>
      </div>
    );
  };
  
  export default Home;