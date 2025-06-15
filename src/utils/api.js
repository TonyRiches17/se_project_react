const baseUrl = "http://localhost:3001";

function request(url, options = {}) {
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const finalOptions = { ...defaultOptions, ...options };

  return fetch(url, finalOptions).then(checkResponse);
}

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse)
}

function removeItems(id) {
  return request(`${baseUrl}/items/${id}`, {
    method: 'DELETE'
  });
}

function addItems(itemData) {
  return request(`${baseUrl}/items`, {
    method: 'POST',
    body: JSON.stringify(itemData)
  });
}

export { getItems, removeItems, addItems, checkResponse };
