/**
 * IndexNow Instant Submitter for Bing & Search Engines
 * Run: node scripts/submit-indexnow.js
 */

const HOST = "khalid-khan-dev.vercel.app";
const KEY = "c247dada0545412ba0c1d1f4de4e40d6";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/about`,
  `https://${HOST}/projects`,
  `https://${HOST}/skills`,
  `https://${HOST}/experience`,
  `https://${HOST}/contact`,
];

async function submitIndexNow() {
  console.log("Submitting URLs to IndexNow (Bing, Yandex, etc.)...");

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 202) {
      console.log("SUCCESS! All URLs submitted to IndexNow successfully.");
      console.log("Submitted pages:", URL_LIST);
    } else {
      console.log(`IndexNow response status: ${res.status}`);
      const text = await res.text();
      console.log("Response:", text);
    }
  } catch (error) {
    console.error("Error submitting to IndexNow:", error.message);
  }
}

submitIndexNow();
