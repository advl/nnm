module.exports = {
  env:{
    node:true,
  },
  extends:['airbnb', 'airbnb/hooks'],
  rules  :{
    semi:[
      2,
      'never',
    ],
    'key-spacing':[
      'error', {
        multiLine:{
          beforeColon:false,
          afterColon :false,
        },
        align:{
          beforeColon:false,
          afterColon :false,
          on         :'colon',
        },
      },
    ],
  },

}
