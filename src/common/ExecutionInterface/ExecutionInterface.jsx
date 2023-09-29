import React, { useCallback } from 'react'
import { Box, Text } from 'ink'
import SelectInput from 'ink-select-input'
import {
  useNavigate, useLocation, Routes, Route,
} from 'react-router'

// For colors, look at docs here
// https://github.com/chalk/chalk

const configMap = {
  uri:{
    variables:'variables',
    execute  :'execute',
  },
}

function VariablesInputManager() {
  return (<Text>Variables Input Here</Text>)
}

function ExecutionManager() {
  return (<Text>Execution</Text>)
}

function ExecutionInterface({
  text,
  items,
}) {
  const navigate = useNavigate()
  const location = useLocation()

  const it = [
    {
      label:'VariablesInputManager',
      value:configMap.uri.variables,
    },
    {
      label:'Execution',
      value:configMap.uri.execute,
    },
  ]

  const displayVariablesReview = useCallback(() => navigate(configMap.uri.variables))

  const displayExecutionStatus = useCallback(() => navigate(configMap.uri.execute))

  const handleSelect = ({
    value,
  }) => {
    navigate(value)
  }

  return (
    <Box flexDirection="column">
      <Text>
        This is the executionInterface at path
        {location.pathname}
      </Text>
      <Routes>
        <Route path="vars" element={<VariablesInputManager />} />
        <Route path="execution" element={<ExecutionManager />} />
      </Routes>
      <SelectInput items={it} onSelect={handleSelect} />
    </Box>
  )
}

export default ExecutionInterface
