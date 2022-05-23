import { useEffect, useState } from "react";
import { Sidebar } from "../GlobalComponents";
import TrophySpan from "./TrophySpan.js";
import TopTags from "./TopTags.js";
import api from "../../services/api.js";

export default function TopTagsSidebar() {
  const [topTags, setTopTags] = useState([]);
  const [topTagImage, setTopTagImage] = useState("");

  useEffect(() => {
    api
      .getTopTags(3)
      .then((response) => {
        setTopTags(response.data);
        setTopTagImage(response.data[0].imageUrl);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <Sidebar>
      {topTags.length > 0 && (
        <TopTags>
          <img src={topTagImage} alt="top trend img" />
          <div>
            <TrophySpan ranking="first">
              <p>🏆</p>
              <h1>#{topTags[0].name}</h1>
            </TrophySpan>

            <p>{topTags[0].score}</p>
          </div>

          <div>
            <TrophySpan ranking="second">
              <p>🥈</p> <h2>#{topTags[1].name}</h2>
            </TrophySpan>

            <p>{topTags[1].score}</p>
          </div>

          <div>
            <TrophySpan>
              <p>🥉</p>#<h3>{topTags[2].name}</h3>
            </TrophySpan>

            <p>{topTags[2].score}</p>
          </div>
        </TopTags>
      )}
    </Sidebar>
  );
}
