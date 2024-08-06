import { supabase } from "./supabase.config";
export async function MostrarCards() { 
  try {
    const { data } = await supabase
      .from("cardsvip")
      .select()
      .order("id", { ascending: true })
    return data;
  } catch (error) {
    
  }

}
