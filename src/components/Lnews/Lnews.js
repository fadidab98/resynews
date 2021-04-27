
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import news from '../../api/news'
import BreakNews from '../../api/BreakinNews'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'


export class Lnews extends Component {
    render() {
 
    return (<>
        <div className="container-fluid p-5" >
          <div className="title" direction="rtl">
              <h3 className="" > <span className="title-mark mt-1"></span> آخر الاخبار <span className="fa fa-angle-left mr-1"></span></h3>

          </div>
     <div className="row">
         <div className="col-md-8">
            <div className="row justify-content-center">
            {news.map((ne1)=>{
                  if(ne1.id===1){
                      return(
                        <div className="col-md-12 bac-news  mt-5 p-0" key={ne1.id} >
                    
                    <Link to={"/News/"+ne1.id}>
                     <img className="img-fluid p-0 m-0 " src={ne1.src} alt='new1'/>
                     <div className="new-text ">
                         <p>{ne1.text}</p>
                     </div>
                     <div className="new-type"><p>{ne1.type}</p></div>
                     </Link>
                      </div> 
                      )
                  }
                return(
                    <div class="col-lg-4 mb-4 mt-4">
 <Link to={'/Last-News/' + ne1.id} style={{textDecoration:'none'}}>
    <div class="card p-0  " style={{boxShadow:' 6px  0px 10px  0px rgba(201, 201, 201, 0.829)'}} >
                    
                    <div class="card-image"><img src={ne1.src} width="100%" height="150px"/></div>
                    <div class="card-body">
                      
                      <p class="card-text text-right">
                      {`${ne1.text.substring(0,55)}...`}
                      </p>
                      <div className="d-flex   p-0  mt-3 border-top " ><i class="fa fa-clock-o  fa-clock-o-Break mr-1" aria-hidden="true"></i><p className="m-2 p-0 ">{ne1.time}</p></div>
                    </div>
                   
                  </div> </Link> </div>
                )
            })}
            </div>
            
            
         </div>
         <div className="col-md-4 text-right">  <div className="mt-5 mb-3 bg-danger text-white" style={{ fontWeight:'500', width:'auto', fontSize:'25px'}}><span className="bg-white span-break mr-3 ml-2">|</span> الأخبار العاجلة   </div>
                        <div className="Breaking-News-div">
                   {BreakNews.map((BreakNew)=>{
                       return(
                                         <div  key={BreakNew.id}>

                                        <div className="d-flex  bg-danger p-0 text-white mt-3"><i class="fa fa-clock-o  fa-clock-o-Break" aria-hidden="true"></i><p className="m-2 p-0 ">{BreakNew.time}</p></div>
                                         <div className="bg-light mt-0"> {BreakNew.text}</div>
                    
                                        </div>
                                        )
                   })}
                    </div></div>


     </div>
            
        </div>
        <Footer/>
        </>
    )
}}
export default Lnews
