// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", {}, [
//     React.createElement("h2", { id: "heading" }, "this is an another heading"),
//     React.createElement("h2", { id: "headin" }, "this is an another heading"),
//   ])
// );
// const Jsxcomponent =()=> <h1 id="heading">Hello Neosoft from JSX</h1>;

// const Headingcomponent = ()=>{
//   return <div>
//     <h1 id="heading">Hello Neosoft from React component</h1>
//     <Jsxcomponent/>
//   </div>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Headingcomponent/>);


/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

//  const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

// * Props :

// * prop -> is Just a JS Object

// * Note: When you have to dainamically pass in a data to a component, you pass in prop

// const RestaurantCard = (props) => {
// console.log(props);

// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * const { resName, cuisine } = props;

// const RestaurantCard = ({ resName, cuisine }) => {
//   console.log({ resName, cuisine });
// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)

// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer