import {
  Bell,
  BookText,
  Headphones,
  House,
  Package,
  PieChart,
  Settings,
  ShoppingBasket,
  SquarePercent,
} from "lucide-react";

/** Primary nav — matches `App.jsx` dashboard child routes */
export const sidebarPrimaryNav = [
  {
    id: "dashboard",
    title: "Dashboard",
    to: "/dashboard",
    icon: House,
    end: true,
  },
  {
    id: "sale",
    title: "Sales Analysis",
    to: "/dashboard/sale",
    icon: PieChart,
  },
  {
    id: "purchase",
    title: "Purchase Analysis",
    to: "/dashboard/purchase",
    icon: ShoppingBasket,
  },
  {
    id: "inventory",
    title: "Inventory",
    to: "/dashboard/inventory",
    icon: Package,
  },
  {
    id: "tax",
    title: "Tax Report",
    to: "/dashboard/tax",
    icon: SquarePercent,
  },
  {
    id: "account",
    title: "Account report",
    to: "/dashboard/account",
    icon: BookText,
  },
];

/** Secondary nav — Notifications, Settings, Help */
export const sidebarSecondaryNav = [
  {
    id: "notifications",
    title: "Notifications",
    to: "/dashboard/notifications",
    icon: Bell,
  },
  {
    id: "settings",
    title: "Settings",
    to: "/dashboard/settings",
    icon: Settings,
  },
  {
    id: "help",
    title: "Help",
    to: "/dashboard/help",
    icon: Headphones,
  },
];
