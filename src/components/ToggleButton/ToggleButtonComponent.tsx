import React, { useState } from 'react'
import { ToggleButton } from '@/components/ToggleButton'

export const ToggleButtonComponent = () => {
  const [isOn, setIsOn] = useState(true)

  const handleToggle = () => {
    setIsOn(!isOn)
  }

  return (
    <div>
      <ToggleButton value={isOn} onChange={handleToggle} />
      <div>{isOn ? <span>Ежемесячный</span> : <span>Годовой</span>}</div>
    </div>
  )
}
