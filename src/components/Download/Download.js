import React, { Component } from 'react'

export class Download extends Component {
    render() {
        return (
            <div className="container my-5 bg-white " style={{minHeight:'15rem'}} style={{ boxShadow: '0 1px 5px 0 rgb(165, 165, 165)'}}>
                <h5 className="text-center text-dark pt-2"> حمل تطبيقات    SY News</h5>
                <div className="d-flex justify-content-center mt-4 down">
                <div className="down-div  border"> 
                    <div className="down-img ">
                    <img src="../images/1.svg" className=""/>
                    </div>
                    <div className="down-text"><p>احصل عليه لهواتف <p className="pt-0 ">Huawei</p></p></div>
                </div>
                <div className="down-div border "> 
                    <div className="down-img ">
                    <i class="fab fa-google-play fa-3x m-auto w-100 text-dark"></i>
                    </div>
                    <div className="down-text"><p>احصل عليه من <p className="pt-0 ">Google Play</p></p></div>
                </div>
                <div className="down-div border"> 
                    <div className="down-img ">
                     <i class="fa fa-apple w-100 fa-3x" aria-hidden="true"></i>
                    </div>
                    <div className="down-text">
                    <p>تنزيل من <p className="pt-0 ">App Store</p></p>
                    
                    </div>
                </div>
                </div>

                
            </div>
        )
    }
}

export default Download
