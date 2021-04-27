import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import{Link} from 'react-router-dom'
import Data from '../../api/Mideast'
import sdata from '../../api/SportNews'
import WorNews from '../WorldNews/WorNews'
import Sport from '../SportNews/Sport'
function All() {
    const [news,setNews] = useState(Data);
    return (
        <div className="container-fluid">
            <div className="row" dir="rtl">
                <div className="col-md-9">
                    
                 <div className="row text-right" >
                 <div className="col-md-4">   <h3 className="" > <span className="title-mark mt-1"></span> شرق أوسط  <span className="fa fa-angle-left mr-1"></span></h3> <hr/>
                 
                {news.map((ne1)=>{
                    if(ne1.id===1){
                        return(
                          <div className="col-md-12 bac-news  my-2 p-0 border-left" key={ne1.id} >
                      
                      <Link to={"/News/"+ne1.id}>
                       <img className="w-100 img-mid" src={ne1.src} style={{height:'10rem'}} alt='new1' />
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
                             <div className="row mid-row border-left " key={ne1.id} >
                     <div className="col-md-5"><img  className="w-100 m-auto img-News3" src={ne1.src}/></div>
                     <div className="col-md-7"><div className="d-flex m-0 p-0"><span className="title-mark mt-1 ml-1 text-dark"></span><p>{ne1.type}</p></div><p>{`${ne1.text.substring(0,22)}...`}</p>
                     <div className="d-flex p-0 text-dark "><i class="fa fa-clock-o p-0 m-0 mt-2 text-right  text-dark fa-clock-o-Break" aria-hidden="true"></i><p className="text-dark mr-2 ">{ne1.time}</p></div>

                     

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
                <div className="col-md-3 text-right " ><h3 className="" > <span className="title-mark mt-1"></span>  اخترنا لك  <span className="fa fa-angle-left mr-1"></span></h3> <hr/>
                {sdata.map(ne1=>{
                     return(
                        <div><Link className="text-dark" to={"/sport-news/"+ne1.id}>
                            <div className="row mid-row border-left " key={ne1.id} >
                            
                    <div className="col-md-5"><img className="w-100 m-auto img-News3"  src={ne1.src}/></div>
                    <div className="col-md-7"> <div className="d-flex m-0 p-0"><span className="title-mark mt-1 ml-1 text-dark"></span><p>{ne1.type}</p></div> {`${ne1.text.substring(0,20)}...`}
                    
                    </div>
                </div> <hr/>
                      </Link>  </div>
                    )
                })}
                
                </div>
            </div >
        </div>
    )
}

export default All
