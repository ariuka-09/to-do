export function Button(props) {
  const { color, text, givenFunction } = props;
  return (
    <div
      onClick={givenFunction}
      className={`px-4 cursor-pointer py-2 ${color} rounded w-fit  ${
        color == "bg-[#3C82F6]" ? "text-white" : "text-black"
      }`}
    >
      <p className="text-[14px] items-middle h-fit">{text}</p>
    </div>
  );
}
