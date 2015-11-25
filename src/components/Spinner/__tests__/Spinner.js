const React = require('react/addons');
const expect = require('expect');

const { TestUtils } = React.addons;

jest.dontMock('../index.js');
const Spinner = require('../index.js');

let shallowRenderer;

const defaultProps = {
  dark: false,
  height: '30px',
  inline: false,
  pending: false,
  width: '30px'
};

describe('Spinner', () => {
  beforeEach(function(){
    shallowRenderer = TestUtils.createRenderer();
  });

  it('should render correctly with the defaults', () => {
    expect(<Spinner />).toExist();
    shallowRenderer.render(<Spinner { ...defaultProps } />);

    const output = shallowRenderer.getRenderOutput();

    expect(output.type).toEqual('div');
    expect(output.props.className).toBe('spinner-container');
  });

  it('should render as dark', () => {
    const props = {
      ...defaultProps,
      dark: true
    };
    shallowRenderer.render(<Spinner { ...props } />);

    const output = shallowRenderer.getRenderOutput();

    expect(output.type).toEqual('div');
    expect(output.props.className).toBe('spinner-container dark');
  });

  it('should render as inline', () => {
    const props = {
      ...defaultProps,
      inline: true
    };
    shallowRenderer.render(<Spinner { ...props } />);

    const output = shallowRenderer.getRenderOutput();

    expect(output.type).toEqual('div');
    expect(output.props.className).toBe('spinner-container');
    expect(output.props.style).toEqual({
      width: '30px', display: 'inline-block'
    });
  });

  it('should render as 15x15 px', () => {
    const props = {
      ...defaultProps,
      width: '15px'
    };
    shallowRenderer.render(<Spinner { ...props } />);

    const output = shallowRenderer.getRenderOutput();

    expect(output.type).toEqual('div');
    expect(output.props.className).toBe('spinner-container');
    expect(output.props.style).toEqual({
      width: '15px', display: 'block'
    });
  });

  it('should present if set to pending', () => {
    const props = {
      ...defaultProps,
      pending: true
    };
    shallowRenderer.render(<Spinner { ...props } />);

    const output = shallowRenderer.getRenderOutput();

    expect(output.type).toEqual('div');
    expect(output.props.className).toBe('spinner-container pending');
  });

});


