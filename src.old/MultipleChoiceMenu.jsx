import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Static, Box, Text, useInput,
} from 'ink'
import { useNavigate } from 'react-router'
import MultiSelect from 'ink-multi-select'
import runPayload from './runPayload'
import getStatusColor from './getStatusColor'

function MultipleChoiceMenu({
  escapeToReturn,
  items,
}) {
  const navigate = useNavigate()

  useInput((input, key) => {
    if (escapeToReturn) {
      if (key.escape) {
        navigate(-1)
      }
    }
    /*
    if (input === 'q') {
      // Exit program
    }

    if (key.leftArrow) {
      // Left arrow key pressed
    } */
  })

  const [outputLines, setOutputLines] = useState([])
  const appendOutputForScript = (scriptName) => (status, payload) => {
    setOutputLines((state) => [
      ...state, {
        scriptName,
        status,
        payload,
        timestamp:Date.now(),
      }])
  }

  const handleSubmit = async (submittedItems) => {
    for (const item of submittedItems) {
      const appendOutput = appendOutputForScript(item.label)
      await runPayload(item.payload, appendOutput)
    }
  }

  return (
    <Box flexDirection="column">
      <Static items={outputLines}>
        {(line) => (
          <Box key={line.timestamp}>
            <Text>
              <Text backgroundColor={getStatusColor(line.status)}>
                {` ${String(line.status)}${' '.repeat(4 - String(line.status).length)}`}
              </Text>
              {' '}
              <Text dimColor>
                { line.scriptName }
                {': '}
              </Text>
              {line.payload}
            </Text>
          </Box>
        )}
      </Static>
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
        <Text color="yellow">
          Escape
        </Text>
        {' to return to the previous menu.'}
      </Text>
      <Text>
        {' '}
      </Text>

      <MultiSelect items={items} onSubmit={handleSubmit} />
    </Box>
  )
}

MultipleChoiceMenu.propTypes = {
  escapeToReturn:PropTypes.bool,
  items         :PropTypes.arrayOf(PropTypes.object).isRequired,
}

MultipleChoiceMenu.defaultProps = {
  escapeToReturn:true,
}

export default MultipleChoiceMenu
