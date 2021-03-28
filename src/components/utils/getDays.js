function getDays(pastDay) {
  const previousDay = new Date(pastDay);
  const currentDay = new Date();
  const diffInTime = currentDay.getTime() - previousDay.getTime();
  const diffInDay = Math.round(diffInTime / (1000 * 3600 * 24));
  return diffInDay;
}

export default getDays;
