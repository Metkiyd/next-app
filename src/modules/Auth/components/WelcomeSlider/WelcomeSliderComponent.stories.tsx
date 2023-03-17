import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { WelcomeSliderComponent } from './WelcomeSliderComponent'

import styles from '@/modules/Auth/components/WelcomeSlider/WelcomeSlider.module.scss'

export default {
  title: 'UI/WelcomeSlider',
  component: WelcomeSliderComponent,
} as ComponentMeta<typeof WelcomeSliderComponent>

const Template: ComponentStory<typeof WelcomeSliderComponent> = (args) => (
  <div className={styles.container}>
    <WelcomeSliderComponent {...args} />
  </div>
)

export const WelcomeSlider = Template.bind({})
WelcomeSlider.args = {}
