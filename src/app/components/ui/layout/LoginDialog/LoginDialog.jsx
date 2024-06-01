import AuthContext from '@/app/components/ui/contexts/AuthContext';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function LoginDialog() {
  const { isLoginDialog, setIsLoginDialog } = useContext(AuthContext);

  const handleClose = () => {
    setIsLoginDialog(false);
  };

  return (
    <>
      <Modal
        show={isLoginDialog}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Login form placeholder</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Login</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
