import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../ui/input";

// Define metadata for the Input component
const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: {
                type: "select",
                options: ["text", "email", "password", "number", "url", "tel"]
            }
        },
        disabled: {
            control: "boolean"
        },
        placeholder: {
            control: "text"
        }
    }
};

export default meta;

// Define storyObj for the default input story
export const Default: StoryObj = {
    args: {
        type: "text",
        placeholder: "Enter your text"
    }
};

// Define storyObj for a disabled input story
export const Disabled: StoryObj = {
    args: {
        type: "text",
        placeholder: "This input is disabled",
        disabled: true
    }
};

// Define storyObj for password input
export const Password: StoryObj = {
    args: {
        type: "password",
        placeholder: "Enter your password"
    }
};

// Define storyObj for email input
export const Email: StoryObj = {
    args: {
        type: "email",
        placeholder: "Enter your email"
    }
};
