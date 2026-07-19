import assert from "node:assert/strict";
import test from "node:test";
import { registerQualityHooks } from "../dist/hooks/handler.js";

function captureAfterToolCallHook() {
  let hook;
  const logs = [];
  const api = {
    logger: {
      info(message) {
        logs.push(message);
      },
    },
    on(eventName, handler) {
      assert.equal(eventName, "after_tool_call");
      hook = handler;
    },
  };

  registerQualityHooks(api);
  assert.equal(typeof hook, "function");

  return { hook, logs };
}

test("handles the current OpenClaw after_tool_call event shape", async () => {
  const { hook, logs } = captureAfterToolCallHook();

  await hook({
    toolName: "publish_draft",
    params: { title: "Current SDK event" },
    result: { draft_url: "https://example.com/draft" },
  });

  assert.equal(logs.length, 1);
  assert.match(logs[0], /hook fired: publish_draft/);
  assert.match(logs[0], /Current SDK event/);
});

test("ignores unrelated tools", async () => {
  const { hook, logs } = captureAfterToolCallHook();

  await hook({
    toolName: "unrelated_tool",
    params: {},
    result: {},
  });

  assert.deepEqual(logs, []);
});
