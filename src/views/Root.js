import { GlobalStyle } from 'assets/styles/GlobalStyles';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { students as studentsData } from 'data/students';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [students, setStudents] = useState(studentsData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteStudent = (name) => {
    const filteredStudents = students.filter((student) => student.name !== name);
    setStudents(filteredStudents);
  };

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setStudents([newStudent, ...students]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-student">Add student</Link>
          </nav>
          <Routes>
            <Route
              path="/add-student"
              element={
                <Form
                  formValues={formValues}
                  handleAddStudent={handleAddStudent}
                  handleInputChange={handleInputChange}
                />
              }
            />
            <Route path="/" element={<StudentsList deleteStudent={deleteStudent} students={students} />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
