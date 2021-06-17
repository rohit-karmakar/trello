import TitleBar from "./component/titleBar/TitleBar";
import PlayGround from "./container/playground/PlayGround";
import Form from "./container/form/Form";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Form></Form>
      <div className="App">
        <header>
          <TitleBar title="Trello"></TitleBar>
        </header>
        <main>
          <PlayGround></PlayGround>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
