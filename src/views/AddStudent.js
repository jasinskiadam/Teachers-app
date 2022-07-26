import FormField from 'components/molecules/FormField/FormField';
import { useState, useContext } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { StudentsContext } from 'providers/StudentsProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const AddStudent = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddStudent } = useContext(StudentsContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitStudent = (e) => {
    e.preventDefault();
    handleAddStudent(formValues);
    setFormValues(initialFormState);
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitStudent}>
      <Title>Add new student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddStudent;
