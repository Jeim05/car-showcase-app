import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    btnType?: "button" | "submit";
    title: string;
    containerStyles?: string;
    handleClick: MouseEventHandler<HTMLButtonElement>
}