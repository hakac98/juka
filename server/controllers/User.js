import axios from "axios";
import User from "../models/User.js";

const generateUser = async (req, res) => {
  const userId = req.body.user_id;
  await User.create({
    _id: userId,
  });
  res.status(200).json({ message: "Uspešno generisan korisnik" });
};

const registerUser = async (req, res) => {
  const { name, email, username, password } = req.body;
  if (name) {
    if (email) {
      if (isEmail(email)) {
        const emailExists = await User.exists({ email: email });
        if (!emailExists) {
          if (username) {
            const usernameExists = await User.exists({ username: username });
            if (!usernameExists) {
              if (password) {
                if (password.length > 6) {
                  const idRequest = await axios.get(
                    "http://localhost:5000/api/uid?collection=users"
                  );
                  const id = idRequest.data.id;
                  const salt = await bcrypt.genSalt(10);
                  const hashedPassword = await bcrypt.hash(password, salt);
                  const user = await User.create({
                    _id: id,
                    name: name,
                    email: email,
                    username: username,
                    password: hashedPassword,
                  });
                  if (user) {
                    res.status(200).json({
                      token: generateJWT(user.id),
                    });
                  } else {
                    res.status(400).json({
                      message: "Žao nam je, uneti podaci nisu validni",
                    });
                  }
                } else {
                  res.status(400).json({
                    message:
                      "Žao nam je, uneta lozinka mora biti duža od 6 karaktera",
                  });
                }
              } else {
                res.status(400).json({ message: "Molimo vas unsite lozinku" });
              }
            } else {
              res.status(400).json({
                message: "Žao nam je, uneto korisničko ime već postoji",
              });
            }
          } else {
            res
              .status(400)
              .json({ message: "Molimo vas unesite korisničko ime" });
          }
        } else {
          res
            .status(400)
            .json({ message: "Žao nam je, uneta e-adresa već postoji" });
        }
      } else {
        res
          .status(400)
          .json({ message: "Molimo vas unesite validnu e-adresu" });
      }
    } else {
      res.status(400).json({ message: "Molimo vas unesite e-adresu" });
    }
  } else {
    res.status(400).json({ message: "Molimo vas unsite puno ime" });
  }
};

const isEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email, password: password });

  if (user) {
    res.status(200).json({
      id: user.id,
    });
  } else {
    res.status(400).json({ message: "Uneti podaci nisu validni" });
  }
};

export { generateUser, registerUser, loginUser };
