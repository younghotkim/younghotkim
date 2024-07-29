const axios = require("axios"); // axios 임포트
// 1 영화순위정보URL
const url =
  "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";

axios
  .get(url) // 2 GET 요청
  .then((result) => {
    // 결괏값 처리
    if (result.status != 200) {
      throw new Error("요청에 실패했습니다!"); // 상태가 200이 아니면 에러
    }

    if (result.data) {
      // 3 result.data가 있으면 결과를 반환
      return result.data;
    }

    throw new Error("데이터 없습니다."); // data가 없으면 에러
  })
  .then((data) => {
    // 4 에서는 3 에서 받은 데이터 처리
    if (!data.articleList || data.articleList.size == 0) {
      // 5 크기가 0이면 에러
      throw new Error("데이터가 없습니다.");
    }
    return data.articleList; // 6 영화 리스트 반환
  })
  .then((articles) => {
    return articles.map((article, idx) => {
      // 7 영화 리스트를 제목과 순위 정보로 분리
      return { title: article.title, rank: idx + 1 };
    });
  })
  .then((results) => {
    for (let movieInfo of results) {
      // 받은 영화 리스트 정보 출력
      console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
    }
  })
  .catch((err) => {
    // 8 중간에 발생한 에러들을 여기서 처리
    console.log("<<에러발생>>");
    console.log(err);
  });
