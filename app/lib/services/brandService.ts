
export async function getAllBrand() {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch brands: ${res.status} ${res.statusText}`);
    }

    const { data } = await res.json();

    // لو مفيش data → ارجع array فاضي
    return data || [];
  } catch (error) {
    console.error("getAllBrand error:", error);
    return []; // بدل ما ترجع undefined
  }
}
