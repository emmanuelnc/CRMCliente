//apollo-link-context -> modificar headers y hacer propagacion 


import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import {setContext} from 'apollo-link-context';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/',
    fetch
});


const authLink = setContext((_,{ headers }) => {

//leemos token que guardamos en el local storage
const token = localStorage.getItem('token');

//console.log('TOKEN', token);

return {
    headers:{
        ...headers,
        authorization:token ? `${token}` : ''
    }
}
}) ;

const client = new ApolloClient ({

    connectToDevTools : true,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
});

export default client;


// import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
// import fetch from 'node-fetch'


// const client = new ApolloClient ({

//     connectToDevTools : true,
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//         uri: 'http://localhost:4000/',
//         fetch
//     })
// });

// export default client;