"use client";

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface Iprop {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  TExt: string;
  Yes: string;
  No: string;
}

export function AlertDilog({ openModal, setOpenModal, TExt, Yes, No }: Iprop) {
  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {TExt}
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="red" onClick={() => setOpenModal(false)}>
                {Yes}
              </Button>
              <Button color="alternative" onClick={() => setOpenModal(false)}>
                {No}
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
export default AlertDilog;
