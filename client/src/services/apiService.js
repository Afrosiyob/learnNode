import axios from "axios";
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export const fetchAuthLogin = async (req) => {
  try {
    await delay(2000);
    const response = await axios.post("/api/auth/login", req);
    return { response };
  } catch (error) {
    return { error };
  }
};
