// const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!");

// console.log(heading);// object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); 


/*

<div id="parent">
  <div id="child">
    <h1> I am h1 tag </h1>
  </div>

</div>

*/


// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         React.createElement("h1", {}, "I am h1 Tag")
//     )
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); 


/*
<div id="parent">
  <div id="child">
     <h1> I am h1 Tag</h1>
     <h2> I am h2 Tag</h2>
  </div>
</div>
*/


// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//     [React.createElement("h1", {}, "I am h1 Tag"),React.createElement("h2",{}, "I am h2 Tag")]
//     )
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


/*
<div id="parent">
  <div id="child">
     <h1> I am h1 Tag</h1>
     <h2> I am h2 Tag</h2>
  </div>
  <div id="child2">
      <h1> I am h1 Tag </h1>
      <h2> I am h2 Tag </h2>
    </div>  
</div>

*/


const parent = React.createElement("div", {id:"parent"},
        [React.createElement("div", {id:"child"},
        [React.createElement("h1", {}, "I am h1 Tag"),React.createElement("h2", {}, "I am h2 Tag")]
        ),
        React.createElement("div", {id:"child2"},
        [React.createElement("h1", {}, "I am h1 Tag"),React.createElement("h2", {}, "I am h2 Tag")]
        )]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);
