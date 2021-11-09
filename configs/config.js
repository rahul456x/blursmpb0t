const { mem, cpu, os } = require('node-os-utils');
module.exports = {
  name: "config",
  run: async (client, message, args) => {
const { totalMemMb, usedMemMb } = await mem.info();
  }
}
