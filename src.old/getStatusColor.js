export default (status) => {
  if (status === 'ERR') return 'red'
  if (status === 'OK') return 'green'
  if (status === '0') return 'blue'
  return 'red'
}
