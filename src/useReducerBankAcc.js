import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "active":
      return { ...initialState, isActive: true, balance: 500 };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return {
        ...state,
        balance:
          state.balance >= action.payload
            ? state.balance - action.payload
            : state.balance,
      };
    case "inactive":
      return { initialState };
    case "reqLoan":
      return {
        ...state,
        loan: state.loan || action.payload,
        balance: state.balance + action.payload,
      };
    case "payLoan":
      return { ...state, loan: 0, balance: state.balance - state.loan };
    default:
      throw new Error("There's no such case");
  }
}
export default function UseReducerBankAcc() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => dispatch({ type: "active" })}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "deposit", payload: 150 });
          }}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "withdraw", payload: 50 });
          }}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "reqLoan", payload: 5000 });
          }}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "inactive" });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
