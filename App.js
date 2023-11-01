import React from "react";
import ReactDOM from "react-dom/client";
// React Element
const heading = (
    <h1 className="heading" tabIndex={1}>
     React using JSX
    </h1>
  );
 /*
 React Component
 1) Class Based Component (old)
2) Functional Component (new)
*/

// React Functional Component
const HeadingComponent = () => (
  <div>
    <HeadingComponent2/>
    <h1 className="heading">This is Functional Component</h1>
    <HeadingComponent2></HeadingComponent2>
 </div>
)

const HeadingComponent2 = () => {
      return (
        <>
          {heading}
          <h1 className="heading">This is also Functional Component</h1>
       </>
      )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>);
