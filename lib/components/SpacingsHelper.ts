export type GapSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant' | number;

export class SpacingsHelper {

  public static getRowGapSice(size?: GapSize): number {
    switch (size) {
      case 'tiny':
        return 4;
      case 'small':
        return 8;
      case 'medium':
        return 12;
      case 'large':
        return 24;
      case 'giant':
        return 36;
      default:
        if (typeof size === 'number') {
          return size;
        } else {
          return 0;
        }
    }
  }
}