import React, { Component } from 'react'
import Loading from '../Loading/Loading'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Footer from '../Footer/Footer'
import { getById } from "../../api/getNews";
import News from '../../api/news'
import BreakNews from '../../api/BreakinNews';
import sdata from '../../api/SportNews';
import {Link} from 'react-router-dom'
import Download from '../Download/Download'
export class index extends Component {



    
    state={
        loading: true,
        neews:{},
        new1: News.slice(0,4)
    };
 
    componentDidMount(){
        const id = this.props.match.params.id;
        getById(parseInt(id))
        .then((neews) => {
            this.setState({
                neews,
                loading: false
            });
        })
        
    }
    render() {
        function refreshPage() {
            setTimeout(()=>{
                window.location.reload(false);
            }, 500);
            console.log('page to reload')
        }



        if(this.state.loading)
        return <Loading/>
        const neews = this.state.neews;
       
        return (<>
            <div className="container text-right mt-5 p-0" dir="rtl">
                <div className="row container-fluid p-0 pr-2 " >
                    <div className="col-xs-12 col-md-8 col-lg-9 ">
                        
                       <div className="bg-white p-1" style={{ boxShadow: '0 1px 5px 0 rgb(165, 165, 165)'}} > <h3>{neews.text}</h3>
                        <div className="d-flex"><i class="fa fa-clock-o mt-4" aria-hidden="true"></i><p className="p-3">{neews.time}</p></div>
                        <div className="d-flex justify-content-between"><div className="mt-2 ml-2 "><h5>{neews.auther}</h5></div> <div><section className="mt-2 ml-2 ">
     
     <a className="btn btn-outline-light btn-floating m-1 bg-primary" href="#!" role="button"
       ><i className="fab fa-facebook-f"></i
     ></a>

   
     <a className="btn btn-outline-light btn-floating m-1 bg-info" href="#!" role="button"
       ><i className="fab fa-twitter"></i
     ></a>

   
     <a className="btn btn-outline-light btn-floating m-1 bg-success" href="#!" role="button"
       ><i className="fab fa-whatsapp "></i
     ></a>
     <a className="btn btn-outline-light btn-floating m-1 bg-secondary" href="#!" role="button"
       ><i className="fas fa-share"></i
     ></a>

 
    

   
  
   </section></div>
   
   
                    </div>         
                    <div className="w-100 div-de"><img className="w-100 img-de"  src={neews.src}/><div className="text-de"><h5>{neews.fde}</h5></div></div>
                    <h4 className="mt-5 ">{neews.bigdesc}</h4></div>
                    <Download />
                    <div className="bg-white p-3 mb-4 m-0" style={{ boxShadow: '0 1px 5px 0 rgb(165, 165, 165)'}}>
                        <div className="title">
                        <div className=" d-flex" > <span className="title-mark1 mt-1 "></span><p className="pt-1">آخبار ذات صلة </p>  </div>   
                        </div>
                        <div className="row p-0 m-0">
                          
                        <div className="col-xs-12">
                        {this.state.new1.map((New)=>{
                                    return(
                                        <>
                                        
                                        <Link onClick= {refreshPage}  refresh="true" className="text-dark" style={{textDecoration:'none'}}  to={"/Last-News/"+New.id}>
                                                <div className="row mt-4" key={New.id}>
                                                    
                                                    <div className="col-lg-4 col-md-5 col-sm-12"><img className="w-100 img-News" src={New.src} /></div>
                                                
                                                <div className="col-lg-8 col-md-7 col-sm-12 ">
                                                <div className=" d-flex " > <span className="title-mark1 mt-1 "></span><p className="pt-1">{New.type}  </p>  </div> 
                                                    {New.text}
                                                    <div className="d-flex   p-0  " ><i class="fa fa-clock-o  fa-clock-o-Break mr-1" aria-hidden="true"></i><p className="m-2 p-0 ">{New.time}</p></div>
                                                    </div>
                                                    
                                                </div><hr/>
                                                </Link>
                                                
                                                
                                                {/* <img className="w-100 mt-2 " height="130px"   src={New.src}/> */}
                                               
                                            {/* div className="col-xs-6  col-md-3 p-4">{New.text}</div> */}
                                       
                                        </>
                                        )
                                })}
                            </div>

                        </div>
                    </div>

                    </div>
                    <div className=" col-lg-3 col-md-4  col-sm-12 "> 
                    
                    <div className="row ">
                            <div className="title pt-1 mb-2 bg-white" style={{ boxShadow: '0 1px 5px 0 rgb(165, 165, 165)'}}direction="rtl">
                            <div className=" d-flex" > <span className="title-mark1 mt-1 "></span><p className="pt-1">آخر الأخبار</p>  </div>       
                                       {this.state.new1.map((New)=>{
                           return(
                                             <div className="col-12 "  key={New.id}>
                                                 <div className="bac-news">
                                                     <img src={New.src}/>
                                                     <div className="new-type1  d-flex  p-0 text-white "><i class="fa fa-clock-o m-0 fa-clock-o-Break pt-2" ></i><p className=" pr-1 pt-1 ">{New.time}</p></div>
                                                 </div>
                                                 <div className="text-body pr-1">
                                                     <p>{New.text}</p>
                                                 </div>
                                             <hr className="p-0"/>
                                            
                        
                                            </div>
                                            )
                       })}
              </div>
                      
                        </div>
                    
                    </div>
                </div>
                
               
              
            </div>
            <Footer/>
            </>
        )
    }
}

export default index
