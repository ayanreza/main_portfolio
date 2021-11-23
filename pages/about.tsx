import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";

export default function about() {
    return (
        <ContainerBlock
        title="Ayan Reza - About"
        description="Ayan Reza's personal portfolio site displaying his projects and skills"
        >
            <AboutMe/>
        </ContainerBlock>
    )
}