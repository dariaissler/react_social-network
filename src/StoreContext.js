import React from 'react';

const MyContext = React.createContext(null);

export default MyContext;


/*оборачивает <App/> , компоненты обращаются к стору через контекст с помощью MyContext.Consumer*/