import { JsonObject, JsonProperty } from "../CodeElements";

export default function ExperienceTab() {
    return (
        <JsonObject>
            <div className="pl-4">
                <JsonObject name="education" isLast={false}>
                    <JsonProperty
                        name="degree"
                        value="B.Tech in CSE"
                        quotesInKey
                    />
                    <JsonProperty
                        name="graduation"
                        value="2029"
                        quotesInKey
                        isLast
                    />
                </JsonObject>
            </div>
            <JsonProperty
                name="focus"
                value={["Backend Dev", "DSA"]}
                quotesInKey
                isLast
            />
        </JsonObject>
    );
}
