import { BookOpen } from "lucide-react";

export default function EmptyState({ title, subtitle, actionText, icon }) {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center text-gray-500">
      <BookOpen size={150} />
      <p className="text-xl font-medium">{title}</p>
      <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
      {actionText && (
        <div className="flex items-center gap-2 mt-4 cursor-pointer bg-gray-100 px-4 py-2 rounded-full text-gray-700">
          {icon && icon} {actionText && actionText}
        </div>
      )}
    </div>
  );
}
