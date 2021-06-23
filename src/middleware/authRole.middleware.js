const authRole = async (role) => (req, res, next) => {
  if (req.user.role !== role) {
    res.status(401);
    return await res.send({ message: "not allowed" });
  }
  next();
};

module.exports = {
  authRole,
};
