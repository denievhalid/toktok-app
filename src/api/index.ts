import { createClient } from "@supabase/supabase-js";

export const api = createClient(
  "https://pfohmbjatediowazjfpu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmb2htYmphdGVkaW93YXpqZnB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3MjAzNTMsImV4cCI6MjA1MDI5NjM1M30.C_2GouxNNvuZrvjZFO-B1AfrodRwVkffW89XoWzet_8",
);

