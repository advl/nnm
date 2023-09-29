export default [
  {
    label:"",
    environment:"live|chroot|root|user",
    payload:import("./test.txt"),
    variables:{
      "boot_device":"/dev/sda1",
      "":""
    },
    configuration:{
      "fail_hard":true,
    }
  }
]
