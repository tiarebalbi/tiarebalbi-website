import { sleep, check, group } from 'k6';
import { Rate } from 'k6/metrics';
import http from 'k6/http';

const domain = __ENV.DEPLOYMENT_DOMAIN ? __ENV.DEPLOYMENT_DOMAIN : __ENV.INPUT_DOMAIN ? __ENV.INPUT_DOMAIN : 'https://tiarebalbi.com';
const vus = parseInt(__ENV.TARGET_VUS ? __ENV.TARGET_VUS : 5);
const minTime = __ENV.MIN_TIME ? __ENV.MIN_TIME : '1m';
const maxTime = __ENV.MAX_TIME ? __ENV.MAX_TIME : '4m';

let errorRate = new Rate('error_rate');

export const options = {
  stages: [
    { duration: minTime, target: parseInt(vus * 0.3) },
    { duration: maxTime, target: parseInt(vus) },
    { duration: minTime, target: 0 }
  ],
  thresholds: {
    http_req_failed: ['rate<0.3'], // http errors should be less than 3%
    http_req_duration: ['p(95)<300', { threshold: 'p(95)<600', abortOnFail: true }] // 95% of requests should be below 300ms, fail if above 600ms
  }
};

export default function main() {
  let response;

  group(`Main Page - ${domain}/`, function () {
    // Root Page
    response = http.get(`${domain}/`);
    check(response, {
      'status equals 200': (response) => response.status.toString() === '200'
    });
    errorRate.add(response.status >= 400);
    sleep(7);
  });

  group(`Access list Articles - ${domain}/articles`, function () {
    // List of Articles
    response = http.get(`${domain}/articles`);
    check(response, {
      'status equals 200': (response) => response.status.toString() === '200'
    });
    errorRate.add(response.status >= 400);
    sleep(5);
  });

  group(
    `Go to Article 1 - ${domain}/article/the-future-of-serverless-computing`,
    function () {
      // First post
      response = http.get(`${domain}/article/the-future-of-serverless-computing`);
      check(response, {
        'status equals 200': (response) => response.status.toString() === '200'
      });
      errorRate.add(response.status >= 400);
      sleep(12);
    }
  );

  group(
    `Go to Similar Post 1 - ${domain}/article/kotlin-delegated-properties`,
    function () {
      // Second post
      response = http.get(`${domain}/article/kotlin-delegated-properties`);
      check(response, {
        'status equals 200': (response) => response.status.toString() === '200'
      });
      errorRate.add(response.status >= 400);
      sleep(4);
    }
  );

  group(
    `Go to Similar Post 2 - ${domain}/article/week-4-the-rate-limit-pattern`,
    function () {
      // Third post
      response = http.get(`${domain}/article/week-4-the-rate-limit-pattern`);
      check(response, {
        'status equals 200': (response) => response.status.toString() === '200'
      });
      errorRate.add(response.status >= 400);
      sleep(2);
    }
  );
}
