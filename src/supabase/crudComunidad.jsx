import { supabase } from "./supabase.config";
export async function MostrarComunidad() { 
  try {
    const { data } = await supabase
      .from("comunidad")
      .select()

    return data;
  } catch (error) {
    
  }

}
