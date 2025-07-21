// User Types
export interface User {
  id: string;
  email: string;
  username: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
  phone?: string;
  is_verified: boolean;
  notification_preferences: NotificationPreferences;
}

export interface NotificationPreferences {
  email_notifications: boolean;
  push_notifications: boolean;
  bid_alerts: boolean;
  auction_updates: boolean;
  marketing_emails: boolean;
}

// Auction Types
export interface Auction {
  id: string;
  title: string;
  description: string;
  images: string[];
  starting_price: number;
  current_price: number;
  bid_increment: number;
  reserve_price?: number;
  start_time: string;
  end_time: string;
  status: AuctionStatus;
  category_id: string;
  seller_id: string;
  winner_id?: string;
  view_count: number;
  bid_count: number;
  created_at: string;
  updated_at: string;
  tags: string[];
  location?: Location;
}

export enum AuctionStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  ACTIVE = 'active',
  ENDED = 'ended',
  SOLD = 'sold',
  CANCELLED = 'cancelled',
}

// Bid Types
export interface Bid {
  id: string;
  auction_id: string;
  bidder_id: string;
  amount: number;
  is_auto_bid: boolean;
  max_auto_bid?: number;
  created_at: string;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  parent_id?: string;
  description?: string;
  item_count: number;
}

// Location Types
export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
}

// Message Types
export interface Message {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  is_read: boolean;
  created_at: string;
  attachments?: MessageAttachment[];
}

export interface MessageAttachment {
  id: string;
  type: 'image' | 'document';
  url: string;
  name: string;
  size: number;
}

export interface Conversation {
  id: string;
  participant_ids: string[];
  last_message?: Message;
  unread_count: number;
  created_at: string;
  updated_at: string;
}

// Payment Types
export interface PaymentMethod {
  id: string;
  user_id: string;
  type: 'card' | 'bank_account' | 'paypal';
  last_four: string;
  brand?: string;
  is_default: boolean;
  created_at: string;
}

export interface Transaction {
  id: string;
  type: 'purchase' | 'sale' | 'withdrawal' | 'deposit';
  amount: number;
  fee: number;
  net_amount: number;
  status: 'pending' | 'completed' | 'failed';
  auction_id?: string;
  user_id: string;
  payment_method_id?: string;
  created_at: string;
  completed_at?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
  success: boolean;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  has_more: boolean;
}

// Store Types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
}

export interface ThemeState {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

// Navigation Types
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  AuctionDetails: { auctionId: string };
  CreateAuction: undefined;
  UserProfile: { userId: string };
  Messages: undefined;
  Conversation: { conversationId: string };
  Settings: undefined;
  Search: { query?: string; categoryId?: string };
};

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  VerifyEmail: { email: string };
};

export type MainTabParamList = {
  Home: undefined;
  Categories: undefined;
  Sell: undefined;
  Activity: undefined;
  Profile: undefined;
};