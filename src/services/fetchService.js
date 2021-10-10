async function fetchService(URL, config) {
  try {
    const response = await fetch(URL, config);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export default fetchService;
