import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import{Link} from 'react-router-dom'
import Data from '../../api/Mideast'
import sdata from '../../api/SportNews'
import WorNews from '../WorldNews/WorNews'
import Sport from '../SportNews/Sport'
function All() {
    const [news,setNews]= useState(Data.slice(0,4));

    return (
        <div className="container bg-white p-3" style={{ boxShadow: '0 1px 5px 0 rgb(165, 165, 165)'}}>
            <div className="row" dir="rtl">
                <div className="col-md-12">
                    
                 <div className="row text-right" >
                 <div className="col-md-4">   <h3 className="" > <span className="title-mark mt-1"></span> شرق أوسط  <span className="fa fa-angle-left mr-1"></span></h3> <hr/>
                 
                {news.map((ne1)=>{
                    if(ne1.id===1){
                        return(
                          <div className="col-md-12 bac-news  my-4 p-0 border-left" key={ne1.id} >
                      
                      <Link to={"/News/"+ne1.id}>
                       <img className="w-100 img-mid" src={ne1.src}  alt='new1'/>
                       <div className="new-text ">
                           <p>{ne1.text}</p>
                       </div>
                       <div className="new-type"><p>{ne1.type}</p><br/>
                       
                       </div>
                       
                       </Link>
                        </div>
                        )
                    }
                     return(
                         <Link className="text-dark"  style={{textDecoration:'none'}} to={"/Mideast/" + ne1.id}>
                            <div className="row mt-4" key={ne1.id}>
                                                    
                                                
                                                <div className="col-sm-12 p-0 " style={{minHeight:'3rem'}}>
   
                                                    <p className="pr-3" style={{fontSize:'0.8rem'}}>{ne1.text}</p>
                                                    </div>
                                                    
                                                </div> <hr/>
                         </Link>
                        
                     )
                })}
                 
                 
                 </div>
                    <div className="col-md-4">   <h3 className="" > <span className="title-mark mt-1"></span> عالم  <span className="fa fa-angle-left mr-1"></span></h3> <hr/>
                    <WorNews/>
                    
                    </div>
                    <div className="col-md-4">   <h3 className="" > <span className="title-mark mt-1"></span>  رياضة  <span className="fa fa-angle-left mr-1"></span></h3> <hr/>
                    <Sport/></div>
                 </div>
                </div>
               
            </div >
        </div>
    )
}

export default All
