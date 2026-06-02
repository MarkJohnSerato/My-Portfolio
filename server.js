const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3300; // Use the PORT environment variable if it's set, or default to 3000

app.use(express.json()); // Parse JSON requests
app.use(express.static(__dirname)); // Serve static files from the root directory
app.use('/placeholder-pages', express.static(path.join(__dirname, 'placeholder-pages'))); // Serve placeholder pages explicitly

app.get('/api/projects', (req, res) => { // This route returns a list of projects for the portfolio. You can add more projects to this array as needed.
  const projects = [
    { // This is the start if you add more projects, just copy this block and change the details.
      id: 1,
      title: 'CloudStack Staff',
      description: 'Build a CloudStack dashboard for managing virtual machines, networks, and storage.',
      status: 'Coming soon',
      url: '/placeholder-pages/project-cloudstack.html'
    },
    { // this is the second project, you can add more by copying this block and changing the details.
      id: 2,
      title: 'Network Operations Dashboard',
      description: 'Create a dashboard to monitor network health, uptime, and security alerts.',
      status: 'Coming soon',
      url: '/placeholder-pages/project-network-dashboard.html'
    },
    { // Amortization Calculator Project
      id: 3,
      title: 'Amortization Calculator',
      description: 'Calculate loan payments in Philippine Peso with monthly breakdown and full amortization schedule.',
      status: 'Live',
      url: '/placeholder-pages/project-amortization-calculator.html'
    }
  ];

  res.json(projects); // Send the projects as a JSON response to the client.
});

app.get('*', (req, res) => { // This catch-all route serves the index.html file for any request that doesn't match the API routes. This allows for client-side routing in a single-page application.
  res.sendFile(path.join(__dirname, 'index.html')); // Send the index.html file located in the root directory as the response.
});

app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
});
