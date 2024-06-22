'use client';

import type { ReactNode } from 'react';

import React, { useState, useContext, useCallback, createContext } from 'react';

import { Alert, Snackbar } from '@mui/material';

type AlertContextType = (
  message: string,
  severity?: 'success' | 'info' | 'warning' | 'error'
) => void;

const AlertContext = createContext<AlertContextType | undefined>(undefined);

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'info' | 'warning' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const showAlert: AlertContextType = useCallback((message, severity = 'success') => {
    setAlert({
      open: true,
      message,
      severity,
    });
  }, []);

  const handleClose = useCallback(() => {
    setAlert((prev) => ({
      ...prev,
      open: false,
    }));
  }, []);

  return (
    <AlertContext.Provider value={showAlert}>
      {children}
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};
