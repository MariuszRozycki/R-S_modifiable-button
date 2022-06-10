import React, { Fragment } from 'react';

import { Form, Button, Input } from './Components/Form/';
import './App.css';

function App() {
  return (
    <Fragment>
      <Form>
        <Button
          label="Click me!"
          bgColor='alizarin'
          color='clouds'
          icon="user" />
        <Input
          bgColor='clouds'
          color='wetAsphalt'
          borderSize={2}
          borderRadius={5}
          borderColor='midnightBlue'
          marginLeft={10}
          padding={5} />
      </Form>

    </Fragment>
  );
}

export default App;
