import {Header} from "./components/Header";
import Styles from "./App.module.css";
import {Sidebar} from "./components/Sidebar";
import {Post} from "./components/Post";
import Data from "./data/MOCK_DATA.json";

const post = Data;

function App() {
  return (
    <div>
      <Header />
      <div className={Styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                name={post.name}
                avatar={post.avararurl}
                role={post.role}
                content={post.content}
                time={post.publisheAT}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
