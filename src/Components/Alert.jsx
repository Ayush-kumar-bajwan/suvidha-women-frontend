import { XCircle } from "lucide-react";

const Alert = ({ message, type = "error", onClose }) => {
  const alertStyles = {
    error: "bg-red-100 border-red-500 text-red-700",
    success: "bg-green-100 border-green-500 text-green-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };

  return (
    <div className={`flex items-center p-4 border-l-4 rounded-md ${alertStyles[type]} relative`}>
      <XCircle className="w-5 h-5 mr-3" />
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className="ml-auto">
          <XCircle className="w-5 h-5 text-gray-600 hover:text-gray-800" />
        </button>
      )}
    </div>
  );
};

export default Alert;
