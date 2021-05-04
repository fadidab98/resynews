import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel'  
import '../../App.css';
import{Link} from 'react-router-dom'
import data from '../../api/news'
import Break from '../Break/Break'
import Lnews from '../LatesNews/Lnews'
import All from '../AllNews/All'
import Footer from '../Footer/Footer'
import Videos from '../Videos/Videos'
import Download from '../Download/Download'
function Home() {
    const [news,setNews]= useState(data.slice(0,6));
    const [loading,setLoading] = useState(false);
    return (
       
        <main>
         
         
          
           
                

            
        <section className="News mt-5" >
            <div className="container">
            <Break className=""/>
            <div className="row mt-4">
                <div className='col-md-8 col-sm-12 mb-4'>
            <Carousel className='caro-nes m-auto' interval={600} prevLabel={null}>  
            {news.map((ne1) =>{
                return(
                    
                    
                         <Carousel.Item  className='bac-news-car' >  
                            <Link to={'/News/'+ ne1.id}>
                         <img    className="w-100"    src={ne1.src}   />  
                         <div className="new-text text-right"><h5>{ne1.text}</h5></div>
                          <div className="new-type">{ne1.type}</div>
                            
                          </Link>
                                 </Carousel.Item  >  

                                 
                                   

                                        


                 
                                      
                                      
                                      
                                    
                )

            })
        }
                                        </Carousel>  </div>
                                        
                           

                   <div class="col-md-4 col-sm-12 ">
                   
                       
                        
                            

                            {news.map((ne1)=>{
                                if(ne1.id  > 4)
                                {
                                    return(
                                        <div className="col-12 m-auto  pt-2 p-0" key={ne1.id} style={{height:'36vh'}}>
                                    <Link to={'/News/'+ ne1.id}>
                                 <div class="p-0 bac-news h-100" >
  
                                     <img class="" src={ne1.src}   alt="Card image cap" style={{height:'100%'}}/>
                                   <div className="new-text text-right"><h6>{ne1.text}</h6></div>
                                   <div className="new-type">{ne1.type}</div>
                                   
                             
                                 
                             
                                   </div>
                                   </Link>  </div>
                                );
                                
                                
                                
                                }
                                 
                            })}
                      
                        
                        
                       
                         
                        </div>
                   
                                     
                                         </div>
             
            
            </div>

        </section>
        <section className="latest-news" >
            <Lnews/>
        </section>
        <section>
        <Download/>
        </section>
        <section className="ALL-News">
            <All/>
        </section>
        <section className="mt-5 mb-5 px-0 m-0">
        <Videos/>
        </section>
        <section><Footer/></section>
    </main>
        
       
   
    )
}

export default Home
