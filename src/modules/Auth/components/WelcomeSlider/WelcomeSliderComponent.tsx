import React from 'react'
import Slider from 'react-slick'

import { WelcomeSlider } from '@/modules/Auth/components/WelcomeSlider/'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './WelcomeSlider.module.scss'

export const WelcomeSliderComponent: React.FC = () => {
  const { welcomeSlidesItem, settings, Slide } = WelcomeSlider()

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings}>{welcomeSlidesItem.map((el) => Slide(el))}</Slider>
    </div>
  )
}
