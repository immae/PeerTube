import * as Sequelize from 'sequelize'

async function up (utils: {
  transaction: Sequelize.Transaction,
  queryInterface: Sequelize.QueryInterface,
  sequelize: Sequelize.Sequelize
}): Promise<void> {

  {
    const data = {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    }
    await utils.queryInterface.addColumn('user', 'ldapDn', data)
  }
}

function down (options) {
  throw new Error('Not implemented.')
}

export {
  up,
  down
}
