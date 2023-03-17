import React from 'react'

import type { WelcomeSliderTypes } from './WelcomeSlider.types'

import styles from './WelcomeSlider.module.scss'

import { WelcomeSliderPageOne } from '@/assets/images/welcomeSliderPages/WelcomeSliderPageOne'

export const WelcomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    className: styles.sliderWrapper__slider,
    speed: 500,
    accessibility: false,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    dotsClass: styles.slickDots,
  }

  const welcomeSlidesItem = [
    {
      id: '1',
      topText: 'Провести инвентаризацию?',
      bottomText: 'Легко!',
      image: <WelcomeSliderPageOne />,
    },
    {
      id: '2',
      topText: 'Провести инвентаризацию 2?',
      bottomText: 'Легко!',
      image: <WelcomeSliderPageOne />,
    },
    {
      id: '3',
      topText: 'Провести инвентаризацию 3?',
      bottomText: 'Легко!',
      image: <WelcomeSliderPageOne />,
    },
  ]

  const Slide = (item: WelcomeSliderTypes): JSX.Element => (
    <div className={styles.sliderWrapper__slider__slide} key={item.id}>
      <div className={styles.sliderWrapper__slider__slide__title}>
        {item.topText}
      </div>
      <div className={styles.sliderWrapper__slider__slide__imageBlock}>
        {item.image}
      </div>
      <div className={styles.sliderWrapper__slider__slide__bottomContent}>
        {item.bottomText}
      </div>
    </div>
  )

  return {
    settings,
    Slide,
    welcomeSlidesItem,
  }
}
