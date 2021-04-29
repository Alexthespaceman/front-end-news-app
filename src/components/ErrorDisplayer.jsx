import * as React from "react";
export function ErrorDisplayer({ status, msg }) {
  return (
    <div>
      <p>
        {status} - {msg}
      </p>
    </div>
  );
}

export default ErrorDisplayer;
