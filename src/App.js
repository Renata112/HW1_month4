import logo from './logo.svg';
import './App.css';


function Header(){
  return(
      <h2>I am a Header Component</h2>
  )
}
function Content (){
  return (
      <h2>I am a Content Component</h2>
  )
}
function Footer(){
  return (
      <h2>I am a Footer Component</h2>
  )
}

function Title(){
    return(
        <>
            <p>Hello world!</p>
            <p>Hello world!</p>
            <p>Hello world!</p>
        </>

    )
}

function App() {
  return (
    <div className="App">
      <Header/>
        <Title/>
      <Content/>
        <Title/>
      <Footer/>
        <Title/>
    </div>
  );
}

export default App;
