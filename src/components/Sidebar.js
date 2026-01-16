import React, { Component } from 'react';
import { Link } from 'gatsby';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/images/avatar.jpg';
import logo from '../assets/img/interokedigitalwhitetrans.png';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about', isAnchor: true },
        { content: 'Skills', href: 'skills', isAnchor: true },
        { content: 'Projects', href: 'experience', isAnchor: true },
        { content: 'Education', href: 'education', isAnchor: true },
        { content: 'Contact', href: 'contact', isAnchor: true },
        { content: 'Blog', href: '/blog', isAnchor: false },
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
    
    // Check if we're on a blog page (client-side only)
    const isBlogPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/blog');
    const anchorTabs = tabs.filter(tab => tab.isAnchor);
    
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark  fixed-top"
        id="sideNav"
      >
        <Link className="navbar-brand" to="/#page-top">
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
        </Link>
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
            items={anchorTabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content, isAnchor } = tab;
              
              // For anchor links on blog pages, use full URL
              if (isAnchor && isBlogPage) {
                return (
                  <li className="nav-item" key={href}>
                    <Link className="nav-link" to={`/#${href}`}>
                      {content}
                    </Link>
                  </li>
                );
              }
              
              // For anchor links on homepage, use scroll
              if (isAnchor) {
                return (
                  <li className="nav-item" key={href}>
                    <Scroll type="id" element={href}>
                      <a className="nav-link" href={`#${href}`}>
                        {content}
                      </a>
                    </Scroll>
                  </li>
                );
              }
              
              // For non-anchor links (like Blog)
              return (
                <li className="nav-item" key={href}>
                  <Link 
                    className={`nav-link ${isBlogPage && href === '/blog' ? 'active' : ''}`}
                    to={href}
                  >
                    {content}
                  </Link>
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
