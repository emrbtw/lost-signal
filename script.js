const WORKER_URL =
  "https://tight-thunder-c72a.emreustaoglu616.workers.dev";

async function checkAnswer(pageName, nextPage) {

  const answer =
    document.getElementById("answer")
    .value
    .trim()
    .toLowerCase();

  const res = await fetch(WORKER_URL, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      page: pageName,
      answer: answer
    })
  });

  const data = await res.json();

  if (data.correct) {

    if (nextPage) {

      window.location.href = nextPage;

    } else {

      document.getElementById("result").innerText =
        "FINAL SIGNAL ACCEPTED.";

    }

  } else {

    document.getElementById("result").innerText =
      "Invalid sequence.";

  }
}
