import React from "react";
import { BsShieldLockFill } from "react-icons/bs";

//redux
import { useSelector } from "react-redux";

// razorpay
import Razorpay from "razorpay";

// components
import FoodItem from "../components/Cart/FoodItem";
import AddressList from "../components/Checkout/AddressList";

function CheckoutPage() {
  const address = [
    {
      name: "Home",
      address: "Door #125, 2nd floor, 6th Main St, JP Nagar, Bangalore",
    },
    {
      name: "Work",
      address: "Building #35, 13th floor, 3rd Main St, Electronic City, Bangalore",
    },
    {
      name: "Other",
      address: "Door #243, 6th floor, 12th Main St, Shivajinagar, Bangalore",
    },
  ];

  const reduxStateCart = useSelector((globalState) => globalState.cart.cart);
  const reduxStateUser = useSelector(
    (globalState) => globalState.user.user.user
  );

  const payNow = () => {
    let options = {
      key: "rzp_test_qdQDL6ny4nNwkG",
      amount:
        reduxStateCart.reduce(
          (total, current) => total + current.totalPrice,
          0
        ) * 100,
      currency: "INR",
      name: "Zomato",
      description: "Food Delivery Service",
      image:
        "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
      handler: (data) => {
        alert("Payment Successful");
        console.log(data);
      },
      prefill: {
        name: reduxStateUser.fullName,
        email: reduxStateUser.email,
      },
      theme: {
        color: "#e23744",
      },
    };

    let razorPay = new window.Razorpay(options);
    razorPay.open();
  };

  return (
    <div className="my-3 flex flex-col gap-3 items-center">
      <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
      <div className="w-full md:w-3/5 rounded-lg py-3 shadow-lg bg-white flex flex-col items-center">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="flex w-full flex-col gap-2 items-center">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="flex w-full flex-col items-center text-gray-400">
            <h4>Zomato</h4>
          </div>
          <div className="my-4 h-32 overflow-y-scroll px-4 flex flex-col gap-2 w-full md:w-3/5">
            {reduxStateCart?.map((food) => (
              <FoodItem key={food._id} {...food} />
            ))}
          </div>
          <div className="flex flex-col gap-3 w-full md:w-3/5 items-center">
            <h4 className="text-xl font-semibold">Choose Address</h4>
            <AddressList address={address} />
          </div>
        </div>
        <button
          onClick={payNow}
          className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg"
        >
          Pay Securely <BsShieldLockFill />
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
