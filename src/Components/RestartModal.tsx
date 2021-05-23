import { useQuizContext } from "../Context/QuizProvider";
import { RESET } from "../Reducer/typeValues";
import { createTimer } from "../Utils/timer";

type ModalType = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  restart: (
    newExpiryTimestamp: number,
    autoStart?: boolean | undefined
  ) => void;
};

export const RestartModal = ({ setShowModal, restart, setShowAnswer }: ModalType) => {
  const { quizDispatch } = useQuizContext();

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center block p-0">
        <div
          className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Restart Quiz
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to restart this quiz? Your current
                    score and progress would be earsed. This action cannot be
                    undone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row sm:justify-center">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                quizDispatch({ type: RESET });
                setShowModal(false);
                setShowAnswer(false);
                restart(createTimer());
              }}
            >
              Restart
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-blue-900 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};