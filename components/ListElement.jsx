export function ListElement(props) {
  const { element, handleDelete, checked, completed } = props;
  return (
    <div className="bg-[#F9FAFB] p-4 w-[313px] ">
      <div className="w-full h-[30px] bg-white flex gap-3 items-center px-4">
        <div className="flex w-full justify-between">
          <div className="flex gap-4">
            <input type="checkbox" onClick={completed(element.id)} />
            <p className={checked ? "text-[black]" : ""}>{element.text}</p>
          </div>
          <div
            className="text-[red] cursor-pointer"
            onClick={() => {
              handleDelete(element.id);
            }}
          >
            delete
          </div>
        </div>
      </div>
    </div>
  );
}
