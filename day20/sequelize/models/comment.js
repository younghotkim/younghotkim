const Sequelize = require("sequelize");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");

class Commnet extends Sequelize.Model {
  static initiate(sequelize) {
    Commnet.init(
      {
        comment: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        create_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Comment",
        tableName: "comments",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: "commenter", targetKey: "id" });
  }
}

module.exports = Commnet;
