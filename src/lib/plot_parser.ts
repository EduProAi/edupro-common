import { v4 as uuidv4 } from "uuid";

type ParsedPlot = {
  plot: string;
  uuid: string;
  editable?: boolean;
};

export class PlotParser {
  static parsePlots(plotString: string): ParsedPlot[] {
    return plotString
      .split(/\n+/)
      .filter((p) => p.trim())
      .filter((p) => p.trim())
      .map((p) => p.replace(/^-\s+/, ""))
      .map((p) => ({ plot: p, uuid: uuidv4() }));
  }

  static joinPlots(plots: ParsedPlot[]) {
    return plots
      .filter((p) => p.plot?.trim())
      .map((p) => `- ${p.plot}`)
      .join("\n");
  }
}
