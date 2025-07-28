const centerText = {
  id: 'centerText',
  beforeDraw(chart) {
    const { width, height } = chart;
    const ctx = chart.ctx;
    const centerConfig = chart.config.options.plugins.centerText || {};
    const text = centerConfig.text || '';
    const color = centerConfig.color || '#000';
    const fontSize = centerConfig.font?.size || 18;
    const fontWeight = centerConfig.font?.weight || 'normal';

    ctx.save();
    ctx.font = `${fontWeight} ${fontSize}px sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
    ctx.restore();
  }
};



// HTML/CSSスキル
const ctxHTML = document.getElementById("htmlChart").getContext("2d");
new Chart(ctxHTML, {
  type: "doughnut",
  data: {
    labels: ["スキル", "残り"],
    datasets: [{
      data: [90, 10],
      backgroundColor: ["#E34F26", "#eee"], // 水色＋薄グレー
      borderWidth: 0,
      borderRadius: 50
    }]
  },
  options: {
    cutout: "80%",
    plugins: {
      legend: { display: false },
      centerText: {
        text: "90%",
        color: "#E34F26",
        font: {
          size: 30
        }
      }
    }
  },
  plugins: [centerText] 
});



// JavaScriptスキル
const ctxJS = document.getElementById("jsChart").getContext("2d");
new Chart(ctxJS, {
  type: "doughnut",
  data: {
    labels: ["スキル", "残り"],
    datasets: [{
      data: [80, 20],
      backgroundColor: ["#007396", "#eee"],
      borderWidth: 0,
        borderRadius: 50
    }]
  },
  options: {
    cutout: "80%",
    plugins: {
      legend: { display: false },
        centerText: {
        text: "80%",
        color: "#007396",
        font: {
          size: 30,
          weight: "bold"
        }
      }
    }
  },
  plugins: [centerText] 
});

// PHPスキル
const ctxWP = document.getElementById("wpChart").getContext("2d");
new Chart(ctxWP, {
  type: "doughnut",
  data: {
    labels: ["スキル", "残り"],
    datasets: [{
      data: [60, 40],
      backgroundColor: ["#8892be", "#eee"],
      borderWidth: 0,
        borderRadius: 50
    }]
  },
  options: {
    cutout: "80%",
    plugins: {
      legend: { display: false },
      centerText: {
        text: "60%",
        color: "#8892be",
        font: {
          size: 30,
          weight: "bold"
        }
      }
    }
  },
    plugins: [centerText]
});


// reactスキル
const ctxreact = document.getElementById("reactChart").getContext("2d");
new Chart(ctxreact, {
  type: "doughnut",
  data: {
    labels: ["スキル", "残り"],
    datasets: [{
      data: [45, 55],
      backgroundColor: ["#87CEEB", "#eee"],
      borderWidth: 0,
        borderRadius: 50
    }]
  },
  options: {
    cutout: "80%",
    plugins: {
      legend: { display: false },
      centerText: {
        text: "45%",
        color: "#87CEEB",
        font: {
          size: 30,
          weight: "bold"
        }
      }
    }
  },
    plugins: [centerText]
});


// Node
const ctxNode = document.getElementById("NodeChart").getContext("2d");
new Chart(ctxNode, {
  type: "doughnut",
  data: {
    labels: ["スキル", "残り"],
    datasets: [{
      data: [55, 45],
      backgroundColor: ["#339933", "#eee"],
      borderWidth: 0,
        borderRadius: 50
    }]
  },
  options: {
    cutout: "80%",
    plugins: {
      legend: { display: false },
      centerText: {
        text: "55%",
        color: "#339933",
        font: {
          size: 30,
          weight: "bold"
        }
      }
    }
  },
    plugins: [centerText]
});

