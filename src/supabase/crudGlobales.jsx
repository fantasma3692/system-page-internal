import { supabase } from "./supabase.config";
export async function MostrarGlobales() { 
  try {
    const { data } = await supabase
      .from("globales")
      .select()
      .maybeSingle();
    return data;
  } catch (error) {
    
  }

}
