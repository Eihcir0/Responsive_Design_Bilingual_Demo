import React from 'react';
import NavBarLeft from './../components/nav_bar_left';
import renderer from 'react-test-renderer';

test('button switches language', () => {

  const componentDK = renderer.create(
    <NavBarLeft language="DK"/>
  );
  let treeDK = componentDK.toJSON();
  expect(treeDK).toMatchSnapshot();
});

test('button switches language', () => {
  const componentEN = renderer.create(
    <NavBarLeft language="EN"/>
  );
  let treeEN = componentEN.toJSON();
  expect(treeEN).toMatchSnapshot();
});

// future direction for testing:
// - Test valid email entered
// - Test API posts for email
// - Test page switching
// - Test login
