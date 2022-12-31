#!/bin/bash
swap_power=1.2
root_partition_size='51G'

function get_memtotal {
  local a=`grep MemTotal /proc/meminfo | sed 's/[^0-9]*//g'`
  echo $a
  exit 0
}

function convert_kb_to_gb {
  echo $1 | awk '{$1=$1/(1024^2); print $1}'
}

function get_memtotal_gb {
  echo "$(convert_kb_to_gb $(get_memtotal))"
}

function get_swap_size {
  #echo $(get_memtotal_gb)
  #echo '$(get_memtotal_gb)'
  #echo $((2 + $swap_power))
  local s=`get_memtotal_gb | awk -v p="$swap_power" '{$1=$1^p; print "%3.0f", $1}'`
  echo "${s}G" 
}

pvcreate /dev/mapper/cryptlvm                         
vgcreate archlvm /dev/mapper/cryptlvm
# vgchange -a n archlvm
# vgremove archlvm
  
# Swap is a bit bigger than ram to enable hibernation
lvcreate -L "$(get_swap_size)" archlvm -n swap
lvcreate -L "$(root_partition_size)" archlvm -n root
lvcreate -l 100%FREE archlvm -n home
  
#mkfs.ext4 /dev/archlvm/root
#mkfs.ext4 /dev/archlvm/home
#mkswap /dev/archlvm/swap
