export async function getUserOrders(id:any) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/orders/user/${id}`,
      {
        cache: "no-store", 
      }
    );

    if (!res.ok) throw new Error("Failed to fetch orders");

    const data = await res.json();

    return data; // فيها array
  } catch (error) {
    console.log(error);
    return [];
  }
}


