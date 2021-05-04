
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import news from '../../api/news'
import BreakNews from '../../api/BreakinNews'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
import ReactPaginate from 'react-paginate';


export function Lnews () {
    const [imnew,setImnew]= useState(news.slice(0,2));

    const [news1,setNews]=useState(news.slice(0,100));
    const [pageNumber,setPageNumber] = useState(0);

    const  newsPerPage= 4;
    const pagesVisited = pageNumber * newsPerPage;
    const pageCount = Math.ceil(news1.length / newsPerPage);
    const changePage =({selected})=>{
        setPageNumber(selected);
    };
    
     const displayNews = news1.slice(pagesVisited, pagesVisited + newsPerPage).map(ne1=>{
        return(
            <div className="flex-llnew1 bg-white">
<Link to={'/Last-News/' + ne1.id} style={{textDecoration:'none'}}>
<p className="text-dark w-100 pr-2 ">{ne1.text}</p>
<div className="d-flex m-0  p-0 text-dark "><i class="fa fa-eye fa-clock-o-Break1 text-dark pr-0" aria-hidden="true"></i><p className="m-1 p-0 boreder-left">33</p> <div><p className="mt-1 border-right"> <i dir="rtl" className="far fa-calendar-alt ml-1 pr-3"></i> 2011-4-4 , 12:01</p></div></div>



</Link> </div>
         )
     });
 
    return (<>
        <div className="container p-5" >
         
     <div className="row  ">
     
         <div className="col-md-9 " >
         <div className="title " direction="rtl"  >
         <div className=" d-flex bg-light" > <span className="title-mark1 mt-1 "></span><p className="pt-1">آخر الأخبار</p>  </div>       
              <div class="d-flex justify-content-around flex-lnews1 ml-1 " >
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
         <div className="col-md-3 text-right "> 
                        <div className="row ">
                        <div className="title pt-1 mb-2 bg-white" style={{ boxShadow: '0 1px 5px 0 rgb(165, 165, 165)'}}direction="rtl">
                        <div className=" d-flex" > <span className="title-mark1 mt-1 "></span><p className="pt-1">أهم الأخبار</p>  </div>       
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
export default Lnews





/*      {news.map((New)=>{
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
                   })} */