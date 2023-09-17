const SET_THEME='SET_THEME'

let initialState = {
  theme:{bg:'dark',font:'white',border:'danger',btn:'dark'}
}
const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:return{...state,theme:action.theme};
    default:return { ...state };
  }
};
export const themeAC=(theme)=>{{return{type:SET_THEME,theme}}}


export default ThemeReducer;