const tasks = [
  {
    id       :'live.create_lvm',
    variables:['luks_mount_name', 'lvm_name'],
    payload  :'echo "creating lvm"',
  },
  {
    id       :'live.pacstrap',
    variables:['lvm_name', 'locale', 'hostname'],
    payload  :'echo "pacstrapping /mnt"',
  },

]

export default tasks
