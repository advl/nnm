import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'

const runPayload = async (promisedImport, log) => {
  // const fullPath = path.join(__dirname, folderName, scriptName)
  // const exists = fs.existsSync(fullPath)

  const { default:script } = await promisedImport

  const proc = exec(`set -e; ${script}`, { shell: '/bin/bash' })

  if (log) {
    proc.stdout.on('data', (data) => {
      log('OK', data)
    })
    proc.stderr.on('data', (data) => {
      log('ERR', data.replace('/bin/bash: ', '').replace('\n', ''))
    })
    proc.on('error', (err) => {
      log('ERR', err)
    })
    proc.on('exit', (code) => {
      log(code, `Process exited with code ${code}`)
    })
  }
  log('OK', 'run successfully')
  log(0, 'run successfully')
}

export default runPayload
