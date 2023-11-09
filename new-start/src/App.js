import Document_Section from "./components/Document_Section/Document_Section";
import Query_Section from "./components/Query_Section/Query_Section";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import "./App.css"

function App() {
  return (
  <>
 

  <div className="row m-0"> 

    <div className="col-2 p-0 side" style={{width: '282px'}}>   <SideNavBar /></div> 
    <div className="col-7  p-0 m-0">   <Document_Section /></div> 
      <div className="col-auto p-0 m-2" >  <Query_Section /></div> 
</div>
  </>
  );
}

export default App;
