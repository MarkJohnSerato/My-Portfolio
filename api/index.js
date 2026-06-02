const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));
app.use('/placeholder-pages', express.static(path.join(__dirname, '../placeholder-pages')));

app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'CloudStack Staff',
      description: 'Build a CloudStack dashboard for managing virtual machines, networks, and storage.',
      status: 'Coming soon',
      url: '/placeholder-pages/project-cloudstack.html'
    },
    {
      id: 2,
      title: 'Network Operations Dashboard',
      description: 'Create a dashboard to monitor network health, uptime, and security alerts.',
      status: 'Coming soon',
      url: '/placeholder-pages/project-network-dashboard.html'
    },
    {
      id: 3,
      title: 'Amortization Calculator',
      description: 'Calculate loan payments in Philippine Peso with monthly breakdown and full amortization schedule.',
      status: 'Live',
      url: '/placeholder-pages/project-amortization-calculator.html'
    }
  ];

  res.json(projects);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = app;
