# Namaste React🚀

# Parcel
- Creates a dev-build and stores in 'dist' file
- Creates Local Server and hosts this dev-build
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compression
- Content Hashing - any content-change leads to it's hash-change, thus browser fetches only updated hashed files
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- Way to test on HTTPs
- Tree Shaking algorithm - removes unused code
- Different dev and prod bundles

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store using configureStore() from rtk
- Connect our store to our app
- Create a slice (cartSlice)
- dispatch(action)
- Selector

# Types of Testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing (e2e Testing)

# Setting up Testing in our app
- Install React Testing Library
- Install Jest
- Install Babel dependencies
- Configure babel
- Configure parcel config file to disable default babel transpilation
- Configure jest => npx jest --init
- Install jsdom library (For jest version > 28) => npm i -D jest-environment-jsdom
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react in babel config
- Install -D @testing-library/jest-dom