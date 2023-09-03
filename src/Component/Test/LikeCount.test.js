let userLikes=[{id_user:5,userLikes:2},
  {id_user:2,userLikes:3},
  {id_user:3,userLikes:4},
  {id_user:1,userLikes:2},
  {id_user:4,userLikes:1},
]
  let id_user=2;
function setUserLike(arr,id_user){
  let targetObj=arr.find(obj=>obj.id_user===id_user);
  if (arr[0].id_user===null){return null}
  else if (targetObj===undefined){return 0}
  else{return targetObj}
}

describe("User like test", () => {
  test("Gives an target object", () => {
    expect(setUserLike(userLikes,2)).toStrictEqual({id_user:2,userLikes:3});
  });
  test("Undefined", () => {
    expect(setUserLike(userLikes,6)).toBe(0);
  });
  test('null',()=>{
    expect(setUserLike([{id_user:null,userLikes:null},{id_user:null,userLikes:null}])).toBe(null)
  })

});
