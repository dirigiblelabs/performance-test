var query = require("db/v4/query");
var producer = require("messaging/v4/producer");
var daoApi = require("db/v4/dao");

var dao = daoApi.create({
	table: "STUDENTS",
	properties: [
		{
			name: "Id",
			column: "ID",
			type: "INTEGER",
			id: true,
			autoIncrement: true,
		}, {
			name: "FirstName",
			column: "FIRSTNAME",
			type: "VARCHAR",
		}, {
			name: "LastName",
			column: "LASTNAME",
			type: "VARCHAR",
		}, {
			name: "Age",
			column: "AGE",
			type: "INTEGER",
		}, {
			name: "Bio",
			column: "BIO",
			type: "VARCHAR",
		}, {
			name: "Bio2",
			column: "BIO2",
			type: "VARCHAR",
		}, {
			name: "Bio3",
			column: "BIO3",
			type: "VARCHAR",
		}, {
			name: "Bio4",
			column: "BIO4",
			type: "VARCHAR",
		}, {
			name: "Bio5",
			column: "BIO5",
			type: "VARCHAR",
		}, {
			name: "Bio6",
			column: "BIO6",
			type: "VARCHAR",
		}, {
			name: "Bio7",
			column: "BIO7",
			type: "VARCHAR",
		}, {
			name: "Bio8",
			column: "BIO8",
			type: "VARCHAR",
		}, {
			name: "Bio9",
			column: "BIO9",
			type: "VARCHAR",
		}, {
			name: "Bio10",
			column: "BIO10",
			type: "VARCHAR",
		}]
});

exports.list = function(settings) {
	return dao.list(settings);
};

exports.get = function(id) {
	return dao.find(id);
};

exports.create = function(entity) {
	var id = dao.insert(entity);
	triggerEvent("Create", {
		table: "STUDENTS",
		key: {
			name: "Id",
			column: "ID",
			value: id
		}
	});
	return id;
};

exports.update = function(entity) {
	dao.update(entity);
	triggerEvent("Update", {
		table: "STUDENTS",
		key: {
			name: "Id",
			column: "ID",
			value: entity.Id
		}
	});
};

exports.delete = function(id) {
	dao.remove(id);
	triggerEvent("Delete", {
		table: "STUDENTS",
		key: {
			name: "Id",
			column: "ID",
			value: id
		}
	});
};

exports.count = function() {
	return dao.count();
};

exports.customDataCount = function() {
	var resultSet = query.execute("SELECT COUNT(*) AS COUNT FROM STUDENTS");
	if (resultSet !== null && resultSet[0] !== null) {
		if (resultSet[0].COUNT !== undefined && resultSet[0].COUNT !== null) {
			return resultSet[0].COUNT;
		} else if (resultSet[0].count !== undefined && resultSet[0].count !== null) {
			return resultSet[0].count;
		}
	}
	return 0;
};

function triggerEvent(operation, data) {
	producer.queue("university/Entities/Students/" + operation).send(JSON.stringify(data));
}