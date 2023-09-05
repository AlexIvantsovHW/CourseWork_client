let rate=[  
  { id_r: 3, id_user: 1, rate: 5 },
  { id_r: 27, id_user: 1, rate: 5 },
  { id_r: 26, id_user: 1, rate: 4 },
  { id_r: 10, id_user: 1, rate: 5 },
  { id_r: 15, id_user: 1, rate: 5 },
  { id_r: 1, id_user: 3, rate: 3 },
  { id_r: 2, id_user: 3, rate: 2 },
  { id_r: 3, id_user: 3, rate: 4 },
]
function deleteRate(arr,id_r,id_user){
  let res=arr.filter(el => el.id_r === id_r && el.id_user === id_user);
  if(res.length===0){res= [{ id_r: null, id_user: null, rate: null }]}
  else {res}
  return res
}

describe("Rate  test", () => {
  test("Gives an target object", () => {
    expect(deleteRate(rate,1,3)).toStrictEqual([ { id_r: 1, id_user: 3, rate: 3 } ]);
  });
  test("gives an null", () => {
    expect(deleteRate(rate,null,null)).toStrictEqual([{ id_r: null, id_user: null, rate:null } ]);
  });
  test("input data does not include id_r and id_user,gives an null array", () => {
    expect(deleteRate(rate)).toStrictEqual([{ id_r: null, id_user: null, rate:null } ]);
  });
  test("input is incorrect data id_r and id_user,gives an null array", () => {
    expect(deleteRate(rate)).toStrictEqual([{ id_r: null, id_user: null, rate:null } ]);
  });
});
