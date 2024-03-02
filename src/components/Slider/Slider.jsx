import React, {useState} from 'react';
import {GoDot} from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import {ProductCard} from "../ProductsContainer/ProductCard/ProductCard";
import styles from './Slider.module.css'

export const Slider = ({slidesNumber = 4, slides = []}) => {
    const numberOfDots = Math.ceil(slides.length / slidesNumber)

    const [slide, setSlide] = useState(slides.slice(0, slidesNumber))
    const [activeSlide, setActiveSlide] = useState(0)

    const dotsArray = new Array(numberOfDots).fill(<GoDot/>)

    const handleChangeSlide = (indexDot) =>{
        const start = indexDot*slidesNumber;
        const end = start+slidesNumber;
        setActiveSlide(indexDot)
        setSlide(slides.slice(start,end))
    }

    return (
        <div>
            <div className={styles.Slides}>
                {slide.map(product => <ProductCard key={product.id}
                                                    image={`http://192.168.0.104:5555/${product.image}`}
                                                    price={product.price}
                                                    name={product?.productName}
                />)}
            </div>
            {dotsArray.map((dot,index) => {return <button onClick={()=>handleChangeSlide(index)}>{activeSlide===index ? <GoDotFill />:dot}</button>})}
        </div>
    );
};