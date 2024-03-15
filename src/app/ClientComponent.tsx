"use client";
export function ClientComponent() {
  return (
    <button
      className="border-2 hover:bg-slate-200 rounded-sm p-2"
      onClick={() => {
        const worker = new Worker(
          new URL("./myWebWorker.ts", import.meta.url)
        );
        worker.postMessage({
          question:
            "The Answer to the Ultimate Question of Life, The Universe, and Everything.",
        });
        worker.onmessage = ({ data: { answer } }) => {
          console.log("worker response", answer);
        };
      }}
    >
      Do Webworker stuff
    </button>
  );
}
