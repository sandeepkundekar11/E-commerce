const Loader = () => {
  return (
    <div class="loader flex fixed top-0 bottom-0 flex-col justify-center items-center w-screen h-screen">
      <div class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-4 border-gray-900"></div>
      <h1 class="mt-2 text-lg font-medium text-center">Loading...</h1>
    </div>
  );
};

export default Loader;
