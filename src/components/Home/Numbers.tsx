import Number from "./Number";

const Numbers = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-3 mt-6">
      <Number Name="Mensen" Number={0} />
      <Number Name="Achternamen" Number={0} />
      <Number Name="Graven" Number={0} />
      <Number Name="Documenten" Number={0} />
    </div>
  );
};

export default Numbers;
