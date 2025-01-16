interface HelloTextProps {
  text: string;
}
function HelloText({ text }: HelloTextProps) {
  return (
    <div className="m-10">
      <h1 className="text-6xl">{text}</h1>
    </div>
  );
}
export default HelloText;
