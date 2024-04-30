'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 1 bài viết có nhiều lable , 1 label có 1 bài post
      Label.hasMany(models.Post, { foreignKey: 'labelCode', as: 'labelData' })
    }
  }
  Label.init({
    code: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Label',
  });
  return Label;
};