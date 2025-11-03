import * as React from "react";
import {Modal} from "react-bootstrap";
import "./Modal.css";

interface ModalProps {
    title: string;
    show: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

export default function ModalCustom({title, show, handleClose, children}: ModalProps) {
    const modalTitleId = React.useId();
    const modalDescId = React.useId();

    return (
        <Modal show={show}
               onHide={handleClose}
               aria-labelledby={modalTitleId}
               aria-describedby={modalDescId}
               centered
               backdrop="static"
               keyboard
        >
            <Modal.Header closeButton>
                <Modal.Title id={modalTitleId}>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body id={modalDescId} className="modal-custom-body">{children}</Modal.Body>
        </Modal>
    );
}
