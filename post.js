// 2 POST data to back-end.

// Create variables.

const baseUrl = "https://robust-safe-crafter.glitch.me/";

// Create function to post data from form submitting to back-end.

propertyForm.addEventListener("submit", postData);

async function postData(e) {
  e.preventDefault();

  const formObj = new FormData(propertyForm);
  const postData = Object.fromEntries(formObj);

  //   console.log(postData);

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const message = await response.json();
  console.log(message);
}
