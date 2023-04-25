const getUniqArr = (arr, key) => {
    let obj = {};
    arr.forEach(item => (obj[item[key]] = item));
    const res = Object.keys(obj).map(item => obj[item]);
    return res;
};

export default getUniqArr;