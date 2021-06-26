const ethData = [];
const oztgData = [];
const btcData = [];
let onece = true;

setInterval(() => {
  const coinTags = document.querySelectorAll(".coin-value");

  const coinsURL =
    "https://trade.flashxchanger.com/graphql?query={markets{id%20name%20ticker{last%20volume%20price_change_percent}}}";

  const oztgPriceTag = coinTags[0];
  const btcPriceTag = coinTags[1];
  const ethPriceTag = coinTags[2];

  const oztgVolumeTag = document.querySelector("#usdt1");
  const btcVolumeTag = document.querySelector("#usdt2");
  const ethVolumeTag = document.querySelector("#usdt3");

  const oztgPercentTag = document.querySelector("#percent1");
  const btcPercentTag = document.querySelector("#percent2");
  const ethPercentTag = document.querySelector("#percent3");

  fetch(coinsURL)
    .then((response) => response.json())
    .then((result) => {
      const markets = result.data.markets;

      const ethPrice = markets[0].ticker.last;
      const oztgPrice = markets[1].ticker.last;
      const btcPrice = markets[2].ticker.last;

      const ethDifference = markets[0].ticker.price_change_percent;
      const oztgDifference = markets[1].ticker.price_change_percent;
      const btcDifference = markets[2].ticker.price_change_percent;

      oztgPercentTag.innerHTML = oztgDifference;
      ethPercentTag.innerHTML = ethDifference;
      btcPercentTag.innerHTML = btcDifference;

      oztgPrevPrice = oztgPrice;
      btcPrevPrice = btcPrice;
      etcPrevPrice = ethPrice;

      const ethVolume = markets[0].ticker.volume;
      const oztgVolume = markets[1].ticker.volume;
      const btcVolume = markets[2].ticker.volume;

      ethVolumeTag.innerHTML = ethVolume;
      oztgVolumeTag.innerHTML = oztgVolume;
      btcVolumeTag.innerHTML = btcVolume;

      if (oztgData.length >= 12) {
        oztgData.shift();
      }
      if (ethData.length >= 12) {
        ethData.shift();
      }
      if (btcData.length >= 12) {
        btcData.shift();
      }

      oztgData.push(oztgPrice);
      ethData.push(ethPrice);
      btcData.push(btcPrice);

      oztgPriceTag.innerHTML = oztgPrice;
      btcPriceTag.innerHTML = `$ ${btcPrice}`;
      ethPriceTag.innerHTML = `$ ${ethPrice}`;

      if (onece) {
        initcharts();
        onece = false;
      } else {
        updatecharts(oztgData, ethData, btcData);
      }
    });
}, 3000);

let chart1;
let chart2;
let chart3;
let label = ["", "", "", "", "", "", "", "", "", "", "", ""];

function initcharts() {
  const oztgCanvas = document.querySelector("#live_chart_1");
  const btcCanvas = document.querySelector("#live_chart_2");
  const ethCanvas = document.querySelector("#live_chart_3");
  let oztgCTX = oztgCanvas.getContext("2d");
  let ethCTX = ethCanvas.getContext("2d");
  let btcCTX = btcCanvas.getContext("2d");

  chart1 = new Chart(oztgCTX, {
    type: "line",

    // The data for our dataset
    data: {
      labels: label,
      // Information about the dataset
      datasets: [
        {
          //label: "Rainfall",
          backgroundColor: "#ecd9ff",
          borderColor: "#358A9E",

          data: oztgData,

          fill: false,
          tension: 0.4,
          pointBackgroundColor: "rgba(0, 0, 0, 0.01)",
          pointBorderColor: "rgba(0, 0, 0, 0.01)",
        },
      ],
    },

    // Configuration options
    options: {
      layout: {
        padding: 10,
      },
      legend: {
        display: false,
        position: "bottom",
      },
      //title: {
      //			display: true,
      //		text: 'Precipitation in Toronto'
      //},
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: "",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: "day",
            },
          },
        ],
      },
    },
  });

  chart2 = new Chart(ethCTX, {
    type: "line",

    // The data for our dataset
    data: {
      labels: label,
      // Information about the dataset
      datasets: [
        {
          //label: "Rainfall",
          backgroundColor: "#ecd9ff",
          borderColor: "#358A9E",

          data: ethData,

          fill: false,
          tension: 0.4,
          pointBackgroundColor: "rgba(0, 0, 0, 0.01)",
          pointBorderColor: "rgba(0, 0, 0, 0.01)",
        },
      ],
    },

    // Configuration options
    options: {
      layout: {
        padding: 10,
      },
      legend: {
        display: false,
        position: "bottom",
      },
      //title: {
      //			display: true,
      //		text: 'Precipitation in Toronto'
      //},
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: "",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: "day",
            },
          },
        ],
      },
    },
  });

  chart3 = new Chart(btcCTX, {
    type: "line",

    // The data for our dataset
    data: {
      labels: label,
      // Information about the dataset
      datasets: [
        {
          backgroundColor: "#ecd9ff",
          borderColor: "#358A9E",

          data: btcData,

          fill: false,
          tension: 0.4,
          pointBackgroundColor: "rgba(0, 0, 0, 0.01)",
          pointBorderColor: "rgba(0, 0, 0, 0.01)",
        },
      ],
    },

    // Configuration options
    options: {
      layout: {
        padding: 10,
      },
      legend: {
        display: false,
        position: "bottom",
      },
      //title: {
      //			display: true,
      //		text: 'Precipitation in Toronto'
      //},
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: "",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: "day",
            },
          },
        ],
      },
    },
  });
}

function updatecharts() {
  chart1.update();
  chart2.update();
  chart3.update();
}
