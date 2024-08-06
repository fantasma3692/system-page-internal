import { supabase } from "./supabase.config";
export async function Mostrarcomponentes() { 
  try {
    const { data } = await supabase
      .from("componentes")
      .select()
      .order("id", { ascending: false })
    return data;
  } catch (error) {
    
  }

}
