import { supabase } from "./supabase.config";
export async function MostrarCategorias() { 
  try {
    const { data } = await supabase
      .from("categorias")
      .select()
      .order("id", { ascending: true })
    return data;
  } catch (error) {
    
  }

}
