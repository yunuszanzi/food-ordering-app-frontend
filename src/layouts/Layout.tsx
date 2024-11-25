// import React from "react";
// import Header from "../components/Header";
// // import PropTypes from "prop-types";
// //
// function Layout(children: React.ReactNode) {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />

//       <div className="container mx-auto flex-1 py-10">{children}</div>
//     </div>
//   );
// }

// // Layout.propTypes = {};

// export default Layout;

import React from "react";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};

export default layout;
