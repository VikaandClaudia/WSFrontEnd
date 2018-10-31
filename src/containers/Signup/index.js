// REACT
import React from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userSignup } from '../../state/actions/auth';

// ==========

class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isValid: true,
      passwordClasses: 'input',
      shop_name: '',
      shop_username: '',
      shop_email: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      verify_password: ''
    };
  };

  handleSignup = event => {
    event.preventDefault();
    let { shop_name, first_name, last_name, email, password, verify_password } = this.state;
    if (!password || password !== verify_password || !verify_password) {
      this.setState({
        passwordClasses: this.state.passwordClasses + ' is-danger',
        isValid: false
      });
    } else {
      let newShop = {shop_name};
      let newUser = {first_name, last_name, email, password};
      this.props.userSignup(newShop, newUser, this.props.history);
    }
  }

  render () {
    return (
      <section className="hero is-medium is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6-desktop is-offset-3-desktop">
                <div className="card">
                  <div className="card-content">
                    <form onSubmit={this.handleSignup}>
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Shop Name"
                            id="shop_name"
                            value={this.state.shop_name}
                            onChange={event => this.setState({shop_name: event.target.value})}
                            required
                          />
                        </p>
                      </div>
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Shop Username"
                            id="shop_username"
                            value={this.state.shop_username}
                            onChange={event => this.setState({shop_username: event.target.value})}
                            required
                          />
                        </p>
                      </div>
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="email"
                            placeholder="Shop Email"
                            id="shop_email"
                            value={this.state.shop_email}
                            onChange={event => this.setState({shop_email: event.target.value})}
                            required
                          />
                        </p>
                      </div>
                      <hr />
                      <div className="field is-horizontal">
                        <div className="field-body">
                          <div className="field">
                            <p className="control">
                              <input
                                className="input"
                                type="text"
                                placeholder="First Name"
                                id="first_name"
                                value={this.state.first_name}
                                onChange={event => this.setState({first_name: event.target.value})}
                                required
                              />
                            </p>
                          </div>
                          <div className="field">
                            <p className="control">
                              <input
                                className="input"
                                type="text"
                                placeholder="Last Name"
                                id="last_name"
                                value={this.state.last_name}
                                onChange={event => this.setState({last_name: event.target.value})}
                                required
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            id="email"
                            value={this.state.email}
                            onChange={event => this.setState({email: event.target.value})}
                            required
                          />
                        </p>
                      </div>
                      <div className="field is-horizontal">
                        <div className="field-body">
                          <div className="field">
                            <p className="control">
                              <input
                                className={this.state.passwordClasses}
                                type="password"
                                placeholder="Password"
                                id="password"
                                value={this.state.password}
                                onChange={event => this.setState({password: event.target.value})}
                                required
                              />
                            </p>
                          </div>
                          <div className="field">
                            <p className="control">
                              <input
                                className={this.state.passwordClasses}
                                type="password"
                                placeholder="Verify Password"
                                id="verify_password"
                                value={this.state.verify_password}
                                onChange={event => this.setState({verify_password: event.target.value})}
                                required
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="control">
                        <button className="button is-primary is-fullwidth">Sign Up</button>
                      </div>
                      {!this.state.isValid ? (
                        <p id="error" className="help is-danger">
                          Passwords do not match.
                        </p>
                      ) : null}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  userSignup
}, dispatch);

export default connect(null, mapDispatchToProps)(Signup);
