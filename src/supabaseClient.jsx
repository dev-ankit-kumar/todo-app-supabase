import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://gzwqeuwhccnhkaknijle.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6d3FldXdoY2NuaGtha25pamxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwNTA5NjksImV4cCI6MTk5NDYyNjk2OX0.qDDeHw4fdNu9zX1t7EDRu4RybV_2PVZJg3MC4EhK85g')
export default supabase;