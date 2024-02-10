"use client";

import { useChat, type Message } from "ai/react";

// import { cn } from "@/lib/utils";
// import { ChatList } from "@/components/chat-list";
// import { ChatPanel } from "@/components/chat-panel";
// import { EmptyScreen } from "@/components/empty-screen";
// import { ChatScrollAnchor } from "@/components/chat-scroll-anchor";
// import { useLocalStorage } from "@/lib/hooks/use-local-storage";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
import { useState } from "react";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
import { toast } from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import { useLocalStorage } from "@/src/lib/hooks/use-local-storage";
import { Box } from "@mui/material";
import { ChatPanel } from "@/src/components/VercelAIChat/chat-panel";
import { ChatList } from "@/src/components/VercelAIChat/chat-list";
import { ChatScrollAnchor } from "@/src/components/VercelAIChat/chat-scroll-anchor";
import { EmptyScreen } from "@/src/components/VercelAIChat/empty-screen";
// import { ChatPanel } from "@/src/components/Chat/ChatPanel";

const IS_PREVIEW = process.env.VERCEL_ENV === "preview";
export interface ChatProps extends React.ComponentProps<"div"> {
  initialMessages?: Message[];
  id?: string;
}

export function Chat({ id, initialMessages, className }: ChatProps) {
  const router = useRouter();
  const path = usePathname();
  const [previewToken, setPreviewToken] = useLocalStorage<string | null>(
    "ai-token",
    null
  );

  const openDialog = (previewTokenInput: string) => {
    setPreviewToken(previewTokenInput);
    setPreviewTokenDialog(true);
  };
  const [previewTokenDialog, setPreviewTokenDialog] = useState(IS_PREVIEW);

  // const setPreviewTokenDialog = (value: boolean) => {
  //   if(value === true) {
  //     setPreviewToken()
  //   }
  //   setPreviewTokenDialog(value);
  // }

  const [previewTokenInput, setPreviewTokenInput] = useState(
    previewToken ?? ""
  );
  const { messages, append, reload, stop, isLoading, input, setInput } =
    useChat({
      initialMessages,
      id,
      body: {
        id,
        previewToken,
      },
      onResponse(response) {
        if (response.status === 401) {
          toast.error(response.statusText);
        }
      },
      onFinish() {
        if (!path.includes("chat")) {
          window.history.pushState({}, "", `/chat/${id}`);
        }
      },
    });

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        // py: 4,
      }}
    >
      {/* <div className={cn("pb-[200px] pt-4 md:pt-10", className)}> */}
      <Box
        sx={{
          width: "600px",
          pb: "50px",
          pt: 4,
          md: {
            pt: 10,
          },
        }}
      >
        {messages.length ? (
          <>
            <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <EmptyScreen setInput={setInput} />
        )}
      </Box>
      {/* </div> */}
      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />
    </Box>
  );
}

// <Dialog
//   open={previewTokenDialog}
//   // onOpen={setPreviewTokenDialog}
// >
//   {/* onChange={setPreviewTokenDialog}> */}
//   <DialogContent>
//     <DialogHeader>
//       <DialogTitle>Enter your OpenAI Key</DialogTitle>
//       <DialogDescription>
//         If you have not obtained your OpenAI API key, you can do so by{" "}
//         <a
//           href="https://platform.openai.com/signup/"
//           className="underline"
//         >
//           signing up
//         </a>{" "}
//         on the OpenAI website. This is only necessary for preview
//         environments so that the open source community can test the app.
//         The token will be saved to your browser&apos;s local storage under
//         the name <code className="font-mono">ai-token</code>.
//       </DialogDescription>
//     </DialogHeader>
//     <Input
//       value={previewTokenInput}
//       placeholder="OpenAI API key"
//       onChange={(e) => setPreviewTokenInput(e.target.value)}
//     />
//     <DialogFooter className="items-center">
//       <Button
//         onClick={() => {
//           setPreviewToken(previewTokenInput);
//           setPreviewTokenDialog(false);
//         }}
//       >
//         Save Token
//       </Button>
//     </DialogFooter>
//   </DialogContent>
// </Dialog>

export default Chat;
