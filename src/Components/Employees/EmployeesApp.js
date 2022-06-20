import React, { Fragment } from 'react';

import { EmployeesData } from './EmployeesData';
import { EmployeesList } from './EmployeesList';
import { EmployeesWrapper } from './EmployeesWrapper';
import { EmployeesDetails } from './EmployeesDetails';


function EmployeesApp() {

  const styles = {
    flexBasis: '50%'
  }

  return (
    <Fragment>
      <EmployeesWrapper>
        <div style={styles} className='EmployeesList'>
          <h1>Employees list:</h1>
          {EmployeesData.map(el => (
            <EmployeesList
              key={el.id}
              name={el.staffName}
              surname={el.staffSurname} />
          ))}
        </div>
        <div style={styles} className='EmployeesDetails'>
          <h1>Details:</h1>
          <EmployeesDetails />
        </div>
      </EmployeesWrapper>
    </Fragment>
  )
}

export default EmployeesApp;