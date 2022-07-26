import React from 'react';
import { useState } from 'react';
import { students as studentsData } from 'data/students';

export const StudentsContext = React.createContext({
  students: [],
  handleAddStudent: () => {},
  deleteStudent: () => {},
});

const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState(studentsData);

  const deleteStudent = (name) => {
    const filteredStudents = students.filter((student) => student.name !== name);
    setStudents(filteredStudents);
  };

  const handleAddStudent = (formValues) => {
    const newStudent = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setStudents([newStudent, ...students]);
  };
  return (
    <StudentsContext.Provider
      value={{
        students,
        handleAddStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsProvider;
