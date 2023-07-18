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
    if (searchTerm === "") {
      setFilteredRows(allRows);
    } else {
      const filteredRows = allRows.filter((row) => {
        const containsTitle = row.title.includes(searchTerm);
        const containsCode = row.code.includes(searchTerm);
        return containsCode || containsTitle;
      });
      setFilteredRows(filteredRows);
    }
  }, [searchTerm]);

  return {
    onChange,
    value: searchTerm,
  };
};

export default useSearchTable;
