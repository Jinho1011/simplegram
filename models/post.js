module.exports = (sequelize, DataTypes) => (
  sequelize.define('post', {
    img: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    timestamps: true,
    paranoid: true
  })
)
