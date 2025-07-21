import React, { createContext, useContext, useEffect } from 'react';
import { supabase } from '@services/supabase';
import { useAuthStore } from '@store/authStore';

interface AuthContextType {
  // Add any additional auth context values here
}

const AuthContext = createContext<AuthContextType>({});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useAuthStore();

  useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        // Session exists, update store
        useAuthStore.getState().login(
          session.user.email!,
          '' // Password not needed for existing session
        );
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        // User signed in
        useAuthStore.getState().login(
          session.user.email!,
          ''
        );
      } else {
        // User signed out
        useAuthStore.getState().logout();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};