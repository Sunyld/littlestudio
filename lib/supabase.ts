import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Verifica se as credenciais do Supabase estão configuradas
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey;

// Cria o cliente apenas se as credenciais estiverem configuradas
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Função helper para verificar se o Supabase está disponível
export const isSupabaseAvailable = () => isSupabaseConfigured;

// Types
export interface Service {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  image_url: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo_url: string;
}

export interface BudgetRequest {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service_type: string;
  event_date?: string;
  message: string;
  created_at?: string;
}

