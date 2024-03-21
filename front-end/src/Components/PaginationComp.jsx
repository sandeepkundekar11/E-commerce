const PaginationComp = ({ PaginationArr, onTabClick, prePage, nextPage }) => {
  return (
    <div className="flex w-4/5 float-right mt-5 mb-5">
      <div class=" w-full flex flex-wrap justify-center">
        <div
          onClick={prePage}
          class="pagination-prev mr-2 flex h-11 w-16 items-center border
            p-2 transition-colors duration-300 ease-in-out hover:bg-gray-200"
        >
          &laquo; Prev
        </div>
        {PaginationArr.map((ele, index) => {
          return (
            <div
              onClick={() => {
                onTabClick(ele);
              }}
              key={index}
              class={`pagination-item pagination-number mr-2 flex h-11 w-16 items-center justify-center border
                    p-2 transition-colors duration-300 ease-in-out hover:bg-blue-500 ${ele.color}`}
            >
              {ele.tab + 1}
            </div>
          );
        })}
        <div
          onClick={nextPage}
          class="pagination-item pagination-next flex h-11 w-16 cursor-pointer items-center
            border p-2 transition-colors duration-300 ease-in-out hover:bg-gray-200"
        >
          Next &raquo;
        </div>
      </div>
    </div>
  );
};
export default PaginationComp;
