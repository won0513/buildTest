import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  // state
  const [data, setData] = useState({})

  console.log('실행')
  useEffect(() => 
    {
    	fetch("/users", {headers: {
        Accept: "application / json",
      },}).then(
          console.log("접속")
        ).then(
          response => response.json()
        ).then(
          data => {
            // 받아온 데이터를 data 변수에 update
            setData(data);
          }
        ).catch(
          (err) => console.log(err)
        )
    }, [])
  return (
    <div className='App'>
      <h1>test 하는 중..</h1>
      <div>
        {/* 삼항연산자 */}
        { (typeof data.id === 'undefined') ? (
          // fetch가 완료되지 않았을 경우에 대한 처리
          <p>loding...</p>,
          <p> n </p>
        ) : (
          <p>{data.name}</p>
        )}
      </div>
    </div>
  )
}


export default App;
