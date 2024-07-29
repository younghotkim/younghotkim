const axios = require("axios");

async function getTop20Movies() {
  const url =
    "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";

  try {
    const result = await axios.get(url);
    const { data } = result;
    if (!data.articleList || data.articleList.size == 0) {
      throw new Error("데이터가 없습니다!!!");
    }

    const movieInfos = data.articleList.map((article, idx) => {
      return { title: article.title, rank: idx + 1 };
    });

    for (let movieInfo of movieInfos) {
      // 받은 영화 리스트 정보 출력
      console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
    }
  } catch (error) {
    throw new Error(error);
  }
}

getTop20Movies();
