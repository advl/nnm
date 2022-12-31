export default [
  {
    label  :'create_logical_volume.sh',
    value  :'1',
    payload:import('./create_logical_volume.sh'),
  },
  {
    label:'Set Up Disk partitions',
    value:'2',
    payload:import('./test.txt')
  },
]
