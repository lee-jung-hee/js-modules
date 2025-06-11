// 1. Assigning CSS classes based on conditions (e.g., in React)
const buttonClass = isDisabled ? "btn-disabled" : "btn-active";
// 2. Render components conditionally in JSX
{
  isLoading ? <Spinner /> : <Content />;
}
// 3. Fallback value when checking for null or undefined
const userName = user.name ? user.name : "Guest";
// 4. Toggle login status text depending on token
const loginStatus = token ? "Logout" : "Login";
// 5. Custom error message depending on error existence
const errorMessage = error ? error.message : "문제가 발생했습니다.";
