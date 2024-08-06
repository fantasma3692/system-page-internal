import { supabase } from "./supabase.config";
export async function MostrarFondosSvg() { 
  try {
    const { data } = await supabase
      .from("fondossvg")
      .select()
      .order("id", { ascending: true })
    return data;
  } catch (error) {
    
  }

}
