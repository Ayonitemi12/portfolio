import ThemeContext from "../context/ThemeContext"
import { useContext } from 'react';

export function UseTheme() {
  return useContext(ThemeContext);
}
export default UseTheme; 