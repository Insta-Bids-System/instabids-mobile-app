import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '@services/supabase';
import type { User, AuthState } from '@types/index';

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true });
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
          });

          if (error) throw error;

          if (data.user) {
            // Fetch user profile
            const { data: profile } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', data.user.id)
              .single();

            const user: User = {
              id: data.user.id,
              email: data.user.email!,
              username: profile?.username || '',
              full_name: profile?.full_name,
              avatar_url: profile?.avatar_url,
              bio: profile?.bio,
              created_at: data.user.created_at,
              updated_at: profile?.updated_at || data.user.created_at,
              is_verified: data.user.email_confirmed_at !== null,
              notification_preferences: profile?.notification_preferences || {
                email_notifications: true,
                push_notifications: true,
                bid_alerts: true,
                auction_updates: true,
                marketing_emails: false,
              },
            };

            set({ user, isAuthenticated: true });
          }
        } catch (error) {
          console.error('Login error:', error);
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      signup: async (email: string, password: string, username: string) => {
        set({ isLoading: true });
        try {
          // Check if username is available
          const { data: existingUser } = await supabase
            .from('profiles')
            .select('id')
            .eq('username', username)
            .single();

          if (existingUser) {
            throw new Error('Username already taken');
          }

          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                username,
              },
            },
          });

          if (error) throw error;

          // Note: User needs to verify email before they can login
          // You might want to show a message to check their email
        } catch (error) {
          console.error('Signup error:', error);
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      logout: async () => {
        set({ isLoading: true });
        try {
          const { error } = await supabase.auth.signOut();
          if (error) throw error;
          set({ user: null, isAuthenticated: false });
        } catch (error) {
          console.error('Logout error:', error);
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      updateProfile: async (updates: Partial<User>) => {
        const currentUser = get().user;
        if (!currentUser) throw new Error('No user logged in');

        set({ isLoading: true });
        try {
          const { error } = await supabase
            .from('profiles')
            .update(updates)
            .eq('id', currentUser.id);

          if (error) throw error;

          set({ user: { ...currentUser, ...updates } });
        } catch (error) {
          console.error('Update profile error:', error);
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);