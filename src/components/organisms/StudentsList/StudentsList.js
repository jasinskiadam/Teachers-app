import { students as studentData } from 'data/students';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { Wrapper, StyledList } from './StudentsList.styles';
import { useState } from 'react';

const StudentsList = () => {
  const [students, setStudents] = useState(studentData);

  const deleteStudent = (name) => {
    const filteredStudents = students.filter((student) => student.name !== name);
    setStudents(filteredStudents);
  };

  return (
    <Wrapper>
      <StyledList>
        {students.map((studentData) => (
          <StudentsListItem deleteStudent={deleteStudent} key={studentData.name} studentData={studentData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default StudentsList;
