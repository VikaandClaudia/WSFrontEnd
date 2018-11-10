// REACT
import React from 'react';

// REDUX
import { connect } from 'react-redux';

// ==========

class Profile extends React.Component {
  render () {
    return (
      <section className="settings">
        <div className="columns">
          <div className="column is-4">
            <div className="card">
              <div className="card-content">
                <figure className="image">
                  <img className="profile-img" src={this.props.user.photo} alt={`${this.props.user.first_name} ${this.props.user.last_name}`} />
                </figure>
                <aside className="menu">
                  <h1 className="title is-4 has-text-centered">{this.props.user.first_name} {this.props.user.last_name}</h1>
                  <p className="subtitle menu-label has-text-centered">
                    {this.props.user.role_id}
                  </p>
                  <hr />
                  <ul className="menu-list">
                    <li>
                      <span className="fa-icon">
                        <i className="fas fa-envelope"></i>
                      </span>
                      {this.props.user.email}
                    </li>
                  </ul>
                </aside>
                <hr />
                <button className="button is-primary is-outlined is-fullwidth">Edit Profile</button>
              </div>
            </div>
          </div>
          <div className="column is-8">
            Scrap this for later
          </div>
        </div>
      </section>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, null)(Profile);
