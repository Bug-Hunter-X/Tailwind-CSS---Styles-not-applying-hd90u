```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configuration options ...
  content: [ 
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@my-org/my-component/**/*.{js,ts,jsx,tsx}' // Include any other packages using Tailwind
  ],
};
```