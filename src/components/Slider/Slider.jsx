import React, {useState} from 'react';
import {GoDot, GoDotFill} from "react-icons/go";
import {ProductCard} from "../ProductsContainer/ProductCard/ProductCard";
import styles from './Slider.module.css'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

export const Slider = ({slidesNumber = 4, slides = []}) => {
    const countOfSlides = Math.ceil(slides.length / slidesNumber)

    const [slide, setSlide] = useState(slides.slice(0, slidesNumber))
    const [activeSlide, setActiveSlide] = useState(0)

    const dotsArray = new Array(countOfSlides).fill(<GoDot size={12}/>)

    const handleChangeSlide = (indexDot) => {
        const start = indexDot * slidesNumber;
        const end = start + slidesNumber;
        setActiveSlide(indexDot)
        setSlide(slides.slice(start, end))
    }
    const handleChangeNextSlide = () => {
        if (activeSlide >= countOfSlides - 1) {
            return
        }
        const start = (activeSlide + 1) * slidesNumber;
        const end = start + slidesNumber;
        setActiveSlide(activeSlide + 1)
        setSlide(slides.slice(start, end))
    }
    const handleChangePrevSlide = () => {
        if (activeSlide <= 0) {
            return
        }
        const start = (activeSlide - 1) * slidesNumber;
        const end = start + slidesNumber;
        setActiveSlide(activeSlide - 1)
        setSlide(slides.slice(start, end))
    }
    return (
        <div>
            <div className={styles.Slides}>
                {slide.map(product => <ProductCard key={product.id}
                                                   image={`http://192.168.0.104:5555/${product.image}`}
                                                   price={product.price}
                                                   name={product?.productName}
                                                   id={product.id}
                />)}
            </div>
            <div className={styles.Slider}>
                <button className={styles.SliderBtn} onClick={handleChangePrevSlide}>
                    <MdKeyboardArrowLeft size={30}/>
                </button>
                {dotsArray.map((dot, indexDot) => {
                    return <button className={styles.SliderBtn}
                                   onClick={() => handleChangeSlide(indexDot)}>{activeSlide === indexDot ?
                        <GoDotFill size={20}/> : dot}</button>
                })}
                <button className={styles.SliderBtn} onClick={handleChangeNextSlide}>
                    <MdKeyboardArrowRight size={30}/>
                </button>

            </div>
        </div>
    );
};