import { students as studentData } from 'data/students';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { Wrapper, StyledList, StyledTitle } from './StudentsList.styles';
import { useState } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const StudentsList = () => {
  const [students, setStudents] = useState(studentData);

  const deleteStudent = (name) => {
    const filteredStudents = students.filter((student) => student.name !== name);
    setStudents(filteredStudents);
  };

  return (
    <>
      <Wrapper>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" />
        <FormField label="Attendence" id="name" name="name" />
        <FormField label="Average" id="name" name="name" />
        <Button>Add</Button>
      </Wrapper>
      <Wrapper>
        <StyledList>
          {students.map((studentData) => (
            <StudentsListItem deleteStudent={deleteStudent} key={studentData.name} studentData={studentData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default StudentsList;
