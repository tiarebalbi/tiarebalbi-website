import { sleep, check, group } from 'k6';
import { Rate } from 'k6/metrics';
import http from 'k6/http';

const domain = __ENV.DEPLOYMENT_DOMAIN ? __ENV.DEPLOYMENT_DOMAIN : __ENV.INPUT_DOMAIN ? __ENV.INPUT_DOMAIN : 'tiarebalbi.com';
const vus = parseInt(__ENV.TARGET_VUS ? __ENV.TARGET_VUS : 10);

let errorRate = new Rate('error_rate');

export const options = {
  stages: [
    { duration: '10s', target: parseInt(vus * 0.3) },
    { duration: '30s', target: parseInt(vus * 0.5) },
    { duration: '1m', target: parseInt(vus * 0.75) },
    { duration: '1.5m', target: parseInt(vus) },
    { duration: '2m', target: 0 }
  ],
  thresholds: {
    http_req_failed: ['rate<0.3'], // http errors should be less than 3%
    http_req_duration: ['p(95)<300', { threshold: 'p(95)<600', abortOnFail: true }] // 95% of requests should be below 300ms, fail if above 600ms
  }
};

export default function main() {
  let response;

  group(`Main Page - https://${domain}/`, function () {
    // Root Page
    response = http.get(`https://${domain}/`);
    check(response, {
      'status equals 200': (response) => response.status.toString() === '200'
    });
    errorRate.add(response.status >= 400);
    sleep(1.6);
  });

  group(`Access list Articles - https://${domain}/articles`, function () {
    // List of Articles
    response = http.get(`https://${domain}/articles`);
    check(response, {
      'status equals 200': (response) => response.status.toString() === '200'
    });
    errorRate.add(response.status >= 400);
    sleep(2.8);
  });

  group(
    `Go to Article 1 - https://${domain}/article/the-future-of-serverless-computing`,
    function () {
      // First post
      response = http.get(`https://${domain}/article/the-future-of-serverless-computing`);
      check(response, {
        'status equals 200': (response) => response.status.toString() === '200'
      });
      errorRate.add(response.status >= 400);
      sleep(1.6);
    }
  );

  group(
    `Go to Similar Post 1 - https://${domain}/article/kotlin-delegated-properties`,
    function () {
      // Second post
      response = http.get(`https://${domain}/article/kotlin-delegated-properties`);
      check(response, {
        'status equals 200': (response) => response.status.toString() === '200'
      });
      errorRate.add(response.status >= 400);
      sleep(1.3);
    }
  );

  group(
    `Go to Similar Post 2 - https://${domain}/article/week-4-the-rate-limit-pattern`,
    function () {
      // Third post
      response = http.get(`https://${domain}/article/week-4-the-rate-limit-pattern`);
      check(response, {
        'status equals 200': (response) => response.status.toString() === '200'
      });
      errorRate.add(response.status >= 400);
      sleep(2.1);
    }
  );
}
