import AddPhone from "./Components/Pages/AddPhone";
import PhoneOtp from "./Components/Pages/PhoneOtp";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center ">
      <div>
        <AddPhone />
        <PhoneOtp/>
      </div>
    </main>
  );
}
