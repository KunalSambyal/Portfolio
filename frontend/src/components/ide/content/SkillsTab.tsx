import { JsonObject, JsonProperty } from "../CodeElements";

export default function SkillsTab() {
    return (
        <JsonObject name="skills" isConst>
            <JsonProperty
                name="languages"
                value={["Python", "C++", "JavaScript", "TypeScript"]}
            />
            <JsonProperty
                name="frontend"
                value={["React", "HTML", "CSS", "Tailwind CSS"]}
            />
            <JsonProperty name="database" value={["MySQL"]} />
            <JsonProperty
                name="tools"
                value={["Git", "GitHub", "Docker", "Figma"]}
                isLast
            />
        </JsonObject>
    );
}
