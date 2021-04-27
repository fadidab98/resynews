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

export class index extends Component {



    
    state={
        loading: true,
        neews:{}
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
       
        return (
            <div className="container-fluid text-right mt-5" dir="rtl">
                <div className="row container " >
                    <div className="col-xs-12 col-md-8 col-lg-8">
                        <h3>{neews.text}</h3>
                        <div className="d-flex"><i class="fa fa-clock-o mt-4" aria-hidden="true"></i><p className="p-3">{neews.time}</p></div>
                        <div className="d-flex justify-content-between"><div><h5>{neews.auther}</h5></div> <div><section className="mt-2 ml-2 ">
     
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
                    <div className="w-100 div-de"><img className="w-100 img-de"  src={neews.src}/><div className="text-de"><h3>{neews.fde}</h3></div></div>
                    <h3 className="mt-5 ">{neews.bigdesc}</h3><hr/>
                    <div className="">
                        <div className="title">
                            <h6>أخبار ذات صلة</h6>
                        </div>
                        <div className="row mt-3 mb-5">
                          
                        <div className="col-xs-12">
                        {News.map((New)=>{
                                    return(
                                        <>
                                        
                                        <Link onClick= {refreshPage}  refresh="true" className="text-dark" style={{textDecoration:'none'}}  to={"/Last-News/"+New.id}>
                                                <div className="row mt-4" key={New.id}>
                                                    
                                                    <div className="col-sm-4"><img className="w-100 img-News" src={New.src} /></div>
                                                
                                                <div className="col-sm-8 ">
                                                  <div className="border-bottom  "><h4> <span className="title-mark "></span> {New.type} </h4></div>  
                                                    {New.text}
                                                    <div className="d-flex   p-0  " ><i class="fa fa-clock-o  fa-clock-o-Break mr-1" aria-hidden="true"></i><p className="m-2 p-0 ">{New.time}</p></div>
                                                    </div>
                                                    
                                                </div>
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
                    <div className="col-sm-4 col-lg-4 pt-5"> 
                    
                        <div className="mt-5 mb-3 bg-danger text-white" style={{ fontWeight:'500', width:'auto', fontSize:'25px'}}><span className="bg-white span-break mr-3 ml-2">|</span> الأخبار العاجلة   </div>
                        <div className="Breaking-News-div">
                   {BreakNews.map((BreakNew)=>{
                       return(
                                         <div  key={BreakNew.id}>

                                        <div className="d-flex  bg-danger p-0 text-white mt-3"><i class="fa fa-clock-o  fa-clock-o-Break" aria-hidden="true"></i><p className="m-2 p-0 ">{BreakNew.time}</p></div>
                                         <div className="bg-light mt-0"> {BreakNew.text}</div>
                    
                                        </div>
                                        )
                   })}
                    </div>
                    <div className="chose">
                    <h3 className="" > <span className="title-mark mt-1"></span>  اخترنا لك  <span className="fa fa-angle-left mr-1"></span></h3> <hr/>
                    {sdata.map(ne1=>{
                     return(
                        <div><Link className="text-dark" to={"/sport-news/"+ne1.id} >
                            <div className="row mid-row border-left " key={ne1.id} >
                            
                    <div className="col-md-5"><img className="w-100 img-News3"  src={ne1.src}/></div>
                    <div className="col-md-7"> <div className="d-flex m-0 p-0"><span className="title-mark mt-1 ml-1 text-dark"></span><p>{ne1.type}</p></div> {`${ne1.text.substring(0,20)}...`}</div>
                </div> <hr/>
                      </Link>  </div>
                    )
                })}
                    </div>
                    </div>
                </div>
                
               
                <Footer/>
            </div>
        )
    }
}

export default index
