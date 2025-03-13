import React from "react";
import "../styles.css";
import SectionLoireSauvage from "./SectionLoireSauvage";
import SectionIBrain from "./SectionIBrain";
import SectionExpAFrame from "./ExperimentationsAFrame";


function ZoneProjets() {
    return (
        <>
            <SectionLoireSauvage />
            <SectionIBrain />
            <SectionExpAFrame />
        </>
    );
}

export default ZoneProjets;