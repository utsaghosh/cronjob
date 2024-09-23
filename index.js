const nodeCron = require("node-cron");

const cronExpression = "*/2 * * * * *";
//displays current date and time after every 2 seconds
async function display() {
  console.log(new Date());
}
const job = nodeCron.schedule(cronExpression, display);
