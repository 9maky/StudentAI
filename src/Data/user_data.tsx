const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },

    title: {
      display: true,
    },
  },
  scales: {
    y: {
      grid: {
        display: true,
      },
      ticks: {
        precision: 0,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};
export const data = {
  labels,
  datasets: [
    {
      data: [10, 25, 23, 28, 11, 15, 29],
      backgroundColor: "rgba(104,113,237,255)",
    },
  ],
};
