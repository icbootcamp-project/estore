module.exports = (req, res) => {
  console.log('request received');
  res.json({ one: 'hello world' });
};
