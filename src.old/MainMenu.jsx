import React, { useState } from 'react'
import { Box, Text, Static } from 'ink'
import SelectInput from 'ink-select-input'
import { useNavigate } from 'react-router'
import Gradient from 'ink-gradient'
import Logo from './logo.txt'
import packageConf from '../package.json'
import runScript from './utils/runScript'

function MainMenu() {
  const navigate = useNavigate()
  const [outputLines, setOutputLines] = useState([])
  const appendOutput = (content) => {
    setOutputLines((state) => [
      ...state,
      content,
    ])
  }

  const handleSelect = async ({
    execute,
    value,
  }) => {
    if (execute) {
      const result = await execute()
      console.log('LOG', result)
      appendOutput(result)
    }
    if (value) {
      navigate.value()
    }
  }

  const environment = 'live'

  const items = [
    {
      label  :'Test',
      execute:async() => runScript((await import('./utils/detectEnvironment.sh')).default),
    },
    {
      label:<Text>
        Environment
        <Text bold>
          {environment}
        </Text>
        {' '}
        tasks
      </Text>,
      value:'/environment',
    },
    {
      label:'All tasks',
      value:'/all',
    },
  ]

  return (
    <Box flexDirection="column" padding="4">
      <Static items={outputLines}>
        {(line) => (
          <Text key={line}>{ line }</Text>
        )}
      </Static>
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
