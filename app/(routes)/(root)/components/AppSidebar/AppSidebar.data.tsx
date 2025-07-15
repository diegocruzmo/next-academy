import {
  BookOpen,
  ChartArea,
  GraduationCap,
  House,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { RoutesPlatform, RoutesTeacher } from "./AppSidebar.types";

export const routesPlatform: RoutesPlatform[] = [
  {
    title: "Home",
    url: "/",
    icon: <House className="h-4 w-4" />,
  },
  {
    title: "Courses",
    url: "/courses",
    icon: <SquareTerminal className="h-4 w-4" />,
  },
  {
    title: "My Courses",
    url: "/my-courses",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: <Settings2 className="h-4 w-4" />,
  },
];

export const routesTeacher: RoutesTeacher[] = [
  {
    title: "My Courses",
    url: "/teacher",
    icon: <GraduationCap className="h-3 w-3" />,
  },
  {
    title: "Analytics",
    url: "/teacher/analytics",
    icon: <ChartArea className="h-3 w-3" />,
  },
];
