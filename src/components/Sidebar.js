import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/images/avatar.jpg';
import logo from '../assets/img/interokedigitalwhitetrans.png';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },

        { content: 'Skills', href: 'skills' },
        { content: 'Projects', href: 'experience' },

        { content: 'Education', href: 'education' },
      ],
      collapsed: true
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
      tabs: this.state.tabs
    });

  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    const { tabs } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark  fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">

          <span className="d-block mb-lg-4 id-logo">
            <img
                className="img-fluid mx-auto "
                src={logo}
                alt="Interoke Digital"
            />
          </span>
          <span className="d-none d-lg-block mb-4">
            <img
              className="img-fluid img-profile rounded-circle mx-auto "
              src={avatar}
              alt="Ben Lumley"
            />
          </span>
        </a>
        <button
          className={`${classTwo}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${classOne}`} id="navbarSupportedContent">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
