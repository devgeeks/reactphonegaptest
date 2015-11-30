import expect, { createSpy } from 'expect';
import React from 'react'
import TestUtils, { Simulate } from 'react-addons-test-utils'

import Fab from '../../../src/components/Fab';

let props = {
  handleFabClick: () => {},
  children: [
    <div />,
    <span />
  ]
};

function setup(localProps = props) {

  let renderer = TestUtils.createRenderer();
  renderer.render(<Fab {...localProps} />);
  let output = renderer.getRenderOutput();

  return {
    localProps,
    output,
    renderer
  };
}

describe('Fab component', () => {
  it('should render correctly', () => {
    const { output } = setup();
    expect(output.type).toBe('a');
    expect(output.props.className).toBe('fab');

    const [ div, span ] = output.props.children;
    expect(div.type).toBe('div');
    expect(span.type).toBe('span');
  });
  it('should call the function passed in to handle the onClick', () => {
    const handleFabClickSpy = createSpy();
    const props = {
      handleFabClick: handleFabClickSpy,
      children: [
        <div />,
        <span />
      ]
    };
    const fab = TestUtils.renderIntoDocument(<Fab { ...props } />);
    Simulate.click(fab.getDOMNode());
    expect(handleFabClickSpy).toHaveBeenCalled();
  });
  it('should render as a navbar Fab if told to', () => {
    const props = {
      navbar: true,
    };
    const { output } = setup(props);
    expect(output.props.className).toContain('navbar');
  });
});

