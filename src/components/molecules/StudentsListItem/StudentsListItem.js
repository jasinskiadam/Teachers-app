import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Average } from 'components/atoms/Average/Average';
import { StyledInfo, Wrapper } from './StudentsListItem.styles';

const showIndex = (index) => alert(`This is student #${index + 1}`);

const StudentsListItem = ({
  index,
  studentData: { average, name, attendance },
}) => (
  <Wrapper>
    <Average value={average}>{average}</Average>
    <StyledInfo>
      <p>{name}</p>
      <p>{attendance}</p>
    </StyledInfo>
    <Button onClick={() => showIndex(index)} />
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
