import { ReactNode } from 'react';
import './Hexagon.css';
interface HexagonProperties {
    children: ReactNode;
}
declare const Hexagon: ({ children }: HexagonProperties) => JSX.Element;
export default Hexagon;
