export type Gender = "male" | "female" | "other";

export interface LoginRequest {
  username: string;
  password?: string;
}

export interface RegisterRequest {
  username: string;
  fullName: string;
  email: string;
  password?: string;
  address: string;
  dateOfBirth: string;
  gender: Gender;
  phone: string;
}

export interface OAuthRequest {
  token: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  exp: number;
}
