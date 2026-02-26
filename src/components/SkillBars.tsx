import React from "react";

type Skill = {
    skillName: string;
    level: number;
}

export default function SkillBars(skills: Skill[]) {
    return skills.map((skill, index) => (
        <SkillBar
            titleText={skill.skillName}
            contentsText={skill.level + '%'}
            width={skill.level}
        />
    ))
}

function SkillBar({ width, titleText, contentsText }) {
    return (<div className="w-full">
        <h2>{titleText}</h2>
        <div className="shadow bg-green-100 mt-2 w-full">
            <div className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: `${width}%` }}
            >
                {contentsText}
            </div>
        </div>
    </div>
    )
}

