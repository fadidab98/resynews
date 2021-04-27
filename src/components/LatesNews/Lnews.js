import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import data from '../../api/news'
import {Link} from 'react-router-dom'
import sdata from '../../api/SportNews'



function Lnews() {
    const [news,setNews]=useState(data);
    return (
        <div className="container-fluid p-5" >
          <div className="title" direction="rtl">
             <Link className="text-dark" style={{textDecoration:'none'}} to='/Last-News'> <h3 className="" > <span className="title-mark mt-1"></span> آخر الاخبار <span className="fa fa-angle-left mr-1"></span></h3>
             </Link>
          </div>
     <div className="row">
         <div className="col-md-9">
         <div class="row row-cols-1 row-cols-md-2">
            {news.map((ne1)=>{
                return(
                   <div class="col-lg-4 mb-4 ">
 <Link to={'/Last-News/' + ne1.id} style={{textDecoration:'none'}}>
    <div class="card p-0   " >
                    
                    <div class="card-image"><img src={ne1.src} className="w-100 img-News1 mb-2"/></div>
                    <div class="card-body">
                      
                      <p class="card-text text-right">
                      {`${ne1.text.substring(0,40)}...`}
                      </p>
                      <div className="d-flex   p-0  mt-3 border-top " ><i class="fa fa-clock-o  fa-clock-o-Break mr-1" aria-hidden="true"></i><p className="m-2 p-0 ">{ne1.time}</p></div>
                    </div>
                   
                  </div> </Link> </div>
                )
            })}
            </div>
            
            
         </div>
         <div className="col-md-3 text-right"><h3><span className="title-mark " ></span>  زوارنا يتصفحون الأن  <span className="fa fa-angle-left mr-1"></span></h3> <hr/>
         {sdata.map(ne1=>{
                     return(
                        <div><Link className="text-dark" to={"/sport-news/"+ne1.id}>
                            <div className="row mid-row border-left " key={ne1.id} >
                            
                    <div className="col-md-5"><img className="w-100 img-News mb-2" src={ne1.src}/></div>
                    <div className="col-md-7"> <div className="d-flex m-0 p-0"><span className="title-mark mt-1 ml-1 text-dark"></span><p>{ne1.type}</p></div> {`${ne1.text.substring(0,20)}...`}</div>
                </div> <hr/>
                      </Link>  </div>
                    )
                })}
       
         </div>


     </div>
            
        </div>
    )
}

export default Lnews
