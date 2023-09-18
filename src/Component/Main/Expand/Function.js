export function sort( data,getSortTC,asc,setASC) {
  debugger;
  let sort;
  (asc?sort="DESC":sort="ASC")
  const fData = new FormData();
  fData.append("sort", sort);
  fData.append("field", data);
  getSortTC(fData);
  setASC(!asc)
}
export function calculateAverageRate(rates) {
    const rateSum = {};
    const rateCount = {};
    rates.forEach((item) => {
      const { id_r, rate } = item;
      if (rateSum[id_r]) {
        rateSum[id_r] += rate;
        rateCount[id_r] += 1;
      } else {
        rateSum[id_r] = rate;
        rateCount[id_r] = 1;
      }
    });
    const result = [];
    for (const id_r in rateSum) {
      const averageRate = rateSum[id_r] / rateCount[id_r];
      result.push({ id_r: Number(id_r), rate: averageRate });
    }
    return result;
  }
 export function replaceAmountValues(DB, totalScore) {
    return DB.map(item => {
      const matchingScore = totalScore.find(score => score.id_r === item.id_r);
      if (matchingScore) {return { ...item, Amount: matchingScore.Amount };} 
      else {return item;}});
  }
export  function replaceRateValues(DB, averageRate) {
    return DB.map(item => {
      const matchingScore = averageRate.find(rate => rate.id_r === item.id_r);
      if (matchingScore) {return { ...item, rate: matchingScore.rate };} 
      else {return item;}});
  }
export function likePresence(arr2, id_r, id_user) {return arr2.some(element => element.id_r === id_r && element.id_user === id_user);}
export function setLike(status,id_r,id_user,getLikeTC){
  let fData=new FormData();
  fData.append('like',status)
  fData.append('id_r',id_r)
  fData.append('id_user',id_user)
  getLikeTC(fData);
}
export function chooseCategory(value,category,setCategory){
  if(value===category){
     value=null;
    setCategory(value);
    }else{
      setCategory(value);
  }
}
export function checkMatching(rateDB, id_r, id_user) {
  for (let i = 0; i < rateDB.length; i++) {
    if (rateDB[i].id_r === id_r && rateDB[i].id_user === id_user) {
      return true;
    }
  }
  return false;
}