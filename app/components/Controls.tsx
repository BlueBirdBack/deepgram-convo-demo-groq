import { useCallback } from "react";
import { isTablet, isMobile } from "react-device-detect";
import { MicrophoneIcon } from "@/app/components/icons/MicrophoneIcon";
import { SendIcon } from "@/app/components/icons/SendIcon";

export const Controls = ({
  micToggle,
  micOpen,
  input,
  handleSubmit,
  handleInputChange,
}: {
  micToggle: () => Promise<void>;
  micOpen: boolean;
  input: string;
  handleSubmit: any;
  handleInputChange: any;
}) => {
  const microphoneToggle = useCallback(
    async (e: Event) => {
      e.preventDefault();
      await micToggle();
    },
    [micToggle]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex bg-[#101014] sm:rounded-full">
        <span className="flex-grow sm:flex-grow-0 sm:rounded-s-full bg-gradient-to-r from-[#a035f5] to-[#503bff] sm:ps-0.5 py-0.5 ">
          <a
            href="#"
            onClick={(e: any) => microphoneToggle(e)}
            className="group py-4 px-2 sm:px-8 w-full sm:rounded-s-full font-bold bg-[#101014] hover:bg-transparent text-light-900 text-sm sm:text-base flex items-center"
          >
            <MicrophoneIcon micOpen={micOpen} />
            <span>
              {micOpen ? (
                <>Listening...</>
              ) : (
                <>{`${isTablet || isMobile ? "Tap" : "Click"} to speak`}</>
              )}
            </span>
          </a>
        </span>

        <span className="sm:flex-grow bg-[#503bff] py-0.5">
          <input
            type="text"
            className="p-4 w-full h-full bg-[#101014] text-light-900 border-0 text-sm sm:text-base outline-none focus:ring-0"
            placeholder="You can send text too"
            value={input}
            onChange={handleInputChange}
          />
        </span>

        <span className="sm:rounded-e-full bg-gradient-to-l from-[#a035f5] to-[#503bff] sm:pe-0.5 py-0.5 ">
          <button className="py-4 px-2 sm:px-8 sm:rounded-e-full font-bold bg-[#101014] hover:bg-transparent text-light-900 text-sm sm:text-base flex items-center">
            <span>Send text</span>
            <SendIcon />
          </button>
        </span>
      </div>
    </form>
  );
};