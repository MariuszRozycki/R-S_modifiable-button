import React, { Fragment } from 'react';

import { Form, Button, Input, TextArea } from './Components/Form/';
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

    </Fragment>
  );
}

export default App;
