//같은 디렉토리 안에 있는 파일 ./
//import Potato from './Potato';

//App.js안에 다른 component를 만들어 사용
function Food({ name }) {
  return <h3>I like { name }</h3>;
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    name: "bulgogi",
    image: "https://www.google.com/search?q=%EB%B6%88%EA%B3%A0%EA%B8%B0&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk02ziUIXmsNvR7TuYKh1cpJGpdpH8g:1593509047151&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-p87lm6nqAhVbUd4KHVSWBBUQ_AUoAXoECBgQAw&biw=1440&bih=701&dpr=2#imgrc=kjZoAmvHGo-KfM"
  },
  {
    name: "kimbap",
    image: "https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk03dn_nrK6M5JlKKfD5krm8w3qTmGQ:1593509069629&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqn6rwm6nqAhXDQN4KHYLUA4EQ_AUoAXoECBgQAw&biw=1440&bih=701#imgrc=Xz3xQoYZw3bqEM"
  },
  {
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Hello!!!</h1>
      {/* index.js에서는 단 하나의 component(App)만 사용 가능함 */}
      {/* jax = javascript + html */}
      {/* Where's props go? = args */}
      <Food fav = "kimchi" something = {true} papapa = {["hello",1,2,3,4,false]}/> 
      {/* Dynamic component */}
      {foodILike.map(dish => <Food name={dish.name}/>)}
    </div>
  );
}

export default App;
