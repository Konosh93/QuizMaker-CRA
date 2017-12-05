function makeRequest() {
  return fetch("www.somefakeurl.com").then(function(response) {console.log(response)
    return response.json();
  });
};

var fetchMock = require('fetch-mock');

// Mock the fetch() global to always return the same value for GET
// requests to all URLs.
fetchMock.get('*', {hello: 'world'});

makeRequest().then(function(data) {
  console.log('got data', data);
});

// Unmock.
fetchMock.restore();