import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  <Route {...rest} render={(props) => (isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />)} />;
}

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (localStorage.getItem("isLoggedIn")) {
//           return <Component {...props} />;
//         } else {
//           return <Redirect to="/login" />;
//         }
//       }}
//     />
//   );
// }

export default PrivateRoute;
