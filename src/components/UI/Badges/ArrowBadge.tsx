import classes from "styles/components/UI/badge.module.scss";

interface MyBadgeProps {
  color: "primary" | "secondary";
  size: "lg" | "sm";
}

const ArrowBadge = ({ color, size }: MyBadgeProps) => {
  return (
    <span
      className={`${classes.badge} ${classes[`badge__${size}`]} ${
        classes[`badge__${color}`]
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <g clipPath="url(#clip0_15_216)">
          <path
            d="M8.89868 3.68427L11.9157 6.70133C12.0656 6.85133 12.1497 7.05467 12.1497 7.26667C12.1497 7.47867 12.0656 7.682 11.9157 7.832L8.89921 10.8496C8.74913 10.9997 8.54558 11.084 8.33334 11.084C8.1211 11.084 7.91755 10.9997 7.76748 10.8496C7.6174 10.6995 7.53309 10.496 7.53309 10.2837C7.53309 10.0715 7.6174 9.86794 7.76748 9.71787L9.41867 8.06667H3.26667C3.0545 8.06667 2.85102 7.98238 2.70099 7.83235C2.55096 7.68232 2.46667 7.47884 2.46667 7.26667C2.46667 7.05449 2.55096 6.85101 2.70099 6.70098C2.85102 6.55095 3.0545 6.46667 3.26667 6.46667H9.41867L7.76801 4.81547C7.618 4.66539 7.53376 4.46187 7.53381 4.24968C7.53386 4.03749 7.6182 3.83401 7.76828 3.684C7.91835 3.53399 8.12187 3.44975 8.33406 3.4498C8.54625 3.44985 8.74974 3.53419 8.89974 3.68427"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_15_216">
            <rect
              width="12.8"
              height="12.8"
              fill="white"
              transform="translate(0.866669 0.866669)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default ArrowBadge;
