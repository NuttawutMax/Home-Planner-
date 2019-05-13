/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection:'someMysqlServer',
	tableName:'users',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes:{
	 //  id:{
	 //    type:'integer'
    // },
    username:{
	    type:'string'
    },
    password:{
      type:'string'
    },
    first_name:{
      type:'string'
    },
    last_name:{
      type:'string'
    },
    email:{
      type:'string'
    },
    type:{
      type:'string'
    },
    createdAt:{
	    type:'datatime'
    },
    updatedAt:{
	    type:'datatime'
    }
  }
}

