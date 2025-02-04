export const updateAuthToken = () => {
  const authDataJson = localStorage.getItem('auth');
  if (authDataJson) {
    const auth = JSON.parse(authDataJson);
    auth.timestamp = Date.now();
    localStorage.setItem('auth', JSON.stringify(auth));
  }
};
