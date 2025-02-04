import { createClient } from '@supabase/supabase-js';

// استبدل القيم التالية بـ Supabase URL و Public Key الخاصين بمشروعك
const supabaseUrl = 'https://dglsqpvefnuqeyyxtchl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnbHNxcHZlZm51cWV5eXh0Y2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2MTE5NjEsImV4cCI6MjA1NDE4Nzk2MX0.M_vuHvH3zUp3r_eqJfNhnHcfEvH9Vz2lHpq8jMBMyZU';

export const supabase = createClient(supabaseUrl, supabaseKey);