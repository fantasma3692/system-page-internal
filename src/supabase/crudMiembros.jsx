import { supabase } from "./supabase.config";
export async function MostrarMiembros() {
  try {
    const { data } = await supabase
      .from("miembros")
      .select()
      .order("id", { ascending: false });
    return data;
  } catch (error) {}
}
