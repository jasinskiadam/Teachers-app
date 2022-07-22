import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { Wrapper, StyledList, StyledTitle } from './StudentsList.styles';

const StudentsList = ({ students, deleteStudent }) => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
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
