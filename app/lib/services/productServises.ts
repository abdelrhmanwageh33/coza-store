
export async function getAllProduct(){
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`,{
cache: 'no-store',
    });
    if(!res.ok) return console.log(res.statusText)
    const {data} = await res.json()
return data
}
export async function productDetails(id:string){
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`,{

    });
    if(!res.ok) return console.log(res.statusText )
    const {data} = await res.json()
return data
}
