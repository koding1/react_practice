import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react"; // 6.1 useEffect 추가 : 1번만 실행되는 함수를 만듦

function App() {
  const [cnt, setCnt] = useState(0); // react-create-app을 사용하고 있기 때문에 React.useState 로 쓸 필요 없다
  const onClick = () => setCnt((current) => current+1)
  
  console.log("i run all the time");


  useEffect(() => {
    console.log("i run only one") // 6.1 i run only one은 버튼을 클릭해도(component가 바뀌어도) 다시 출력되지 않는다
  }, []); 

  return (
    <div>
      <h1 className={styles.title}>{cnt}</h1>
      {/* <Button text={"Clcik me"}/> */}
      <button onClick={onClick}>Clcik me</button>
    </div>
  );
}

export default App;
