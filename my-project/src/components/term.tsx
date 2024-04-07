// pages/index.js
import { Terminal } from "@xterm/xterm";
import { useEffect, useRef } from "react";

export default function TerminalComponent() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminalInstance = useRef<Terminal | null>(null);

  useEffect(() => {
    if (terminalRef.current && !terminalInstance.current) {
      terminalInstance.current = new Terminal({
        theme: {
          background: "#300a24",
        },
      });
      terminalInstance.current.open(terminalRef.current);
      terminalInstance.current.resize(60, 10);
      terminalInstance.current.write(
        "Welcome to \x1B[1;3;36mRyuta's Potal\x1B[0m $ "
      );
    }
  }, []);
  return (
    <div className="w-full h-12">
      <div id="terminal" className="w-full h-full" ref={terminalRef} />
    </div>
  );
}
