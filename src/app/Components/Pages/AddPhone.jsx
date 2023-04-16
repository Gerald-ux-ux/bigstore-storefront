import Link from "next/link";
import React from "react";


function AddPhone() {
  return (
    <main className="items-center justify-center">
      <div className=" items-center p-20 shadow-lg rounded-3xl">
        <div className="items-center justify-center">
          <h4 className="text-center font-semibold text-2xl">
            What’s your phone number?
          </h4>
          <h6 className="text-base">
            Type in your phone number to log in or create a new account.
          </h6>
        </div>
        <div className="flex flex-row py-4 justify-center items-center">
          <div className="bg-[#D9E0E5] p-6 rounded-full rounded-e-none ">
            <h6 className="justify-center items-center">+254</h6>
          </div>
          <input
            required
            type="number"
            className="bg-[#D9E0E5] rounded-full rounded-s-none mx-2 p-6 w-full"
          />
        </div>
        <div className="flex flex-row pb-4">
      
          <p className="text-sm">
            I have read and agree to the{" "}
            <Link href="/terms" className="text-[#2F80ED]">
              Terms and conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#2F80ED]">
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="mx-28">
          <Link href="/phoneotp">
            <button className="bg-[#EF363A] text-white p-4 rounded-full w-full">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default AddPhone;
