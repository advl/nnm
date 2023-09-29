import React from 'react'
import { Box, Text } from 'ink'

// For colors, look at docs here
// https://github.com/chalk/chalk

const configMap = {
  trace:{
    color:'black',
    label:'T',
  },
  debug:{
    color:'magenta',
    label:'D',
  },
  info:{
    color:'green',
    label:'I',
  },
  warn:{
    color:'yellow',
    label:'W',
  },
  error:{
    color:'red',
    label:'E',
  },
}

function OutputLineBox({
  level,
  timestamp,
  content,
  separator,
}) {
  const splitContent = content.split(separator)
  const isSplitContent = splitContent.length > 1
  return (
    <Box>
      <Text backgroundColor="white" color="black">
        { ` ${timestamp.toLocaleTimeString('it-IT')} ` }
      </Text>
      <Text backgroundColor={configMap[level].color}>
        { ` ${configMap[level].label} ` }
      </Text>
      { isSplitContent
        ? (
          <>
            <Text bold>
              {' '}
              { splitContent[0] }
              {' ~'}
            </Text>
            <Text>
              {' '}
              { splitContent[1] }
              {' '}
            </Text>
          </>
        )
        : (
          <Text>
            {' '}
            { content }
            {' '}
          </Text>
        )}
    </Box>
  )
}

OutputLineBox.defaultProps = {
  separator:'~',
}

export default OutputLineBox
