import { execSync } from 'child_process'

export default (command, block) => {
  console.log('EX', command)
  const result = execSync(command, {
    encoding:'utf-8',
  }).toString()
  if (block) {
    return result
  }
  return result.replace('\n', '')
}
