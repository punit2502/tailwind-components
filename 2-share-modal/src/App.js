import React, { useState, useEffect } from "react";

import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (showModal) document.querySelector("body").style.overflowY = "hidden";
    else document.querySelector("body").style.overflowY = "auto";

    return () => {
      document.querySelector("body").style.overflowY = "auto";
    };
  }, [showModal]);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="text-white bg-primary px-4 py-2 rounded-sm"
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>
      <Modal showModal={showModal} hideModal={() => setShowModal(false)} />
    </div>
  );
};

export default App;
