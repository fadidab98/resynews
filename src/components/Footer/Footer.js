import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
function Footer() {
    return (
        <div>
           
<footer className="bg-dark text-center text-white p-0">

<section className="text-center m-auto pt-2" style={{width:'15rem'}}>
<a className="up-btn " href="/Home" ><button className="btn btn-outline-primary text-white w-100 p-1">للأعلى</button></a>
    </section>
  <div className="container p-4">
   
  
    <section className="mb-4">
     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

    
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>

    
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

  
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

    
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
 
   {/*  <section className="">
      <form action="">
  
        <div className="row d-flex justify-content-center">
        
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          

         
          <div className="col-md-5 col-12">
        
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example2" className="form-control" />
              <label className="form-label" for="form5Example2">Email address</label>
            </div>
          </div>
         

        
          <div className="col-auto">
          
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        
        </div>
     
      </form>
    </section>
 */}
    <section className="mb-4">
      <p>
        
      </p>
    </section>
  
    <section className="">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase text-center">سيريا نيوز عربية</h5>

          <ul className="list-unstyled mb-0 p-0">
            <li>
              <a href="#!" className="text-white">اتصل بنا</a>
            </li>
            <li>
              <a href="#!" className="text-white">حول سيريا نيوز عربية</a>
            </li>
            <li>
              <a href="#!" className="text-white">برنامج التدريب</a>
            </li>
            <li>
              <a href="#!" className="text-white">الشروط والأحكام</a>
            </li>
          </ul>
        </div>
      
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">تابعونا</h5>

          <ul className="list-unstyled mb-0 p-0">
            <li>
              <a href="#!" className="text-white">تطبيقاتنا</a>
            </li>
            <li>
              <a href="#!" className="text-white">راديو مباشر</a>
            </li>
            <li>
              <a href="#!" className="text-white">ترددات القناة</a>
            </li>
            <li>
              <a href="#!" className="text-white">البث المباشر</a>
            </li>
          </ul>
        </div>
     
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">الأقسام</h5>

          <ul className="list-unstyled mb-0 p-0">
            <li>
              <a href="#!" className="text-white">مستجدات كورونا</a>
            </li>
            <li>
              <a href="#!" className="text-white">عالم </a>
            </li>
            <li>
              <a href="#!" className="text-white">رياضة</a>
            </li>
            <li>
              <a href="#!" className="text-white">علوم</a>
            </li>
          </ul>
        </div>



        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-center">
          <h5 className="text-uppercase  ">برامجنا</h5>

          <ul className="list-unstyled mb-0 p-0">
            <li>
              <a href="#!" className="text-white">غرفة الأخبار</a>
            </li>
            <li>
              <a href="#!" className="text-white">من دمشق</a>
            </li>
            <li>
              <a href="#!" className="text-white">اقتصادكم</a>
            </li>
            <li>
              <a href="#!" className="text-white">وثائقيات</a>
            </li>
          </ul>
        </div>
       
      </div>
     
    </section>
    
  </div>
 


  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
 
</footer>

        </div>
    )
}

export default Footer
