import { useForm, ValidationError } from "@formspree/react";
import { useAuth } from "../context/AuthContext.jsx";
import { FaPaperPlane } from "react-icons/fa";

const Form = () => {
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
    const [state, handleSubmit] = useForm(formId);
    const { user } = useAuth();

    if (state.succeeded) {
        return (
            <p className="mt-4 text-[0.96rem]">
                I've got your message. Thanks.
            </p>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-4 space-y-2 text-sm font-bold"
        >
            <input
                id="email"
                type="email"
                name="email"
                defaultValue={user && user.email}
                placeholder="Email"
                className="w-full p-2.5 rounded-xl border border-border/50 bg-surface/60 focus:outline-none focus:ring focus:ring-text-secondary/50 transition duration-300"
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
                className="w-full p-2.5 rounded-xl border border-border/50 bg-surface/60 focus:outline-none focus:ring focus:ring-text-secondary/50 transition duration-300"
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
                className="flex items-center gap-2 justify-center w-full border border-text-gray/50 text-text font-bold py-2.5 rounded-xl bg-background hover:text-text-secondary transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-surface/60"
            >
                {state.submitting
                    ? "3... 2... 1... Lift off!"
                    : "Toss it my way"}
                <FaPaperPlane className="text-text-secondary" />
            </button>
        </form>
    );
};

export default Form;
