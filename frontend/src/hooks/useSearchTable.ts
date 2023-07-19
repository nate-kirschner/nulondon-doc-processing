import { useEffect, useState } from "react";
import Course from "../types/courses";

interface SearchTable {
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  value: string;
}

const useSearchTable = (
  allRows: Course[],
  setFilteredRows: React.Dispatch<React.SetStateAction<Course[]>>
): SearchTable => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredRows = allRows.filter((row) => {
      const containsTitle = row.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const containsCode = row.code
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return containsCode || containsTitle;
    });
    setFilteredRows(searchTerm === "" ? allRows : filteredRows);
  }, [searchTerm]);

  return {
    onChange,
    value: searchTerm,
  };
};

export default useSearchTable;
