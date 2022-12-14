import { logError } from '@/helpers/utils';
import { useState } from 'react';

const useInfo = (initialState: BaseInfo | null = null) => {
  const [info, setInfoState] = useState(initialState);
  const [isLoading, setLoading] = useState(false);

  const setError = (err: any) => {
    if (!err) return resetAll();
    logError(err);
    setInfoState({
      message: err,
      color: 'text-red-500',
      error: true,
    });
  };

  const setInfo = (msg: any) =>
    setInfoState({ message: msg, color: 'text-green-500' });

  const getMsg = () => info?.message;

  const getColor = () => info?.color;

  const resetRequest = () => {
    setLoading(true);
    setInfoState(initialState);
  };

  const resetAll = () => {
    setLoading(false);
    setInfoState(initialState);
  };

  return {
    info,
    setInfo,
    getMsg,
    getColor,
    setError,
    setInfoState,
    isLoading,
    setLoading,
    resetRequest,
    resetAll,
  };
};

export default useInfo;
