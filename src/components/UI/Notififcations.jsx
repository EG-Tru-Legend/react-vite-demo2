import { Modal } from './Modal.jsx';
import Action from './Actions.jsx';
import './Notifications.scss';

export function Alert({ show, message, onDismiss }) {
    // Initialisation ----------------------------------------------------
    // State -------------------------------------------------------------
    // Handlers ----------------------------------------------------------
    // View --------------------------------------------------------------
    return (
        <div className='notificationAlert'>
            <Modal show={show} title='Alert'>
                <p>{message}</p>
                <Action.Tray>
                    <Action.Dismiss showText onClick={onDismiss} />
                </Action.Tray>
            </Modal>
        </div>
    );
}

export function Confirm({ show, message, onConfirm, onDismiss }) {
    // Initialisation ----------------------------------------------------
    // State -------------------------------------------------------------
    // Handlers ----------------------------------------------------------
    // View --------------------------------------------------------------
    return (
        <div className='notificationConfirm'>
            <Modal show={show} title='Confirmation needed'>
                <p>{message}</p>
                <Action.Tray>
                    <Action.Yes showText onClick={onConfirm} />
                    <Action.Dismiss showText onClick={onDismiss} />
                </Action.Tray>
            </Modal>
        </div>
    );
}

export function Error({ show, message, onDismiss }) {
    // Initialisation ----------------------------------------------------
    // State -------------------------------------------------------------
    // Handlers ----------------------------------------------------------
    // View --------------------------------------------------------------
    return (
        <div className='notificationError'>
            <Modal show={show} title='Error Detected'>
                <p>{message}</p>
                <Action.Tray>
                    <Action.Dismiss showText onClick={onDismiss} />
                </Action.Tray>
            </Modal>
        </div>
    );
}