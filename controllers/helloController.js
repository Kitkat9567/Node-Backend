const getHello = (req, res) => {
  try {
    const data = { message: 'Hello from backend! 🚀' };
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getHello };