const Loader = () => {
  return (
    <div class="loader flex fixed top-0 bottom-0 flex-col justify-center items-center w-screen h-screen">
      <div class="flex flex-col justify-center z-50">
        <img class="animate-spin" width="60" height="60" src="https://img.icons8.com/color/48/loading-sign.png" alt="loading-sign" />
        <h1 class="-ml-4 mt-3 animate-pulse text-2xl font-bold ease-linear">Loading ...</h1>
      </div>
    </div>
  );
};

export default Loader;
