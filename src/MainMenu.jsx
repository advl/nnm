import React, { useState, useEffect } from 'react'
import { Box, Text, Static } from 'ink'
import SelectInput from 'ink-select-input'
import { useNavigate } from 'react-router'
import Gradient from 'ink-gradient'
import Logo from './logo.txt'
import packageConf from '../package.json'
import { useOutput } from './common'

function MainMenu() {
  const navigate = useNavigate()
  const {
    trace,
    debug,
    info,
    warn,
    error,
  } = useOutput()

  useEffect(() => {
    debug('DEBUG MSG')
    trace('trace msg')
    info('Starting payload X')
    info('ScriptName.sh~Starting payload X')
    warn('missing variable X')
    error('error doing such')
  }, [])

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
      {/*
      <SelectInput items={items} onSelect={handleSelect} />
      */}
    </Box>

  )
}

export default MainMenu
