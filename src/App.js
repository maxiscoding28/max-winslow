import me from './me.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3 id="max">Max Winslow</h3>
      <img id="photo"  src={me} height={300} width={300}/> 
      <div id="bio">Hi, my name is Max. I am from Denver, Colorado where I currently live.<br/><br/>I make money working as a support engineer for <a target="_blank" href="https://www.hashicorp.com/">Hashicorp</a> working on their product <a target="_blank" href="https://www.vaultproject.io/">Vault</a>.<br/><br/>I also like to code <a target="_blank" href="https://github.com/maxiscoding28">personal projects</a> and occassionally I <a target="_blank" href="https://max-is-writing.blogspot.com/">write things.</a><br/><br/>Thanks for visiting!</div> 
    </div>
  );
}

export default App;
