//같은 디렉토리 안에 있는 파일 ./
//import Potato from './Potato';
import PropTypes from "prop-types";

//App.js안에 다른 component를 만들어 사용
function Food({ name, picture, rating }) {
  return (
    <div> 
      <h3>I like { name }</h3>
      <h4>✨{rating} / 5.0</h4>
      <img src={picture} width="300" height="300" alt={name}/>
    </div>
  )
}

//사용할 props에 대한 설명
//React가 자동으로 체크해 줄 여러 조건들을 설정 가능함(콘솔에 에러 출력)
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5.0
  },
  {
    id: 2,
    name: "bulgogi",
    image: "https://www.google.com/search?q=%EB%B6%88%EA%B3%A0%EA%B8%B0&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk02ziUIXmsNvR7TuYKh1cpJGpdpH8g:1593509047151&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-p87lm6nqAhVbUd4KHVSWBBUQ_AUoAXoECBgQAw&biw=1440&bih=701&dpr=2#imgrc=kjZoAmvHGo-KfM",
    rating: 4.9
  },
  {
    id: 3,
    name: "kimbap",
    image: "https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk03dn_nrK6M5JlKKfD5krm8w3qTmGQ:1593509069629&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqn6rwm6nqAhXDQN4KHYLUA4EQ_AUoAXoECBgQAw&biw=1440&bih=701#imgrc=Xz3xQoYZw3bqEM",
    rating: 4.8
  },
  {
    id: 4,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.7
  }
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div className="App">
      {/* 
      index.js에서는 단 하나의 component(App)만 사용 가능함
      jsx = javascript + html
      Where's props go? = args
       */}
      {/* <Food fav = "kimchi" something = {true} papapa = {["hello",1,2,3,4,false]}/>  */}
      
      {/* Dynamic component */}
      {foodILike.map(dish => 
        <Food key={dish.id} 
              name={dish.name} 
              picture={dish.image} 
              rating={dish.rating}
        />
      )}

     {/* 함수 사용 예제 */}
     {/* {foodILike.map(renderFood)} */}

    </div>
  );
}

export default App;
