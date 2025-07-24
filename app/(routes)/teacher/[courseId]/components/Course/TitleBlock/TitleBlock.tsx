import { TitleBlockProps } from "./TitleBlock.types";

export const TitleBlock = (props: TitleBlockProps) => {
  const { title, icon: Icon } = props;

  return (
    <div className="flex items-center mb-6 gap-1">
      <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
        <Icon className="h-4 w-4"></Icon>
      </div>
      <h3 className="text-xl">{title}</h3>
    </div>
  );
};
