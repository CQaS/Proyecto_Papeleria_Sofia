import Link from "next/link";
import { cn } from "../app/lib/utils";

export function DashboardCard({
  icon,
  bgColor,
  hoverBgColor,
  iconColor,
  title,
  link,
  description,
  metric,
  metricColor,
  metricSize = "text-2xl",
  metricWeight = "font-bold",
}) {
  return (
    <Link href={link}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-600/20 transition-all duration-200 cursor-pointer group">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
            bgColor,
            hoverBgColor
          )}
        >
          <i className={cn(icon, iconColor, "ri-xl")} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className={cn(metricColor, metricSize, metricWeight)}>
            {metric}
          </span>
          <i className="ri-arrow-right-line text-gray-400 group-hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </Link>
  );
}
