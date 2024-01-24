export interface IUser {
  [key: string]: {
    [key: string]: string | boolean
  };
}

export interface IUserKey {
  [key: string]: string
}

export const initialState: IUser = {
  // username: {
  //   value: "",
  //   error: "",
  // },
  // email: {
  //   value: "",
  //   error: "",
  // },
  // password: {
  //   value: "",
  //   error: "",
  // },
  user: {
    id: "",
    username: "",
    email: "",
    password: "",
    password2: ""
  },
  errors: {
    username: "",
    email: "",
    password: "",
    other: ""
  },
  isLoggedIn: {
    value: false,
    token: ""
  }
}
