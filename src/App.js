
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import OnlineNews from './components/OnlineNews/index';
import Lnews from './components/Lnews/Lnews';
import WorldNews from './components/Wnews/WorldNews';
import Mideast from './components/Mideast/Mideast';
import Snews from './components/Snews/Snews';
import OnlineLnews from './components/OnlineLnews/index';
import OnlineMidNews from './components/OnlineMidNews/index';
import OnlineWorldNews from './components/OnlineworldNews/index';
import OnlineSportNews from './components/OnlineSportNews/index';
import {BrowserRouter as Router , Switch , Route , Link,NavLink } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap'
function App() {
  return (
    <Router>
      <header className="">
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand  dir="ltr" ><Link className="text-white" style={{textDecoration: 'none'}} to="/"><h2 >Sy <span className="namespan ">News</span> عربية</h2></Link></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
<ReactBootStrap.Nav className="m-auto">
<ReactBootStrap.Nav.Link className="active" ><NavLink className="Link-navbar  active" to="/">الرئيسية</NavLink></ReactBootStrap.Nav.Link>
{/* <Link className="text-dark link-dec" to="/Lnews"> */}
      <ReactBootStrap.NavDropdown  title="الأخبار" id="collasible-nav-dropdown" >
        <ReactBootStrap.NavDropdown.Item   className="text-right Link-nav1 p-0 mt-1"><Link className="Link-nav text-dark p-0 pr-3" to="/Last-News">آخر الأخبار</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2" className="text-right p-0 mt-1 pr-3">الأكثر قراءة</ReactBootStrap.NavDropdown.Item>
         </ReactBootStrap.NavDropdown>
      <ReactBootStrap.Nav.Link > <Link className="Link-navbar" to="/Mideast" style={{textDecoration: 'none'}}>شرق أوسط</Link>   </ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="عالم" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item   className="text-right p-0"><Link  to="/world-news" className="Link-nav text-dark pr-3 mb-1 mt-1" >آخر الأخبار</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2" className="text-right p-0 pr-3 mt-1">مستجدات كورونا </ReactBootStrap.NavDropdown.Item>
    
  
      </ReactBootStrap.NavDropdown>
      
        
      <ReactBootStrap.NavDropdown title="رياضة" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item   className="text-right p-0"> <Link className="Link-navbar text-dark pr-3 mt-2" to="/sport-news">آخر الأخبار</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2"  className="text-right p-0 pr-3 mt-1">كرة قدم </ReactBootStrap.NavDropdown.Item>
        
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.Nav.Link ><Link className="Link-navbar">اقتصاد</Link> </ReactBootStrap.Nav.Link>
      
      </ReactBootStrap.Nav>
    
      <section className="mt-2 ml-2 ">
     
     <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
       ><i className="fab fa-facebook-f"></i
     ></a>

   
     <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
       ><i className="fab fa-twitter"></i
     ></a>

   
     <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
       ><i className="fab fa-google"></i
     ></a>

 
     <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
       ><i className="fab fa-instagram"></i
     ></a>

     
     <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
       ><i className="fab fa-linkedin-in"></i
     ></a>

 
     <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
   </section>
    </ReactBootStrap.Navbar.Collapse>
  

</ReactBootStrap.Navbar>


  </header> 
  
  
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/News/:id" component={OnlineNews} exact/>
        <Route path="/Last-News" component={Lnews} exact/>
        <Route path="/Mideast" component={Mideast} exact/>
        <Route path="/world-news" component={WorldNews} exact/>
        <Route path="/sport-news" component={Snews} exact/>
        <Route path="/Last-News/:id" component={OnlineLnews} exact/>
        <Route path="/Mideast/:id" component={OnlineMidNews} exact/>
        <Route path="/sport-news/:id" component={OnlineSportNews} exact/>
        <Route path="/world-news/:id" component={OnlineWorldNews} exact/>
      </Switch>
    </Router>
    

   );
}

export default App;




{/* <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand text-white  " dir="ltr"><div><h2>Sy <span className="namespan ">News</span> عربية</h2></div></a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div id="navbarNavAltMarkup">

    <form className="d-flex input-group w-auto "  >
      <input
        type="search"
        class="form-control"
        placeholder="ابحث عن اخر الاخبار"
        aria-label="Search"
      />
      <button
        class="btn btn-outline-light"
        type="button"
        data-mdb-ripple-color="dark"
      >
        Search
      </button>
    </form>
    </div>
    
  </div>
  
</nav>
<div className="after-fdiv d-block" >
   <h3>hiii</h3>

  </div>
</header>  */}