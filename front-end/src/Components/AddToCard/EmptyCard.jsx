import { useNavigate } from "react-router-dom";

const EmptyCard = () => {
  const Navigate = useNavigate();
  return (
    <div class="EmptCard h-3/5 md:w-3/4">
      <div class="flex h-12 w-full items-center justify-center bg-white">
        <h1 class="-mb-3 w-60 border-b-2 border-b-blue-400 pb-1 text-center text-xl font-medium text-blue-500">
          E-Shop
        </h1>
      </div>
      <div class="mt-2 flex min-h-96 w-full flex-col items-center justify-center bg-white">
        <img
          class="h-64 w-80"
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt=""
        />
        <h1 class="text-xl font-semibold">Your card is empty?</h1>
        <p class="mt-2 text-sm font-medium">Add items to it now</p>
        <button
          class="mt-3 h-11 w-48 rounded bg-blue-500 font-medium text-white hover:bg-blue-700"
          onClick={() => {
            Navigate("/home");
          }}
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

export default EmptyCard;
