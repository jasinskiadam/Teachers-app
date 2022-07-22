import { students } from 'data/students';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { Wrapper, StyledList } from './StudentsList.styles';
import { useState, useEffect } from 'react';

const [ students, setStudents ] = useState([]);

const StudentsList = () => (
  <Wrapper>
    <StyledList>
      {students.map((studentData, i) => (
        <StudentsListItem
          index={i}
          key={studentData.name}
          studentData={studentData}
        />
      ))}
    </StyledList>
  </Wrapper>
);

export default StudentsList;
