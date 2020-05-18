export const getLineChartData = (data) => {
  if (data) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    return data.map((value) => {
      let chartValue;
      chartValue = ((value - max) / (min + max - 2 * max)) * 100;

      return {
        chartValue,
        label: value,
      };
    });
  }
};

export const getBarChartData = (data) => {
  if (data) {
    const max = Math.max(...data);
    return data.map((value) => ({
      chartValue: (value / max) * 100,
      label: value,
    }));
  }
};
