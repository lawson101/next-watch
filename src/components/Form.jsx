import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane } from 'react-icons/fa';

function Form() {
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
    const [state, handleSubmit] = useForm(`${formId}`);

    if (state.succeeded) {
        return <p>Thanks for reaching out!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="mt-5 space-y-2 text-sm">
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Email..."
                className="w-full p-2 rounded-lg border border-border bg-surface  focus:outline-none focus:ring focus:ring-text-secondary"
                required
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Comment here..."
                className="w-full p-2 rounded-lg border border-border bg-surface focus:outline-none focus:ring focus:ring-text-secondary"
                required
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button
                type="submit"
                disabled={state.submitting}
                className="flex items-center justify-center w-full border-1 border-border bg-surface text-text font-semibold py-2.5 rounded-lg hover:bg-button-hover transition duration-300"
            >
                Leave a message <FaPaperPlane className="ml-2" />
            </button>
        </form>
    );
}

export default Form;