import axios from "axios";

const base_url = "https://rajasthan-cwa6g4f5ddf8d2dn.centralindia-01.azurewebsites.net";

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export async function register(user) {
  try {
    const response = await axios.post(
      `${base_url}/api/v1/user/register`,
      user,
      config
    );

    if (response.data.success) {
      return {
        success: response.data.success,
        message: "Registration Success",
      };
    } else {
      return {
        success: false,
        message: "Registration Failed ",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Registration Failed ",
    };
  }
}

export async function login(user) {
  try {
    console.log("htis is login ", base_url);

    const response = await axios.post(
      `${base_url}/api/v1/user/login`,
      user,
      config
    );

    if (response.data.success) {
      return {
        success: response.data.success,
        message: "Registration Success",
        resUser: response.data.user,
      };
    } else {
      return {
        success: false,
        message: "Registration Failed ",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Registration Failed ",
    };
  }
}

export async function getUserDetails() {
  try {
    const response = await axios.get(`${base_url}/api/v1/user/`, config);

    if (response.data.success) {
      return {
        success: response.data.success,
        message: "Registration Success",
        resUser: response.data.user,
      };
    } else {
      return {
        success: false,
        message: "Registration Failed ",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Registration Failed ",
    };
  }
}

export async function getTypingTests() {
  try {
    const response = await axios.get(`${base_url}/api/v1/typingTests/`, config);

    if (response.data.success) {
      return {
        success: response.data.success,
        message: "Registration Success",
        resUser: response.data.user,
      };
    } else {
      return {
        success: false,
        message: "Registration Failed ",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Registration Failed ",
    };
  }
}

export async function getTestDetails(id) {
  try {
    const response = await axios.get(
      `${base_url}/api/v1/typingTests/${id}`,
      config
    );
    console.log("response", response);
    if (response.data.success) {
      return {
        success: response.data.success,
        test: response.data.test,
      };
    } else {
      return {
        success: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "fetching details failed ",
    };
  }
}

export async function logout() {
  try {
    const response = await axios.delete(
      `${base_url}/api/v1/user/logout`,
      config
    );

    if (response.data.success) {
      return {
        success: true,
        message: "Logout Success",
      };
    } else {
      return {
        success: false,
        message: "Logout Failed",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Logout Failed",
    };
  }
}
