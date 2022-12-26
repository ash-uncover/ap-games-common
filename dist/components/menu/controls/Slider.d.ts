/// <reference types="react" />
import './Slider.css';
export interface SliderProperties {
    label: string;
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (arg: number) => void;
}
export declare const Slider: ({ label, min, max, step, value, onChange, }: SliderProperties) => JSX.Element;
