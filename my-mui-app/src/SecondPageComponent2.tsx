import React, { useState } from 'react';
import { Checkbox, Collapse, List, ListItem, ListItemText, Typography } from '@mui/material';

interface Department {
  name: string;
  subDepartments: string[];
}

const departmentData: Department[] = [
  {
    name: 'Engineering',
    subDepartments: ['Frontend', 'Backend', 'DevOps'],
  },
  {
    name: 'Sales',
    subDepartments: ['Inside Sales', 'Outside Sales'],
  },
  {
    name: 'Marketing',
    subDepartments: ['Digital Marketing', 'Content Marketing'],
  },
];

const DepartmentTree: React.FC = () => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [checked, setChecked] = useState<string[]>([]);

  const handleToggle = (department: string) => {
    setExpanded((prevExpanded) =>
      prevExpanded.includes(department)
        ? prevExpanded.filter((dep) => dep !== department)
        : [...prevExpanded, department]
    );
  };

// ...

// ...

const handleCheck = (department: string) => {
  setChecked((prevChecked) => {
    let newChecked: string[] = [...prevChecked];

    if (prevChecked.includes(department)) {
      // If the department is already checked, uncheck it and all its sub-departments
      newChecked = newChecked.filter((dep) => dep !== department);
      const departmentObject = departmentData.find((dept) => dept.name === department);

      if (departmentObject && departmentObject.subDepartments) {
        // Remove sub-departments from the checked list
        newChecked = newChecked.filter((dep) => !departmentObject.subDepartments.includes(dep));
      }
    } else {
      // If the department is not checked, check it and all its sub-departments
      newChecked.push(department);
      const departmentObject = departmentData.find((dept) => dept.name === department);

      if (departmentObject && departmentObject.subDepartments) {
        // Add sub-departments to the checked list
        newChecked.push(...departmentObject.subDepartments);
      }
    }

    return newChecked;
  });
};

// ...



  const renderTreeItems = (departments: typeof departmentData, level: number = 0) => {
    return departments.map((dept) => (
      <React.Fragment key={dept.name}>
        <ListItem style={{ marginLeft: `${level * 3}rem` }}>
          {dept.subDepartments && dept.subDepartments.length > 0 && (
            <Typography onClick={() => handleToggle(dept.name)}  style={{ cursor: 'pointer' }}>
              {expanded.includes(dept.name) ? '-' : '+'} 
    
            </Typography>
          )}
          <Checkbox
            checked={checked.includes(dept.name)}
            onChange={() => handleCheck(dept.name)}
          />
          <ListItemText primary={dept.name} />
        </ListItem>
        {dept.subDepartments && dept.subDepartments.length > 0 && (
          <Collapse in={expanded.includes(dept.name)}>
            <List disablePadding>
              {renderTreeItems(dept.subDepartments.map(name => ({ name, subDepartments: [] })), level + 1)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));
  };


  return (
    <List>
      {renderTreeItems(departmentData)}
    </List>
  );
};

export default DepartmentTree;






