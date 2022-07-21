import { students } from 'data/students';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { Wrapper, StyledList } from './StudentsList.styles';

const StudentsList = () => (
  <Wrapper>
    <StyledList>
      {students.map((studentData) => (
        <StudentsListItem studentData={studentData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default StudentsList;
