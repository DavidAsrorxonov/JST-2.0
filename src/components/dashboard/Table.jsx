import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = () => {
  return (
    <div className="overflow-x-auto flex flex-col justify-center items-center mx-6">
      <div className="min-w-full border border-white/30 rounded-2xl overflow-hidden shadow-md mt-6 bg-[#171717]">
        <table className="w-full table-auto">
          <thead className="bg-[#1f1f1f] text-gray-300 text-sm uppercase tracking-wider">
            <TableHead />
          </thead>
          <tbody className="text-center text-gray-200 text-base divide-y divide-white/10">
            <TableBody />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
