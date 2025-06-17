import React from "react";

import { cn, getColorClass } from "../../../lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../ui/hover-card";
import { Avatar, AvatarFallback } from "../../ui/avatar";

// Types for the user data
export type UserData = {
  id: string;
  initial: string;
  name?: string;
  username?: string;
  role?: string;
  color?: "green" | "blue" | "cyan" | "default";
  subLabel?: string;
  imageUrl?: string;
};

export interface AvatarArrayProps {
  /**
   * Array of user data for the avatars
   */
  users: UserData[];

  /**
   * Size of avatars in pixels
   */
  size?: number;

  /**
   * Maximum number of avatars to display before showing a count
   */
  maxVisible?: number;

  /**
   * Custom class name for the container
   */
  className?: string;

  /**
   * Gap between avatars in pixels
   */
  gap?: number;

  /**
   * Avatar overlap in pixels (negative margin)
   */
  overlap?: number;

  /**
   * Custom class name for the avatar
   */
  avatarClassName?: string;

  /**
   * Custom render function for the hover card content
   */
  renderHoverContent?: (user: UserData) => React.ReactNode;

  /**
   * Direction to display avatars: 'row' or 'grid'
   */
  direction?: "row" | "grid";

  /**
   * Grid columns count (only applicable when direction is 'grid')
   */
  gridCols?: number;

  /**
   * Hover animation distance in pixels (how far up the avatar moves on hover)
   */
  hoverTranslateY?: number;

  /**
   * Whether to show the hover card on hover
   */
  showHoverCard?: boolean;

  /**
   * Callback function when an avatar is clicked
   */
  onAvatarClick?: (user: UserData) => void;

  /**
   * Placeholder text when user array is empty
   */
  noDataText?: string;
}

const AvatarArray: React.FC<AvatarArrayProps> = ({
  users,
  size = 40,
  maxVisible = 5,
  className = "",
  gap = 0,
  overlap = 6,
  avatarClassName = "",
  renderHoverContent,
  direction = "row",
  gridCols = 3,
  hoverTranslateY = 4,
  showHoverCard = true,
  onAvatarClick,
  noDataText = "No Data",
}) => {
  const visibleUsers = users?.slice(0, maxVisible);
  const remainingCount =
    users?.length > maxVisible ? users.length - maxVisible : 0;

  // Calculate negative margin for overlap effect
  const marginLeft = overlap > 0 ? -overlap : 0;

  // Grid layout classes
  const gridLayoutClasses =
    direction === "grid"
      ? `grid grid-cols-${gridCols} gap-${gap}`
      : `flex flex-row items-center`;

  return (
    <div className={cn(gridLayoutClasses, className)}>
      {visibleUsers?.length ? (
        visibleUsers.map((user, index) => (
          <div
            key={user.id}
            className={cn(
              "relative transition-transform duration-200 ease-in-out hover:z-10",
              direction === "row" && index !== 0 ? `ml-[${marginLeft}px]` : ""
            )}
            style={
              direction === "row" && index !== 0
                ? { marginLeft: `${marginLeft}px` }
                : {}
            }
          >
            {showHoverCard ? (
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <div
                    className="transition-transform duration-200 hover:-translate-y-1"
                    style={
                      {
                        "--hover-translate-y": `-${hoverTranslateY}px`,
                      } as React.CSSProperties
                    }
                    onClick={() => onAvatarClick && onAvatarClick(user)}
                  >
                    <Avatar
                      className={cn(
                        "cursor-pointer border-2 border-white",
                        avatarClassName,
                        user?.color ? `border-${user.color}-600` : ""
                      )}
                      style={{ width: `${size}px`, height: `${size}px` }}
                    >
                      {user.imageUrl ? (
                        <img
                          src={user.imageUrl}
                          alt={user.name || user.username || user.initial}
                        />
                      ) : (
                        <AvatarFallback className={getColorClass(user.color)}>
                          {user.initial}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent
                  className="w-40"
                  side="top"
                  align="end"
                  sideOffset={4}
                >
                  {renderHoverContent ? (
                    renderHoverContent(user)
                  ) : (
                    <DefaultHoverContent user={user} />
                  )}
                </HoverCardContent>
              </HoverCard>
            ) : (
              <div
                className="transition-transform duration-200 hover:-translate-y-1"
                style={
                  {
                    "--hover-translate-y": `-${hoverTranslateY}px`,
                  } as React.CSSProperties
                }
                onClick={() => onAvatarClick && onAvatarClick(user)}
              >
                <Avatar
                  className={cn(
                    "cursor-pointer border-2 border-white",
                    avatarClassName
                  )}
                  style={{ width: `${size}px`, height: `${size}px` }}
                >
                  {user.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt={user.name || user.username || user.initial}
                    />
                  ) : (
                    <AvatarFallback className={getColorClass(user.color)}>
                      {user.initial}
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="font-hankenGrotesk text-caption-xs text-cadet-gray-8.5">
          {noDataText}
        </p>
      )}

      {remainingCount > 0 && (
        <div
          className={cn(
            "relative",
            direction === "row" ? `ml-[${marginLeft}px]` : ""
          )}
          style={direction === "row" ? { marginLeft: `${marginLeft}px` } : {}}
        >
          <Avatar
            className="cursor-pointer border-2 border-white bg-gray-200 text-gray-600"
            style={{ width: `${size}px`, height: `${size}px` }}
          >
            <AvatarFallback>+{remainingCount}</AvatarFallback>
          </Avatar>
        </div>
      )}
    </div>
  );
};

// Default hover card content
const DefaultHoverContent: React.FC<{ user: UserData }> = ({ user }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <Avatar className="size-8">
          <AvatarFallback className={getColorClass(user.color)}>
            {user.initial}
          </AvatarFallback>
        </Avatar>
        <div>
          {user.name && <p className="text-sm font-medium">{user.name}</p>}
          {user.username && (
            <p className="text-sm text-gray-500">{user.username}</p>
          )}
        </div>
      </div>

      {user.role && (
        <div className="mt-2">
          <p className="text-xs font-semibold text-gray-500">Teams</p>
          <p className="text-sm">{user.role}</p>
        </div>
      )}

      {user.subLabel && (
        <p className="mt-1 text-sm text-gray-500">{user.subLabel}</p>
      )}
    </div>
  );
};

export default AvatarArray;
