export interface User {
  id: string;
  name: string;
  avatarUrl: string;
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

export const keyStorage = {
  user: '@StoreGame:user',
  token: '@StoreGame:token',
};

export interface AuthContextData {
  user: User;

  sigIn(credentials: Credentials): Promise<void>;
  sigOut(): void;
  updatedAvatar(user: User): void;
}
