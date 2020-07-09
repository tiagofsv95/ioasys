import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  investor_name: string;
  email: string;
}

interface Token {
  token: string;
  client: string;
  uid: string;
}

interface AuthState {
  token: Token;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  token: Token;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ioasys:token');
    const user = localStorage.getItem('@ioasys:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        token: JSON.parse(token),
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users/auth/sign_in', {
      email,
      password,
    });

    const { client, uid } = response.headers;

    const token = {
      token: response.headers['access-token'],
      client,
      uid,
    };
    const user = response.data.investor;

    localStorage.setItem('@ioasys:token', JSON.stringify(token));
    localStorage.setItem('@ioasys:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ user, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ioasys:token');
    localStorage.removeItem('@ioasys:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, token: data.token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
