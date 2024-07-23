import exp from "constants";
import React from "react";
const BotPage: React.FC = () => {
  return (
    <div className="h-full w-full">
      <p>
        パンダマスターです どんな質問でもパンダに当てはめて回答してくれます
        <br />
        (例) <br />
        好きな食べ物は?
        <br />
        何をして遊ぶのが好き?
      </p>
      <iframe
        src="https://udify.app/chatbot/XVkYwnWl8X6T2nBp"
        style={{ width: "90%", height: "95%", minHeight: "700px" }}
        allow="microphone"
      ></iframe>
    </div>
  );
};

export default BotPage;
