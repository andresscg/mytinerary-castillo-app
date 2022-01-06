import axios from "axios";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

const usersActions = {
  signUp: (newUser) => {
    return async (dispatch, getState) => {
      let response = await axios.post(
        "https://mytinerary-castillo.herokuapp.com/api/users/signup",
        newUser
      );
      try {
        if (response.data.success) {
          // await AsyncStorage.setItem("token", response.data.response.token);
          dispatch({ type: "SIGN_IN", payload: response.data.response });
        }
        return response;
      } catch (err) {
        console.error(err);
      }
    };
  },
  signIn: (signUser) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.post(
          "https://mytinerary-castillo.herokuapp.com/api/users/signin",
          signUser
        );
        if (response.data.success) {
          // await AsyncStorage.setItem("token", response.data.response.token);
          dispatch({ type: "SIGN_IN", payload: response.data.response });
        }
        return response;
      } catch (err) {
        console.error(err);
      }
    };
  },
  signOut: () => {
    return (dispatch, getState) => {
      dispatch({ type: "SIGN_OUT" });
    };
  },
  signInLocalStorage: (token) => {
    return async (dispatch, getState) => {
      try {
        let response = await axios.get(
          "https://mytinerary-castillo.herokuapp.com/api/verifyToken",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        dispatch({
          type: "SIGN_IN",
          payload: {
            token,
            firstName: response.data.firstName,
            photoUrl: response.data.photoUrl,
            _id: response.data._id,
          },
        });
      } catch (err) {
        console.error(err);
      }
    };
  },
};

export default usersActions;
