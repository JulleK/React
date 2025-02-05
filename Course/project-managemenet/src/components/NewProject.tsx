import { useRef, useState } from "react";
import { Project } from "../types";
import Input from "./Input";
import TextArea from "./TextArea";

type Props = {
  onSave: (project: Project) => void;
  onCancel: () => void;
};

const NewProject: React.FC<Props> = ({ onSave, onCancel }) => {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const date = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const newProject = {
      title: title.current?.value || "new project",
      description: description.current?.value || "",
      date: date.current?.value || "today",
    };
    onSave(newProject);
  };

  return (
    <div>
      <menu className="flex justify-end">
        <button className="button cancel-button" onClick={onCancel}>
          Cancel
        </button>
        <button className="button save-button" onClick={handleSave}>
          Save
        </button>
      </menu>
      <main className="uppercase">
        <Input title="Title" id="title" ref={title} />
        <TextArea title="Description" id="description" ref={description} />
        <Input title="Title" id="title" type="date" ref={date} />
      </main>
    </div>
  );
};

export default NewProject;
