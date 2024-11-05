import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nqfmsrpuynenjhxaoapj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xZm1zcnB1eW5lbmpoeGFvYXBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NjgyODUsImV4cCI6MjA0NjI0NDI4NX0.0H5zcNdVBU5xNkHQ1hcCHxjlTqbQnfoMkt5ytBtR96Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
