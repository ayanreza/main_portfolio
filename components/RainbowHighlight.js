import React from "react";
import { RoughNotation } from "react-rough-notation";


export const RainbowHighlight = ({color, type, children}) => {
    const animationDuration = Math.floor(30 * children.length)

    return (
        <RoughNotation
        type={type}
        multiline={true}
        strokeWidth={5}
        padding={[0,2]}
        iterations={1}
        animationDuration={animationDuration}
        color={color}
        >

        {children}
        </RoughNotation>
    )

}