import Editor from "./Editor";
import TabBar from "./TabBar";

export default function IdeWidget() {
    return (
        <div className="w-full h-80 rounded-2xl bg-secondary-bg/25 border border-white/5 flex flex-col font-mono text-xs overflow-hidden backdrop-blur-md shadow-2xl">
            <TabBar />
            <Editor />
        </div>
    );
}
