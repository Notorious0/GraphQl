import { StatusBar } from 'expo-status-bar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './Navigator';

const clientConfig =new ApolloClient({
  uri:"https://graphqlzero.almansi.me/api",
  cache:new InMemoryCache()
});

export default function App() {
  return (
    <NavigationContainer>
     <ApolloProvider client={clientConfig}> 
      <StatusBar style="auto" />
          <Navigator />
    </ApolloProvider>
    </NavigationContainer>


  );
};

