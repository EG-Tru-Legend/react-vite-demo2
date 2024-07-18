import Action from './Actions.jsx';
import './Form.scss';

export function Form({ children, onSubmit, onCancel }) {
    // Initialisation
    // State
    // Handlers
    // View
    return (
        <div className='Form'>
            <div className='FormTray'> {children} </div>
            <Action.Tray>
              <Action.Submit showText onClick={onSubmit}/>
              <Action.Cancel showText buttonText="Cancel Form" onClick={onCancel}/>
            </Action.Tray>
        </div>
    );
}

function Item({ children, label, advice, error }) {
    // Initialisation
    // State
    // Handlers
    // View
    return (
        <div className='FormItem'>
            <label className='FormLabel'>{label}</label>
            {
                advice && <p className='FormAdvice'>{advice}</p>
            }
                {children}
            {
                error && <p className='FormError'>{error}</p>
            }
        </div>
    );
}

// compose compound component ---------------------------------------------------------
Form.Item = Item;

export default Form;