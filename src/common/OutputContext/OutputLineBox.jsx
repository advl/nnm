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
}) {
  return (
    <Box>
      <Text backgroundColor="white" color="black">
        { ` ${timestamp.toLocaleTimeString('it-IT')} ` }
      </Text>
      <Text backgroundColor={configMap[level].color}>
        { ` ${configMap[level].label} ` }
      </Text>
      <Text>
        {' '}
        { content }
        {' '}
      </Text>
    </Box>
  )
}

export default OutputLineBox
