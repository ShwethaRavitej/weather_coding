import React from "react";

//v2 -
const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>Get Weather</button>
  </form>
);

//v1
// class Form extends React.Component {
//   render() {
//     return (
//       <form onSubmit={this.props.getWeather}>
//         <input type="text" name="city" placeholder="City..."/>
//         <input type="text" name="country" placeholder="Country..."/>
//         <button>Get Weather</button>
//       </form>
//     );
//   }
// }

export default Form;
