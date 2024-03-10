export type GapSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant' | number;
export type FontSize = 'small' | 'medium' | 'large' | 'giant' | number;

export class SizeHelper {

  public static getGapSice(size?: GapSize): number {
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

  public static getFontSize(size?: string | number): string {
    switch (size) {
      case 'small':
        return '1rem';
      case 'medium':
        return '2rem';
      case 'large':
        return '3rem';
      case 'giant':
        return '5rem';
      default:
        if (typeof size === 'number') {
          return `${size}rem`;
        } else {
          return '1rem';
        }
    }
  }
}