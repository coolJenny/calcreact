var HelloNote = createReactClass({
  propTypes: {
    name: PropTypes.string
  },

  render: function() {
    return (
      <React.Fragment>
        Name: {this.props.name}
      </React.Fragment>
    );
  }
});

