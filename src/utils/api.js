const baseUrl = "http://localhost:3001";

function request(url, options = {}) {
  const token = localStorage.getItem("jwt");

  const defaultHeaders = {
    "Content-Type": "application/json",
    ...(token && { authorization: `Bearer ${token}` }),
  };

  const finalOptions = {
    method: "GET",
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
  };

  return fetch(url, finalOptions).then(checkResponse);
}

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function removeItems(id) {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  });
}

function addItems(itemData) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify(itemData),
  });
}

function editProfile(name, avatar) {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    body: JSON.stringify({ name, avatar }),
  });
}

function addCardLike(id) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    body: JSON.stringify({}),
  });
}

function removeCardLike(id) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    body: JSON.stringify({}),
  });
}

export {
  getItems,
  removeItems,
  addItems,
  checkResponse,
  editProfile,
  addCardLike,
  removeCardLike,
};
