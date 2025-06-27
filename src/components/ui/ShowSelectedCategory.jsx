const ShowSelectedCategory = ({ sortingType }) => {
  const styles = "bg-blue-100 border border-blue-500 px-6 py-1 rounded-md";

  return (
    <div className="flex items-center justify-center">
      {sortingType && sortingType === "asc" ? (
        <div className={`${styles}`}>
          Selected: <span className="font-bold">Ascending</span>
        </div>
      ) : sortingType && sortingType === "desc" ? (
        <div className={`${styles}`}>
          Selected: <span className="font-bold">Descending</span>
        </div>
      ) : sortingType && sortingType === "dateAsc" ? (
        <div className={`${styles}`}>
          Selected: <span className="font-bold">Earliest</span>
        </div>
      ) : sortingType && sortingType === "dateDesc" ? (
        <div className={`${styles}`}>
          Selected: <span className="font-bold">Latest</span>
        </div>
      ) : null}
    </div>
  );
};

export default ShowSelectedCategory;
