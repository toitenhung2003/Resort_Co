import { createContext, useContext, useState } from "react";

const PasswordResetContext = createContext();

export const usePasswordReset = () => useContext(PasswordResetContext);

export const PasswordResetProvider = ({ children }) => {
  const [canAccessOTP, setCanAccessOTP] = useState(false);
  const [canAccessResetPassword, setCanAccessResetPassword] = useState(false);

  return (
    <PasswordResetContext.Provider value={{ canAccessOTP, setCanAccessOTP, canAccessResetPassword, setCanAccessResetPassword }}>
      {children}
    </PasswordResetContext.Provider>
  );
};