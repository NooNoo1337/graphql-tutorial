import React from 'react';
import ApolloClient, { gql } from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Tabs from './components/Tabs/Tabs';
import theme from './components/theme';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <Tabs />
      </MuiThemeProvider>
    </ApolloProvider>
  );
};
