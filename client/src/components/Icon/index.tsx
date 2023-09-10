import {
  faBars,
  faCalendarDays,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faClock,
  faCopy,
  faDollarSign,
  faEarthAmericas,
  faEnvelope,
  faGraduationCap,
  faLocationDot,
  faLock,
  faPen,
  faPhone,
  faPlane,
  faPlus,
  faSearch,
  faTrash,
  faUser,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import { IIcon } from "./types";

export const Icon = ({ color = "inherit", size = "1.4rem", type }: IIcon): JSX.Element => {
  const icon = useMemo(() => {
    switch(type) {
    case "bars":
      return faBars;
    case "calendar":
      return faCalendarDays;
    case "check":
      return faCheck;
    case "chevronLeft":
      return faChevronLeft;
    case "chevronRight":
      return faChevronRight;
    case "clock":
      return faClock;
    case "close":
      return faXmark;
    case "copy":
      return faCopy;
    case "dollar":
      return faDollarSign;
    case "education":
      return faGraduationCap;
    case "envelope":
      return faEnvelope;
    case "globe":
      return faEarthAmericas;
    case "location":
      return faLocationDot;
    case "lock":
      return faLock;
    case "pen":
      return faPen;
    case "phone":
      return faPhone;
    case "plane":
      return faPlane;
    case "plus":
      return faPlus;
    case "search":
      return faSearch;
    case "trash":
      return faTrash;
    case "user":
      return faUser;
    case "warning":
      return faTriangleExclamation;
    default:
      return faXmark;
    }
  }, [type]);

  return (
    <FontAwesomeIcon color={color} fontSize={size} icon={icon} />
  );
}