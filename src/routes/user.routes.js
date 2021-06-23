const express = require("express");
const { UserModel } = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth.middleware");

router.post(
  "/registration",
  [
    check("username", "ismingizni kiriting").isLength({ min: 3 }),
    check("password", "parolingizni kiriting").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({
          errors: errors.array(),
          message: "okajonim xato kiritdizu",
        });
      } else {
        const { username, password } = req.body;
        const checkUser = await UserModel.findOne({ username });
        if (checkUser) {
          res.status(400).json({ message: "bunday chichoq uji bor 😰" });
        } else {
          const hashedPassword = await bcrypt.hash(password, 12);
          const newUser = new UserModel({
            username,
            password: hashedPassword,
          });
          await newUser.save();
          res.status(201).json({ message: "yangi chichqo yaratildi 💩 😂" });
        }
      }
    } catch (err) {
      res.status(500).json({ message: "nmadur xatode backendda" });
    }
  }
);

router.post(
  "/login",
  [
    check("username", "ismingizni kiriting").exists(),
    check("password", "parolingizni kiriting").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "okajonim xato kiritdizu",
        });
      } else {
        const { username, password } = req.body;

        const checkUser = await UserModel.findOne({ username });

        if (!checkUser) {
          res.status(400).json({ message: "bunday chichoq topilmadi 😰" });
        } else {
          const isMatchPassword = await bcrypt.compare(
            password,
            checkUser.password
          );

          if (!isMatchPassword) {
            return res
              .status(400)
              .json({ message: "parolni hato kritdiz brat" });
          } else {
            const token = jwt.sign(
              { userId: checkUser.id },
              config.get("jwtSecret"),
              { expiresIn: "1h" }
            );

            res.json({
              token,
              userId: checkUser.id,
              username: checkUser.username,
            });
          }
        }
      }
    } catch (error) {
      res.status(500).json({ message: "nmadur xatode backendda" });
    }
  }
);

router.get("/me", auth, async (req, res) => {
  try {
    const checkUser = await UserModel.findById(req.user.userId);

    if (!checkUser) {
      return res.status(401).json({ message: "auth yuqku brat" });
    }

    res.json({
      userId: checkUser.id,
      username: checkUser.username,
      message: "hush kelibsiz",
    });
  } catch (error) {
    res.status(401).json({ message: "bunaqa tokenli user yuq" });
  }
});

module.exports.authRouter = router;
