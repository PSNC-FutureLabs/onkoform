import React from "react";
import { useNavigate } from "react-router-dom";


export const RedirectComponent = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
      navigate('/'); 
    }, [navigate]);
    return null;
  };