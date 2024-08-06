import { supabase } from "./supabase.config";
export async function MostrarCursos(p) { 
  try {
    const { data } = await supabase
      .from("cursos")
      .select()
      .ilike("etiquetas","%"+ p.etiquetas+"%")
      .order("id", { ascending: false })
    return data;
  } catch (error) {
    
  }

}
export async function MostrarCursosPreEstreno(p) { 
  try {
    const { data } = await supabase
      .from("cursos")
      .select()
      .eq("etiquetas", p.etiquetas)
      .order("id", { ascending: false })
    return data;
  } catch (error) {
    
  }

}

