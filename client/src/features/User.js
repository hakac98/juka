import axios from "axios";
import Cookies from "js-cookie";

const generateUser = async () => {
  const uidRequest = await axios.get("http://localhost:5000/api/uid", {
    collection: "users",
  });
  const userId = uidRequest.data.id;
  await axios.post("http://localhost:5000/api/users/generate", {
    user_id: userId,
  });
  Cookies.set("userId", userId, { expires: 7, path: "/" });
  return userId;
};

const getUserId = async () => {
  var userId = Cookies.get("userId");
  if (!userId) {
    userId = await generateUser();
  }
  console.log("GET USER ID: ", userId);
  return userId;
};

export { generateUser, getUserId };
