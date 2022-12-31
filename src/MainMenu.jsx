import React from 'react'
import { Box, Text } from 'ink'
import SelectInput from 'ink-select-input'
import { useNavigate } from 'react-router'
import Gradient from 'ink-gradient'
import Logo from './logo.txt'
import packageConf from '../package.json'

function MainMenu() {
  const navigate = useNavigate()

  const handleSelect = (item) => {
    navigate(item.value)
  }

  const items = [
    {
      label:'1/Install Arch Linux',
      value:'/1',
    },
    {
      label:'3/Install and Configure Applications',
      value:'/2',
    },
    {
      label:'3/Set-Up Coding Environment',
      value:'/3',
    },
  ]

  return (
    <Box flexDirection="column" padding="4">
      <Gradient name="passion">
        <Text>
          { Logo }
        </Text>
      </Gradient>
      <Box width="30" alignItems="center" justifyContent="center">
        <Text>
          {`Version ${packageConf.version}`}
        </Text>
      </Box>
      <Text>
        {' '}
      </Text>
      <SelectInput items={items} onSelect={handleSelect} />
    </Box>

  )
}

export default MainMenu
