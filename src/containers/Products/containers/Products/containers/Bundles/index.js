// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getBundles } from '../../../../../../state/actions/products';

// COMPONENTS
import Product from '../../components/Product';

// ==========

class Bundles extends React.Component {
  componentDidMount () {
    this.props.getBundles();
  };

  render () {
    return (
      <div className="columns">
        {
          this.props.bundles.map(bundle => {
            return (
              <Product
                key={bundle.id}
                id={bundle.id}
                product="bundle"
                name={bundle.name}
                category_id={bundle.category_id}
                image={bundle.image}
                ingredients={bundle.items}
                steps={bundle.steps}
                bundle={bundle}
              />
            );
          })
        }
      </div>
    );
  };
};

const mapStateToProps = state => ({
  bundles: state.products.bundles
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getBundles
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Bundles);
