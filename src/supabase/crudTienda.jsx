import { supabase } from "./supabase.config";
export async function MostrarTienda() {
  try {
    const { data } = await supabase
      .from("tienda")
      .select()
      .order("id", { ascending: false });
    return data;
  } catch (error) {}
}

export async function BuscarProductos(buscador) {
  try {
    const { data, error } = await supabase.rpc("buscarentienda", {
      buscador: buscador,
    });
    if (error) {
      console.log(error);
    }
    console.log(data);
    return data;
  } catch (error) {}
}
