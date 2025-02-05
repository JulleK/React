type Props = { onButtonClick: () => void };

const NoProjectSelected: React.FC<Props> = ({ onButtonClick }) => {
  return (
    <div className="text-stone-600 text-center">
      <h3 className="text-3xl mb-6 font-bold">No Project Selected</h3>
      <p className="mb-10 text-stone-500">Select a project to get started</p>
      <button className="button add-project-button" onClick={onButtonClick}>
        Create new project
      </button>
    </div>
  );
};

export default NoProjectSelected;
