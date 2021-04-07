import { sleep, check, group } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "1m", target: 5 },
    { duration: "1m", target: 5 },
    { duration: "1m", target: 10 },
    { duration: "1m", target: 10 },
    { duration: "1m", target: 0 },
  ],
  thresholds: {
    http_req_duration: [
      "avg>1000",
      { threshold: "avg>3000", abortOnFail: true },
    ],
    http_req_failed: [{ threshold: "rate<=0.2", abortOnFail: true }],
  },
};

export default function main() {
  let response;

  group("Main Page - https://tiarebalbi.com/", function () {
    // Root Page
    response = http.get("https://tiarebalbi.com/");
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });
    sleep(2.6);
  });

  group("Access list Articles - https://tiarebalbi.com/articles", function () {
    // List of Articles
    response = http.get("https://tiarebalbi.com/articles");
    check(response, {
      "status equals 200": response => response.status.toString() === "200",
    });
    sleep(2.8);
  });

  group(
    "Go to Article 1 - https://tiarebalbi.com/article/the-future-of-serverless-computing",
    function () {
      // First post
      response = http.get(
        "https://tiarebalbi.com/article/the-future-of-serverless-computing"
      );
      check(response, {
        "status equals 200": response => response.status.toString() === "200",
      });
      sleep(1.6);
    }
  );

  group(
    "Go to Similar Post 1 - https://tiarebalbi.com/article/kotlin-delegated-properties",
    function () {
      // Second post
      response = http.get(
        "https://tiarebalbi.com/article/kotlin-delegated-properties"
      );
      check(response, {
        "status equals 200": response => response.status.toString() === "200",
      });
      sleep(1.3);
    }
  );

  group(
    "Go to Similar Post 2 - https://tiarebalbi.com/article/week-4-the-rate-limit-pattern",
    function () {
      // Third post
      response = http.get(
        "https://tiarebalbi.com/article/week-4-the-rate-limit-pattern"
      );
      check(response, {
        "status equals 200": response => response.status.toString() === "200",
      });
      sleep(2.1);
    }
  );
}
