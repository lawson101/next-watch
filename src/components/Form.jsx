import { useForm, ValidationError } from "@formspree/react";
import { useAuth } from "../context/AuthContext.jsx";
import { FaPaperPlane } from "react-icons/fa";

const Form = () => {
    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
    const [state, handleSubmit] = useForm(formId);
    const { user } = useAuth();

    if (state.succeeded) {
        return (
            <div className="bg-surface/50 border border-text-gray/50 mt-4 text-[0.8rem] w-fit mx-auto px-3 py-2 rounded-lg">
                <p className="uppercase text-text-secondary">
                    I've got your message. Thanks!
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-4 space-y-2 text-sm"
        >
            <input
                id="email"
                type="email"
                name="email"
                defaultValue={user && user.email}
                placeholder="Email"
                className="w-full p-2.5 rounded-xl border border-border/50 bg-surface/60 focus:outline-none focus:ring focus:ring-text-secondary transition duration-300"
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
                className="w-full p-2.5 rounded-xl border border-border/50 bg-surface/60 focus:outline-none focus:ring focus:ring-text-secondary transition duration-300"
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
                className={`flex items-center gap-2 justify-center w-full border border-text-gray/50 py-2.5 rounded-2xl bg-background ${!state.submitting && "text-text-secondary hover:border-text-secondary"} transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-surface/60`}
            >
                {state.submitting
                    ? "3... 2... 1... Lift off!"
                    : "Toss it my way"}
                <FaPaperPlane />
            </button>
        </form>
    );
};

export default Form;
