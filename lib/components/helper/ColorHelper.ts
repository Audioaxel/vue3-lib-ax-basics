export type HSLColor = { h: string, s: string, l: string };

export class ColorHelper {
  public static hexToHsl(color: string): HSLColor {
    // Entferne das #-Zeichen, falls vorhanden
    color = color.replace('#', '');

    // Zerlege den Hexadezimalwert in die einzelnen RGB-Komponenten
    const r = parseInt(color.substring(0, 2), 16) / 255;
    const g = parseInt(color.substring(2, 4), 16) / 255;
    const b = parseInt(color.substring(4, 6), 16) / 255;

    // Finde den Maximal- und Minimalwert der RGB-Komponenten
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // Berechne die Helligkeit
    const l = (max + min) / 2;

    let h, s;

    if (max === min) {
      // Grauton
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }

      h = h ?? 0;
      h /= 6;
    }

    // Skaliere HSL-Werte auf den Bereich von 0 bis 360 für H und 0 bis 100 für S und L
    const hslH = Math.round(h * 360);
    const hslS = Math.round(s * 100);
    const hslL = Math.round(l * 100);

    return { h: `${hslH}`, s: `${hslS}%`, l: `${hslL}%` };
  } 
}