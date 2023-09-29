DIR_ARCH_LIVE_MOUNT="/run/archiso"
SUBDIR_BOOT="/bootmnt"
DIR="${DIR_ARCH_LIVE_MOUNT}${SUBDIR_BOOT}"
if [ -d "$DIR" ]; then
  echo "live"
else
  echo "ERROR ${DIR} not found."
fi
