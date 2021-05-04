
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import news from '../../api/WorldNews'
import BreakNews from '../../api/BreakinNews'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import sportnews from '../../api/SportNews'




export function Snews () {
    const [imnew,setImnew]= useState(sportnews.slice(0,2));
    const [news1,setNews]=useState(news.slice(0,100));
    const [pageNumber,setPageNumber] = useState(0);

    const  newsPerPage= 6;
    const pagesVisited = pageNumber * newsPerPage;
    const pageCount = Math.ceil(news1.length / newsPerPage);
    const changePage =({selected})=>{
        setPageNumber(selected);
    };
    
     const displayNews = news1.slice(pagesVisited, pagesVisited + newsPerPage).map(ne1=>{
        return(
            <div className="flex-lnew p-0 mb-3">
<Link to={'/world-news/' + ne1.id} style={{textDecoration:'none'}}>

<div class="p-0 bac-news h-100" >

                              <img class="w-100" src={ne1.src}   alt="Card image cap" style={{height:'35vh'}}/>
                            <div className="new-text text-right"><h6>{ne1.text}</h6></div>
                            <div className="new-type">{ne1.type}</div>
                            
                      
                          
                      
                            </div>

</Link> </div>
         )
     })
 
    return ( <> 
       <div className="container mt-4" >
         
         <div className="row  ">
         
             <div className="col-md-9 col-sm-12" >
             <div className="title " direction="rtl" style={{ boxShadow: '0 1px 5px 0 rgb(165, 165, 165)'}}  >
                  <div className=" d-flex" > <span className="title-mark1 mt-1 "></span><p className="pt-1">عالم</p>  </div>
                  <div class="d-flex justify-content-around flex-lnews  " >
                {displayNews}
                </div>
                <ReactPaginate
            previousLabel={">>"}
            nextLabel={"<<"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
              </div>
             
                
                
             </div>
             <div className="col-md-3 col-sm-12 text-right "> 
                            <div className="row ">
                            <div className="title pt-1 mb-2 bg-white" style={{ boxShadow: '0 1px 5px 0 rgb(165, 165, 165)'}}direction="rtl">
                            <div className=" d-flex" > <span className="title-mark1 mt-1 "></span><p className="pt-1">آخر الأخبار</p>  </div>       
                                       {imnew.map((New)=>{
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
                      
                        </div></div>
    
    
         </div>
                
            </div>
        <Footer/>
        </>
    )
}
export default Snews
