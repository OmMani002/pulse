import ChatInput from "./ChatInput"
import Messages from "./Messages"

/**It handles all the loading state for us, for a good user exp.
 * for the layout in one component
 */
const ChatWrapper = () => {

    

    return <div className="relative min-h-full bg-zinc-50 flex divie-y divide-zinc-200 flex-col justify-between gap-2">
        <div className="flex-1 justify-between flex flex-col mb-28">
            <Messages />
        </div>

        <ChatInput />
    </div>
}

export default ChatWrapper