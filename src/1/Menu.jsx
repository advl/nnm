import React from 'react'
import { Box } from 'ink'
import MultipleChoiceMenu from '../MultipleChoiceMenu'
import items from './tasks'

function Menu() {
  return (
    <Box padding="4">
      <MultipleChoiceMenu items={items} />
    </Box>
  )
}

export default Menu
