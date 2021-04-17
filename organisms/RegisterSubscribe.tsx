import { SuccessButton } from "../components/button/SuccessButton";
import React, { useState } from "react";
import Modal from "../components/Modal/Modal";
import TextInput from "../components/input/TextInput";
import { PrimaryButton } from "../components/button/PrimaryButton";
import { registerSubscribeRequest } from "../api/registerSubscribe/request";

export const RegisterSubscribe = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const onModalOpen = () => {
    setOpenModal(true);
  };

  const onModalClose = () => {
    setOpenModal(false);
  };

  const submitValue = async () => {
    let requestName: string | undefined = name;
    if (!requestName) {
      requestName = undefined;
    }
    if (!url) {
      //TODO エラー表記
      return;
    }

    const response = await registerSubscribeRequest({ name: requestName, url: url });
    if (response.isSuccess) {
      setOpenModal(false);
      //TODO 成功通知
      return;
    }

    // TODO エラー表記
    console.log(response.errorMessage);
  };

  return (
    <>
      <SuccessButton className="mx-4" onClick={onModalOpen}>
        購読先追加
      </SuccessButton>
      <Modal isOpen={openModal} onClose={onModalClose} title="購読先追加">
        <div className="mt-2">
          <TextInput
            type="text"
            label="購読先名(任意)"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextInput
            type="text"
            label="購読先URL"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </div>
        <div className="mt-4 flex justify-center">
          <PrimaryButton onClick={submitValue}>追加</PrimaryButton>
        </div>
      </Modal>
    </>
  );
};
