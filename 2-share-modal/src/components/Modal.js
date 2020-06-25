import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";

const shareIcons = [
  {
    id: "facebook",
    icon: faFacebookF,
    title: "Facebook",
  },
  {
    id: "twitter",
    icon: faTwitter,
    title: "Twitter",
  },
  { id: "reddit", icon: faRedditAlien, title: "Reddit" },
];

const Modal = ({ showModal, hideModal }) => {
  return (
    <div
      className={classNames(
        "absolute flex justify-center items-center px-4 h-screen w-screen bg-modal-overlay opacity-0 pointer-events-none transition ease-out duration-500",
        showModal && "opacity-100 pointer-events-auto"
      )}
    >
      <div className="bg-modal-bg text-center px-4 lg:px-32 py-20 max-w-2xl relative">
        <button className="absolute top-1 right-1" onClick={hideModal}>
          <img src="/images/icons/close.png" alt="close modal" />
        </button>
        <h3 className="text-3xl font-bold pb-3">Share this article</h3>
        <p>
          If you liked this article share it with your friends. They will thank
          you later.
        </p>
        {/* share buttons */}
        <div className="grid lg:grid-flow-col gap-4 pt-12 pb-8">
          {shareIcons.map(({ id, icon, title }) => (
            <div
              key={id}
              className={`text-white bg-social-${id} rounded px-4 py-3`}
            >
              <FontAwesomeIcon icon={icon} color="#ffffff" className="mr-3" />
              {title}
            </div>
          ))}
        </div>
        <div className="text-xl">
          <span className="font-bold">4,5K</span> Shares
        </div>
        <button className="text-primary mt-12" onClick={hideModal}>
          Close Window
        </button>
      </div>
    </div>
  );
};

export default Modal;
