// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    'Employee',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'Employees',
      underscored: true,
    },
  );

  // RELACIONAMENTO 1:1  ( hasOne )
  Employee.associate = (models) => {
    Employee.hasOne(models.Address, {
      foreignKey: 'employeeId',
      as: 'addresses',
    });
  };

  // RELACIONAMENTO 1:N  ( hasMany )
  // Employee.associate = (models) => {
  //   Employee.hasMany(models.Address, {
  //     foreignKey: 'employee_id',
  //     as: 'addresses',
  //   });
  // };

  return Employee;
};
