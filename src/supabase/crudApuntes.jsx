import { supabase } from "./supabase.config";
export async function MostrarApuntes(p) {
  try {
    const { data } = await supabase
      .from("apuntes")
      .select()
      .eq("etiquetas",p.etiquetas)
      
     
      .order("id", { ascending: true });
    return data;
  } catch (error) {}
}
