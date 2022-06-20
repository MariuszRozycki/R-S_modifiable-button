import React, { Fragment } from 'react';

import { Form, Button, Input, TextArea } from './Components/Form/';
import { Card } from './Components/Card';
import EmployeesApp from './Components/Employees/EmployeesApp';
import './App.css';

function App() {
  return (
    <Fragment>
      <Form style>
        <Button
          label='Click me!'
          bgColor='alizarin'
          color='clouds'
          icon='user' />
        <Input
          name='name'
          bgColor='clouds'
          color='wetAsphalt'
          borderSize={2}
          borderRadius={5}
          borderColor='midnightBlue'
          padding={5}
          margin='5px auto' />
        <TextArea
          bgColor='clouds'
          color='wetAsphalt'
          borderSize={2}
          borderRadius={5}
          borderColor='midnightBlue'
          padding={5}
        />
      </Form>

      <Card
        title="Shrimps and Chorizo Paella"
        intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        showMore
        content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."
      />

      <EmployeesApp />
    </Fragment>
  );
}

export default App;
