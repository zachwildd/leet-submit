const NUM = process.env.JUDGE_NUM * 1;
const PORT = 7331 + NUM;
const config = {
  PORT: PORT
};

module.exports = config;