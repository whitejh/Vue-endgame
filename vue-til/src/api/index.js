import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 액시오스 초기화 함수
// axios.create()는 axios 내부적으로 제공하는 속성
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const instance = createInstance();

// function registerUser(userData) {
//   const url = 'http://localhost:3000/signup';
//   return axios.post(url, userData); // promise 리턴
// } // 일반적으로 await의 대상이 되는 비동기 처리 코드는 axios 등 프로미스를 반환하는 API 호출 함수

// 회원가입 api 요청 메서드
function registerUser(userData) {
  return instance.post('signup', userData);
} // 이 방법 추천

// 로그인 api 요청 메서드
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
