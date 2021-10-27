import {
  createContext, useCallback, useState, useContext,
} from 'react';
import api from '../../services/api';
import {
  User, AuthContextData, AuthState, keyStorage,
} from './types';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(keyStorage.token);
    const user = localStorage.getItem(keyStorage.user);

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const sigIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem(keyStorage.token, token);
    localStorage.setItem(keyStorage.user, JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const sigOut = useCallback(() => {
    localStorage.removeItem(keyStorage.token);
    localStorage.removeItem(keyStorage.user);

    setData({} as AuthState);
  }, []);

  const updatedAvatar = useCallback(async (user: User) => {
    localStorage.setItem(keyStorage.user, JSON.stringify(user));

    setData({
      token: data.token,
      user,
    });
  }, [setData, data.token]);

  return (
    <AuthContext.Provider value={{
      user: data.user, sigIn, sigOut, updatedAvatar,
    }}
    >
      { children }
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a Authentication');
  }

  return context;
}

export { AuthProvider, useAuth };
