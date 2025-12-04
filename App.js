    import React from "react";
    import ReactDOM from "react-dom/client";

   

    const Header=()=>{
      return(
         <div className="headerr">
            <div className="logo-can">
               <img className="logo" src="https://dynamic.brandcrowd.com/asset/logo/ee6e743f-c9e4-4ec3-b066-c11ff7935a77/logo-search-grid-2x?logoTemplateVersion=2&v=638897551182400000&layout=auto-1-1"/>
            </div>
            <div className="nav-item">
               <ul>
                  <li>Home</li>
                  <li> About</li>
                  <li> Card</li>
                  <li> contact</li>
               </ul>
            </div>
         </div>
      )
    }
   
   const Card=()=>{
      return(
         <div className="card">
            <img className="card-img" alt="restaurants img" src="https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/1:1/pass/Untitled%2520design%2520(14).png"></img>
            <h1> Om Sai</h1>

            <h4>Restraint , north india</h4>
            
            <h4> rat:🌟🌟🌟</h4>
            <h4> divilary:30 min</h4>
         </div>
      )
   }
    const Body=()=>{
      return (
         <div className="res-container">
            <div className="res-ser">search</div>
            <div className="res-card">
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>

               
            </div>
         </div>
      )
    }

   const AppLayout=()=>{
      return(
         <div className="app">
         <Header/>
         <Body/>
         </div>
      )
   }
    const root=ReactDOM.createRoot(document.getElementById('root'));
   
    root.render(<AppLayout/>);