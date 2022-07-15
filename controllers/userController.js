const login = async (req, res) => {
  const { username, password } = req.body;

  res.status(200).json({
    username: `Username: ${username}`,
    password: `Password: ${password}`,
  });
};

export { login };
