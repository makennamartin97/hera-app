import { createContext } from 'react';

// Context for storing connected users wallet accounts in the root so 
// connection can be passed down to other components
const UserContext = createContext();

export default UserContext;

