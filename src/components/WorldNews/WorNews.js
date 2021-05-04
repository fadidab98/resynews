import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Data from '../../api/WorldNews'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
function WorNews() {
    const [news,setNews]= useState(Data.slice(0,4));

    return (<>
        
        <div>
            {news.map((ne1)=>{
                 if(ne1.id===1){
                    return(
                      <div className="col-md-12 bac-news  my-4 p-0  border-left" key={ne1.id} >
                  
                  <Link  to={"/world-news/"+ne1.id}>
                   <img className="img-fluid p-0 m-0 w-100 " src={ne1.src} alt='new1' />
                   <div className="new-text ">
                       <p>{ne1.text}</p>
                   </div>
                   <div className="new-type "><p>{ne1.type}</p></div>
                   
                   </Link>
                    </div>
                    )
                }
                     return(
                         <div>
                              <Link className="text-dark" style={{textDecoration:'none'}} to={"/world-news/"+ne1.id}>
                              <div className="row mt-4" key={ne1.id}>
                                                    
                                                
                                                <div className="col-sm-12 p-0 "  style={{minHeight:'3rem'}}>
                                                  <p className="pr-3"  style={{fontSize:'0.8rem'}} > {ne1.text}</p> 
                                                    </div>
                                                    
                                                </div>  <hr/></Link>
                         </div>
                     )
                })}
        </div>
        
        
        </>
    )
}

export default WorNews
