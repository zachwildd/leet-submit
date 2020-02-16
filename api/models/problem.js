export default (sequelize, DataTypes) => {
  const problem = sequelize.define('problem', {
    problem_id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
    test: {
      type: DataTypes.TEXT()
    }
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  problem.associate = (models) => {};

  return problem;
};
