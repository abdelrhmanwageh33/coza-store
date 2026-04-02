import Header from '@/app/_components/Shared/Header/Header';
import { getUserOrders } from '@/app/lib/services/order';
import { getTokenUser } from '@/app/lib/services/Servir-utis';
import { jwtDecode } from "jwt-decode"; 
import OrdersCard from './-components/OrderCard';
interface JwtPayload {
  id?: string;
  name?: string;
  role?: string;
  iat?: number;
  exp?: number;
}

export default async function Page() {


  const finalToken = await getTokenUser();

  let userId = null;

  if (finalToken) {
    const decoded = jwtDecode<JwtPayload>(finalToken);
    console.log("Decoded:", decoded);

    userId = decoded.id; // 🔥 هنا جبت الـ id

    
  }
const res = await getUserOrders(userId)
console.log(res);

  return (
<>
<Header header='order info'/>
<OrdersCard orders={res} />

</>
  );
}