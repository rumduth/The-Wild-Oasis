import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded.");
  }
  return cabins;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted.");
  }
}

export async function createEditCabin(newCabin, id) {
  const hasFileImage = newCabin.image instanceof File;

  let imageName = "";
  let imagePath = "";
  if (hasFileImage) {
    imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images//${imageName}`;
  } else imagePath = newCabin.image;
  //1. Create cabin
  let query = supabase.from("cabins");

  //A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //B) EDIT
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created.");
  }

  //2. Upload image
  if (hasFileImage) {
    const cabinImageFile = newCabin.image;
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, cabinImageFile, {
        cacheControl: "3600",
        upsert: false,
      });

    // 3. If there is an error uploading the image
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded and the cabin could not be created."
      );
    }
  }
}
