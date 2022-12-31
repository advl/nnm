import React from 'react'
import PropTypes from 'prop-types'
import {
  Static, Box, Text, useInput,
} from 'ink'
import { useNavigate } from 'react-router'
import MultiSelect from 'ink-multi-select'

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

  const handleSubmit = (items) => {
    // `items` = [{ label: 'First', value: 'first' }, { label: 'Third', value: 'third' }]
  }

  return (
    <Box flexDirection="column">
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
  items         :PropTypes.object,
}

MultipleChoiceMenu.defaultProps = {
  escapeToReturn:true,
}

export default MultipleChoiceMenu
