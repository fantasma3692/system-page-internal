import styled from "styled-components";
export function Cupon() {
  return (<Container>
<div class="card">
  
  <div class="header"><center><span class="welcometo">Welcome to</span>  <span class="python">Python</span></center></div>
  <button class="App-button">Start learning now</button>
</div>
  </Container>);
}
const Container =styled.div`
 .card {
  background-color: #191e24;
  border: 3px solid #387EB8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 25px 5px;
  color: white;
  border-radius: 45px;
}

.App-logo {
  pointer-events: none;
  margin-top: -40px;
  margin-bottom: -40px;
  width: 250px;
}

.App-button {
  padding: 10px 20px;
  background-color: transparent;
  color: #FFE052;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  border: 3px solid #FFE052;
  border-radius: 5em;
  margin-top: 20px;
  transition: 0.2s;
}

.App-button:hover {
  color: #191e24;
  background-color: #FFE052;
}

.welcometo {
  color: #387EB8;
}

.python {
  color: #FFE052;
}

`