import { useForm, ValidationError } from "@formspree/react";
import { useAuth } from "../context/AuthContext.jsx";
import { FaPaperPlane } from "react-icons/fa";

const Form = () => {
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
    const [state, handleSubmit] = useForm(formId);
    const { user } = useAuth();

    if (state.succeeded) {
        return <p className="mt-4">Thanks for reaching out!</p>;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-4 space-y-2 text-sm font-semibold"
        >
            <input
                id="email"
                type="email"
                name="email"
                defaultValue={user && user.email}
                placeholder="Email"
                className="w-full p-2 rounded-lg border border-border bg-surface focus:outline-none focus:ring focus:ring-text-secondary transition duration-300"
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
                rows={5}
                placeholder="What's on your mind?"
                className="w-full p-2 rounded-lg border border-border bg-surface focus:outline-none focus:ring focus:ring-text-secondary transition duration-300"
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
                className="flex items-center justify-center w-full border border-border text-text font-semibold py-2.5 rounded-lg bg-background hover:text-text-secondary transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-surface"
            >
                {state.submitting
                    ? "3... 2... 1... Lift off!"
                    : "Toss it my way"}
                <FaPaperPlane className="ml-2" />
            </button>
        </form>
    );
}

export default Form;
