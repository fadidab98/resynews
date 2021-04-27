import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import{Link} from 'react-router-dom'
import data from '../../api/news'
import Break from '../Break/Break'
import Lnews from '../LatesNews/Lnews'
import All from '../AllNews/All'
import Footer from '../Footer/Footer'
function Home() {
    const [news,setNews] = useState(data);
    const [loading,setLoading] = useState(false);
    return (
       
        <main>
         
          <Break/>
          
           
                

            
        <section className="News mt-5" >
            <div className="container-fluid ">
            <div class="row row-cols-1 row-cols-md-2">

            {news.map((ne1) =>{
                return(
                    
                    <div class="col-lg-4 mb-4">
                    <Link to={'/News/'+ ne1.id}>
                        <div class="card p-0 bac-news">
                    
                        
                          <div class="view overlay">
                            <img class="card-img-top" src={ne1.src}
                              alt="Card image cap"/>
                          <div className="new-text text-right"><h4>{ne1.text}</h4></div>
                          <div className="new-type">{ne1.type}</div>
                          </div>
                    
                        
                    
                          </div>
                          </Link>
                        </div>
                     
                                      
                                      
                                      
                                    
                )

            })
        }
             
            </div>
            </div>

        </section>
        <section className="latest-news" >
            <Lnews/>
        </section>
        <section className="ALL-News">
            <All/>
        </section>
        <section><Footer/></section>
    </main>
        
       
   
    )
}

export default Home
