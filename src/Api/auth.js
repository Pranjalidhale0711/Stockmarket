import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export const handleSubmitSignIn = async (username, password) => {
  try {
    const res = await axios.post("http://localhost:3001/api/auth/signin", {
      username: username,
      password: password,
    });

    const { token } = res.data;
    localStorage.setItem("user", token);
    return { error: null };
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    console.log(errorMessage);
    return { error: errorMessage };
  }
};

export const handleSubmitSignUp = async (
  username,
  email,
  password,
  confirmPassword
) => {
  try {
    const res = await axios.post("http://localhost:3001/api/auth/signup", {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    return { error: null };
  } catch (error) {
    return { error: error?.response?.data?.message };
  }
};

export const getUser = async () => {
  try {
    const token = localStorage.getItem("user");
    const user_info = await axios.post(
      "http://localhost:3001/api/auth/fetchUser",
      {},
      { headers: { authorization: token ? `${token}` : " " } }
    );
    return { user: user_info, error: null };
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const getStock = async (stockName) => {
  const stock_name = stockName;
  const dateObj = new Date();
  dateObj.setDate(dateObj.getDate() - 1);

  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");
  let hours = dateObj.getHours().toString().padStart(2, "0");
  let minutes = dateObj.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  const dateObj2 = new Date();
  dateObj2.setDate(dateObj2.getDate() - 2);
  const year2 = dateObj2.getFullYear();
  const month2 = (dateObj2.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const day2 = dateObj2.getDate().toString().padStart(2, "0");

  const formattedDate2 = `${year2}-${month2}-${day2}`;

  let currentDate = `2024-06-07 14:30:00`;
  console.log(currentDate)

  try {
    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/historical-chart/1min/${stock_name}?from=${formattedDate2}&to=${formattedDate}&apikey=ucpqV91anbJoHZCiFMI7R3aQIB1kCJpj`
    );
    // console.log(response.data);
    const realTimeData = response.data.filter(
      (item) => item.date == currentDate
    );
    console.log("hiiii")
    console.log(realTimeData);
    return { stockInfo: realTimeData };
  } catch (e) {
    // console.log("Stock market is down at this moment");
    return { stockInfo: e };
  }
};

export const buyStock=()=>{
  
}