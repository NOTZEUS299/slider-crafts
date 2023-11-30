"use client"

import React, { useState } from 'react'
import "./page.css";
import sliderData from "../../../public/assets/data.json";
import { HiMiniBars2 } from "react-icons/hi2";
import { TbCarouselHorizontal } from "react-icons/tb";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6"

const SliderOne = () => {
    const SliderData = sliderData.sliderData;

    const [rotate, setRotate] = useState<string>("");

    const [elemSwitch, setElemSwitch] = useState<number>(0);

    const [textSwitch, setTextSwitch] = useState<number>(0)

    const handleText = (direction: string) => {
        if (rotate === "") {
            if (direction === "clockwise") {
                if (SliderData?.length > textSwitch + 1) {
                    setTimeout(() => {
                        setTextSwitch(textSwitch + 1)
                    }, 2000);
                } else {
                    setTimeout(() => {
                        setTextSwitch(0)
                    }, 2000);
                }
            } else {
                if (0 < textSwitch) {
                    setTimeout(() => {
                        setTextSwitch(textSwitch - 1)
                    }, 2000);
                } else {
                    setTimeout(() => {
                        setTextSwitch(SliderData?.length - 1)
                    }, 2000);
                }
            }

        }
    }

    const handleRotateClick: (direction: string) => void = (direction: string): void => {
        handleText(direction);
        if (rotate === "") {
            setRotate(direction);
            if (direction === "clockwise") {
                if (SliderData?.length > elemSwitch + 1) {
                    setElemSwitch(elemSwitch + 1)
                } else {
                    setElemSwitch(0)
                }
            } else {
                if (0 < elemSwitch) {
                    // setElemSwitch(SliderData?.length + 1)
                    setElemSwitch(elemSwitch - 1);

                } else {
                    // setElemSwitch(elemSwitch - 1)
                    setElemSwitch(SliderData?.length - 1);

                }
            }
            setTimeout(() => {
                setRotate("");
            }, 2000);
        }
    }

    const bgImg = {
        backgroundImage: `url(${SliderData[elemSwitch]?.url})`
    }

    return (
        <div className={"mainContainer"}>
            <section className={"circleSliderSection"}>
                <div className={`outerCircle rotate-${rotate}`} style={bgImg}>
                </div>
                <div className={`middleCircle rotate-${rotate}`} style={bgImg}>
                </div>
                <div className={`innerCircle rotate-${rotate}`} style={bgImg}>
                </div>
                <div className={"contentSlate"}>
                    <div className={"content__container"}>
                        <div className={"content-header"}>
                            <h6 className="cntnt-header-icon"><HiMiniBars2 /></h6>
                            <h6 className='cntnt-header-title'>SLIDER CONCEPT ONE</h6>
                            <h6 className='cntnt-header-nav'>SLIDER-CRAFTS<span><TbCarouselHorizontal /></span></h6>
                        </div>
                        <div className={"cntnt-hero-div"}>
                            <div className={"cntnt-hero-h1-wrapper"}>
                                <h1 className={`cntnt-hero-h1 ${rotate === "clockwise" || rotate === "antiClockwise" ? "previous" : ""}`}>
                                    {rotate === "clockwise" ? <span>{SliderData[textSwitch === 0 ? SliderData?.length - 1 : textSwitch - 1]?.title}</span> : <span>{SliderData[textSwitch === SliderData?.length - 1 ? 0 : textSwitch + 1]?.title}</span>}
                                </h1>
                                <h1 className={`cntnt-hero-h1 ${rotate === "clockwise" || rotate === "antiClockwise" ? "display" : ""}`}>
                                    {SliderData[textSwitch]?.title}
                                </h1>
                                <h1 className={`cntnt-hero-h1 ${rotate === "clockwise" || rotate === "antiClockwise" ? "next" : ""}`}>
                                    {rotate === "clockwise" ? <span>{SliderData[textSwitch === SliderData?.length - 1 ? 0 : textSwitch + 1]?.title}</span> : <span>{SliderData[textSwitch === 0 ? SliderData?.length - 1 : textSwitch - 1]?.title}</span>}
                                </h1>
                            </div>
                            <div className={"cntnt-hero-line"}></div>
                            <div className={"cntnt-hero-h6-wrapper"}>
                                <h6 className={`cntnt-hero-h6 ${rotate === "clockwise" || rotate === "antiClockwise" ? "previous" : ""}`}>
                                    {rotate === "clockwise" ? <span>{SliderData[textSwitch === SliderData?.length - 1 ? 0 : textSwitch + 1]?.des}</span> : <span>{SliderData[textSwitch === 0 ? SliderData?.length - 1 : textSwitch - 1]?.des}</span>}
                                </h6>
                                <h6 className={`cntnt-hero-h6 ${rotate === "clockwise" || rotate === "antiClockwise" ? "display" : ""}`}>
                                    {SliderData[textSwitch]?.des}
                                </h6>
                                <h6 className={`cntnt-hero-h6 ${rotate === "clockwise" || rotate === "antiClockwise" ? "next" : ""}`}>
                                    {rotate === "clockwise" ? <span>{SliderData[textSwitch === 0 ? SliderData?.length - 1 : textSwitch - 1]?.des}</span> : <span>{SliderData[textSwitch === SliderData?.length - 1 ? 0 : textSwitch + 1]?.des}</span>}
                                </h6>
                            </div>
                            <div className={"action-buttons-container"}>
                                <button className={"previous-image"} onClick={() => handleRotateClick("antiClockwise")}><img src='/assets/arrow.png' /></button>
                                <div className={"line"}></div>
                                <button className={"next-image"} onClick={() => handleRotateClick("clockwise")}><img src='/assets/arrow.png' /></button>
                            </div>
                        </div>
                        <div className={"content-footer"}>
                            <div className={'left-footer-container'}>
                                <ul>
                                    <li>ZEUS</li>
                                    <li></li>
                                    <li><IoShareSocialSharp /></li>
                                </ul>
                            </div>
                            <a href="https://www.leven.plus" target='_blank' className='middle-footer-container'>POWERED BY LEVEN PLUS</a>
                            <div className='right-footer-container'>
                                <a href="https://www.leven.plus" target='_blank' className={"portfolio-link"}>zeus.leven.plus</a>
                                <button className={`sliderOneButton ${rotate}`} onClick={() => handleRotateClick("clockwise")}><FaArrowsRotate /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default SliderOne