import { useToastContext } from "../contexts/useToastContext";

export function ToastContainer() {
  const { toasts, dispatch } = useToastContext();

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {toasts.map((toast) => (
        <div key={toast.id} style={toastStyle}>
          {toast.message}
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_TOAST", payload: { id: toast.id } })
            }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

// 스타일 가이드

const toastStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 20px",
  marginBottom: "10px",
  borderRadius: "5px",
};
