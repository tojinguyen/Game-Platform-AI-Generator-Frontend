export type Gender = "male" | "female" | "other";

export interface LoginRequest {
  email: string;
  password?: string;
}

export interface RegisterRequest {
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
