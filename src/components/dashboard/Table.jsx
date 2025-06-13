import TableHead from "./TableHead";
import TableBody from "./TableBody";
import SaveButton from "./SaveButton";

const Table = () => {
  return (
    <div className="overflow-x-auto flex flex-col justify-center items-center mx-10">
      <div className="min-w-full border-2 border-blue-200 border-b-0 rounded-t-lg overflow-hidden shadow-sm mt-3">
        <table className="w-full table-auto">
          <thead className="text-black">
            <TableHead />
          </thead>
          <tbody className="text-center text-black text-lg">
            <TableBody />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
