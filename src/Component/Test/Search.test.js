let Data=[
  {id_user:5,userLikes:2,name:'Danil'},
  {id_user:2,userLikes:3,name:'Alex'},
  {id_user:3,userLikes:4,name:'Lexa'},
  {id_user:1,userLikes:2,name:'John'},
  {id_user:4,userLikes:1,name:'Alex'},
]
  let name='Alex';
  function searchLink(value, arr) {
    return arr.filter(obj => {
      for (let key in obj) {
        if (obj[key] === value) {
          return true;
        }
      }
      return false;
    });
  }

describe("Links searcher test", () => {
  test("Gives an target link", () => {
    expect(searchLink('Danil',Data)).toStrictEqual([{id_user:5,userLikes:2,name:'Danil'}]);
  });
  test("Gives an empty array", () => {
    expect(searchLink('',Data)).toStrictEqual([]);
  });
});
