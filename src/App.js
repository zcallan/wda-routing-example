import React, { Component } from 'react';
import Routes from './Routes';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


class App extends Component {
  state = {
    sidebarOpen: false,
  }

  handleToggleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  render() {
    return (
      <main>
        <Navbar onToggleSidebar={this.handleToggleSidebar} />
        <Sidebar onToggleSidebar={this.handleToggleSidebar} open={this.state.sidebarOpen} />
        <Routes />
      </main>
    );
  }
}

export default App;
