export type RowGapSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant' | number;

export class SpacingsHelper {

  public static getRowGapSice(size?: RowGapSize): number {
    switch (size) {
      case 'tiny':
        return 4;
      case 'small':
        return 6;
      case 'medium':
        return 10;
      case 'large':
        return 12;
      case 'giant':
        return 16;
      default:
        if (typeof size === 'number') {
          return size;
        } else {
          return 0;
        }
    }
  }
}