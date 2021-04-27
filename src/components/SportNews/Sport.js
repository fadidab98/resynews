import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Data from '../../api/SportNews'
import {Link} from 'react-router-dom'
function Sport() {
    const [news,setNews] = useState(Data);
    return (
        <div>
             {news.map((ne1)=>{
                 if(ne1.id===1){
                    return(
                        
                      <div className="col-md-12 bac-news  my-2 p-0" key={ne1.id} >
                  
                  <Link to={"/sport-news/"+ne1.id}>
                   <img className="img-fluid p-0 m-0 " src={ne1.src} alt='new1' style={{height:'10rem'}}/>
                   <div className="new-text ">
                       <p>{ne1.text}</p>
                   </div>
                   <div className="new-type"><p>{ne1.type}</p></div>
                   </Link>
                    </div>
                    )
                }
                     return(
                         <div><Link className="text-dark"  style={{textDecoration:'none'}} to={"/sport-news/"+ne1.id}>
                             <div className="row mid-row border-left " key={ne1.id} >
                             
                     <div className="col-md-5"><img className="w-100 m-auto img-News3"  src={ne1.src}/></div>
                     <div className="col-md-7"> <div className="d-flex m-0 p-0"><span className="title-mark mt-1 ml-1 text-dark"></span><p>{ne1.type}</p></div> <p>{`${ne1.text.substring(0,20)}...`}</p>
                     <div className="d-flex p-0 text-dark "><i class="fa fa-clock-o p-0 m-0 mt-2 text-right  text-dark fa-clock-o-Break" aria-hidden="true"></i><p className="text-dark mr-2 ">{ne1.time}</p></div>
</div>
                
                 </div> <hr/>
                       </Link>  </div>
                     )
                })}
        </div>
    )
}

export default Sport
