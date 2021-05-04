import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import data from '../../api/news'
import {Link} from 'react-router-dom'
import sdata from '../../api/SportNews'
import BreakNews from '../../api/BreakinNews'


function Lnews() {
    const [news,setNews]=useState(data.slice(0,6));
    const [BreakNews1,setBreakNews]=useState(BreakNews.slice(0,3));

    return (
        <div className="container " >
         
        <div className="row  ">
        
            <div className="col-md-9 col-xs-12 m-0 p-0 mx-0 p-2" >
            <div className="title " direction="rtl" style={{ boxShadow: '0 1px 5px 0 rgb(165, 165, 165)'}}  >
            <div className=" d-flex" > <span className="title-mark1 mt-1 "></span><p className="pt-1">آخر الأخبار</p>  </div>       
                 <div class="d-flex justify-content-around flex-lnews " >
               {news.map((ne1)=>{
                   return(
                      <div className="flex-lnew p-0 pb-0 px-0 m-0  mb-3">
    <Link to={'/Last-News/' + ne1.id} style={{textDecoration:'none'}}>
   
      <div class="p-0 bac-news h-100  " >
     
                                        <img class="w-100 " src={ne1.src}   alt="Card image cap" />
                                      <div className="new-text text-right"><h6>{ne1.text}</h6></div>
                                      <div className="new-type">{ne1.type}</div>
                                      
                                
                                    
                                
                                      </div>
   
   </Link> </div>
                   )
               })}
               </div>
             </div>
            
               
               
            </div>
            <div className="col-md-3 text-right mt-2 "> 
                           <div className="row ">
                           <div className="title pt-1 mb-2 bg-white" style={{ boxShadow: '0 1px 5px 0 rgb(165, 165, 165)'}}direction="rtl">
            <div className=" d-flex" > <span className="title-mark1 mt-1 "></span><p className="pt-1">آخر الأخبار</p>  </div>       
                 <div className="Breaking-News-div1">
                      {BreakNews1.map((BreakNew)=>{
                          return(
                                            <div  key={BreakNew.id}>
   
                                           <div className="d-flex  bg-danger p-0 text-white mt-3"><i class="fa fa-clock-o  fa-clock-o-Break" aria-hidden="true"></i><p className="m-2 p-0 ">{BreakNew.time}</p></div>
                                            <div className="bg-light mt-0"> {BreakNew.text}</div>
                       
                                           </div>
                                           )
                      })}
                       </div>
             </div>
                     
                       </div></div>
   
   
        </div>
               
           </div>
    )
}

export default Lnews
/*   <div className="Breaking-News-div1">
                      {BreakNews.map((BreakNew)=>{
                          return(
                                            <div  key={BreakNew.id}>
   
                                           <div className="d-flex  bg-danger p-0 text-white mt-3"><i class="fa fa-clock-o  fa-clock-o-Break" aria-hidden="true"></i><p className="m-2 p-0 ">{BreakNew.time}</p></div>
                                            <div className="bg-light mt-0"> {BreakNew.text}</div>
                       
                                           </div>
                                           )
                      })}
                       </div> */