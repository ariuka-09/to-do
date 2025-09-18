export function Button(props) {
  const { color, text, givenFunction, filterType } = props;
  return (
    <div
      onClick={givenFunction}
      className={`px-4 cursor-pointer py-2  rounded w-fit ${
        text == (filterType || "Add")
          ? "bg-[#3C82F6] text-white "
          : "bg-[#F3F4F6] "
      }`}
    >
      <p className="text-[14px] items-middle h-fit">{text}</p>
    </div>
  );
}
