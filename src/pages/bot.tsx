import React, { useRef, useEffect, useState } from "react";

const BotPage: React.FC = () => {
  const instRef = useRef<HTMLParagraphElement>(null);
  const [iframeHeight, setIframeHeight] = useState("100%");

  useEffect(() => {
    if (instRef.current) {
      const instHeight = instRef.current.offsetHeight;
      setIframeHeight(`calc(100% - ${instHeight} - 40px)`);
    }
  }, []);

  return (
    <div className="vh-100 d-flex flex-column">
      <p ref={instRef} className="inst">
        パンダマスターです どんな質問でもパンダに当てはめて回答してくれます
        <br />
        (例) <br />
        好きな食べ物は?
        <br />
        何をして遊ぶのが好き?
      </p>
      <iframe
        src="https://udify.app/chatbot/XVkYwnWl8X6T2nBp"
        className="flex-grow-1"
        style={{
          width: "100%",
          height: iframeHeight,
          minHeight: "100px",
        }}
        allow="microphone"
      ></iframe>
      <div
        className=""
        style={{
          height: "40px",
        }}
      ></div>
    </div>
  );
};

export default BotPage;
