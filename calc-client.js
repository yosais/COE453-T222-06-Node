import fetch from 'node-fetch';

// Get
fetch(
  'https://nodezjchev-ysxc--3000--d830b1a2.local-credentialless.webcontainer.io/add?num1=2&num2=3'
)
  .then((res) => res.json())
  .then((json_obj) => console.log(json_obj.data.first_name))
  .catch((err) => console.error(err));
