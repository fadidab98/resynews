import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import data from '../../api/news'
function Break() {
    return (
        <div className="fixed-bottom w-100 breaking-news w-100">
             <marquee behavior="scroll" scrrollamount="22" width="100%"  ><h4 className="mt-2">أنتوني هوبكنز يفوز بجائزة أوسكار أفضل ممثل عن فيلم الأب</h4></marquee>
             <div className="break"><h3>عاجل &nbsp;</h3></div>
        </div>
        
            
        
    )
}

export default Break
