const ShowSelectedCategory = ({ selected }) => {
  const styles = "bg-blue-100 border border-blue-500 px-6 py-1 rounded-md";

  return (
    <div className="flex items-center justify-center">
      {selected && selected === "asc" ? (
        <div className={`${styles}`}>
          Selected: <span className="font-bold">Ascending</span>
        </div>
      ) : selected && selected === "desc" ? (
        <div className={`${styles}`}>
          Selected: <span className="font-bold">Descending</span>
        </div>
      ) : selected && selected === "dateAsc" ? (
        <div className={`${styles}`}>
          Selected: <span className="font-bold">Earliest</span>
        </div>
      ) : selected && selected === "dateDesc" ? (
        <div className={`${styles}`}>
          Selected: <span className="font-bold">Latest</span>
        </div>
      ) : selected && selected !== "all" ? (
        <div className={`${styles}`}>
          Selected: <span className="font-bold">{selected}</span>
        </div>
      ) : null}
    </div>
  );
};

export default ShowSelectedCategory;
