// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getItems } from '../../../../../../state/actions/products';

// COMPONENTS
import Product from '../../components/Product';

// ==========

class Items extends React.Component {
  componentDidMount () {
    this.props.getItems();
  };

  render () {
    return (
      <div className="columns">
        {
          this.props.items.map(item => {
            return (
              <Product
                key={item.id}
                id={item.id}
                product="item"
                name={item.name}
                category_id={item.category_id}
                image={item.image}
                ingredients={item.supplies}
                steps={item.steps}
                item={item}
              />
            );
          })
        }
      </div>
    );
  };
};

const mapStateToProps = state => ({
  items: state.products.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getItems
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Items);
