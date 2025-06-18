import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yhmykbydfhplhngpwnll.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobXlrYnlkZmhwbGhuZ3B3bmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0OTA1OTYsImV4cCI6MjA2MDA2NjU5Nn0.TQNoXmsnhGuJti0ecsKmcMkcJqZq6ETSeLoSIOsfun4";

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
