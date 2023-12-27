import { AppRouter } from "@/trpc";
import { inferRouterOutputs } from "@trpc/server";

type RoterOutput = inferRouterOutputs<AppRouter>

type Messages = RoterOutput["getFileMessages"]["messages"]

type OmitText = Omit<Messages[number], "text">

type ExtendedText = {
    text: string | JSX.Element
}

export type ExtendedMessage = OmitText & ExtendedText