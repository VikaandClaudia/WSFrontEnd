// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// COMPONENTS
// import Product from './Product';

// ==========

class UnlinkedProduct extends React.Component {
  componentDidMount () {
    // this.props.getProductsByCategory(query('id'));
  };

  render () {
    return (
      <li onClick={() => this.props.toggle(this.props.unlinkedProduct.product_id)}>{this.props.unlinkedProduct.title}</li>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UnlinkedProduct);
