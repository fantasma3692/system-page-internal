import { supabase } from "./supabase.config";

export async function MostrarAnimaciones(p) {

  try {
    const { data,count } = await supabase
      .from("animacionescss")
      .select(`
      *,
      categorias ( color)`)
      .eq("idcategoria", p.idcategoria)
      .order("id", { ascending: false });
     
    return data;
  } catch (error) {}
}
