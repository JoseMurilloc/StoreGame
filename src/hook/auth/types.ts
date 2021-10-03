export interface User {
  id: string;
  name: string;
  avatar_url: string;
  email: string;
}

export interface AuthState {
  token: string;
  user: User;
}

interface Credentials {
  email: string;
  password: string;
}

export interface AuthContextData {
  user: User;

  sigIn(credentials: Credentials): Promise<void>;
  sigOut(): void;
  updatedAvatar(user: User): void;
}
