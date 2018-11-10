// REACT
import React from 'react';

// REDUX
import { connect } from 'react-redux';

// COMPONENTS
import ItemAdd from '../../../../components/ItemAdd';
import ItemDelete from '../../../../components/ItemDelete';
import BundleAdd from '../../../../components/BundleAdd';
import BundleDelete from '../../../../components/BundleDelete';
import SupplyAdd from '../../../../components/SupplyAdd';

// ==========

class Product extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal',
      modalControl: false,
      modalControlClasses: 'modal',
      modalControlDisable: false,
      action: '',
      modalSupply: false,
      modalSupplyClasses: 'modal',
      modalSupplyDisable: false
    };
  };

  toggle = () => {
    if (!this.state.modalControlDisable) {
      if (!this.state.modal) {
        this.setState({
          modal: true,
          modalClasses: this.state.modalClasses + ' is-active'
        });
      } else {
        this.setState({
          modal: false,
          modalClasses: 'modal'
        });
      }
    }
  };

  toggleControl = event => {
    if (!this.state.modalSupplyDisable) {
      if (!this.state.modalControl) {
        this.setState({
          modalControl: true,
          modalControlClasses: this.state.modalControlClasses + ' is-active',
          modalControlDisable: true,
          action: event.target.id
        });
      } else {
        this.setState({
          modalControl: false,
          modalControlClasses: 'modal',
          modalControlDisable: false,
          action: ''
        });
      }
    }
  };

  toggleSupply = event => {
    if (!this.state.modalSupply) {
      this.setState({
        modalSupply: true,
        modalSupplyClasses: this.state.modalSupplyClasses + ' is-active',
        modalSupplyDisable: true
      });
    } else {
      this.setState({
        modalSupply: false,
        modalSupplyClasses: 'modal',
        modalSupplyDisable: false
      });
    }
  };

  render () {
    return (
      <div className="column is-4">
        <div className="card" onClick={this.toggle}>
          <div className="card-image">
            <figure className="image is-16by9">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              {this.props.name}
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item card-footer-category disable">
              {
                this.props.categories.find(category => category.id === this.props.category_id) ?
                (
                  this.props.categories.find(category => category.id === this.props.category_id).name
                ) : null
              }
            </a>
            <a className="card-footer-item"><span className="lnr-heart"></span></a>
            <a className="card-footer-item"><span className="lnr-pencil"></span></a>
            <a className="card-footer-item"><span className="lnr-trash2"></span></a>
          </footer>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content">
            <p className="image is-2by1">
              <img src={this.props.image} alt={this.props.name} />
            </p>
            <div className="modal-container">
              <div>
                <h1 className="title is-3">{this.props.name}</h1>
                <small>
                  {this.props.product === 'item' ? 'Item' : 'Bundle'}
                  {
                    this.props.categories.find(category => category.id === this.props.category_id) ?
                    (
                      <span>
                        <span className="product-bullet"> &bull; </span>
                        {this.props.categories.find(category => category.id === this.props.category_id).name}
                      </span>
                    ) : null
                  }
                </small>
              </div>
              <div>
                <h2 className="subtitle is-5">{this.props.product === 'item' ? 'Supplies' : 'Items'}</h2>
                <ul>
                  {
                    this.props.ingredients.map((ingredient, i) => {
                      return (
                        <li key={i}>
                          {
                            this.props.product === 'item' ? (
                              <span>
                                <span className="supply-qty">{ingredient.supply_qty}</span>
                                <span className="supply-unit">{ingredient.measure_unit}</span>
                              </span>
                            ) : (
                              <span className="supply-qty">{ingredient.item_qty}</span>
                            )
                          }
                          {ingredient.name}
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
              <div>
                <h2 className="subtitle is-5">Steps</h2>
                <ol>
                  {
                    Object.values(JSON.parse(this.props.steps)).map((step, i) => {
                      return (
                        <li key={i}>
                          {step}
                        </li>
                      );
                    })
                  }
                </ol>
              </div>
            </div>
            <div className="product-control">
              <div>
                <a>
                  <span id="favorite" className="lnr-heart"></span>
                </a>
              </div>
              <div>
                <a onClick={event => this.toggleControl(event)}>
                  <span id="edit" className="lnr-pencil"></span>
                </a>
              </div>
              <div>
                <a onClick={event => this.toggleControl(event)}>
                  <span id="delete" className="lnr-trash2"></span>
                </a>
              </div>
            </div>
          </div>
          <button className="modal-close is-large" onClick={this.toggle}></button>
        </div>
        <div className={this.state.modalControlClasses}>
          <div className="modal-background" onClick={this.toggleControl}></div>
          <div className="modal-content modal-form">
            <div className="modal-container">
              {
                this.state.action === 'edit' ? (
                  this.props.product === 'item' ? <ItemAdd item={this.props} toggle={this.toggleControl} toggleSupply={this.toggleSupply} /> : <BundleAdd bundle={this.props} toggle={this.toggleControl} />
                ) : (
                  this.state.action === 'delete' ? (
                    this.props.product === 'item' ? <ItemDelete item={this.props} toggle={this.toggleControl} toggleParent={this.toggle} /> : <BundleDelete bundle={this.props} toggle={this.toggleControl} toggleParent={this.toggle} />
                  ) : null
                )
              }
            </div>
          </div>
          <button className="modal-close is-large"  onClick={this.toggleControl}></button>
        </div>
        <div className={this.state.modalSupplyClasses}>
          <div className="modal-background" onClick={this.toggleSupply}></div>
          <div className="modal-content modal-form">
            <div className="modal-container">
              <SupplyAdd toggle={this.toggleSupply} />
            </div>
          </div>
          <button className="modal-close is-large" onClick={this.toggleSupply}></button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  categories: state.products.categories
});

export default connect(mapStateToProps, null)(Product);
