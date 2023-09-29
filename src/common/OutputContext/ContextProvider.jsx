import React, { useState, useCallback } from 'react'
import { Static, Text } from 'ink'
import Context from './Context'
import OutputLineBox from './OutputLineBox'

/*

const output = [
  {
    timestamp:Date,
    level:(trace|debug|info|warn|error)
    content:String
  }
]

*/

function OutputContextProvider({
  children,
  // ...otherProps
}) {
  const [output, setOutput] = useState([])
  const log = useCallback((payload) => setOutput((currentOutput) => [
    ...currentOutput,
    {
      timestamp:new Date(),
      ...payload,
    },
  ]), [setOutput])
  const trace = useCallback((content) => log(
    {
      level:'trace',
      content,
    },
  ), [log])
  const debug = useCallback((content) => log(
    {
      level:'debug',
      content,
    },
  ), [log])
  const info = useCallback((content) => log(
    {
      level:'info',
      content,
    },
  ), [log])
  const warn = useCallback((content) => log(
    {
      level:'warn',
      content,
    },
  ), [log])
  const error = useCallback((content) => log(
    {
      level:'error',
      content,
    },
  ), [log])

  /*
  trace('this is a trace message')
  debug('initializing processes')
  info('launching payload ')
  warn('wariable is empty')
  error('Exit code 4')
  */

  return (
    <Context.Provider
      value={{
        output,
        trace,
        debug,
        info,
        warn,
        error,
      }}
    >
      <Static items={output}>
        {
          (line) => (
            <OutputLineBox {...line} key={line.timestamp + line.content} />
          )
        }
      </Static>
      {children}
    </Context.Provider>
  )
}

export default OutputContextProvider
