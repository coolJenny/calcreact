class Label extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.label}
      </React.Fragment>
    );
  }
}

Label.propTypes = {
  label: PropTypes.string
};

