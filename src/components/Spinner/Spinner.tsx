import { colors } from '@/constants/colors';
import styles from './spinner.module.css';
import classNames from 'classnames';

type SpinnerProps = {
  trackThickness?: number;
  trackColor?: string;
  filledTrackColor?: string;
  size?: 20 | 24;
  className?: string;
};

export function Spinner({
  trackThickness = 4,
  filledTrackColor = colors.white,
  trackColor = 'transparent',
  size = 24,
  className,
}: SpinnerProps) {
  const circleSize = size - trackThickness;

  return (
    <div className={classNames(styles.root, className)}>
      <svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={circleSize / 2}
          style={{ strokeWidth: `${trackThickness}px`, stroke: trackColor }}
          className={styles.track}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={circleSize / 2}
          style={{
            strokeWidth: `${trackThickness}px`,
            stroke: filledTrackColor,
          }}
          className={classNames(styles.track, {
            [styles['filled-track--circle-size-16']]: circleSize === 16,
            [styles['filled-track--circle-size-20']]: circleSize === 20,
          })}
        />
      </svg>
    </div>
  );
}
