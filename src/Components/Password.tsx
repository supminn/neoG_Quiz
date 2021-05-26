import { useState } from "react";
import { UserEntryAction } from "../Reducer/Action.type";
import { SET_PASSWORD } from "../Reducer/typeValues";

type PasswordProps = {
  userValue: string;
  dispatch: (args: UserEntryAction) => void;
};
export const Password = ({ userValue, dispatch }: PasswordProps) => {
  const [viewPwd, setViewPwd] = useState(false);

  return (
    <div className="p-2">
      <input
        required
        className="p-2 rounded-xl border border-transparent  focus:outline-none focus:ring-2 focus:ring-blue-900 w-3/4"
        type={viewPwd ? "text" : "password"}
        value={userValue}
        onChange={(e) =>
          dispatch({
            type: SET_PASSWORD,
            payload: { password: e.target.value },
          })
        }
        placeholder="Password"
      />
      <span className="p-2 bg-blue-900 text-blue-50 rounded-xl" onClick={() => setViewPwd((val) => !val)}>
        <i className="fas fa-eye fa-lg"></i>
      </span>
    </div>
  );
};
