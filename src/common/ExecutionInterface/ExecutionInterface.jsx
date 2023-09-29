import React, {
  useMemo, useCallback, useState, useEffect,
} from 'react'
import { Box, Text } from 'ink'
import MultiSelect from 'ink-multi-select'
import {
  useNavigate, useLocation, Routes, Route,
} from 'react-router'
import { useOutput } from '../OutputContext'

// For colors, look at docs here
// https://github.com/chalk/chalk

const configMap = {
  uri:{
    variables:'variables',
    execute  :'execute',
  },
}

function VariablesInputManager({
  selectedItems,
}) {
  const variablesMap = selectedItems.reduce(
    (a, item) => {
      item.variables.forEach((variableName) => {
        variableArray = a[variableName] || []
        variableArray.push(item.id)
        a[variableName] = variableArray
      })
      return a
    },
    {},
  )

  const {
    trace,
    debug,
    info,
    warn,
    error,
  } = useOutput()

  useEffect(() => {
    if (selectedItems.length) {
      info('Will now proceed to collect following variables :')
      { Object.keys(variablesMap).forEach((variableName) => info(`${variableName} required by ${JSON.stringify(variablesMap[variableName])}`)) }
    }
  }, [selectedItems])

  return (
    <Box flexDirection="column">
      <Text>Following variables needed</Text>

    </Box>
  )
}

function ExecutionManager() {
  return (<Text>Execution</Text>)
}

function ExecutionInterface({
  text,
  items,
}) {
  const {
    trace,
    debug,
    info,
    warn,
    error,
  } = useOutput()

  const [selectedItems, setSelectedItems] = useState([])

  const transformedItems = useMemo(() => items.map((item) => ({
    ...item,
    label:item.id,
    value:item.id,
  })), [items])

  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = useCallback(
    (submittedItems) => {
      submittedItems.forEach((submittedItem) => info(
        `Selected ${submittedItem.label}`,
      ))
      setSelectedItems(submittedItems)
      navigate(configMap.uri.variables)
    },
    [setSelectedItems],
  )

  return (
    <Box flexDirection="column">
      <Text>
        This is the executionInterface at path
        {location.pathname}
      </Text>
      <Routes>
        <Route
          path={configMap.uri.variables}
          element={(
            <VariablesInputManager
              selectedItems={selectedItems}
            />
)}
        />
        <Route path="execution" element={<ExecutionManager />} />
      </Routes>
      <Text>
        {' Press '}
        <Text color="blue">
          Space
        </Text>
        {' to select, '}
        <Text color="green">
          Enter
        </Text>
        {' to submit or '}
        {/*
        <Text color="yellow">
          Escape
        </Text>
        {' to return to the previous menu.'}
        */}
      </Text>
      <MultiSelect items={transformedItems} onSubmit={handleSubmit} />
    </Box>
  )
}

export default ExecutionInterface
