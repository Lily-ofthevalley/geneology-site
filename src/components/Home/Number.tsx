interface Props {
  Name: string;
  Number: number;
}

const Number = ({ Name, Number }: Props) => {
  return (
    <div className="bg-indigo-200 p-5 rounded-2xl flex flex-col text-center">
      <p className="text-2xl">{Name}</p>
      <p className="text-2xl">{Number}</p>
    </div>
  );
};

export default Number;
