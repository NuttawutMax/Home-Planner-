module.exports = {
	connection:'someMysqlServer',
	tableName:'jobs',
	autoCreatedAt: false,
	attributes:{
		name:{
			type:'string'
		},
		user_id:{
			type:'integer'
		},
		user_name:{
			type:'string'
		},
		price:{
			type:'integer'
		},
		width:{
			type:'string'
		},
		height:{
			type:'string'
		},
		job_path :{
			type:'string'
		},
		picture_name:{
			type:'string'
		},
		createdAt:{
			type:'string'
		},
		updatedAt:{
			type:'string'
		}

	}
}