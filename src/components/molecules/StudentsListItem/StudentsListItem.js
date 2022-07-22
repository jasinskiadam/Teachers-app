import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Average } from 'components/atoms/Average/Average';
import { StyledInfo, Wrapper } from './StudentsListItem.styles';

const StudentsListItem = ({ deleteStudent, studentData: { average, name, attendance } }) => (
  <Wrapper>
    <Average value={average}>{average}</Average>
    <StyledInfo>
      <p>{name}</p>
      <p>{attendance}</p>
    </StyledInfo>
    <Button onClick={() => deleteStudent(name)} />
  </Wrapper>
);

StudentsListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default StudentsListItem;
